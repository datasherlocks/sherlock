import React, { useState, useEffect } from "react";
import {isEmpty} from 'lodash'

import { themes, MultipleTabs } from "./constants";

import { ThemeProvider } from "styled-components";
import { Wrapper, GlobalStyle, Sizebox } from "./styles";
import Input from "../common/RecomendedInput/index.tsx";
import { ButtonFilled } from "../common/Button/index.tsx";
// import { ChartComponent } from "../common/Chart/Chart.tsx";
import MultipleTabComponent from "../common/MultipleTabView/index.tsx";
import TableView from '../common/Table/index.tsx'
import CodeEditor from '@uiw/react-textarea-code-editor';

const Scherlock = ({ agentUrl, apiKey }) => {
  const [theme, setTheme] = useState(themes.light);
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [dataSet, setDataSet] = useState({});
  const [tabelHeader, setTableHeader] = useState([]);
  const [selectedTab, setSelectedTab] = useState({});
  const onButtonClick = () => {
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
      sql: "SELECT e.emp_no, e.first_name, e.last_name, s.salary \nFROM employees e\nJOIN salaries s ON e.emp_no = s.emp_no\nWHERE s.salary > (SELECT AVG(salary) + 2 * STDDEV(salary) FROM salaries) OR \ns.salary < (SELECT AVG(salary) - 2 * STDDEV(salary) FROM salaries)\nLIMIT 100",
      meta_information: {
        database: "employees",
        host: "aws.connect.psdb.cloud",
        type: "mysql",
        username: "gfl9dlnqoyx1bb6849k6",
      },
    };
    setDataSet(setData);
    setSelectedTab({
      label: "Tabel",
      value: "tabel",
    });
    setTableHeader(Object.keys(setData?.data?.[0]));
  };

  function onTabClick(selected) {
    setSelectedTab(selected);
  }

  if (!theme) return null;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Sizebox height={"20px"} />
        <Input
          label="Ask Question"
          options={[
            {
              question:
                "Are there any employees who are significantly underpaid or overpaid relative to their peers?",
              query:
                "SELECT e.emp_no, e.first_name, e.last_name, s.salary FROM employees e\nJOIN salaries s ON e.emp_no = s.emp_no\nWHERE s.salary > (SELECT AVG(salary) + 2 * STDDEV(salary) FROM salaries) OR \ns.salary < (SELECT AVG(salary) - 2 * STDDEV(salary) FROM salaries)\nLIMIT 100",
            },
            {
              question:
                "Are there any employees who are significantly underpaid or overpaid relative to their peers?",
              query:
                "SELECT e.emp_no, e.first_name, e.last_name, s.salary FROM employees e\nJOIN salaries s ON e.emp_no = s.emp_no\nWHERE s.salary > (SELECT AVG(salary) + 2 * STDDEV(salary) FROM salaries) OR \ns.salary < (SELECT AVG(salary) - 2 * STDDEV(salary) FROM salaries)\nLIMIT 100",
            },
          ]}
          onChange={(selected) => {
            setSelectedQuestion(selected);
          }}
          value={selectedQuestion}
        />
        <div className="buttonContainer">
          <ButtonFilled label="Ask" onClick={onButtonClick} />
        </div>
        <Sizebox height={"20px"} />
        <CodeEditor
      value={dataSet?.sql}
      language="sql"
      placeholder="Please enter JS code."
      padding={15}
    
      style={{
        fontSize: 12,
        backgroundColor: "#f5f5f5",
        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
      }}
    />
    <div className="buttonContainer">
          <ButtonFilled label="Run"  />
        </div>
        <Sizebox height={"20px"} />
        {!isEmpty(selectedTab) && <MultipleTabComponent
          options={MultipleTabs}
          onClick={onTabClick}
          selected={selectedTab}
        /> }

        <TableView show = {selectedTab?.value === 'tabel'} headers = {tabelHeader} data = {dataSet?.data} />
        {/* <ChartComponent show = {selectedTab?.value === 'chart'} dataset = {[]} /> */}
        
      </Wrapper>
    </ThemeProvider>
  );
};

export default Scherlock;
