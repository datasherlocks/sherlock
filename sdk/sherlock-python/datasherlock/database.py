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
        elif self.db_type == "snowflake":
            import snowflake.connector
            connection = snowflake.connector.connect(
                user=self.db_config["user"],
                password=self.db_config["password"],
                account=self.db_config["account"],
            )
        elif self.db_type == "bigquery":
            client = bigquery.Client.from_service_account_json(self.db_config["json_key_path"])
            return client  # Return the BigQuery client directly
        else:
            raise ValueError(f"Database '{self.db_type}' is not supported.")

        return connection

    def check_db_creds(self) -> None:
        required_keys = {
            "postgres": ["host", "port", "database", "user", "password"],
            "redshift": ["host", "port", "database", "user", "password"],
            "mysql": ["host", "database", "user", "password"],
            "snowflake": ["account", "warehouse", "user", "password"],
            "bigquery": ["json_key_path"],
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
            message = message + "You want to query more than 10 tables in total...\n"

        if self.tot_columns > 150:
            message = message + "You want to query more than 200 columns in total...\n"

        if self.json_columns > 1:
            message = message + "There are 1 or more columns with the JSON type...\n"
        else:
            message = message + "we can support your use-case!"

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

    def generate_snowflake_schema(self, tables: List[str]) -> Dict[str, List[Dict[str, str]]]:
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
        print("Getting schema for each table in your Snowflake database...")
        # get the schema for each table
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

        return {
            "schema": schemas,
        }
    
    def generate_mysql_schema(self, tables: List[str]) -> Dict[str, Union[int, List[Dict[str, Union[str, List[Dict[str, str]]]]]]]:
        schema = self.tables_schema(
            tables,
            "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = %s;",
        )
        return {
            "schema": schema,
        }

    def generate_postgres_schema(self, tables: list) -> Dict[str, List[Dict[str, str]]]:
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
            # get all tables
            cur.execute(
                "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
            )
            tables = [row[0] for row in cur.fetchall()]
        print("Retrieved the following tables:")
        for t in tables:
            print(f"\t{t}")

        print("Getting schema for each table in your database...")
        # get the schema for each table
        for table_name in tables:
            cur.execute(
                "SELECT CAST(column_name AS TEXT), CAST(data_type AS TEXT) FROM information_schema.columns WHERE table_name::text = %s;",
                (table_name,),
            )
            rows = cur.fetchall()
            rows = [row for row in rows]
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
            # print("No indexes found.")
        conn.close()

        return {
            "schema": schemas,
            "foreign_keys": foreign_keys,
            "indexes": indexes,
        }

    def generate_redshift_schema(self, tables: List[str]) -> Dict[str, Union[int, List[Dict[str, Union[str, List[Dict[str, str]]]]]]]:
        cursor = self.connection.cursor()
        print("Getting schema for each table in your Redshift database...")
        
        schema = self.tables_schema(
            tables,
            "SELECT column_name, data_type FROM information_schema.columns WHERE table_name = %s;",
        )

        # Get foreign key relationships
        print("Getting foreign keys for each table in your Redshift database...")
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

        # Get indexes for each table
        print("Getting indexes for each table in your Redshift database...")
        tables_str = ", ".join([f"'{table_name}'" for table_name in tables])
        query = (
            f"""SELECT indexdef FROM pg_indexes WHERE tablename IN ({tables_str});"""
        )
        cursor.execute(query)
        indexes = list(cursor.fetchall())
        if len(indexes) > 0:
            indexes = [index[0] for index in indexes]
        else:
            indexes = []

        return {
            "schema": schema,
            "foreign_keys": foreign_keys,
            "indexes": indexes,
        }

    def generate_bigquery_schema(self, tables: List[str]) -> Dict[str, List[Dict[str, str]]]:
        try:
            client = bigquery.Client.from_service_account_json(self.db_config["json_key_path"])
            schemas = {}

            print("Getting the schema for each table in your BigQuery dataset...")
            # Get the schema for each table
            for table_name in tables:
                dataset_name, table_name = table_name.split(".")
                table_ref = client.dataset(dataset_name).table(table_name)
                table = client.get_table(table_ref)
                rows = table.schema
                rows = [{"column_name": field.name, "data_type": field.field_type} for field in rows]
                schemas[table_name] = rows

            return {
                "schema": schemas,
            }
        except Exception as e:
            raise Exception(f"Failed to generate BigQuery schema: {str(e)}")

    def generate_bigquery_tables(self) -> List[str]:
        try:
            client = bigquery.Client.from_service_account_json(self.db_config["json_key_path"])
            dataset_ref = client.dataset(self.db_config["dataset"])  # Specify the dataset name
            tables = client.list_tables(dataset_ref)
            table_names = [table.table_id for table in tables]
            return table_names
        except Exception as e:
            raise Exception(f"Failed to fetch BigQuery tables: {str(e)}")
        
    def generate_schema(self, tables: List[str] = []) -> Dict[str, Union[int, List[Dict[str, Union[str, List[Dict[str, str]]]]]]]:
        schema_generators = {
            "postgres": {
                "generator": self.generate_postgres_schema,
                "table_list":  "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
            },
            "mysql": {
                "generator": self.generate_mysql_schema,
                "table_list":  f"SELECT table_name FROM information_schema.tables WHERE table_schema = '{self.db_config['database']}';"
            },
            "redshift": {
                "generator": self.generate_redshift_schema,
                "table_list":  "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';"
            },
            "snowflake": {
                "generator": self.generate_snowflake_schema,
                "table_list":  f"SHOW TABLES IN '{self.db_config['database']}';"
            },
            "bigquery": {
                "generator": self.generate_bigquery_schema,
            }
        }

        gen = schema_generators.get(self.db_type)
        if len(tables) == 0 :
            tables = self.list_tables(
                tables, gen["table_list"]
            )
  
        if self.db_type == "bigquery":
            tables = self.generate_bigquery_tables()

        print("Getting schema for each table in your database...")

        generator = gen["generator"]
        if generator:
            return generator(tables)
        else:
            raise ValueError(
                f"Creation of a DB schema for {self.db_type} is not yet supported via the library. If you are a premium user, please contact us at founder@textquery.dev so we can manually add it."
            )
