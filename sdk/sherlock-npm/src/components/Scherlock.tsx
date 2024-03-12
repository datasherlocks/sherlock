import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";
import { themes, MultipleTabs } from "./constants";
import { ThemeProvider } from "styled-components";
import { Wrapper, GlobalStyle, Sizebox } from "./styles";
import Dropdown from "../common/RecomendedInput/index";
import { ButtonFilled } from "../common/Button/index";
import MultipleTabComponent from "../common/MultipleTabView/index";
import CodeEditor from "@uiw/react-textarea-code-editor";
import ReactDataGrid from "react-data-grid";
import "react-data-grid/lib/styles.css";
import { exportToCsv, exportToPdf } from "./exportUtils";
import dummyData from "../common/Data/data.json";
import metaInformation from "../common/Data/meta.json";
import apiCloud from "../service/apiServiceCloud";
import apiClient from "../service/apiServiceClient";
import groovyWalkAnimation from "./animation.json";
import Lottie from "react-lottie";
import CodeMirror from "@uiw/react-codemirror";
import { bbedit } from "@uiw/codemirror-theme-bbedit";
import { sql } from "@codemirror/lang-sql";

interface ScherlockProps {
  agentID: number;
  apiKey: string;
}

const Scherlock: React.FC<ScherlockProps> = ({ agentID, apiKey }) => {
  const [theme] = useState(themes.light);
  const [selectedQuestion, setSelectedQuestion] = useState<any>({});
  const [queryResult, setQueryResult] = useState<any>(null);
  const [agentHealth, setAgentHealth] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [animation, setAnimation] = useState<boolean>(false);
  const [searchQuestion, setSearchQuestion] = useState<any>([]);
  const [agent, setAgent] = useState<any>({});
  const [selectedTab, setSelectedTab] = useState<any>({});
  const [showQueryEditor, setShowQueryEditor] = useState(false);

  const [data, setData] = useState<{
    columns: any[];
    rows: any[];
  }>({ columns: [], rows: [] });

  useEffect(() => {
    apiCloud
      .search({ question: selectedQuestion.question, agentID: agentID }, apiKey)
      .then((res: any) => {
        setSearchQuestion(res.data);
      });
    if (!isEmpty(selectedQuestion.query)) {
      setQueryResult({ rows: [], columns: [] });
      executeQuery();
    }
    setShowQueryEditor(!isEmpty(selectedQuestion.query));
  }, [selectedQuestion]);

  useEffect(() => {
    setData(dummyData);
    apiCloud.getAgentList({}, apiKey).then((res: any) => {
      for (let [key, obj] of res.data.entries()) {
        if (obj.id == agentID) {
          setAgent(obj);
          apiClient
            .heartbeatClient({}, obj.url)
            .then((res: any) => {
              setIsError(false);
              setErrorMessage("Agent is healthy, URL: " + agent.url);
              setAgentHealth(true);
            })
            .catch((err: any) => {
              console.log(err);
              setErrorMessage("Agent is not healthy, URL: " + agent.url);
              setIsError(true);
              setAgentHealth(false);
            });
          break;
        }
      }
    });
  }, [agentID, apiKey]);

  const executeQuery = () => {
    if (agentHealth) {
      setAnimation(true);
      apiClient
        .askClient(selectedQuestion, agent.url)
        .then((res: any) => {
          let cols = [];
          let rows = JSON.parse(res.data);
          for (const key in rows[0]) {
            cols.push({ key: key, name: key });
          }
          setAnimation(false);
          setQueryResult({ rows: rows, columns: cols });
          setSelectedTab({ label: "Data", value: "data" });
        })
        .catch((err: any) => {
          console.log(err);
          setIsError(true);
          setAnimation(false);
          setErrorMessage("Failed to load data: " + err);
          setQueryResult({ rows: [], columns: [] });
          setSelectedTab({ label: "Data", value: "data" });
        });
    }
  };

  const onAskButtonClick = (e: any) => {
    setAnimation(true);
    setQueryResult({ rows: [], columns: [] });

    if (
      isEmpty(selectedQuestion.query) &&
      !isEmpty(selectedQuestion.question)
    ) {
      apiCloud
        .askQuestion(
          {
            question: selectedQuestion.question,
            host: agent.host,
          },
          apiKey,
        )
        .then((res: any) => {
          setSelectedQuestion({
            question: selectedQuestion.question,
            query: res.sql,
          });
          setAnimation(false);
          executeQuery();
        });
    } else {
      setAnimation(false);
      setQueryResult(null);
    }
  };

  const handleExport = async (format: string) => {
    if (!isEmpty(queryResult) && !isEmpty(queryResult.rows)) {
      const fileName = `exported_data.${format}`;
      switch (format) {
        case "csv":
          await exportToCsv(
            <ReactDataGrid
              columns={queryResult.columns}
              rows={queryResult.rows}
            />,
            fileName,
          );
          break;
        case "pdf":
          await exportToPdf(
            <ReactDataGrid
              columns={queryResult.columns}
              rows={queryResult.rows}
            />,
            fileName,
          );
          break;
        default:
          break;
      }
    }
  };

  function onTabClick(selected: any) {
    setSelectedTab(selected);
  }

  if (!theme) return null;

  return (
    <ThemeProvider theme={theme}>
      {" "}
      <GlobalStyle />{" "}
      <Wrapper>
        {" "}
        <Sizebox height="20px" />{" "}
        <Dropdown
          label="Ask Question"
          options={searchQuestion}
          onChange={(selected: any) => {
            if (selected.question != selectedQuestion.question) {
              setSelectedQuestion(selected);
            }
          }}
          value={selectedQuestion.question}
        />{" "}
        <div className="buttonContainer">
          {" "}
          <ButtonFilled label="Ask" onClick={onAskButtonClick} />
        </div>
        <Sizebox height="20px" />{" "}
        <div>
          <div
            style={{
              display: showQueryEditor ? "block" : "none",
              borderRadius: "7px",
              border: "1px solid black",
              overflow: "hidden",
            }}
          >
            <CodeMirror
              value={showQueryEditor ? String(selectedQuestion?.query) : ""}
              extensions={[sql()]}
              height="200px"
              theme={bbedit}
            />
          </div>
          <div className="buttonContainer">
            {" "}
            {agentHealth && showQueryEditor && (
              <ButtonFilled label="Run" onClick={executeQuery} />
            )}
          </div>
          <Sizebox height="20px" />{" "}
          <div
            className="animation-container"
            style={{
              display: animation ? "block" : "none",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: groovyWalkAnimation,
              }}
              width={500} // Increase the width to 400
              height={500} // Increase the height to 500
            />
            <p
              style={{
                textAlign: "center",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Generating SQL Query
            </p>
          </div>
          <MultipleTabComponent
            options={MultipleTabs}
            onClick={onTabClick}
            selected={selectedTab}
            queryResult={queryResult}
            metaInformation={metaInformation.meta_information}
            handleExport={handleExport}
          />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Scherlock;
