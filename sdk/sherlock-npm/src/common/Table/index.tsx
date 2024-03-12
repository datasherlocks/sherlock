import React from "react";

import { TableWrapper } from "./styles";

const TableView = (props) => {
  const { show, headers, data } = props;

  if (!show) return null;

  return (
    <TableWrapper>
      <thead>
        <tr>{headers?.map((item: string) => <th key={item}>{item}</th>)}</tr>
      </thead>
      <tbody>
        {data?.map((item: any, index: number) => (
          <tr key={index}>
            {Object.keys(item)?.map((key: string, i: number) => (
              <td key={i}>{item?.[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TableView;
