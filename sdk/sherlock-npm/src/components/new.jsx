import React, { useState, useEffect } from "react";
import { isEmpty } from "lodash";

import { themes, MultipleTabs } from "./constants";

// import { ChartComponent } from "../common/Chart/Chart.tsx";

import { ThemeProvider } from "styled-components";
import { Wrapper, GlobalStyle, Sizebox } from "./styles.js";
import Input from "../common/RecomendedInput/index.tsx";
import { ButtonFilled } from "../common/Button/index.tsx";
// import { ChartComponent } from "../common/Chart/Chart.tsx";

import MultipleTabComponent from "../common/MultipleTabView/index.tsx";
import TableView from "../common/MultipleTabView/index.tsx";

import CodeEditor from "@uiw/react-textarea-code-editor";

const search_data = [
  {
    question:
      "Are there any employees who are significantly  overpaid relative to their peers?",
    err: false,
    query:
      "SELECT e.emp_no, e.first_name, e.last_name, s.salary FROM employees e\nJOIN salaries s ON e.emp_no = s.emp_no\nWHERE s.salary > (SELECT AVG(salary) + 2 * STDDEV(salary) FROM salaries) OR \ns.salary < (SELECT AVG(salary) - 2 * STDDEV(salary) FROM salaries)\nLIMIT 100",
  },
  {
    question:
      "Are there any employees who are significantly underpaidrelative to their peers?",
    err: false,
    query:
      "SELECT e.emp_no, e.first_name, e.last_name, s.salary FROM employees e\nJOIN salaries s ON e.emp_no = s.emp_no\nWHERE s.salary > (SELECT AVG(salary) + 2 * STDDEV(salary) FROM salaries) OR \ns.salary < (SELECT AVG(salary) - 2 * STDDEV(salary) FROM salaries)\nLIMIT 100",
  },
];

const set_data = {
  data: [
    {
      emp_no: "10304",
      first_name: "Bernt",
      last_name: "Erie",
      salary: "110731",
    },
    {
      emp_no: "10304",
      first_name: "Bernt",
      last_name: "Erie",
      salary: "113812",
    },
    {
      emp_no: "10304",
      first_name: "Bernt",
      last_name: "Erie",
      salary: "117270",
    },
  ],
  sql: "", // Use the selected question's query
  meta_information: {
    database: "employees",
    host: "aws.connect.psdb.cloud",
    type: "mysql",
    username: "gfl9dlnqoyx1bb6849k6",
  },
};

const Scherlock = ({ agentUrl, apiKey }) => {
  const [theme, setTheme] = useState(themes.light);
  const [selectedTab, setSelectedTab] = useState({});

  const [QueryEditorVisible, setQueryEditorVisible] = useState(false);
  const [AgentHealth, setAgentHealth] = useState(false);
  const [Question, setQuestion] = useState({ sql: "", question: "", err: "" });

  // Search Feature
  const onSearchResultSelect = (question) => {};

  // Ask Question
  const onAskButtonClick = () => {
    setQueryEditorVisible(true);
    setQuestion({
      sql: Question.sql,
      question: Question.question,
      err: Question.err,
    });
    setAgentHealth(true);
  };

  const onQuestionChange = (question) => {};

  const onButtonClick = () => {
    if (!isEmpty(selectedQuestion)) {
      setShowQueryEditor(true);
      setQueryResult({ query: selectedQuestion.query });
    } else {
      setShowQueryEditor(true);
      setQueryResult(null);
    }
  };

  const executeQuery = () => {
    const setData = {
      data: [
        {
          emp_no: "10304",
          first_name: "Bernt",
          last_name: "Erie",
          salary: "110731",
        },
        {
          emp_no: "10304",
          first_name: "Bernt",
          last_name: "Erie",
          salary: "113812",
        },
        {
          emp_no: "10304",
          first_name: "Bernt",
          last_name: "Erie",
          salary: "117270",
        },
      ],
      sql: "",
      meta_information: {
        database: "employees",
        host: "aws.connect.psdb.cloud",
        type: "mysql",
        username: "gfl9dlnqoyx1bb6849k6",
      },
    };
    setQueryResult(setData);
    setTableHeader(Object.keys(setData?.data?.[0]));

    setSelectedTab({
      label: "Table",
      value: "table",
    });
  };

  function onTabClick(selected) {
    setSelectedTab(selected);
  }

  if (!theme) return null;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Sizebox height="20px" />
        <Input
          label="Ask Question"
          onchange={onQuestionChange}
          value={Question}
        />
        <div className="buttonContainer">
          <ButtonFilled label="Ask" onClick={onAskButtonClick} />
        </div>
        <Sizebox height="20px" />
        <CodeEditor
          value={QueryEditorVisible && Question?.sql}
          language="sql"
          placeholder="Loading"
          show={QueryEditorVisible}
          padding={15}
          style={{
            fontSize: 12,
            backgroundColor: "#f5f5f5",
            fontFamily:
              "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
          }}
        />
        <div show={AgentHealth} className="buttonContainer">
          <ButtonFilled label="Run" onClick={onButtonClick} />
        </div>
        <Sizebox height="20px" />
        {!isEmpty(selectedTab) && (
          <MultipleTabComponent
            options={MultipleTabs}
            onClick={onTabClick}
            selected={selectedTab}
          />
        )}
        <TableView
          show={selectedTab?.value === "table"}
          headers={Object.keys(set_data?.data?.[0])}
          data={set_data?.data}
        />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Scherlock;
