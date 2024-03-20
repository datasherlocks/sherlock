import React, { FC } from "react";
import { ThemeContext, lightThemeColor } from "./context/ThemeContext";
import Scherlock from "./components/Scherlock";

interface DatasherlockAgentProps {
  agentID?: string;
  apiKey?: string;
  region?: string;
}

const DatasherlockAgent: FC<DatasherlockAgentProps> = ({
  agentID = "0",
  apiKey = "",
  region= "ap-south-1"
}) => {
  return (
    <ThemeContext.Provider
      value={{ theme: { type: "light", config: lightThemeColor } }}
    >
      <Scherlock apiKey={apiKey} agentID={agentID} region={region} />
    </ThemeContext.Provider>
  );
};

export default DatasherlockAgent;
