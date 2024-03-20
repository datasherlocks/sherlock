import { AgentService, SearchService } from "../cloud/agent/v1/agent_connect";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-web";

const API_BASE_URL: string = "datasherlock.io"; // Replace with your API base URL

const agentCloud = (region: string) => {
    
return createPromiseClient(
    AgentService,
    createConnectTransport({
        baseUrl: "https://api." + region + "." + API_BASE_URL,
    })
);
}

const agentCloudSearch = (region: string) => {
    return createPromiseClient(
        SearchService,
        createConnectTransport({
            baseUrl: "https://api." + region + "." + API_BASE_URL,
        })
    );
}

interface ApiCloud {
    getAgentList:  (body: any, token: string, region: string) => Promise<any>;
    askQuestion:  (body: any, token: string, region: string) => Promise<any>;
    search:  (body: any, token: string, region: string) => Promise<any>;
}

const apiCloud: ApiCloud = {
    getAgentList: async (body: any, token: string, region: string) => await agentCloud(region).list(body, { headers: { "Authorization": "bearer " + token, "Access-Control-Allow-Origin": "true" } }),
    askQuestion: async (body: any, token: string, region: string) => await agentCloud(region).ask(body, { headers: { "Authorization": "bearer " + token, "Access-Control-Allow-Origin": "true" } }),
    search: async (body: any, token: string, region: string) => await agentCloudSearch(region).query(body, { headers: { "Authorization": "bearer " + token, "Access-Control-Allow-Origin": "true" } }),
};


export default apiCloud;
