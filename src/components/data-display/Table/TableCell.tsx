import TableCellRaw, { TableCellProps } from "@mui/material/TableCell";
import React from "react";

export const TableCell: React.FC<TableCellProps> = (props) => (
  <TableCellRaw {...props} />
);

export type { TableCellProps };

export default TableCell;
