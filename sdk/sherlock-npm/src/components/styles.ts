import styled, { createGlobalStyle } from "styled-components";

interface Theme {
  colors: {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
  };
  fontFamily: string;
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: { theme: Theme }) =>
      props.theme.colors.backgroundColor};
    color: ${(props: { theme: Theme }) => props.theme.colors.textColor};
    font-family: ${(props: { theme: Theme }) => props.theme.fontFamily};
    margin: 5px;
  }
`;

export const Wrapper = styled.div<{ theme: Theme }>`
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  padding: 10px;
  border-radius: 8px;
  
  .buttonContainer {
    padding: 10px 0 0 0;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Sizebox = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width || undefined};
  height: ${(props) => props.height || undefined};
`;
