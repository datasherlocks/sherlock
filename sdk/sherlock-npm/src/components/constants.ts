export interface Theme {
  colors: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    mainColor: string;
    textButtonColor: string;
  };
  fontFamily: string;
}

export interface ThemeCollection {
  dark: Theme;
  light: Theme;
}

export const themes: ThemeCollection = {
  dark: {
    colors: {
      backgroundColor: "rgb(49,49,49)",
      textColor: "rgb(255,255,255)",
      borderColor: "#D3D4D5",
      mainColor: "#666666",
      textButtonColor: "rgb(255,255,255)",
    },
    fontFamily: "Arial, Helvetica, sans-serif",
  },
  light: {
    colors: {
      textColor: "rgb(49,49,49)",
      backgroundColor: "rgb(255,255,255)",
      borderColor: "#939496",
      mainColor: "#3F3E9E",
      textButtonColor: "rgb(255,255,255)",
    },
    fontFamily: "Arial, Helvetica, sans-serif",
  },
};

export interface Tab {
  label: string;
  value: string;
}

export const MultipleTabs: Tab[] = [
  {
    label: "Table",
    value: "tabel",
  },
  {
    label: "Chart",
    value: "chart",
  },
];
