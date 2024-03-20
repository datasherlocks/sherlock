import React from "react";
import { buttonInterface } from "../../interface/common/button";
import { Wrapper } from "./styles";

export const ButtonFilled = (props: buttonInterface) => {
  const { label, onClick, backgroundColor, textColor } = props;
  return (
    <Wrapper
      onClick={onClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {label}
    </Wrapper>
  );
};
