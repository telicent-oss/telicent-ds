import React from "react";
import {
  TableContainer,
  TableContainerProps as MUITableContainerProps,
} from "@mui/material";
import "./table.css";

type TableContainerProps = Omit<MUITableContainerProps, "sx" | "classes">;
export interface TeliTableContainerProps extends TableContainerProps {
  /**
   * If true, the table element will be bordered
   */
  bordered?: boolean;
  /**
   * Maximum height of the component
   */
  maxHeight?: number;
}
const TeliTableContainer: React.FC<TeliTableContainerProps> = ({
  bordered = false,
  maxHeight,
  children,
  ...otherProps
}) => (
  <TableContainer
    sx={{ maxHeight, borderWidth: bordered ? 1 : 0 }}
    {...otherProps}
  >
    {children}
  </TableContainer>
);

export default TeliTableContainer;
