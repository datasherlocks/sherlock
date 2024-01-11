import styled from 'styled-components'

export const FilledWrapper = styled.button`
    background-color: ${props => props?.theme?.colors?.mainColor};
    color:  ${props => props?.theme?.colors?.textButtonColor};
    width: 70px;
    height: 40px;
    border-radius: 8px;
    border: 0px;
`