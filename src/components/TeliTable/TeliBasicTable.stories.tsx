import type { Meta, StoryObj } from "@storybook/react";
import TeliBasicTable from "./TeliBasicTable";
import {
  BasicTable,
  CaptionedTable,
  CustomColumns,
  DenseTable,
  StickyHeader,
} from "./stories";

const meta = {
  component: TeliBasicTable,
  parameters: {
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
} satisfies Meta<typeof TeliBasicTable>;

export default meta;
export type TeliBasicTableStory = StoryObj<typeof meta>;

export { BasicTable, DenseTable, StickyHeader, CaptionedTable, CustomColumns };
