import React from "react";
import { TableRow, TableRowProps as MUITableRowProps } from "@mui/material";
import "./table.css";

type TableRowProps = Omit<MUITableRowProps, "sx" | "classes">;
export interface TeliTableRowProps extends TableRowProps {
  /**
   * If true, the last table row will have a bottom border added to the table
   * cell element
   */
  addBorderToLastRow?: boolean;
}
const TeliTableRow: React.FC<TeliTableRowProps> = ({
  addBorderToLastRow = true,
  children,
  ...otherProps
}) => (
  <TableRow
    sx={{
      "&:last-child td, &:last-child th": {
        borderBottomWidth: addBorderToLastRow ? 1.5 : 0,
      },
    }}
    {...otherProps}
  >
    {children}
  </TableRow>
);

export default TeliTableRow;
