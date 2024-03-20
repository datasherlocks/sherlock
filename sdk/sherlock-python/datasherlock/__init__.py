import keyring
from datasherlock.database import DatabaseClient
from datasherlock.request import DatasherlockClient, DatasherlockCloudClient
from tabulate import tabulate
from typing import Any, Dict, Optional, Union


class DataSherlock:
    """
    DataSherlock class for interacting with a database and Datasherlock Cloud.

    Parameters:
        - token (str): Bearer token for Datasherlock Cloud.
        - db_type (str): Type of the database.
        - db_config (Dict[str, Union[str, int]]): Configuration for the database.
    """

    def __init__(
        self, token: str, db_type: str, db_config: Dict[str, Union[str, int]]
    ) -> None:
        """
        Initialize DataSherlock instance.

        Parameters:
            - token (str): Bearer token for Datasherlock Cloud.
            - db_type (str): Type of the database.
            - db_config (Dict[str, Union[str, int]]): Configuration for the database.
        """
        if db_type is not None and db_config is not None:
            self.db_client: DatabaseClient = DatabaseClient(db_type, db_config)
        self.cloud: DatasherlockCloudClient = DatasherlockCloudClient(
            bearer_token=token
        )
        self.db_config: Dict[str, Union[str, int]] = db_config
        self.db_type: str = db_type

    def ask(
        self,
        question: str = "",
        sql: str = "",
        name: str = "",
        error: Optional[str] = None,
    ) -> Dict[str, Any]:
        """
        Ask a question to DataSherlock Cloud.

        Parameters:
            - question (str): The question to ask the agent.
            - sql (str): SQL query to execute (optional).
            - name (str): Name of the agent to ask the question (optional).
            - error (Optional[str]): Custom error message (optional).

        Returns:
            Dict[str, Any]: Result of the agent's response or query execution.

        Raises:
            ValueError: If the specified agent name is not found.
        """
        if name is not None:
            agent = {}
            found = False
            results = self.cloud.list_agent(registration_data={})
            for x in results.data:
                if x.name == name:
                    agent = x
                    found = True

            if not found:
                raise ValueError(
                    "Agent not found. Please provide a correct agent name."
                )
            request = {
                "question": question,
                "host": self.db_config.get("host", ""),
            }
            
            query = self.cloud.ask_agent(registration_data=request)
            print(query)
            if self.db_client is not None:
                return {"query": query, "data": self.db_client.execute_query(query=query)}
            return {"query": query}

    def list(self) -> str:
        """
        List agents and print the result in a tabular format.

        Returns:
            str: Tabulated list of agents.
        """
        request = {}
        result = self.cloud.list_agent(registration_data=request)
        responses = []
        for data in result.data:
            responses.append(
                {
                    "id": data.id,
                    "name": data.name,
                    "url": data.url,
                    "type": data.type,
                    "host": data.host,
                }
            )

        table = tabulate(responses, headers="keys", tablefmt="psql")
        return table

    def db(self) -> Any:
        """
        Get the DatabaseClient instance.

        Returns:
            Any: DatabaseClient instance.
        """
        return self.db_client
