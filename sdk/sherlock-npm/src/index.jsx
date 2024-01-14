import React from "react";
import { ThemeContext, lightThemeColor } from "./context/ThemeContext";
import { styled } from "styled-components";
import Scherlock from "./components/Scherlock";

export const DatasherlockAgent = ({
  remoteURL = "http://127.0.0.1:8080",
  agentID = 0,
  apiKey = "",
}) => {
  return (
    <ThemeContext.Provider
      value={{ theme: { type: "light", config: lightThemeColor } }}
    >
      <Scherlock apiKey={apiKey} agentID={agentID} />
    </ThemeContext.Provider>
  );
};
