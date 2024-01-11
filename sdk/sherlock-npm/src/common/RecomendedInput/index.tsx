import React, {useState} from "react";
import {
  inputProps,
  availableOptions,
} from "../../interface/common/input";
// import {FaChevronDown} from 'react-icons/fa/index'
import { Wrapper } from "./styles.tsx";

const Dropdown = (props: inputProps) => {
  const { onChange, options = [], label, value } = props;

  const [isOpen, setIsOpen] = useState(false)

  const onOptionClick = (individualOption: availableOptions) => {
    onChange(individualOption)
    setIsOpen(pre => !pre)
  }
  return (
    <Wrapper>
      <div className="main-container">
        <div className="values-container">
          <span className={`label-str ${value?.question ? 'on-top':''}`}>{label}</span>
          {/* {value?.value && <span className="value-section" >{value?.value}</span>} */}
          <input 
            onFocus={() => setIsOpen(options?.length > 0 ? true : false)}
            className="value-selected"
            value={value?.question}
            onChange = {(e) => onChange(e?.target?.value)}
          />
        </div>
        {/* <FaChevronDown className="down-arrow" /> */}
      </div>
      {
        isOpen && 
        <div className="options-list">
          {
            options?.map((individualOption: availableOptions) => (
              <div className={`individual-item ${individualOption.question === value?.question ? 'selected-option':''}`} key={individualOption?.question} onClick={()=> onOptionClick(individualOption)}>
                {individualOption?.question}
              </div>
            ))
          }
        </div>
      }
    </Wrapper>
  );
};

export default Dropdown;
