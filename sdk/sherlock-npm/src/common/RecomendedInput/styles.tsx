import styled from "styled-components";

export const Wrapper = styled.div`

    position: relative;

    .main-container{
        /* width: 100%; */
        height: 40px;
        border: 1px solid #666666;
        display: flex;
        align-items: center;
        padding-left: 5px;
        justify-content: space-between;
        border-radius: 4px;
    }

    input {
        width: 100%;
        height: 85%;
        background-color:  ${props => props?.theme?.colors?.backgroundColor};
        border: none;
        font-size: 15px;

        &:focus{
            outline: none;
        }
    }

    .label-str {
        position: absolute;
        z-index: 10;
        background-color:  ${props => props?.theme?.colors?.backgroundColor};
        padding-left: 5px;
        padding-right: 5px;
        color: #666666;
    }

    .on-top {
        top: -5px;
        font-size: 12px;
    }

    .value-section {
        padding-left: 5px;
        padding-right: 5px;
        color: ${props => props?.theme?.colors?.textColor};
    }

    .down-arrow {
        margin-right: 10px;
    }

    .values-container {
        height: 100%;
        display: flex;
        align-items: center;
        width: 100%;
    }

    .options-list {
        position: absolute;
        z-index: 11;
        background-color:  ${props => props?.theme?.colors?.backgroundColor};
        border-radius: 4px;
        max-height: 150px;
        overflow: scroll;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
        margin-top: 3px;
        width: 100%;
    }

    .individual-item {
        background-color: transparent;
        width: 100%;
        height: 35px;
        display: flex;
        align-items: center;
        padding-left: 10px;

        &:hover {
            background-color: #eef4fc;
        }
    } 

    .selected-option {
        background-color: #eef4fc;
    }
`;
