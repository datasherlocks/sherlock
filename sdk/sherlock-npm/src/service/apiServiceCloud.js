// apiService.js
import {AgentService, SearchService} from "../cloud/agent/v1/agent_connect";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

const API_BASE_URL = "https://api.ap-south-1.datasherlock.io"; // Replace with your API base URL
const HEADERS = {"Authorization": "bearer muzXfbeVKt4YeZlOtM/qTC", "Access-Control-Allow-Origin": "true"}

const agentCloud = createPromiseClient(
    AgentService,
    createConnectTransport({
        baseUrl: API_BASE_URL,
    })
);


const agentCloudSearch = createPromiseClient(
  SearchService,
  createConnectTransport({
      baseUrl: API_BASE_URL,
  })
);

const apiCloud = {
  getAgentList: (body, token) =>  agentCloud.list(body, {headers: {"Authorization": "bearer "+token, "Access-Control-Allow-Origin": "true"}}),
  askQuestion: (body, token) =>  agentCloud.ask(body, {headers: {"Authorization": "bearer "+token, "Access-Control-Allow-Origin": "true"}}),
  search: (body, token) =>  agentCloudSearch.query(body, {headers: {"Authorization": "bearer "+token, "Access-Control-Allow-Origin": "true"}}),
};

export default apiCloud;

