import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from "@mui/material";

const meta: Meta<typeof Table> = {
  title: "MUI Coverage/Individual/Table",
  excludeStories: ["Markup"],
  component: Table,
  tags: ["!autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Judge: header weight and background, row divider colour, cell padding at default and dense sizes, sort label and arrow contrast, selected and hover row states, pagination control density, dark mode.",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Table>;

type Column = {
  id: keyof Row;
  label: string;
  numeric: boolean;
};

type Row = {
  id: string;
  vessel: string;
  flag: string;
  entities: number;
};

const columns: Column[] = [
  { id: "vessel", label: "Vessel", numeric: false },
  { id: "flag", label: "Flag", numeric: false },
  { id: "entities", label: "Entities", numeric: true },
];

const rows: Row[] = [
  { id: "r1", vessel: "Aurora", flag: "NO", entities: 128 },
  { id: "r2", vessel: "Balaena", flag: "GB", entities: 54 },
  { id: "r3", vessel: "Corvus", flag: "PT", entities: 311 },
  { id: "r4", vessel: "Dorado", flag: "ES", entities: 7 },
];

const noop = (): void => undefined;

export const Markup: React.FC<{ size?: "small" | "medium" }> = ({ size = "medium" }) => (
  <TableContainer component={Paper} sx={{ width: 560 }}>
    <Table size={size}>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell
              key={column.id}
              align={column.numeric ? "right" : "left"}
              sortDirection={column.id === "entities" ? "desc" : false}
            >
              <TableSortLabel
                active={column.id === "entities"}
                direction="desc"
                onClick={noop}
              >
                {column.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id} hover selected={row.id === "r2"}>
            <TableCell>{row.vessel}</TableCell>
            <TableCell>{row.flag}</TableCell>
            <TableCell align="right">{row.entities}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            count={40}
            page={1}
            rowsPerPage={10}
            rowsPerPageOptions={[10, 25, 50]}
            onPageChange={noop}
            onRowsPerPageChange={noop}
          />
        </TableRow>
      </TableFooter>
    </Table>
  </TableContainer>
);

export const WithTelicentTheme: Story = { render: () => <Markup /> };

export const DenseWithTelicentTheme: Story = { render: () => <Markup size="small" /> };
