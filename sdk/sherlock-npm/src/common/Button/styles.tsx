// styles.tsx
import styled from "styled-components";
import { Button } from "@radix-ui/themes";

export const Wrapper = styled(Button)`
  background-color: #6061ef;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: #6061ef;
    transform: translateY(-3px);
    box-shadow:
      0 3px 6px rgba(0, 0, 0, 0.16),
      0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
