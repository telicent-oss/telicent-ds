import React from "react";
import TableCellRaw, { TableCellProps } from "@mui/material/TableCell";

export const TableCell: React.FC<TableCellProps> = (props) => (
  <TableCellRaw {...props} />
);

export type { TableCellProps };

export default TableCell;
