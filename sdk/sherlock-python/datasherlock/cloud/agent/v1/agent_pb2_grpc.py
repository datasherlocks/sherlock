# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from cloud.agent.v1 import agent_pb2 as cloud_dot_agent_dot_v1_dot_agent__pb2


class AgentServiceStub(object):
    """Agent service definition
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Register = channel.unary_unary(
                '/cloud.agent.v1.AgentService/Register',
                request_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.RegisterAgentRequest.SerializeToString,
                response_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.RegisterAgentResponse.FromString,
                )
        self.List = channel.unary_unary(
                '/cloud.agent.v1.AgentService/List',
                request_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListAgentRequest.SerializeToString,
                response_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListAgentResponse.FromString,
                )
        self.Ask = channel.unary_unary(
                '/cloud.agent.v1.AgentService/Ask',
                request_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.AskAgentRequest.SerializeToString,
                response_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.AskAgentResponse.FromString,
                )
        self.CreateGlossary = channel.unary_unary(
                '/cloud.agent.v1.AgentService/CreateGlossary',
                request_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.CreateGlossaryRequest.SerializeToString,
                response_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.CreateGlossaryResponse.FromString,
                )
        self.ListGlossary = channel.unary_unary(
                '/cloud.agent.v1.AgentService/ListGlossary',
                request_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListGlossaryRequest.SerializeToString,
                response_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListGlossaryResponse.FromString,
                )
        self.DeployBranch = channel.unary_unary(
                '/cloud.agent.v1.AgentService/DeployBranch',
                request_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.DeployBranchAgentRequest.SerializeToString,
                response_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.DeployBranchAgentResponse.FromString,
                )
        self.ListBranch = channel.unary_unary(
                '/cloud.agent.v1.AgentService/ListBranch',
                request_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListBranchAgentRequest.SerializeToString,
                response_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListBranchAgentResponse.FromString,
                )


class AgentServiceServicer(object):
    """Agent service definition
    """

    def Register(self, request, context):
        """API call for registering the agent with the control plane.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def List(self, request, context):
        """API call will return list of agent
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Ask(self, request, context):
        """API call will return history of agent
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateGlossary(self, request, context):
        """API call will return history of agent
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListGlossary(self, request, context):
        """API call will return history of agent
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeployBranch(self, request, context):
        """API call will return history of agent
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ListBranch(self, request, context):
        """API call will return history of agent
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_AgentServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Register': grpc.unary_unary_rpc_method_handler(
                    servicer.Register,
                    request_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.RegisterAgentRequest.FromString,
                    response_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.RegisterAgentResponse.SerializeToString,
            ),
            'List': grpc.unary_unary_rpc_method_handler(
                    servicer.List,
                    request_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListAgentRequest.FromString,
                    response_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListAgentResponse.SerializeToString,
            ),
            'Ask': grpc.unary_unary_rpc_method_handler(
                    servicer.Ask,
                    request_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.AskAgentRequest.FromString,
                    response_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.AskAgentResponse.SerializeToString,
            ),
            'CreateGlossary': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateGlossary,
                    request_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.CreateGlossaryRequest.FromString,
                    response_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.CreateGlossaryResponse.SerializeToString,
            ),
            'ListGlossary': grpc.unary_unary_rpc_method_handler(
                    servicer.ListGlossary,
                    request_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListGlossaryRequest.FromString,
                    response_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListGlossaryResponse.SerializeToString,
            ),
            'DeployBranch': grpc.unary_unary_rpc_method_handler(
                    servicer.DeployBranch,
                    request_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.DeployBranchAgentRequest.FromString,
                    response_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.DeployBranchAgentResponse.SerializeToString,
            ),
            'ListBranch': grpc.unary_unary_rpc_method_handler(
                    servicer.ListBranch,
                    request_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListBranchAgentRequest.FromString,
                    response_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.ListBranchAgentResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'cloud.agent.v1.AgentService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class AgentService(object):
    """Agent service definition
    """

    @staticmethod
    def Register(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/cloud.agent.v1.AgentService/Register',
            cloud_dot_agent_dot_v1_dot_agent__pb2.RegisterAgentRequest.SerializeToString,
            cloud_dot_agent_dot_v1_dot_agent__pb2.RegisterAgentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def List(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/cloud.agent.v1.AgentService/List',
            cloud_dot_agent_dot_v1_dot_agent__pb2.ListAgentRequest.SerializeToString,
            cloud_dot_agent_dot_v1_dot_agent__pb2.ListAgentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Ask(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/cloud.agent.v1.AgentService/Ask',
            cloud_dot_agent_dot_v1_dot_agent__pb2.AskAgentRequest.SerializeToString,
            cloud_dot_agent_dot_v1_dot_agent__pb2.AskAgentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateGlossary(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/cloud.agent.v1.AgentService/CreateGlossary',
            cloud_dot_agent_dot_v1_dot_agent__pb2.CreateGlossaryRequest.SerializeToString,
            cloud_dot_agent_dot_v1_dot_agent__pb2.CreateGlossaryResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ListGlossary(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/cloud.agent.v1.AgentService/ListGlossary',
            cloud_dot_agent_dot_v1_dot_agent__pb2.ListGlossaryRequest.SerializeToString,
            cloud_dot_agent_dot_v1_dot_agent__pb2.ListGlossaryResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeployBranch(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/cloud.agent.v1.AgentService/DeployBranch',
            cloud_dot_agent_dot_v1_dot_agent__pb2.DeployBranchAgentRequest.SerializeToString,
            cloud_dot_agent_dot_v1_dot_agent__pb2.DeployBranchAgentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ListBranch(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/cloud.agent.v1.AgentService/ListBranch',
            cloud_dot_agent_dot_v1_dot_agent__pb2.ListBranchAgentRequest.SerializeToString,
            cloud_dot_agent_dot_v1_dot_agent__pb2.ListBranchAgentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class SearchServiceStub(object):
    """Agent service definition
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Query = channel.unary_unary(
                '/cloud.agent.v1.SearchService/Query',
                request_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.QueryAgentRequest.SerializeToString,
                response_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.QueryAgentResponse.FromString,
                )


class SearchServiceServicer(object):
    """Agent service definition
    """

    def Query(self, request, context):
        """API call will return history of agent
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_SearchServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Query': grpc.unary_unary_rpc_method_handler(
                    servicer.Query,
                    request_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.QueryAgentRequest.FromString,
                    response_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.QueryAgentResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'cloud.agent.v1.SearchService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class SearchService(object):
    """Agent service definition
    """

    @staticmethod
    def Query(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/cloud.agent.v1.SearchService/Query',
            cloud_dot_agent_dot_v1_dot_agent__pb2.QueryAgentRequest.SerializeToString,
            cloud_dot_agent_dot_v1_dot_agent__pb2.QueryAgentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)


class HistoryServiceStub(object):
    """Agent service definition
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.History = channel.unary_unary(
                '/cloud.agent.v1.HistoryService/History',
                request_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.HistoryAgentRequest.SerializeToString,
                response_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.HistoryAgentResponse.FromString,
                )


class HistoryServiceServicer(object):
    """Agent service definition
    """

    def History(self, request, context):
        """API call will return history of agent
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_HistoryServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'History': grpc.unary_unary_rpc_method_handler(
                    servicer.History,
                    request_deserializer=cloud_dot_agent_dot_v1_dot_agent__pb2.HistoryAgentRequest.FromString,
                    response_serializer=cloud_dot_agent_dot_v1_dot_agent__pb2.HistoryAgentResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'cloud.agent.v1.HistoryService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class HistoryService(object):
    """Agent service definition
    """

    @staticmethod
    def History(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/cloud.agent.v1.HistoryService/History',
            cloud_dot_agent_dot_v1_dot_agent__pb2.HistoryAgentRequest.SerializeToString,
            cloud_dot_agent_dot_v1_dot_agent__pb2.HistoryAgentResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)