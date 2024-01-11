import grpc
import datasherlock.cloud.agent.v1.agent_pb2 as proto
import datasherlock.cloud.agent.v1.agent_pb2_grpc as proto_grpc
from typing import List, Optional, Dict, Union
import pickle
import json

class DatasherlockCloudClient:
    def __init__(self, host: str="api.ap-south-1.datasherlock.io", port: int = 443, bearer_token: str =""):
        self.host = host
        self.port = port
        self.bearer_token = bearer_token
        self.metadata = [("authorization", "bearer " + self.bearer_token)]

    def _create_channel(self):  # Use SSL for secure communication
        return grpc.insecure_channel(f'{self.host}:{self.port}')

    def ask_agent(self, registration_data: Dict[str, Union[str, List[str], bytes, None]]) -> str:
        channel = self._create_channel()
        stub = proto_grpc.AgentServiceStub(channel)

        request = proto.AskAgentRequest(
            question=registration_data['question'],
            host=registration_data['host'],
            error=registration_data['error'],
            sql=registration_data['sql']
        )

        response = stub.Ask(request, metadata=self.metadata)
        return response.sql

    def list_agent(self, registration_data: Dict[str, Union[str, List[str], bytes, None]]) -> str:
        channel = self._create_channel()
        stub = proto_grpc.AgentServiceStub(channel)

        request = proto.ListAgentRequest(
        )

        response = stub.List(request, metadata=self.metadata)
        return response

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
            schema=json.dumps(registration_data['schema']).encode('utf-8'),
        )

        if 'target' in registration_data:
            request.target = registration_data['target']


        try:
            response = stub.Register(request,  metadata=self.metadata)
            if response.agent_id > 0:
              return {
                  'agent_id': response.agent_id,
                  'token': response.token,
                  'url': response.url
              }
            else:
              return {
                "error" : "Failed to register agent",
                "response": response
              }
        except grpc.RpcError as e:
            print(f"Error during registration: {e.details()}")
            raise
