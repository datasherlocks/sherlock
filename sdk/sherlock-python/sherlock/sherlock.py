from typing import Optional, List, Dict, Union
from database import DatabaseClient  # Import the updated DatabaseClient
from client import DatasherlockCloudClient  # Import the updated DatabaseClient

class Sherlock:
    def __init__(self, token: str ,db_type: str, db_config: Dict[str, Union[str, int]]):
        self.db_client = DatabaseClient(db_type, db_config)  # Initialize DatabaseClient with db_type
        self.cloud = DatasherlockCloudClient(bearer_token=token)
        self.db_config = db_config
        self.db_type = db_type

    def ask(self, question: str, error: Optional[str] = None, sql: Optional[str] = None) -> str:
        request = {
            'question': question,
            'host': self.db_config["host"],
            'error': error,
            'sql': sql,
        }
        return  self.cloud.ask_agent(registration_data=request)

    def register(self, name: str) -> Dict[str, Union[int, str]]:
        self.db_client.preflight()
        schemas = self.db_client.generate_schema([])

        tot_tables = len(schemas)
        tot_columns = sum(len(table_schema) for table_schema in schemas.values())

        if tot_tables > 15 or tot_columns > 200:
            message = self.db_client.get_platform_check(tot_tables, tot_columns)
        else:
            json_columns = sum(1 for table_schema in schemas.values() for item in table_schema if "json" in item["data_type"].lower())
            message = self.db_client.get_platform_check(tot_tables, tot_columns, json_columns)

        print(message)

        request = {
            'name': name,
            'host': self.db_config["host"],
            'database': self.db_config["database"],
            'username': self.db_config["user"],
            'type': self.db_type,
            'tables': [],
            'schema': schemas,
        }


        response = self.cloud.register_agent(registration_data=request)
        return {
            'agent_id': response.agent_id,
            'token': response.token,
            'url': response.url
        }
