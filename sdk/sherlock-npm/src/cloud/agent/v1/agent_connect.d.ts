// @generated by protoc-gen-connect-es v0.13.2
// @generated from file cloud/agent/v1/agent.proto (package cloud.agent.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { AskAgentRequest, AskAgentResponse, CreateGlossaryRequest, CreateGlossaryResponse, DeployAgentRequest, DeployAgentResponse, DestroyAgentRequest, DestroyAgentResponse, HistoryAgentRequest, HistoryAgentResponse, ListAgentRequest, ListAgentResponse, ListGlossaryRequest, ListGlossaryResponse, QueryAgentRequest, QueryAgentResponse, RegisterAgentRequest, RegisterAgentResponse } from "./agent_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Agent service definition
 *
 * @generated from service cloud.agent.v1.AgentService
 */
export declare const AgentService: {
  readonly typeName: "cloud.agent.v1.AgentService",
  readonly methods: {
    /**
     * API call for registering the agent with the control plane.
     *
     * @generated from rpc cloud.agent.v1.AgentService.Register
     */
    readonly register: {
      readonly name: "Register",
      readonly I: typeof RegisterAgentRequest,
      readonly O: typeof RegisterAgentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * API call will return list of agent
     *
     * @generated from rpc cloud.agent.v1.AgentService.List
     */
    readonly list: {
      readonly name: "List",
      readonly I: typeof ListAgentRequest,
      readonly O: typeof ListAgentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * API call will return history of agent
     *
     * @generated from rpc cloud.agent.v1.AgentService.Ask
     */
    readonly ask: {
      readonly name: "Ask",
      readonly I: typeof AskAgentRequest,
      readonly O: typeof AskAgentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * API call will return history of agent
     *
     * @generated from rpc cloud.agent.v1.AgentService.CreateGlossary
     */
    readonly createGlossary: {
      readonly name: "CreateGlossary",
      readonly I: typeof CreateGlossaryRequest,
      readonly O: typeof CreateGlossaryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * API call will return history of agent
     *
     * @generated from rpc cloud.agent.v1.AgentService.ListGlossary
     */
    readonly listGlossary: {
      readonly name: "ListGlossary",
      readonly I: typeof ListGlossaryRequest,
      readonly O: typeof ListGlossaryResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * API call will return deployment of agent
     *
     * @generated from rpc cloud.agent.v1.AgentService.Deploy
     */
    readonly deploy: {
      readonly name: "Deploy",
      readonly I: typeof DeployAgentRequest,
      readonly O: typeof DeployAgentResponse,
      readonly kind: MethodKind.Unary,
    },
    /**
     * @generated from rpc cloud.agent.v1.AgentService.Destroy
     */
    readonly destroy: {
      readonly name: "Destroy",
      readonly I: typeof DestroyAgentRequest,
      readonly O: typeof DestroyAgentResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * Agent service definition
 *
 * @generated from service cloud.agent.v1.SearchService
 */
export declare const SearchService: {
  readonly typeName: "cloud.agent.v1.SearchService",
  readonly methods: {
    /**
     * API call will return history of agent
     *
     * @generated from rpc cloud.agent.v1.SearchService.Query
     */
    readonly query: {
      readonly name: "Query",
      readonly I: typeof QueryAgentRequest,
      readonly O: typeof QueryAgentResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};

/**
 * Agent service definition
 *
 * @generated from service cloud.agent.v1.HistoryService
 */
export declare const HistoryService: {
  readonly typeName: "cloud.agent.v1.HistoryService",
  readonly methods: {
    /**
     * API call will return history of agent
     *
     * @generated from rpc cloud.agent.v1.HistoryService.History
     */
    readonly history: {
      readonly name: "History",
      readonly I: typeof HistoryAgentRequest,
      readonly O: typeof HistoryAgentResponse,
      readonly kind: MethodKind.Unary,
    },
  }
};
