import {AgentService } from "../client/agent/v1/agent_connect";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

function auth(url) {
  return createPromiseClient(
    AgentService,
    createConnectTransport({
        baseUrl: url,
    })
  );
}

const apiClient = {
  heartbeatClient: (body, url) => auth(url).heartbeat(body, {headers: {"Token": "", "Access-Control-Allow-Origin": "true"}}),
  askClient: (body, url) => auth(url).ask(body, {headers: {"Token": "","Access-Control-Allow-Origin": "true"}}),
};

export default apiClient;

