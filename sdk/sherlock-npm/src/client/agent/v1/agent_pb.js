// @generated by protoc-gen-es v1.7.2
// @generated from file client/agent/v1/agent.proto (package client.agent.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message client.agent.v1.HeartbeatRequest
 */
export const HeartbeatRequest = proto3.makeMessageType(
  "client.agent.v1.HeartbeatRequest",
  [],
);

/**
 * @generated from message client.agent.v1.HeartbeatResponse
 */
export const HeartbeatResponse = proto3.makeMessageType(
  "client.agent.v1.HeartbeatResponse",
  () => [
    { no: 1, name: "meta", kind: "message", T: MetaInfo },
  ],
);

/**
 * Request message for registering an agent.
 *
 * @generated from message client.agent.v1.AskAgentRequest
 */
export const AskAgentRequest = proto3.makeMessageType(
  "client.agent.v1.AskAgentRequest",
  () => [
    { no: 1, name: "question", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "query", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Response message for registering an agent.
 *
 * @generated from message client.agent.v1.AskAgentResponse
 */
export const AskAgentResponse = proto3.makeMessageType(
  "client.agent.v1.AskAgentResponse",
  () => [
    { no: 1, name: "sql", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "meta", kind: "message", T: MetaInfo },
    { no: 4, name: "data", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message client.agent.v1.MetaInfo
 */
export const MetaInfo = proto3.makeMessageType(
  "client.agent.v1.MetaInfo",
  () => [
    { no: 1, name: "database", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "username", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "host", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "schema", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "tables", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

