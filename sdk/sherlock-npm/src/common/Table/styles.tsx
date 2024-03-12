import styled from "styled-components";

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 0 0 4px 4px;

  thead {
    th {
      padding: 10px;
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      font-weight: bold;
    }
  }

  tbody {
    tr {
      td {
        padding: 10px;
        border: 1px solid ${(props) => props.theme.colors.borderColor};
        font-weight: normal;
      }
    }
  }
`;
