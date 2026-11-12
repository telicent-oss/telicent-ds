import TableBodyRaw, { TableBodyProps } from "@mui/material/TableBody";
import React from "react";

export const TableBody: React.FC<TableBodyProps> = (props) => (
  <TableBodyRaw {...props} />
);

export type { TableBodyProps };

export default TableBody;
