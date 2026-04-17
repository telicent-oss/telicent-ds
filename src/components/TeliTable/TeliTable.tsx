import React from "react";
import { Table, TableProps as MUITableProps } from "@mui/material";
import "./table.css";

type TableProps = Omit<MUITableProps, "sx" | "classes" | "size">;
export interface TeliTableProps extends TableProps {
  /**
   * If true, the table will be compact (smaller)
   */
  compact?: boolean;
  /**
   * Minimum width of the table
   */
  minWidth?: number;
  /**
   * The name of the table element
   */
  name?: string;
}

/**
 * @deprecated TeliTable is deprecated and will be removed in a future release.
 */
const TeliTable: React.FC<TeliTableProps> = ({ compact = false, minWidth, name, children, ...otherProps }) => {
  console.warn("TeliTable is deprecated and will be removed in a future release.");
  return (
    <Table sx={{ minWidth }} size={compact ? "small" : "medium"} aria-label={name} {...otherProps}>
      {children}
    </Table>
  );
};

export default TeliTable;
