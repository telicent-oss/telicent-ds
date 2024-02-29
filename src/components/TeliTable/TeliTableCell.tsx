import React from "react";
import { TableCell, TableCellProps as MUITableCellProps } from "@mui/material";
import "./table.css";

type TableCellProps = Omit<MUITableCellProps, "sx" | "classes">;
export interface TeliTableCellProps extends TableCellProps {
  /**
   * Minimum width of the table
   */
  minWidth?: number;
}

const TeliTableCell: React.FC<TeliTableCellProps> = ({
  minWidth,
  children,
  ...otherProps
}) => (
  <TableCell sx={{ minWidth }} {...otherProps}>
    {children}
  </TableCell>
);

export default TeliTableCell;
