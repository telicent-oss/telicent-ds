import React from "react";
import TableRowRaw, { TableRowProps } from "@mui/material/TableRow";

export const TableRow: React.FC<TableRowProps> = (props) => (
  <TableRowRaw {...props} />
);

export type { TableRowProps };

export default TableRow;
