import json
import os

import datasherlock.client.agent.v1.agent_connect as agent_connect_client
import datasherlock.client.agent.v1.agent_pb2 as agent_pb2_client
import datasherlock.cloud.agent.v1.agent_connect as agent_connect
import datasherlock.cloud.agent.v1.agent_pb2 as agent_pb2
import grpc
from typing import Dict, List, Optional, Union


class DatasherlockClient:
    """
    DatasherlockClient provides a client for interacting with Datasherlock Agent locally.
    """

    def __init__(
        self,
        host: str,
        secret: str = "",
    ):
        """
        Initialize DatasherlockClient.

        Args:
            host (str): Datasherlock Agent host.
            secret (str, optional): Secret for authentication. Defaults to "".
        """
        self.host = host
        self.secret = secret
        self.metadata = {"Token": self.secret}

    def _create_channel(self) -> agent_connect_client.AgentServiceClient:
        """
        Create a gRPC channel for communication.

        Returns:
            agent_connect_client.AgentServiceClient: gRPC client for Datasherlock Agent.
        """
        return agent_connect_client.AgentServiceClient(self.host, headers=self.metadata)

    def ask_agent(
        self, registration_data: Dict[str, Union[str, List[str], bytes, None]]
    ) -> str:
        """
        Ask Datasherlock Agent a question.

        Args:
            registration_data (Dict[str, Union[str, List[str], bytes, None]]): Registration data.

        Returns:
            str: Response from the Datasherlock Agent.
        """
        client = self._create_channel()
        request = agent_pb2_client.AskAgentRequest(
            question=registration_data["question"]
        )

        response = client.ask(request)
        return response


class DatasherlockCloudClient:
    """
    DatasherlockCloudClient provides a client for interacting with Datasherlock Cloud.
    """

    def __init__(
        self,
        host: str = "api.ap-south-1.datasherlock.io",
        port: int = 443,
        bearer_token: str = "",
    ):
        """
        Initialize DatasherlockCloudClient.
        Args:
            host (str, optional): Datasherlock Cloud host. Defaults to "api.ap-south-1.datasherlock.io".
            port (int, optional): Port for communication. Defaults to 443.
            bearer_token (str, optional): Bearer token for authentication. Defaults to "".
        """
        self.host = os.environ.get("DS_HOST_URL") or host
        self.bearer_token = bearer_token
        self.metadata = {"Authorization": "Bearer " + self.bearer_token}

    def _create_channel(self) -> agent_connect.AgentServiceClient:
        """
        Create a gRPC channel for communication.

        Returns:
            agent_connect.AgentServiceClient: gRPC client for Datasherlock Cloud.
        """
        return agent_connect.AgentServiceClient(self.host, headers=self.metadata)

    def ask_agent(
        self, registration_data: Dict[str, Union[str, List[str], bytes, None]]
    ) -> str:
        """
        Ask Datasherlock Agent in the cloud a question.

        Args:
            registration_data (Dict[str, Union[str, List[str], bytes, None]]): Registration data.

        Returns:
            str: Response from Datasherlock Agent in the cloud.
        """
        client = self._create_channel()
        request = agent_pb2.AskAgentRequest(question=registration_data["question"])

        response = client.ask(request)
        return response

    def list_agent(
        self, registration_data: Dict[str, Union[str, List[str], bytes, None]]
    ) -> str:
        """
        List available agents in the cloud.

        Args:
            registration_data (Dict[str, Union[str, List[str], bytes, None]]): Registration data.

        Returns:
            str: Response listing available agents.
        """
        client = self._create_channel()
        request = agent_pb2.ListAgentRequest()
        response = client.list(request)
        return response

    def register_agent(
        self, registration_data: Dict[str, Union[str, List[str], bytes, None]]
    ) -> Dict[str, Union[int, str]]:
        """
        Register a new agent in the cloud.

        Args:
            registration_data (Dict[str, Union[str, List[str], bytes, None]]): Registration data.

        Returns:
            Dict[str, Union[int, str]]: Registration result.
        """
        client = self._create_channel()
        request = agent_pb2.RegisterAgentRequest(
            name=registration_data["name"],
            host=registration_data["host"],
            database=registration_data["database"],
            username=registration_data["username"],
            type=registration_data["type"],
            tables=registration_data["tables"],
            schema=json.dumps(registration_data["schema"]).encode("utf-8"),
        )

        if "target" in registration_data:
            request.target = registration_data["target"]

        try:
            response = client.register(request)
            if response.agent_id > 0:
                return {
                    "agent_id": response.agent_id,
                    "token": response.token,
                    "url": response.url,
                }
            else:
                return {"error": "Failed to register agent", "response": response}
        except grpc.RpcError as e:
            print(f"Error during registration: {e.details()}")
            raise
