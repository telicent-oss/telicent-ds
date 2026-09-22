import React from "react";
import TableBodyRaw, { TableBodyProps } from "@mui/material/TableBody";

export const TableBody: React.FC<TableBodyProps> = (props) => (
  <TableBodyRaw {...props} />
);

export type { TableBodyProps };

export default TableBody;
