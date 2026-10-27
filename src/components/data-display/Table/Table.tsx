import TableRaw, { TableProps } from "@mui/material/Table";
import React from "react";

export const Table: React.FC<TableProps> = (props) => <TableRaw {...props} />;

export type { TableProps };

export default Table;
