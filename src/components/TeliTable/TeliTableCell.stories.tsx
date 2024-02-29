import type { Meta, StoryObj } from "@storybook/react";
import TeliTableCell from "./TeliTableCell";

const meta = {
  component: TeliTableCell,
} satisfies Meta;

export default meta;
type TeliTableCellStory = StoryObj<typeof meta>;

export const Example: TeliTableCellStory = {
  args: {
    children: "Table cell",
  },
  parameters: {
    docs: {
      description: {
        story: `The &lt;td /&gt; HTML element represents a table cell which contains
        data.
        For more information refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td`,
      },
    },
  },
};
