import React from "react";

import { TableWrapper } from "./styles.tsx";

const TableView = (props) => {
  const { show, headers, data } = props;

  if (!show) return true;
  return (
    <TableWrapper>
      <thead>
        {headers?.map((item: string) => (
          <th>{item}</th>
        ))}
      </thead>
      <tbody>
        {data?.map((item: any) => (
          <tr>
            {Object.keys(item)?.map((key: string) => (
              <td>{item?.[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableWrapper>
  );
};

export default TableView;
