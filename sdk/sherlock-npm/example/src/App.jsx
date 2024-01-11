import React from "react";
import { DatasherlockAgent } from "../../src/index";
import {
  darkThemeColor,
  lightThemeColor,
} from "../../src/context/ThemeContext";


const theme = { type: "dark", config: lightThemeColor };


const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ width: "100%" }}>
          <DatasherlockAgent agentsEndpoint={"http://127.0.0.1:8080"}></DatasherlockAgent>
      </div>
    </div>
  );
};

export default App;
