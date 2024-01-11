import styled from 'styled-components'

export const TableWrapper = styled.table`
    width: 100%;
    border-collapse: collapse;
    thead {
        th {
            padding: 10px;
            border: 1px solid ${props => props.theme.colors.borderColor};
        }
    }

    tbody {
        tr {
            td {
                padding: 10px;
                border: 1px solid ${props => props.theme.colors.borderColor};
            }
        }
    }
`