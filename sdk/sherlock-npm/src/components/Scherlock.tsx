import React, {useState, useEffect} from "react";
import toast from 'react-hot-toast';
import {isEmpty} from "lodash";
import {themes, MultipleTabs} from "./constants";
import {ThemeProvider} from "styled-components";
import {Wrapper, GlobalStyle, Sizebox} from "./styles";
import Dropdown from "../common/RecomendedInput/index";
import {ButtonFilled} from "../common/Button/index";
import MultipleTabComponent from "../common/MultipleTabView/index";
import ReactDataGrid from "react-data-grid";
import "react-data-grid/lib/styles.css";
import {exportToCsv, exportToPdf} from "./exportUtils";
import dummyData from "../common/Data/data.json";
import metaInformation from "../common/Data/meta.json";
import apiCloud from "../service/apiServiceCloud";
import apiClient from "../service/apiServiceClient";
import groovyWalkAnimation from "./animation.json";
import Lottie from "react-lottie";
import CodeMirror from "@uiw/react-codemirror";
import {bbedit} from "@uiw/codemirror-theme-bbedit";
import {sql} from "@codemirror/lang-sql";
import {ExclamationTriangleIcon} from "@radix-ui/react-icons";

const agentConstant = {
    id: "0",
    url: "http://127.0.0.1:8080",
    name: "localhost",
    description: "",
    heartbeat: 0,
    type: "",
    host: "",
    schema: "[]",
    username: "",
    tables: [],
    prompt: "",
    database: "",
    token: "",
    apiKey: "",
    region: "ap-south-1",
};

interface ScherlockProps {
    agentID : string;
    region: string;
    apiKey : string;
}

const Scherlock : React.FC < ScherlockProps > = ({agentID, region, apiKey}) => {
    const [theme] = useState(themes.light);
    console.log(region, "====>")
    console.log(apiKey, "====>")
    console.log(agentID, "====>")
    const [selectedQuestion,
        setSelectedQuestion] = useState < any > ({});
    const [queryResult,
        setQueryResult] = useState < any > (null);
    const [agentHealth,
        setAgentHealth] = useState < boolean > (false);
    const [healthStatus,
        setHealthStatus] = useState < string > ("");
  
    const [animation,
        setAnimation] = useState < boolean > (false);
    const [searchQuestion,
        setSearchQuestion] = useState < any > ([]);
    const [agent,
        setAgent] = useState < any > ({});
    const [selectedTab,
        setSelectedTab] = useState < any > ({});
    const [showQueryEditor,
        setShowQueryEditor] = useState(false);

    var query = window
        .location
        .search
        .substring(1);

    let params = query.split("&");
    if (params.length == 2) {
        let url = params[0].split("=");
        let agentId = params[1].split("=");
        if (url[0] == "session" && agentId[0] == "agentID") {
            localStorage.setItem("textquery-session-" + agentId[1], url[1]);
        }
    }

    const [data,
        setData] = useState < {
        columns: any[];
        rows: any[];
    } > ({columns: [], rows: []});

    useEffect(() => {
        if (agentID != "0") {
            apiCloud.search({
                question: selectedQuestion.question,
                agentID: agentID
            }, apiKey, region).then((res : any) => {
                setSearchQuestion(res.data);
            });
        }

        if (!isEmpty(selectedQuestion.query)) {
            setQueryResult({rows: [], columns: []});
            executeQuery();
        }
        setShowQueryEditor(!isEmpty(selectedQuestion.query));
    }, [selectedQuestion]);

    useEffect(() => {
        setData(dummyData);
        let token = localStorage.getItem("textquery-session-" + agentID);
        if (agentID != "0") {
            const prom = toast.promise(apiCloud.getAgentList({}, apiKey, region), {
              success: `Agent list retrieved successfully.`,
              error: `Failed to retrieve agent list.`,
              loading: `Retrieving agent list...`,
            },);

            prom.then((res : any) => {
                res
                    .data
                    .push(agentConstant);
                for (let [key,
                    obj]of res.data.entries()) {
                    if (parseInt(obj.id) == parseInt(agentID)) {
                        setAgent(obj);
                        apiClient.heartbeatClient({}, obj.url, token as string).then((res : any) => {
                         
                            setHealthStatus("Agent is healthy, URL: " + obj.url);
                            setAgentHealth(true);
                        }).catch((err : any) => {
                           
                            setAgentHealth(false);
                            setHealthStatus("Agent is not healthy, URL: " + obj.url);
                            if (err.message.includes("[unauthenticated]")) {
                                setHealthStatus("You are not authenticated");
                                window.location.href = obj.url + "/login?next=" + window.location.href + "&agentID=" + obj.id;
                                return;
                            }
                        });
                        break;
                    }
                }
            })

        } else {
            setAgent(agentConstant);
            apiClient.heartbeatClient({}, agentConstant.url, token as string).then((res : any) => {
                
                setHealthStatus("Agent is healthy, URL: " + agentConstant.url);
                setAgentHealth(true);
            }).catch((err : any) => {
                setHealthStatus("Agent is not healthy, URL: " + agentConstant.url);
                setAgentHealth(false);
                if (err.message
                    ?.includes("[unauthenticated]")) {
                    setHealthStatus("You are not authenticated");
                    setAgentHealth(false);
                    window.location.href = agentConstant.url + "/login?next=" + window.location.href + "&agentID=" + agentID;
                    return;
                }
                console.error("Errors:", err);
            });
        }
    }, [agentID, apiKey]);

    const executeQuery = () => {
        setQueryResult({rows: [], columns: []});
        setSelectedTab({label: "Data", value: "data"});
        if (agentHealth) {
            let token = localStorage.getItem("textquery-session-" + agentID);
            setAnimation(true);

            const prom = toast.promise(apiClient.askClient(selectedQuestion, agent.url, token as string), {
              success: `Data loaded successfully.`,
              error: `Failed to load data. An unexpected error occurred while fetching.`,
              loading: `Fetching data...`,
            },);

            prom.then((res : any) => {
                if (res.error.length == 0) {
                    let cols = [];
                    let rows = JSON.parse(res.data);
                    for (const key in rows[0]) {
                        cols.push({key: key, name: key});
                    }
                    setAnimation(false);
                    setQueryResult({rows: rows, columns: cols});
                    setSelectedTab({label: "Data", value: "data"});
                } else {
                    setAnimation(false);
                    toast.error("Failed to load data: " + res.error);
                }
            })

        }
    };

    const onAskButtonClick = (e : any) => {
        setAnimation(true);

        setSelectedQuestion({question: selectedQuestion.question, query: ""});
        setQueryResult({rows: [], columns: []});

        if (!isEmpty(selectedQuestion.query) || !isEmpty(selectedQuestion.question)) {
          
            if (agentID == "0") {
              console.log("HELLO", agentID)
                const prom = toast.promise(apiClient.askClient({
                    question: selectedQuestion.question
                }, agent.url, apiKey), {
                  success: `Received query successfully.`,
                  error: `Failed to load data. An unexpected error occurred while fetching. `,
                  loading: `Loading query...`,
                },);

                prom.then((res : any) => {
                    if (res.error.length == 0) {
                        setSelectedQuestion({question: selectedQuestion.question, query: res.sql});
                        setAnimation(false);
                        executeQuery();
                    } else {
                      toast.error("Failed to load query: " + res.error);
                    }
                })
            } else {
              console.log("HELLO", agentID)
                const prom = toast.promise(apiCloud.askQuestion({
                    question: selectedQuestion.question,
                    host: agent.host
                }, apiKey, region), {
                    success: ``,
                    error: `Failed to load query: `,
                    loading: `Loading data...`
                },);

                prom.then((res : any) => {
                    if (res.error.length == 0) {
                        setSelectedQuestion({question: selectedQuestion.question, query: res.sql});
                        setAnimation(false);
                        executeQuery();
                    } else {
                        toast.error("Failed to load query: " + res.error)
                    }
                })
            }
        } else {
            setAnimation(false);
            setQueryResult(null);
        }
    };

    const handleExport = async(format : string) => {
        if (!isEmpty(queryResult) && !isEmpty(queryResult.rows)) {
            const fileName = `exported_data.${format}`;
            switch (format) {
                case "csv":
                    await exportToCsv(
                        <ReactDataGrid columns={queryResult.columns} rows={queryResult.rows}/>, fileName,);
                    break;
                case "pdf":
                    await exportToPdf(
                        <ReactDataGrid columns={queryResult.columns} rows={queryResult.rows}/>, fileName,);
                    break;
                default:
                    break;
            }
        }
    };

    function onTabClick(selected : any) {
        setSelectedTab(selected);
    }

    if (!theme) 
        return null;
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <div
                style={{
                backgroundColor: agentHealth
                    ? "rgba(0, 255, 0, 0.2)"
                    : "rgba(245, 0, 0, 0.2)",
                color: agentHealth
                    ? "rgba(0, 96, 0, 0.91)"
                    : "rgba(245, 0, 0, 0.92)",
                borderRadius: "4px",
                padding: "10px 20px",
                fontSize: "14px",
                marginBottom: "15px",
                display: "inline-block",
                marginRight: "10px"
            }}>
                {healthStatus}
            </div>
            <Wrapper>
                <Sizebox height="20px"/>

                <Dropdown
                    label="Ask Question"
                    options={searchQuestion}
                    onChange={(selected : any) => {
                    if (selected.question != selectedQuestion.question) {
                        setSelectedQuestion(selected);
                    }
                }}
                    value={selectedQuestion.question}/>
                <div className="buttonContainer">
                    <ButtonFilled
                        label="Ask"
                        onClick={onAskButtonClick}
                        backgroundColor="#6061ef"
                        textColor="white"/>
                </div>
                <Sizebox height="20px"/>
                <div>
                    <div
                        style={{
                        display: showQueryEditor
                            ? "block"
                            : "none",
                        borderRadius: "7px",
                        border: "1px solid black",
                        overflow: "hidden"
                    }}>
                        <CodeMirror
                            value={showQueryEditor
                            ? String(selectedQuestion
                                ?.query)
                            : ""}
                            extensions={[sql()]}
                            height="200px"
                            theme={bbedit}/>
                    </div>

                    <div className="buttonContainer">
                        {agentHealth && showQueryEditor && (<ButtonFilled
                            label="Run"
                            onClick={executeQuery}
                            backgroundColor="#6061ef"
                            textColor="white"/>)}
                    </div>
                    <Sizebox height="20px"/>
                    
                    <Sizebox height="20px"/>
                    <div
                        className="animation-container"
                        style={{
                        display: animation
                            ? "block"
                            : "none",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Lottie options={{
                            loop: true,
                            autoplay: true,
                            animationData: groovyWalkAnimation
                        }} width={500} // Increase the width to 400
                            height={360} // Increase the height to 500
                        />
                        <p
                            style={{
                            textAlign: "center",
                            fontSize: "16px",
                            fontWeight: "bold"
                        }}>
                            Generating SQL Query
                        </p>
                    </div>
                    <MultipleTabComponent
                        options={MultipleTabs}
                        onClick={onTabClick}
                        selected={selectedTab}
                        queryResult={queryResult}
                        metaInformation={metaInformation.meta_information}
                        handleExport={handleExport}/>
                </div>
            </Wrapper>
        </ThemeProvider>
    );
};

export default Scherlock;
