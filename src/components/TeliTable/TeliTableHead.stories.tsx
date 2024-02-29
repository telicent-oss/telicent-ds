import type { Meta, StoryObj } from "@storybook/react";
import TeliTableHead from "./TeliTableHead";

const meta = {
  component: TeliTableHead,
  parameters: {
    docs: {
      description: {
        story: `The &lt;thead /&gt; HTML element typically has table a row or 
        multiple rows which defines the table columns.
        For more information refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead`,
      },
    },
  },
} satisfies Meta;

export default meta;
export type TeliTableHeadStory = StoryObj<typeof meta>;

export const Example: TeliTableHeadStory = {
  args: {
    children: <tr />,
  },
};
