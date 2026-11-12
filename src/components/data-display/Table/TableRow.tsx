import TableRowRaw, { TableRowProps } from "@mui/material/TableRow";
import React from "react";

export const TableRow: React.FC<TableRowProps> = (props) => (
  <TableRowRaw {...props} />
);

export type { TableRowProps };

export default TableRow;
