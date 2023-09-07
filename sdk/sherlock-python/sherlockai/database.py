import pandas as pd
from typing import List, Dict, Union
import json
import os

class DatabaseClient:
    SUPPORTED_DB_TYPES = ["postgres", "redshift", "mysql"]

    def __init__(self, db_type: str, db_config: Dict[str, Union[str, int]]):
        self.db_type = db_type
        self.db_config = db_config
        self.json_columns = 0
        self.tot_columns = 0
        self.connection = self.preflight()

    def preflight(self):
        self.check_db_creds()
        if self.db_type == "postgres" or self.db_type == "redshift":
            import psycopg2
            connection = psycopg2.connect(**self.db_config)
        elif self.db_type == "mysql":
            import mysql.connector
            connection = mysql.connector.connect(**self.db_config)
        else:
            raise ValueError(f"Database '{self.db_type}' is not supported.")

        return connection

    def check_db_creds(self) -> None:
        required_keys = {
            "postgres": ["host", "port", "database", "user", "password"],
            "redshift": ["host", "port", "database", "user", "password"],
            "mysql": ["host", "database", "user", "password"],
        }

        if self.db_type not in required_keys:
            raise ValueError(
                f"Database '{self.db_type}' is not supported. Supported types: {', '.join(required_keys.keys())}"
            )

        missing_keys = [key for key in required_keys[self.db_type] if key not in self.db_config]
        if missing_keys:
            missing_key_str = ", ".join(missing_keys)
            raise KeyError(f"db_config must contain the following key(s): {missing_key_str}")

    def get_platform_check(self) -> str:
        message = ""
        if self.tables > 15:
            message =+ "You want to query more than 10 tables in total...\n"
        
        if self.tot_columns > 150:
            message =+ "You want to query more than 200 columns in total...\n"
        
        if self.json_columns > 1:
            message =+ "There are 1 or more columns with the JSON type...\n"
        else:
            message =+ "we can support your use-case!"

        return message

    def execute_query(self, query: str) -> pd.DataFrame:
        cursor = self.connection.cursor()
        cursor.execute(query)
        colnames = [desc[0] for desc in cursor.description]
        results = cursor.fetchall()
        return pd.DataFrame(results, columns=colnames)

    def tables_schema(self, tables: List[str], query: str) -> List[Dict[str, Union[str, List[Dict[str, str]]]]]:
        schemas = []
        cursor = self.connection.cursor()
        for table_name in tables:
            cursor.execute(query, (table_name,))
            rows = cursor.fetchall()
            rows = [{"column_name": i[0], "data_type": i[1]} for i in rows]
            self.tot_columns += len(rows)
            self.json_columns += sum(1 for column in rows if "json" in column["data_type"].lower())
            schemas.append({"name": table_name, "data": json.dumps(rows)})

        return schemas

    def list_tables(self, tables: List[str], query: str) -> List[str]:
        cursor = self.connection.cursor()
        if not tables:
            cursor.execute(query)
            tables = [row[0] for row in cursor.fetchall()]
        self.tables = len(tables)
        print("Retrieved the following tables:")
        for t in tables:
            print(f"\t{t}")
        return tables

    def generate_mysql_schema(self, tables: List[str]) -> Dict[str, Union[int, List[Dict[str, Union[str, List[Dict[str, str]]]]]]]:
        schema = self.tables_schema(
            tables,
            "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = %s;",
        )
        return {
            "schema": schema,
        }

    def generate_postgres_schema(self, tables: List[str]) -> Dict[str, Union[int, List[Dict[str, Union[str, List[Dict[str, str]]]]]]]:
        cursor = self.connection.cursor()
        print("Getting schema for each table in your database...")
        schema = self.tables_schema(
            tables,
            "SELECT CAST(column_name AS TEXT), CAST(data_type AS TEXT) FROM information_schema.columns WHERE table_name::text = %s;",
        )

        # get foreign key relationships
        print("Getting foreign keys for each table in your database...")
        tables_regclass_str = ", ".join([f"'{table_name}'::regclass" for table_name in tables])
        query = f"""SELECT
                  conrelid::regclass AS table_from,
                  pg_get_constraintdef(oid) AS foreign_key_definition
                  FROM pg_constraint
                  WHERE contype = 'f'
                  AND conrelid::regclass IN ({tables_regclass_str})
                  AND confrelid::regclass IN ({tables_regclass_str});
                  """
        cursor.execute(query)
        foreign_keys = list(cursor.fetchall())
        foreign_keys = [fk[0] + " " + fk[1] for fk in foreign_keys]

        return {
            "schema": schema,
        }

    def generate_schema(self, tables: List[str] = []) -> Dict[str, Union[int, List[Dict[str, Union[str, List[Dict[str, str]]]]]]]:
        schema_generators = {
            "postgres": self.generate_postgres_schema,
            "mysql": self.generate_mysql_schema,
        }

        tables = self.list_tables(
            tables, f"SELECT table_name FROM information_schema.tables WHERE table_schema = '{self.db_config['database']}';"
        )
        print("Getting schema for each table in your database...")

        generator = schema_generators.get(self.db_type)
        if generator:
            return generator(tables)
        else:
            raise ValueError(
                f"Creation of a DB schema for {self.db_type} is not yet supported via the library. If you are a premium user, please contact us at founder@textquery.dev so we can manually add it."
            )
