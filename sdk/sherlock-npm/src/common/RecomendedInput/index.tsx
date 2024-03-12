import React, { useState, useEffect } from "react";
import {
  Wrapper,
  StyledTextFieldRoot,
  StyledTextFieldInput,
  StyledTextFieldSlot,
  OptionsContainer,
  OptionsList,
  IndividualItem,
} from "./styles";
import { inputProps, availableOptions } from "../../interface/common/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Dropdown = ({ onChange, options = [], label, value }: inputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState([]);


  const handleInputFocus = () => {
    setIsOpen(true);
  };

  const handleInputBlue = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, "1000");
    
  };


  const onOptionClick = (individualOption: availableOptions) => {

    onChange(individualOption);
    setIsOpen(false);
  };

  const handleInputChange = (e: any) => {
    
    onChange({
      question: e.target.value,
      query: "",
    });
  };

  return (
    <Wrapper>
      <StyledTextFieldRoot>
        <StyledTextFieldSlot>
          <MagnifyingGlassIcon height="17" width="17" />
        </StyledTextFieldSlot>
        <StyledTextFieldInput
          placeholder={label}
          value={value}
          onFocus={handleInputFocus}
          onBlur={handleInputBlue}
          onChange={handleInputChange}
        />
      </StyledTextFieldRoot>
      {isOpen && (
        <OptionsContainer>
          <OptionsList>
            {options.map((individualOption: availableOptions) => (
              <IndividualItem
                className={`individual-item ${
                  individualOption.question === value?.question
                    ? "selected-option"
                    : ""
                }`}
                key={individualOption.question}
                onClick={() => {onOptionClick(individualOption)}}
              >
                {individualOption.question}
              </IndividualItem>
            ))}
          </OptionsList>
        </OptionsContainer>
      )}
    </Wrapper>
  );
};

export default Dropdown;
