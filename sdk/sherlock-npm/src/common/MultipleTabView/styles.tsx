import { styled, keyframes } from "@stitches/react";
import * as Tabs from "@radix-ui/react-tabs";
import ReactDataGrid from "react-data-grid";

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const TabList = styled(Tabs.List, {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#e5e5e5",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  overflow: "hidden",
});

export const TabTrigger = styled(Tabs.Trigger, {
  position: "relative",
  appearance: "none",
  color: "black",
  padding: "8px",
  backgroundColor: "transparent",
  fontSize: "medium",
  cursor: "pointer",
  border: "none",
  borderRadius: "8px 8px 0 0",
  flex: 1,

  "&:hover": {
    backgroundColor: "#f8f8f8",
  },

  "&[data-state='active']": {
    position: "relative",
    backgroundColor: "d5d5d5 !important",

    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      height: "2px",
      backgroundColor: "#6061ef",
      animation: `${fadeIn} 0.3s ease-in-out`,
    },
  },
});

export const TabContent = styled(Tabs.Content, {
  marginTop: "8px",
  padding: "8px",
  color: "black",
  animation: `${fadeIn} 0.2s ease-in-out`,
  backgroundColor: "f5f5f5",
  borderRadius: "0 0 8px 8px",
});

export const Tables = styled(ReactDataGrid, {
  borderRadius: "5px",
  border: "1px solid black",
});
