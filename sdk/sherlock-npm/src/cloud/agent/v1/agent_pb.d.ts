// @generated by protoc-gen-es v1.8.0
// @generated from file cloud/agent/v1/agent.proto (package cloud.agent.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListBranchAgentRequest
 */
export declare class ListBranchAgentRequest extends Message<ListBranchAgentRequest> {
  /**
   * @generated from field: string user_id = 1;
   */
  userId: string;

  constructor(data?: PartialMessage<ListBranchAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.ListBranchAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBranchAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBranchAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBranchAgentRequest;

  static equals(a: ListBranchAgentRequest | PlainMessage<ListBranchAgentRequest> | undefined, b: ListBranchAgentRequest | PlainMessage<ListBranchAgentRequest> | undefined): boolean;
}

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListBranchAgentResponse
 */
export declare class ListBranchAgentResponse extends Message<ListBranchAgentResponse> {
  /**
   * @generated from field: string error = 1;
   */
  error: string;

  /**
   * @generated from field: repeated cloud.agent.v1.Branch data = 2;
   */
  data: Branch[];

  constructor(data?: PartialMessage<ListBranchAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.ListBranchAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListBranchAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListBranchAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListBranchAgentResponse;

  static equals(a: ListBranchAgentResponse | PlainMessage<ListBranchAgentResponse> | undefined, b: ListBranchAgentResponse | PlainMessage<ListBranchAgentResponse> | undefined): boolean;
}

/**
 * @generated from message cloud.agent.v1.Branch
 */
export declare class Branch extends Message<Branch> {
  /**
   * @generated from field: int64 agentId = 1;
   */
  agentId: bigint;

  /**
   * @generated from field: string username = 2;
   */
  username: string;

  /**
   * @generated from field: string password = 3;
   */
  password: string;

  /**
   * @generated from field: string host = 4;
   */
  host: string;

  /**
   * @generated from field: string status = 5;
   */
  status: string;

  /**
   * @generated from field: int64 port = 6;
   */
  port: bigint;

  /**
   * @generated from field: string created = 7;
   */
  created: string;

  /**
   * @generated from field: string type = 8;
   */
  type: string;

  /**
   * @generated from field: string name = 9;
   */
  name: string;

  constructor(data?: PartialMessage<Branch>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.Branch";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Branch;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Branch;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Branch;

  static equals(a: Branch | PlainMessage<Branch> | undefined, b: Branch | PlainMessage<Branch> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.DeployAgentRequest
 */
export declare class DeployAgentRequest extends Message<DeployAgentRequest> {
  /**
   * @generated from field: string password = 1;
   */
  password: string;

  /**
   * @generated from field: string oauth = 2;
   */
  oauth: string;

  /**
   * @generated from field: string client_secret = 3;
   */
  clientSecret: string;

  /**
   * @generated from field: string app_id = 4;
   */
  appId: string;

  constructor(data?: PartialMessage<DeployAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.DeployAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeployAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeployAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeployAgentRequest;

  static equals(a: DeployAgentRequest | PlainMessage<DeployAgentRequest> | undefined, b: DeployAgentRequest | PlainMessage<DeployAgentRequest> | undefined): boolean;
}

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.DeployAgentResponse
 */
export declare class DeployAgentResponse extends Message<DeployAgentResponse> {
  /**
   * @generated from field: string error = 1;
   */
  error: string;

  /**
   * @generated from field: bool success = 2;
   */
  success: boolean;

  constructor(data?: PartialMessage<DeployAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.DeployAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeployAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeployAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeployAgentResponse;

  static equals(a: DeployAgentResponse | PlainMessage<DeployAgentResponse> | undefined, b: DeployAgentResponse | PlainMessage<DeployAgentResponse> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.DestroyAgentRequest
 */
export declare class DestroyAgentRequest extends Message<DestroyAgentRequest> {
  constructor(data?: PartialMessage<DestroyAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.DestroyAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DestroyAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DestroyAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DestroyAgentRequest;

  static equals(a: DestroyAgentRequest | PlainMessage<DestroyAgentRequest> | undefined, b: DestroyAgentRequest | PlainMessage<DestroyAgentRequest> | undefined): boolean;
}

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.DestroyAgentResponse
 */
export declare class DestroyAgentResponse extends Message<DestroyAgentResponse> {
  /**
   * @generated from field: string error = 1;
   */
  error: string;

  /**
   * @generated from field: bool success = 2;
   */
  success: boolean;

  constructor(data?: PartialMessage<DestroyAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.DestroyAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DestroyAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DestroyAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DestroyAgentResponse;

  static equals(a: DestroyAgentResponse | PlainMessage<DestroyAgentResponse> | undefined, b: DestroyAgentResponse | PlainMessage<DestroyAgentResponse> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListGlossaryRequest
 */
export declare class ListGlossaryRequest extends Message<ListGlossaryRequest> {
  /**
   * @generated from field: int32 page_size = 1;
   */
  pageSize: number;

  /**
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  /**
   * @generated from field: string org_id = 3;
   */
  orgId: string;

  constructor(data?: PartialMessage<ListGlossaryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.ListGlossaryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGlossaryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGlossaryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGlossaryRequest;

  static equals(a: ListGlossaryRequest | PlainMessage<ListGlossaryRequest> | undefined, b: ListGlossaryRequest | PlainMessage<ListGlossaryRequest> | undefined): boolean;
}

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListGlossaryResponse
 */
export declare class ListGlossaryResponse extends Message<ListGlossaryResponse> {
  /**
   * The ID of the registered agent.
   *
   * @generated from field: repeated cloud.agent.v1.GlossaryRequest data = 1;
   */
  data: GlossaryRequest[];

  /**
   * Optional error message for error handling
   *
   * @generated from field: string error = 2;
   */
  error: string;

  /**
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  constructor(data?: PartialMessage<ListGlossaryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.ListGlossaryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListGlossaryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListGlossaryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListGlossaryResponse;

  static equals(a: ListGlossaryResponse | PlainMessage<ListGlossaryResponse> | undefined, b: ListGlossaryResponse | PlainMessage<ListGlossaryResponse> | undefined): boolean;
}

/**
 * @generated from message cloud.agent.v1.GlossaryRequest
 */
export declare class GlossaryRequest extends Message<GlossaryRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: string data = 2;
   */
  data: string;

  /**
   * @generated from field: string agent_id = 3;
   */
  agentId: string;

  constructor(data?: PartialMessage<GlossaryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.GlossaryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GlossaryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GlossaryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GlossaryRequest;

  static equals(a: GlossaryRequest | PlainMessage<GlossaryRequest> | undefined, b: GlossaryRequest | PlainMessage<GlossaryRequest> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.CreateGlossaryRequest
 */
export declare class CreateGlossaryRequest extends Message<CreateGlossaryRequest> {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: int64 agentId = 2;
   */
  agentId: bigint;

  /**
   * @generated from field: string data = 3;
   */
  data: string;

  constructor(data?: PartialMessage<CreateGlossaryRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.CreateGlossaryRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGlossaryRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGlossaryRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGlossaryRequest;

  static equals(a: CreateGlossaryRequest | PlainMessage<CreateGlossaryRequest> | undefined, b: CreateGlossaryRequest | PlainMessage<CreateGlossaryRequest> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.QueryAgentRequest
 */
export declare class QueryAgentRequest extends Message<QueryAgentRequest> {
  /**
   * @generated from field: string question = 1;
   */
  question: string;

  /**
   * @generated from field: int64 agentID = 2;
   */
  agentID: bigint;

  constructor(data?: PartialMessage<QueryAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.QueryAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAgentRequest;

  static equals(a: QueryAgentRequest | PlainMessage<QueryAgentRequest> | undefined, b: QueryAgentRequest | PlainMessage<QueryAgentRequest> | undefined): boolean;
}

/**
 * @generated from message cloud.agent.v1.CreateGlossaryResponse
 */
export declare class CreateGlossaryResponse extends Message<CreateGlossaryResponse> {
  /**
   * Optional error message for error handling
   *
   * @generated from field: string error = 2;
   */
  error: string;

  constructor(data?: PartialMessage<CreateGlossaryResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.CreateGlossaryResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateGlossaryResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateGlossaryResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateGlossaryResponse;

  static equals(a: CreateGlossaryResponse | PlainMessage<CreateGlossaryResponse> | undefined, b: CreateGlossaryResponse | PlainMessage<CreateGlossaryResponse> | undefined): boolean;
}

/**
 * @generated from message cloud.agent.v1.Query
 */
export declare class Query extends Message<Query> {
  /**
   * @generated from field: string question = 1;
   */
  question: string;

  /**
   * @generated from field: string query = 2;
   */
  query: string;

  /**
   * Optional error message for error handling
   *
   * @generated from field: string error = 3;
   */
  error: string;

  constructor(data?: PartialMessage<Query>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.Query";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Query;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Query;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Query;

  static equals(a: Query | PlainMessage<Query> | undefined, b: Query | PlainMessage<Query> | undefined): boolean;
}

/**
 * @generated from message cloud.agent.v1.QueryAgentResponse
 */
export declare class QueryAgentResponse extends Message<QueryAgentResponse> {
  /**
   * The ID of the registered agent.
   *
   * @generated from field: repeated cloud.agent.v1.Query data = 1;
   */
  data: Query[];

  /**
   * Optional error message for error handling
   *
   * @generated from field: string error = 2;
   */
  error: string;

  constructor(data?: PartialMessage<QueryAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.QueryAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryAgentResponse;

  static equals(a: QueryAgentResponse | PlainMessage<QueryAgentResponse> | undefined, b: QueryAgentResponse | PlainMessage<QueryAgentResponse> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.AskAgentRequest
 */
export declare class AskAgentRequest extends Message<AskAgentRequest> {
  /**
   * @generated from field: string question = 1;
   */
  question: string;

  /**
   * @generated from field: string host = 2;
   */
  host: string;

  /**
   * @generated from field: string error = 3;
   */
  error: string;

  /**
   * @generated from field: string query = 4;
   */
  query: string;

  /**
   * @generated from field: string schema = 5;
   */
  schema: string;

  constructor(data?: PartialMessage<AskAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.AskAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AskAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AskAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AskAgentRequest;

  static equals(a: AskAgentRequest | PlainMessage<AskAgentRequest> | undefined, b: AskAgentRequest | PlainMessage<AskAgentRequest> | undefined): boolean;
}

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.AskAgentResponse
 */
export declare class AskAgentResponse extends Message<AskAgentResponse> {
  /**
   * The ID of the registered agent.
   *
   * @generated from field: string sql = 1;
   */
  sql: string;

  /**
   * Optional error message for error handling
   *
   * @generated from field: string error = 2;
   */
  error: string;

  constructor(data?: PartialMessage<AskAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.AskAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AskAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AskAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AskAgentResponse;

  static equals(a: AskAgentResponse | PlainMessage<AskAgentResponse> | undefined, b: AskAgentResponse | PlainMessage<AskAgentResponse> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.History
 */
export declare class History extends Message<History> {
  /**
   * @generated from field: string tenant_id = 1;
   */
  tenantId: string;

  /**
   * @generated from field: int64 agent_id = 2;
   */
  agentId: bigint;

  /**
   * @generated from field: string question = 3;
   */
  question: string;

  /**
   * @generated from field: string sql = 4;
   */
  sql: string;

  /**
   * @generated from field: string err = 5;
   */
  err: string;

  /**
   * @generated from field: string feedback = 6;
   */
  feedback: string;

  /**
   * @generated from field: string date = 7;
   */
  date: string;

  /**
   * @generated from field: int64 prompt_tokens = 8;
   */
  promptTokens: bigint;

  /**
   * @generated from field: int64 completion_tokens = 9;
   */
  completionTokens: bigint;

  /**
   * @generated from field: string hostname = 10;
   */
  hostname: string;

  constructor(data?: PartialMessage<History>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.History";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): History;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): History;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): History;

  static equals(a: History | PlainMessage<History> | undefined, b: History | PlainMessage<History> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.HistoryAgentRequest
 */
export declare class HistoryAgentRequest extends Message<HistoryAgentRequest> {
  /**
   * @generated from field: int32 page_size = 1;
   */
  pageSize: number;

  /**
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  constructor(data?: PartialMessage<HistoryAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.HistoryAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryAgentRequest;

  static equals(a: HistoryAgentRequest | PlainMessage<HistoryAgentRequest> | undefined, b: HistoryAgentRequest | PlainMessage<HistoryAgentRequest> | undefined): boolean;
}

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.HistoryAgentResponse
 */
export declare class HistoryAgentResponse extends Message<HistoryAgentResponse> {
  /**
   * The ID of the registered agent.
   *
   * @generated from field: repeated cloud.agent.v1.History data = 1;
   */
  data: History[];

  /**
   * Optional error message for error handling
   *
   * @generated from field: string error = 2;
   */
  error: string;

  /**
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  constructor(data?: PartialMessage<HistoryAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.HistoryAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HistoryAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HistoryAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HistoryAgentResponse;

  static equals(a: HistoryAgentResponse | PlainMessage<HistoryAgentResponse> | undefined, b: HistoryAgentResponse | PlainMessage<HistoryAgentResponse> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListAgentRequest
 */
export declare class ListAgentRequest extends Message<ListAgentRequest> {
  /**
   * @generated from field: int32 page_size = 1;
   */
  pageSize: number;

  /**
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  constructor(data?: PartialMessage<ListAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.ListAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAgentRequest;

  static equals(a: ListAgentRequest | PlainMessage<ListAgentRequest> | undefined, b: ListAgentRequest | PlainMessage<ListAgentRequest> | undefined): boolean;
}

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.ListAgentResponse
 */
export declare class ListAgentResponse extends Message<ListAgentResponse> {
  /**
   * The ID of the registered agent.
   *
   * @generated from field: repeated cloud.agent.v1.AgentRequest data = 1;
   */
  data: AgentRequest[];

  /**
   * Optional error message for error handling
   *
   * @generated from field: string error = 2;
   */
  error: string;

  /**
   * @generated from field: string page_token = 3;
   */
  pageToken: string;

  constructor(data?: PartialMessage<ListAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.ListAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ListAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ListAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ListAgentResponse;

  static equals(a: ListAgentResponse | PlainMessage<ListAgentResponse> | undefined, b: ListAgentResponse | PlainMessage<ListAgentResponse> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.AgentRequest
 */
export declare class AgentRequest extends Message<AgentRequest> {
  /**
   * The name of the agent.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The host of the database.
   *
   * @generated from field: string host = 2;
   */
  host: string;

  /**
   * The database name.
   *
   * @generated from field: string database = 3;
   */
  database: string;

  /**
   * The username.
   *
   * @generated from field: string username = 4;
   */
  username: string;

  /**
   * The type of the database.
   *
   * @generated from field: string type = 5;
   */
  type: string;

  /**
   * The tables the agent will work with.
   *
   * @generated from field: repeated string tables = 6;
   */
  tables: string[];

  /**
   * The schema of the agent's data.
   *
   * @generated from field: string schema = 7;
   */
  schema: string;

  /**
   * @generated from field: int64 count = 8;
   */
  count: bigint;

  /**
   * @generated from field: string url = 9;
   */
  url: string;

  /**
   * @generated from field: int64 id = 10;
   */
  id: bigint;

  /**
   * @generated from field: int64 heartbeat = 11;
   */
  heartbeat: bigint;

  /**
   * @generated from field: string token = 12;
   */
  token: string;

  /**
   * @generated from field: string api_key = 13;
   */
  apiKey: string;

  /**
   * @generated from field: int64 port = 14;
   */
  port: bigint;

  /**
   * @generated from field: bool deploy = 15;
   */
  deploy: boolean;

  /**
   * @generated from field: string ssl = 17;
   */
  ssl: string;

  /**
   * @generated from field: string docs = 16;
   */
  docs: string;

  /**
   * @generated from field: string region = 18;
   */
  region: string;

  constructor(data?: PartialMessage<AgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.AgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AgentRequest;

  static equals(a: AgentRequest | PlainMessage<AgentRequest> | undefined, b: AgentRequest | PlainMessage<AgentRequest> | undefined): boolean;
}

/**
 * Request message for registering an agent.
 *
 * @generated from message cloud.agent.v1.RegisterAgentRequest
 */
export declare class RegisterAgentRequest extends Message<RegisterAgentRequest> {
  /**
   * The name of the agent.
   *
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * The host of the database.
   *
   * @generated from field: string host = 2;
   */
  host: string;

  /**
   * The database name.
   *
   * @generated from field: string database = 3;
   */
  database: string;

  /**
   * The username.
   *
   * @generated from field: string username = 4;
   */
  username: string;

  /**
   * The type of the database.
   *
   * @generated from field: string type = 5;
   */
  type: string;

  /**
   * The tables the agent will work with.
   *
   * @generated from field: repeated string tables = 6;
   */
  tables: string[];

  /**
   * The schema of the agent's data.
   *
   * @generated from field: bytes schema = 7;
   */
  schema: Uint8Array;

  /**
   * @generated from field: string target = 8;
   */
  target: string;

  /**
   * @generated from field: string description = 9;
   */
  description: string;

  /**
   * @generated from field: bytes schemaFile = 10;
   */
  schemaFile: Uint8Array;

  /**
   * @generated from field: string port = 11;
   */
  port: string;

  /**
   * @generated from field: string ssl = 12;
   */
  ssl: string;

  /**
   * @generated from field: string region = 14;
   */
  region: string;

  constructor(data?: PartialMessage<RegisterAgentRequest>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.RegisterAgentRequest";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterAgentRequest;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterAgentRequest;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterAgentRequest;

  static equals(a: RegisterAgentRequest | PlainMessage<RegisterAgentRequest> | undefined, b: RegisterAgentRequest | PlainMessage<RegisterAgentRequest> | undefined): boolean;
}

/**
 * Response message for registering an agent.
 *
 * @generated from message cloud.agent.v1.RegisterAgentResponse
 */
export declare class RegisterAgentResponse extends Message<RegisterAgentResponse> {
  /**
   * The ID of the registered agent.
   *
   * @generated from field: int32 agent_id = 1;
   */
  agentId: number;

  /**
   * Token for register agent
   *
   * @generated from field: string token = 2;
   */
  token: string;

  /**
   * @generated from field: string url = 3;
   */
  url: string;

  /**
   * @generated from field: string key = 4;
   */
  key: string;

  /**
   * Optional error message for error handling
   *
   * @generated from field: string error = 5;
   */
  error: string;

  constructor(data?: PartialMessage<RegisterAgentResponse>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "cloud.agent.v1.RegisterAgentResponse";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterAgentResponse;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterAgentResponse;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterAgentResponse;

  static equals(a: RegisterAgentResponse | PlainMessage<RegisterAgentResponse> | undefined, b: RegisterAgentResponse | PlainMessage<RegisterAgentResponse> | undefined): boolean;
}

