// @generated by protoc-gen-es v1.6.0
// @generated from file cloud/agent/v1/agent.proto (package cloud.agent.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListBranchAgentRequest
 */
export const ListBranchAgentRequest = proto3.makeMessageType(
  "cloud.agent.v1.ListBranchAgentRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListBranchAgentResponse
 */
export const ListBranchAgentResponse = proto3.makeMessageType(
  "cloud.agent.v1.ListBranchAgentResponse",
  () => [
    { no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "message", T: Branch, repeated: true },
  ],
);

/**
 * @generated from message cloud.agent.v1.Branch
 */
export const Branch = proto3.makeMessageType(
  "cloud.agent.v1.Branch",
  () => [
    { no: 1, name: "agentId", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "status", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "port", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 7, name: "created", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.DeployBranchAgentRequest
 */
export const DeployBranchAgentRequest = proto3.makeMessageType(
  "cloud.agent.v1.DeployBranchAgentRequest",
  () => [
    { no: 1, name: "user_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agentId", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "duration", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 5, name: "remark", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.DeployBranchAgentResponse
 */
export const DeployBranchAgentResponse = proto3.makeMessageType(
  "cloud.agent.v1.DeployBranchAgentResponse",
  () => [
    { no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "port", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListGlossaryRequest
 */
export const ListGlossaryRequest = proto3.makeMessageType(
  "cloud.agent.v1.ListGlossaryRequest",
  () => [
    { no: 1, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "org_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListGlossaryResponse
 */
export const ListGlossaryResponse = proto3.makeMessageType(
  "cloud.agent.v1.ListGlossaryResponse",
  () => [
    { no: 1, name: "data", kind: "message", T: GlossaryRequest, repeated: true },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cloud.agent.v1.GlossaryRequest
 */
export const GlossaryRequest = proto3.makeMessageType(
  "cloud.agent.v1.GlossaryRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "agent_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.CreateGlossaryRequest
 */
export const CreateGlossaryRequest = proto3.makeMessageType(
  "cloud.agent.v1.CreateGlossaryRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agentId", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.QueryAgentRequest
 */
export const QueryAgentRequest = proto3.makeMessageType(
  "cloud.agent.v1.QueryAgentRequest",
  () => [
    { no: 1, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agentID", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message cloud.agent.v1.CreateGlossaryResponse
 */
export const CreateGlossaryResponse = proto3.makeMessageType(
  "cloud.agent.v1.CreateGlossaryResponse",
  () => [
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cloud.agent.v1.Query
 */
export const Query = proto3.makeMessageType(
  "cloud.agent.v1.Query",
  () => [
    { no: 1, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cloud.agent.v1.QueryAgentResponse
 */
export const QueryAgentResponse = proto3.makeMessageType(
  "cloud.agent.v1.QueryAgentResponse",
  () => [
    { no: 1, name: "data", kind: "message", T: Query, repeated: true },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.AskAgentRequest
 */
export const AskAgentRequest = proto3.makeMessageType(
  "cloud.agent.v1.AskAgentRequest",
  () => [
    { no: 1, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "schema", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.AskAgentResponse
 */
export const AskAgentResponse = proto3.makeMessageType(
  "cloud.agent.v1.AskAgentResponse",
  () => [
    { no: 1, name: "sql", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.History
 */
export const History = proto3.makeMessageType(
  "cloud.agent.v1.History",
  () => [
    { no: 1, name: "tenant_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agent_id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 3, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "sql", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "err", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "feedback", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "date", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "prompt_tokens", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "completion_tokens", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 10, name: "hostname", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.HistoryAgentRequest
 */
export const HistoryAgentRequest = proto3.makeMessageType(
  "cloud.agent.v1.HistoryAgentRequest",
  () => [
    { no: 1, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.HistoryAgentResponse
 */
export const HistoryAgentResponse = proto3.makeMessageType(
  "cloud.agent.v1.HistoryAgentResponse",
  () => [
    { no: 1, name: "data", kind: "message", T: History, repeated: true },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListAgentRequest
 */
export const ListAgentRequest = proto3.makeMessageType(
  "cloud.agent.v1.ListAgentRequest",
  () => [
    { no: 1, name: "page_size", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListAgentResponse
 */
export const ListAgentResponse = proto3.makeMessageType(
  "cloud.agent.v1.ListAgentResponse",
  () => [
    { no: 1, name: "data", kind: "message", T: AgentRequest, repeated: true },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "page_token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.AgentRequest
 */
export const AgentRequest = proto3.makeMessageType(
  "cloud.agent.v1.AgentRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "database", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tables", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "schema", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "count", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 9, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "id", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 11, name: "heartbeat", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 12, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.RegisterAgentRequest
 */
export const RegisterAgentRequest = proto3.makeMessageType(
  "cloud.agent.v1.RegisterAgentRequest",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "database", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tables", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "schema", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 8, name: "target", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "description", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "schemaFile", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.RegisterAgentResponse
 */
export const RegisterAgentResponse = proto3.makeMessageType(
  "cloud.agent.v1.RegisterAgentResponse",
  () => [
    { no: 1, name: "agent_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

