import React from "react";
import { multipleTabProp } from "../../interface/common/multipleTab";
import * as Tabs from "@radix-ui/react-tabs";
import { Box, Text, Flex } from "@radix-ui/themes";
import { TabList, TabTrigger, TabContent, Tables } from "./styles";
import { ButtonFilled } from "../Button/index";
import BarChart from "../Chart/BarChart";
import TableView from "../Table/index";

const MultipleTab = (props: multipleTabProp) => {
  const {
    onClick,
    primaryColor,
    secondaryColor,
    selected,
    queryResult,
    handleExport,
    metaInformation,
  } = props;
  console.log(queryResult);
  const chartDataset = queryResult?.rows?.map((row: any) => {
    const chartData = {};
    for (const key in row) {
      if (row.hasOwnProperty(key) && typeof row[key] !== "object") {
        chartData[key] = row[key];
      }
    }
    return chartData;
  });

  return (
    <>
      <Flex
        direction="column"
        gap="4"
        style={{
          display:
            queryResult != null && queryResult.rows.length > 0
              ? "block"
              : "none",
        }}
      >
        <Tabs.Root defaultValue="data">
          <TabList size="2">
            <TabTrigger value="data">Data</TabTrigger>
            <TabTrigger value="chart">Chart</TabTrigger>
            <TabTrigger value="meta">Meta Information</TabTrigger>
          </TabList>

          <Box px="4" pt="3" pb="2">
            <TabContent value="data">
              {selected.value === "data" && (
                <>
                  <Tables
                    className="rdg-light"
                    rows={queryResult?.rows || []}
                    columns={queryResult?.columns || []}
                    marginBottom="10px"
                    defaultColumnOptions={{
                      sortable: true,
                      resizable: true,
                    }}
                  />
                  <div style={{ marginTop: "10px" }}>
                    <div
                      style={{ marginRight: "10px", display: "inline-block" }}
                    >
                      <ButtonFilled
                        backgroundColor="#d5d5d5"
                        textColor="black"
                        label="Export to CSV"
                        onClick={() => handleExport("csv")}
                      />
                    </div>
                    <div style={{ display: "inline-block" }}>
                      <ButtonFilled
                        backgroundColor="#d5d5d5"
                        textColor="black"
                        label="Export to PDF"
                        onClick={() => handleExport("pdf")}
                      />
                    </div>
                  </div>
                </>
              )}
            </TabContent>

            <TabContent value="chart">
              <BarChart dataset={chartDataset} />
            </TabContent>

            <TabContent value="meta">
              <TableView
                show={true}
                headers={Object.keys(metaInformation)}
                data={[metaInformation]}
              />
            </TabContent>
          </Box>
        </Tabs.Root>
      </Flex>
    </>
  );
};

export default MultipleTab;
