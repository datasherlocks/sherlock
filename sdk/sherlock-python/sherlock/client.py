import grpc
import cloud.agent.v1.agent_pb2 as proto
import cloud.agent.v1.agent_pb2_grpc as proto_grpc
from typing import List, Optional, Dict, Union
import pickle

class DatasherlockCloudClient:
    def __init__(self, host: str="api.datasherlocks.io", port: int = 443, bearer_token: str =""):
        self.host = host
        self.port = port
        self.bearer_token = bearer_token

    def _create_channel(self):
        credentials = grpc.ssl_channel_credentials()  # Use SSL for secure communication
        call_credentials = grpc.access_token_call_credentials(self.bearer_token)
        combined_credentials = grpc.composite_channel_credentials(credentials, call_credentials)
        return grpc.secure_channel(f'{self.host}:{self.port}', combined_credentials)

    def ask_agent(self, question: str, host: str, error: Optional[str] = None, sql: Optional[str] = None) -> str:
        channel = self._create_channel()
        stub = proto_grpc.AgentServiceStub(channel)

        request = proto.AskAgentRequest(
            question=question,
            host=host,
            error=error,
            sql=sql
        )

        response = stub.Ask(request)
        return response.sql

    def register_agent(self, registration_data: Dict[str, Union[str, List[str], bytes, None]]) -> Dict[str, Union[int, str]]:
        channel = self._create_channel()
        stub = proto_grpc.AgentServiceStub(channel)

        # Prepare the registration request
        request = proto.RegisterAgentRequest(
            name=registration_data['name'],
            host=registration_data['host'],
            database=registration_data['database'],
            username=registration_data['username'],
            type=registration_data['type'],
            tables=registration_data['tables'],
        )

        if 'schema' in registration_data:
            request.schema = pickle.dumps(registration_data['schema'])
        if 'target' in registration_data:
            request.target = registration_data['target']

        try:
            response = stub.Register(request)
            return {
                'agent_id': response.agent_id,
                'token': response.token,
                'url': response.url
            }
        except grpc.RpcError as e:
            print(f"Error during registration: {e.details()}")
            raise