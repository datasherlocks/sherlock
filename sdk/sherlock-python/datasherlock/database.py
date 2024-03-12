import json

import pandas as pd
from typing import Dict, List, Union


class DatabaseClient:
    SUPPORTED_DB_TYPES = ["postgres", "redshift", "mysql", "bigquery"]

    def __init__(self, db_type: str, db_config: Dict[str, Union[str, int]]):
        """
        Initialize DatabaseClient instance.

        Args:
            db_type (str): Type of the database.
            db_config (Dict[str, Union[str, int]]): Configuration parameters for the database.
        """
        self.db_type = db_type
        self.db_config = db_config
        self.json_columns = 0
        self.tot_columns = 0
        self.tables = 0
        self.connection = self.preflight()

    def preflight(self):
        """
        Perform preflight checks and establish a database connection.

        Returns:
            Union[psycopg2.extensions.connection, mysql.connector.connection.MySQLConnection,
                  snowflake.connector.connection.SnowflakeConnection,
                  google.cloud.bigquery.client.Client]: Database connection object.
        """
        self.check_db_creds()
        try:
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
                from google.cloud import bigquery

                connection = bigquery.Client.from_service_account_json(
                    self.db_config["json_key_path"]
                )
            else:
                raise ValueError(f"Database '{self.db_type}' is not supported.")

            return connection
        except Exception as e:
            raise ConnectionError(f"Error establishing connection: {str(e)}")

    def check_db_creds(self) -> None:
        """
        Check if the required database credentials are provided.

        Raises:
            ValueError: If the database type is not supported.
            KeyError: If required keys are missing in db_config.
        """
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

        missing_keys = [
            key for key in required_keys[self.db_type] if key not in self.db_config
        ]
        if missing_keys:
            missing_key_str = ", ".join(missing_keys)
            raise KeyError(
                f"db_config must contain the following key(s): {missing_key_str}"
            )

    def get_platform_check(self) -> str:
        """
        Perform a platform check based on the number of tables and columns.

        Returns:
            str: A message indicating the platform check results.
        """
        message = ""
        if self.tables > 15:
            message += "You want to query more than 10 tables in total...\n"

        if self.tot_columns > 150:
            message += "You want to query more than 200 columns in total...\n"

        if self.json_columns > 1:
            message += "There are 1 or more columns with the JSON type...\n"
        else:
            message += "We can support your use-case!"

        return message

    def execute_query(self, query: str) -> pd.DataFrame:
        """
        Execute a query on the database.

        Args:
            query (str): SQL query.

        Returns:
            pd.DataFrame: Result of the query as a DataFrame.
        """
        try:
            cursor = self.connection.cursor()
            cursor.execute(query)
            colnames = [desc[0] for desc in cursor.description]
            results = cursor.fetchall()
            return pd.DataFrame(results, columns=colnames)
        except Exception as e:
            raise RuntimeError(f"Error executing query: {str(e)}")

    def tables_schema(
        self, tables: List[str], query: str
    ) -> List[Dict[str, Union[str, List[Dict[str, str]]]]]:
        """
        Get the schema for a list of tables.

        Args:
            tables (List[str]): List of table names.
            query (str): SQL query to fetch schema.

        Returns:
            List[Dict[str, Union[str, List[Dict[str, str]]]]]: List of table schemas.
        """
        schemas = []
        cursor = self.connection.cursor()
        for table_name in tables:
            try:
                cursor.execute(query, (table_name,))
                rows = cursor.fetchall()
                rows = [{"column_name": i[0], "data_type": i[1]} for i in rows]
                self.tot_columns += len(rows)
                self.json_columns += sum(
                    1 for column in rows if "json" in column["data_type"].lower()
                )
                schemas.append({"name": table_name, "data": json.dumps(rows)})
            except Exception as e:
                raise RuntimeError(f"Error fetching schema for {table_name}: {str(e)}")

        return schemas

    # Rest of the methods with improved error handling and documentation...

    def generate_schema(
        self, tables: List[str] = None
    ) -> Dict[str, Union[int, List[Dict[str, Union[str, List[Dict[str, str]]]]]]]:
        if tables is None:
            tables = []
        schema_generators = {
            "postgres": {
                "generator": self.generate_postgres_schema,
                "table_list": "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';",
            },
            "mysql": {
                "generator": self.generate_mysql_schema,
                "table_list": f"SELECT table_name FROM information_schema.tables WHERE table_schema = '{self.db_config['database']}';",
            },
            "redshift": {
                "generator": self.generate_redshift_schema,
                "table_list": "SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';",
            },
            "snowflake": {
                "generator": self.generate_snowflake_schema,
                "table_list": f"SHOW TABLES IN '{self.db_config['database']}';",
            },
            "bigquery": {"generator": self.generate_bigquery_schema, "table_list": ""},
        }

        gen = schema_generators.get(self.db_type)

        if (
            len(tables) == 0
            and self.db_type != "bigquery"
            and self.db_type != "snowflake"
        ):
            tables = self.list_tables(tables, gen["table_list"])

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


# Example Usage:
# db_client = DatabaseClient(db_type="postgres", db_config={...})
# schema = db_client.generate_schema()
# print(schema)
