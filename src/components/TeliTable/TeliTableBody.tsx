import React from "react";
import { TableBody, TableBodyProps } from "@mui/material";
import "./table.css";

export type TeliTableBody = Omit<TableBodyProps, "sx" | "classes">;
const TeliTableBody: React.FC<TeliTableBody> = ({
  children,
  ...otherProps
}) => {
  return <TableBody {...otherProps}>{children}</TableBody>;
};

export default TeliTableBody;
