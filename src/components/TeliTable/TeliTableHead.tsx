import React from "react";
import { TableHead, TableHeadProps as MUITableHeadProps } from "@mui/material";
import "./table.css";

export type TeliTableHeadProps = Omit<MUITableHeadProps, "sx" | "classes">;
const TeliTableHead: React.FC<TeliTableHeadProps> = ({
  children,
  ...otherProps
}) => <TableHead {...otherProps}>{children}</TableHead>;

export default TeliTableHead;
