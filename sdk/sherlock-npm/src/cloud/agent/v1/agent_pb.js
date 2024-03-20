// @generated by protoc-gen-es v1.8.0
// @generated from file cloud/agent/v1/agent.proto (package cloud.agent.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListBranchAgentRequest
 */
export const ListBranchAgentRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListBranchAgentResponse = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.agent.v1.ListBranchAgentResponse",
  () => [
    { no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "data", kind: "message", T: Branch, repeated: true },
  ],
);

/**
 * @generated from message cloud.agent.v1.Branch
 */
export const Branch = /*@__PURE__*/ proto3.makeMessageType(
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
 * @generated from message cloud.agent.v1.DeployAgentRequest
 */
export const DeployAgentRequest = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.agent.v1.DeployAgentRequest",
  () => [
    { no: 1, name: "password", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "oauth", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "client_secret", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "app_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.DeployAgentResponse
 */
export const DeployAgentResponse = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.agent.v1.DeployAgentResponse",
  () => [
    { no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.DestroyAgentRequest
 */
export const DestroyAgentRequest = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.agent.v1.DestroyAgentRequest",
  [],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.DestroyAgentResponse
 */
export const DestroyAgentResponse = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.agent.v1.DestroyAgentResponse",
  () => [
    { no: 1, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "success", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListGlossaryRequest
 */
export const ListGlossaryRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListGlossaryResponse = /*@__PURE__*/ proto3.makeMessageType(
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
export const GlossaryRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const CreateGlossaryRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const QueryAgentRequest = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.agent.v1.QueryAgentRequest",
  () => [
    { no: 1, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "agentID", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ],
);

/**
 * @generated from message cloud.agent.v1.CreateGlossaryResponse
 */
export const CreateGlossaryResponse = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.agent.v1.CreateGlossaryResponse",
  () => [
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message cloud.agent.v1.Query
 */
export const Query = /*@__PURE__*/ proto3.makeMessageType(
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
export const QueryAgentResponse = /*@__PURE__*/ proto3.makeMessageType(
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
export const AskAgentRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const AskAgentResponse = /*@__PURE__*/ proto3.makeMessageType(
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
export const History = /*@__PURE__*/ proto3.makeMessageType(
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
export const HistoryAgentRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const HistoryAgentResponse = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListAgentRequest = /*@__PURE__*/ proto3.makeMessageType(
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
export const ListAgentResponse = /*@__PURE__*/ proto3.makeMessageType(
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
export const AgentRequest = /*@__PURE__*/ proto3.makeMessageType(
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
    { no: 13, name: "api_key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "port", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 15, name: "deploy", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 17, name: "ssl", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 16, name: "docs", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 18, name: "region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.RegisterAgentRequest
 */
export const RegisterAgentRequest = /*@__PURE__*/ proto3.makeMessageType(
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
    { no: 11, name: "port", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 12, name: "ssl", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 14, name: "region", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.RegisterAgentResponse
 */
export const RegisterAgentResponse = /*@__PURE__*/ proto3.makeMessageType(
  "cloud.agent.v1.RegisterAgentResponse",
  () => [
    { no: 1, name: "agent_id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "token", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "key", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

