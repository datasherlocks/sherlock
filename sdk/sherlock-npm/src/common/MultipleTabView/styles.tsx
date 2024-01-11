import styled from 'styled-components'

export const Wrapper = styled.div`
    height: 40px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const TabStyle = styled.div`
    padding: 10px 20px;
    margin: 0 30px;
    color: ${props => props?.theme?.colors?.mainColor || props.primaryColor};
    border-bottom: ${props => props?.selected ? `5px solid ${props?.theme?.colors?.mainColor || props.primaryColor}` : undefined};
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
`