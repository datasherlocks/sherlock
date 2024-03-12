import { ThemeContext, lightThemeColor } from "./context/ThemeContext.tsx";
import Scherlock from "./components/Scherlock.tsx";

export const DatasherlockAgent = ({
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

export default DatasherlockAgent;
