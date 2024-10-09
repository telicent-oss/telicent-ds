import { TableCellProps } from "@mui/material";
import { TeliBasicTableProps } from "./TeliBasicTable";
import { kebabCase } from "lodash";

interface RowHeaderProps {
  component?: TableCellProps["component"];
  scope?: TableCellProps["scope"];
}

export const getAlignmentProp = (
  index: number,
  align: TeliBasicTableProps["align"]
) => (index === 0 ? "left" : align);

export const getRowHeaderProps = (
  index: number,
  isHeader: boolean
): RowHeaderProps | undefined => {
  if (index === 0 && isHeader) return { component: "th", scope: "row" };
};

export const createRows = (rows: Array<Array<string>>, numberRows: boolean) => {
  if (numberRows) {
    return rows.map((cols, index) => [(index += 1).toString(), ...cols]);
  }
  return rows;
};

export const createColumns = <TCol>(
  columns: TCol[],
  numberRows: boolean,
  numberColumnHeading: string = ""
) => {
  if (numberRows) {
    return [numberColumnHeading, ...columns];
  }
  return columns;
};

export const createTableKey = (cellType: "column" | "row", data: string) =>
  `${cellType}::${kebabCase(data)}`;
