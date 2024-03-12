import * as Form from "@radix-ui/react-form";
import * as Select from "@radix-ui/react-select";
import styled from "styled-components";

const baseFont = "sans-serif";

export const FormField = styled(Form.Field)`
  margin: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const SelectTrigger = styled(Select.Trigger)`
  height: 40px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #a1a1a1;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;
  color: #333;
  background-color: #fff;
  margin-bottom: 5px;

  &:hover,
  &:focus {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;

export const SelectPortal = styled(Select.Portal)`
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #f8f8f8;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const SelectScrollUpButton = styled(Select.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: #fff;
  color: #333;
  cursor: default;
`;

export const SelectItem = styled(Select.Item)`
  font-size: 14px;
  color: #333;
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 8px 16px;
  position: relative;
  user-select: none;

  &.disabled {
    color: #ccc;
    pointer-events: none;
  }

  &.highlighted {
    outline: none;
    background-color: #eee;
    color: #333;
  }
`;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  left: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SelectScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: #fff;
  color: #333;
  cursor: default;
`;
