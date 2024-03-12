import React, { useState } from "react";
import {
  dropdownProps,
  availableOptions,
} from "../../interface/common/dropdown";
import { FaChevronDown } from "react-icons/fa/index";
import { Wrapper } from "./styles";

const Dropdown = (props: dropdownProps) => {
  const { onChange, options = [], label, value } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onOptionClick = (individualOption: availableOptions) => {
    onChange(individualOption);
    setIsOpen((pre) => !pre);
  };
  return (
    <Wrapper>
      <div className="main-container" onClick={() => setIsOpen((pre) => !pre)}>
        <div className="values-container">
          <span
            className={`label-str ${isOpen || value?.value ? "on-top" : ""}`}
          >
            {label}
          </span>
          {value?.value && (
            <span className="value-section">{value?.value}</span>
          )}
        </div>
        <FaChevronDown className="down-arrow" />
      </div>
      {isOpen && (
        <div className="options-list">
          {options?.map((individualOption: availableOptions) => (
            <div
              className={`individual-item ${individualOption.value === value?.value ? "selected-option" : ""}`}
              key={individualOption?.value}
              onClick={() => onOptionClick(individualOption)}
            >
              {individualOption?.label}
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Dropdown;
