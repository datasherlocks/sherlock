import styled from "styled-components";
import { Button } from "@radix-ui/themes";

interface WrapperProps {
  backgroundColor?: string;
  textColor?: string;
}

export const Wrapper = styled(Button)<WrapperProps>`
  background-color: ${(props) => props.backgroundColor || "#6061ef"};
  color: ${(props) => props.textColor || "#fff"};
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: ${(props) => props.backgroundColor || "#6061ef"};
    transform: translateY(-3px);
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
