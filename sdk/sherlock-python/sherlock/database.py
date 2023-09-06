from sqlalchemy import create_engine, inspect
import pandas as pd
from typing import List, Optional, Dict, Union
import json
import base64
import json
import os
import requests

class DatabaseClient:
    SUPPORTED_DB_TYPES = [
        "postgres",
        "redshift",
        "mysql",
        "bigquery",
        "mongo",
        "snowflake",
    ]
    def __init__(self, db_type: str, db_config: Dict[str, Union[str, int]]):
        self.db_type = db_type
        self.db_config = db_config
        self.engine = None

    def preflight(self): 
        self.check_db_creds()

    def check_db_creds(self) -> None:
        if not self.db_config:
            return

        required_keys: Dict[str, List[str]] = {
            "postgres": ["host", "port", "database", "user", "password"],
            "redshift": ["host", "port", "database", "user", "password"],
            "mysql": ["host", "database", "user", "password"],
            "snowflake": ["account", "warehouse", "user", "password"],
            "bigquery": ["json_key_path"],
        }

        if self.db_type not in required_keys:
            raise ValueError(
                f"Database `{self.db_type}` is not supported. Supported types: {', '.join(required_keys.keys())}"
            )

        missing_keys = [key for key in required_keys[self.db_type] if key not in self.db_config]
        if missing_keys:
            missing_key_str = ", ".join(missing_keys)
            raise KeyError(f"db_creds must contain the following key(s): {missing_key_str}")

    def get_platform_check(self, tot_tables: int, tot_columns: int, json_columns: int = 0) -> str:
        if tot_tables > 15:
            message = f"You want to query more than 15 tables in total. We should be able to support your use-case, but please contact us at founder@textquery.dev to confirm."
        elif tot_columns > 200:
            message = f"You want to query more than 200 columns in total. We should be able to support your use-case, but please contact us at founder@textquery.dev to confirm."
        elif json_columns > 2:
            message = f"There are 2 or more columns with the JSON type. If you do not need to make joins between JSON columns and others, we can definitely support your use case. If you do need to make such joins, please contact us at founder@textquery.dev."
        else:
            message = f"We should be able to support your use-case! Feel free to upgrade to a paid plan to get started, or contact us at founder@textquery.dev if you have any questions."
        return message

    def generate_snowflake_schema(self, tables: List[str], upload: bool = True) -> Dict[str, List[Dict[str, str]]]:
        try:
            import snowflake.connector
        except ImportError:
            raise ImportError("snowflake-connector not installed.")

        conn = snowflake.connector.connect(
            user=self.db_config["user"],
            password=self.db_config["password"],
            account=self.db_config["account"],
        )
        conn.cursor().execute(
            f"USE WAREHOUSE {self.db_config['warehouse']}"
        )  # set the warehouse

        schemas = {}
        alt_types = {"DATE": "TIMESTAMP", "TEXT": "VARCHAR", "FIXED": "NUMERIC"}

        print("Getting schema for each table in your database...")
        for table_name in tables:
            rows = []
            for row in conn.cursor().execute(f"SHOW COLUMNS IN {table_name};"):
                rows.append(row)
            rows = [
                {
                    "column_name": i[2],
                    "data_type": json.loads(i[3])["type"],
                    "column_description": i[8],
                }
                for i in rows
            ]
            for idx, row in enumerate(rows):
                if row["data_type"] in alt_types:
                    row["data_type"] = alt_types[row["data_type"]]
                rows[idx] = row
            schemas[table_name] = rows

        conn.close()

        return schemas

    def generate_bigquery_schema(self, tables: List[str], upload: bool = True) -> Dict[str, List[Dict[str, str]]]:
        try:
            from google.cloud import bigquery
        except ImportError:
            raise ImportError("google-cloud-bigquery not installed.")

        client = bigquery.Client.from_service_account_json(
            self.db_config["json_key_path"]
        )

        schemas = {}

        print("Getting schema for each table in your database...")
        for table_name in tables:
            table = client.get_table(table_name)
            rows = table.schema
            rows = [{"column_name": i.name, "data_type": i.field_type} for i in rows]
            schemas[table_name] = rows

        client.close()

        return schemas

    def generate_postgres_schema(self, tables: List[str], upload: bool = True) -> Dict[str, List[Dict[str, str]]]:
        try:
            import psycopg2
        except ImportError:
            raise ImportError(
                "psycopg2 not installed. Please install it with `pip install psycopg2-binary`."
            )

        conn = psycopg2.connect(**self.db_config)
        cur = conn.cursor()
        schemas = {}

        if tables == [""]:
            cur.execute(
                "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
            )
            tables = [row[0] for row in cur.fetchall()]

        print("Retrieved the following tables:")
        for t in tables:
            print(f"\t{t}")

        print("Getting schema for each table in your database...")
        for table_name in tables:
            cur.execute(
                "SELECT CAST(column_name AS TEXT), CAST(data_type AS TEXT) FROM information_schema.columns WHERE table_name::text = %s;",
                (table_name,),
            )
            rows = cur.fetchall()
            rows = [{"column_name": i[0], "data_type": i[1]} for i in rows]
            schemas[table_name] = rows

        # get foreign key relationships
        print("Getting foreign keys for each table in your database...")
        tables_regclass_str = ", ".join(
            [f"'{table_name}'::regclass" for table_name in tables]
        )
        query = f"""SELECT
                conrelid::regclass AS table_from,
                pg_get_constraintdef(oid) AS foreign_key_definition
                FROM pg_constraint
                WHERE contype = 'f'
                AND conrelid::regclass IN ({tables_regclass_str})
                AND confrelid::regclass IN ({tables_regclass_str});
                """
        cur.execute(query)
        foreign_keys = list(cur.fetchall())
        foreign_keys = [fk[0] + " " + fk[1] for fk in foreign_keys]

        # get indexes for each table
        print("Getting indexes for each table in your database...")
        tables_str = ", ".join([f"'{table_name}'" for table_name in tables])
        query = (
            f"""SELECT indexdef FROM pg_indexes WHERE tablename IN ({tables_str});"""
        )
        cur.execute(query)
        indexes = list(cur.fetchall())

        if len(indexes) > 0:
            indexes = [index[0] for index in indexes]
        else:
            indexes = []

        conn.close()

        return schemas

    def generate_redshift_schema(self, tables: List[str], upload: bool = True) -> Dict[str, List[Dict[str, str]]]:
        try:
            import psycopg2
        except ImportError:
            raise ImportError(
                "psycopg2 not installed. Please install it with `pip install psycopg2-binary`."
            )

        conn = psycopg2.connect(**self.db_config)
        cur = conn.cursor()
        schemas = {}

        if len(tables) == 0:
            cur.execute(
                "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
            )
            tables = [row[0] for row in cur.fetchall()]

        print("Retrieved the following tables:")
        for t in tables:
            print(f"\t{t}")

        print("Getting schema for each table in your database...")
        for table_name in tables:
            try:
                cur.execute(
                    "SELECT CAST(column_name AS TEXT), CAST(data_type AS TEXT) FROM information_schema.columns WHERE table_name::text = %s;",
                    (table_name,),
                )
                rows = cur.fetchall()
            except:
                rows = []

            if len(rows) == 0:
                cur.execute(
                    f"SELECT CAST(columnname AS TEXT), CAST(external_type AS TEXT) FROM svv_external_columns WHERE table_name = '{table_name}';"
                )
                rows = cur.fetchall()

            rows = [{"column_name": i[0], "data_type": i[1]} for i in rows]
            schemas[table_name] = rows

        print("Getting foreign keys for each table in your database...")
        tables_regclass_str = ", ".join(
            [f"'{table_name}'::regclass" for table_name in tables]
        )
        query = f"""SELECT
                conrelid::regclass AS table_from,
                pg_get_constraintdef(oid) AS foreign_key_definition
                FROM pg_constraint
                WHERE contype = 'f'
                AND conrelid::regclass IN ({tables_regclass_str})
                AND confrelid::regclass IN ({tables_regclass_str});
                """
        cur.execute(query)
        foreign_keys = list(cur.fetchall())
        foreign_keys = [fk[0] + " " + fk[1] for fk in foreign_keys]

        print("Getting indexes for each table in your database...")
        tables_str = ", ".join([f"'{table_name}'" for table_name in tables])
        query = (
            f"""SELECT indexdef FROM pg_indexes WHERE tablename IN ({tables_str});"""
        )
        cur.execute(query)
        indexes = list(cur.fetchall())

        if len(indexes) > 0:
            indexes = [index[0] for index in indexes]
        else:
            indexes = []

        conn.close()

        return schemas

    def generate_mysql_schema(self, tables: List[str], upload: bool = True) -> Dict[str, List[Dict[str, str]]]:
        try:
            import mysql.connector
        except ImportError:
            raise ImportError("mysql-connector not installed.")

        conn = mysql.connector.connect(**self.db_config)
        cur = conn.cursor()
        schemas = {}

        print("Getting schema for each table in your database...")
        for table_name in tables:
            cur.execute(
                "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = %s;",
                (table_name,),
            )
            rows = cur.fetchall()
            rows = [{"column_name": i[0], "data_type": i[1]} for i in rows]
            schemas[table_name] = rows

        conn.close()

        return schemas

    def generate_schema(self, tables: List[str]) -> Dict[str, List[Dict[str, str]]]:
        schema_generators = {
            "postgres": self.generate_postgres_schema,
            "mysql": self.generate_mysql_schema,
            "bigquery": self.generate_bigquery_schema,
            "redshift": self.generate_redshift_schema,
            "snowflake": self.generate_snowflake_schema,
        }

        generator = schema_generators.get(self.db_type)
        if generator:
            return generator(tables)
        else:
            raise ValueError(
                f"Creation of a DB schema for {self.db_type} is not yet supported via the library. If you are a premium user, please contact us at founder@textquery.dev so we can manually add it."
            )