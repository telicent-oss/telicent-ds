import React from "react";
import { z } from "zod";

import TeliTableContainer, {
  TeliTableContainerProps,
} from "./TeliTableContainer";
import TeliTable, { TeliTableProps } from "./TeliTable";
import TeliTableHead from "./TeliTableHead";
import TeliTableBody from "./TeliTableBody";
import TeliTableRow, { TeliTableRowProps } from "./TeliTableRow";
import TeliTableCell, { TeliTableCellProps } from "./TeliTableCell";
import {
  createColumns,
  createRows,
  createTableKey,
  getAlignmentProp,
  getRowHeaderProps,
} from "./table-utils";

export interface TeliBasicTableProps {
  /**
   * Table column headers
   */
  columns?: Array<string | Record<string, string>>;
  /**
   * Table body rows
   */
  rows?: Array<Array<string>>;
  name?: TeliTableProps["name"];
  addBorderToLastRow?: TeliTableRowProps["addBorderToLastRow"];
  align?: TeliTableCellProps["align"];
  bordered?: TeliTableContainerProps["bordered"];
  /**
   * A short heading for the table content
   */
  caption?: string;
  compact?: TeliTableProps["compact"];
  maxHeight?: TeliTableContainerProps["maxHeight"];
  minWidth?: TeliTableProps["minWidth"];
  /**
   * If true, a column of numbered rows will be added at the start of table
   */
  numberRows?: boolean;
  /**
   * The heading for the numbered rows column
   */
  numberColumnHeading?: string;
  /**
   * Render column cell
   * @param column Column data
   * @param index
   * @returns JSX.Element
   */
  renderColumnCell?: (column: any, index?: number) => JSX.Element;
  stickyHeader?: TeliTableProps["stickyHeader"];
  /**
   * If true, the first column will be rendered as a table header
   */
  verticalHeader?: boolean;
}

const TeliBasicTable: React.FC<TeliBasicTableProps> = ({
  columns = [],
  rows = [],
  name,
  align = "left",
  addBorderToLastRow,
  bordered = false,
  caption,
  compact = false,
  maxHeight,
  minWidth,
  numberRows = false,
  numberColumnHeading = "",
  renderColumnCell,
  stickyHeader = false,
  verticalHeader = false,
}) => {
  if (columns.length === 0 || rows.length === 0) {
    return null;
  }

  const renderDefaultColumnCell = <TCol,>(column: TCol, index: number) => {
    const columnSchema = z.string({
      required_error: "Column is required",
      invalid_type_error: "Column must be a string",
    });
    const validation = columnSchema.safeParse(column);
    if (validation.success) {
      const heading = validation.data;
      return (
        <TeliTableCell
          key={createTableKey("column", heading)}
          align={getAlignmentProp(index, align)}
        >
          {heading}
        </TeliTableCell>
      );
    }

    console.error(
      "Unable to render columns. Ensure columns is an array of strings or use renderColumnCell"
    );
    return null;
  };

  return (
    <TeliTableContainer maxHeight={maxHeight} bordered={bordered}>
      <TeliTable
        compact={compact}
        minWidth={minWidth}
        name={name}
        stickyHeader={stickyHeader}
      >
        {caption && <caption>{caption}</caption>}
        <TeliTableHead>
          <TeliTableRow>
            {renderColumnCell
              ? createColumns(columns, numberRows, numberColumnHeading).map(
                  renderColumnCell
                )
              : createColumns(columns, numberRows, numberColumnHeading).map(
                  renderDefaultColumnCell
                )}
          </TeliTableRow>
        </TeliTableHead>
        <TeliTableBody>
          {createRows(rows, numberRows).map((cols) => (
            <TeliTableRow
              key={createTableKey("row", cols[0])}
              id={createTableKey("row", cols[0])}
              addBorderToLastRow={addBorderToLastRow ?? Boolean(caption)}
            >
              {cols.map((col, index) => (
                <TeliTableCell
                  key={createTableKey("column", col)}
                  id={createTableKey("column", col)}
                  {...getRowHeaderProps(index, verticalHeader)}
                  align={getAlignmentProp(index, align)}
                >
                  {col}
                </TeliTableCell>
              ))}
            </TeliTableRow>
          ))}
        </TeliTableBody>
      </TeliTable>
    </TeliTableContainer>
  );
};

export default TeliBasicTable;
