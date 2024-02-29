import type { Meta, StoryObj } from "@storybook/react";
import TeliTableRow from "./TeliTableRow";

const meta = {
  component: TeliTableRow,
  parameters: {
    docs: {
      description: {
        story: `The &lt;tr /&gt; HTML element represents a table row. The children of this
        components can be either a table header (&lt;th /&gt;) or a table cell (&lt;td /&gt;).
        For more information refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr`,
      },
    },
  },
} satisfies Meta;

export default meta;
type TeliTableRowStory = StoryObj<typeof meta>;

export const Example: TeliTableRowStory = {
  args: {
    children: <td>Table row</td>,
  },
};
