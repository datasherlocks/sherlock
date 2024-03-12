import styled from "styled-components";
import { TextFieldRoot, TextFieldInput, TextFieldSlot } from "@radix-ui/themes";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
`;

export const StyledTextFieldRoot = styled(TextFieldRoot)`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  background-color: transparent;
`;

export const StyledTextFieldInput = styled(TextFieldInput)`
  flex-grow: 1;
  padding: 12px;
  border: 1px solid #000000;
  border-radius: 7px;
  width: 100%;
`;

export const StyledTextFieldSlot = styled(TextFieldSlot)`
  padding: 8px;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ffffff;
  border-radius: 4px;
  background-color: #fff;
  z-index: 1;
`;

export const OptionsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const IndividualItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: left;

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected-option {
    background-color: #e0e0e0;
  }
`;
