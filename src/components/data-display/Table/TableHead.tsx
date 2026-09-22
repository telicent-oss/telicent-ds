import React from "react";
import TableHeadRaw, { TableHeadProps } from "@mui/material/TableHead";

export const TableHead: React.FC<TableHeadProps> = (props) => (
  <TableHeadRaw {...props} />
);

export type { TableHeadProps };

export default TableHead;
