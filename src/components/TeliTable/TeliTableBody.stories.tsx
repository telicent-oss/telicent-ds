import type { Meta, StoryObj } from "@storybook/react";
import TeliTableBody from "./TeliTableBody";

const meta = {
  component: TeliTableBody,
  parameters: {
    docs: {
      description: {
        story: `The &lt;tbody /&gt; HTML element typically has table rows 
        (&lt;tr /&gt;) as children indicaticating they belong in the table body.
        For more information refer to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody`,
      },
    },
  },
} satisfies Meta;

export default meta;
export type TeliTableBodyStory = StoryObj<typeof meta>;

export const Example: TeliTableBodyStory = {
  args: {
    children: <tr />,
  },
};
