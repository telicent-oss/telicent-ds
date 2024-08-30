import { TableCellProps } from '@mui/material';
import { TeliBasicTableProps } from './TeliBasicTable';

interface RowHeaderProps {
    component?: TableCellProps["component"];
    scope?: TableCellProps["scope"];
}
export declare const getAlignmentProp: (index: number, align: TeliBasicTableProps["align"]) => "inherit" | "left" | "right" | "center" | "justify" | undefined;
export declare const getRowHeaderProps: (index: number, isHeader: boolean) => RowHeaderProps | undefined;
export declare const createRows: (rows: Array<Array<string>>, numberRows: boolean) => string[][];
export declare const createColumns: <TCol>(columns: TCol[], numberRows: boolean, numberColumnHeading?: string) => (string | TCol)[];
export declare const createTableKey: (cellType: "column" | "row", data: string) => string;
export {};
