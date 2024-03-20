import { AgentService } from "../client/agent/v1/agent_connect";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

interface AuthClient {
  heartbeat: (body: any, options: { headers: Record<string, string> }) => Promise<any>;
  ask: (body: any, options: { headers: Record<string, string> }) => Promise<any>;
}

function auth(url: string): AuthClient {
  return createPromiseClient(
    AgentService,
    createConnectTransport({
      baseUrl: url,
    })
  );
}

const apiClient = {
  heartbeatClient: async (body: any, url: string, token: string) => await auth(url).heartbeat(body, { headers: { "Token": token, "Access-Control-Allow-Origin": "true" } }),
  askClient: async (body: any, url: string, token: string) => await auth(url).ask(body, { headers: { "Token": token, "Access-Control-Allow-Origin": "true" } }),
};

export default apiClient;
