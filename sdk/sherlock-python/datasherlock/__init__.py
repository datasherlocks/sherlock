from typing import Optional, List, Dict, Union, Any
from datasherlock.database import DatabaseClient  # Import the updated DatabaseClient
from datasherlock.request import DatasherlockCloudClient

class DataSherlock:
    def __init__(self, token: str ,db_type: str, db_config: Dict[str, Union[str, int]]):
        self.db_client = DatabaseClient(db_type, db_config)  # Initialize DatabaseClient with db_type
        self.cloud = DatasherlockCloudClient(bearer_token=token)
        self.db_config = db_config
        self.db_type = db_type

    def ask(self, question: str, error: Optional[str] = None, sql: Optional[str] = None) -> Dict[str, Any]:
        request = {
            'question': question,
            'host': self.db_config["host"],
            'error': error,
            'sql': sql,
        }
        query = self.cloud.ask_agent(registration_data=request)
        df = self.db_client.execute_query(query=query)
        return  {
            "query": query,
            "data": df
        }

    def list(self) -> Dict[str, Any]:
        request = {
        }
        return  self.cloud.list_agent(registration_data=request)

    def register(self, name: str) -> Dict[str, Any]:

        data = self.db_client.generate_schema()

        print(self.db_client.get_platform_check())

        request = {
            'name': name,
            'host': self.db_config["host"],
            'database': self.db_config["database"],
            'username': self.db_config["user"],
            'type': self.db_type,
            'tables': [],
            'schema': data["schema"]
        }

        return self.cloud.register_agent(registration_data=request)