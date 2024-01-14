// apiService.js
import AgentService from "../cloud/agent/v1/agent_connect";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

const API_BASE_URL = "https://api.ap-south-1.datasherlock.io"; // Replace with your API base URL
const HEADERS = {"Authorization": "bearer KEYS"}

const agentClient = createPromiseClient(
    AgentService,
    createConnectTransport({
        baseUrl: API_BASE_URL,
    })
);


const api = {
  getAgentList: (body) =>  agentClient.list(body, {headers: HEADERS}),
};

export default api;
