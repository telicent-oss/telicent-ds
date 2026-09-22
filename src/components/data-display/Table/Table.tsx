import React from "react";
import TableRaw, { TableProps } from "@mui/material/Table";

export const Table: React.FC<TableProps> = (props) => <TableRaw {...props} />;

export type { TableProps };

export default Table;
