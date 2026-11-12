import TableHeadRaw, { TableHeadProps } from "@mui/material/TableHead";
import React from "react";

export const TableHead: React.FC<TableHeadProps> = (props) => (
  <TableHeadRaw {...props} />
);

export type { TableHeadProps };

export default TableHead;
