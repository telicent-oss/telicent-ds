import type { Meta, StoryObj } from "@storybook/react";
import { TableExample } from "./stories";
import TeliTable from "./TeliTable";

const meta = {
  component: TeliTable,
  parameters: {
    docs: {
      description: {
        story: `Tables display information in a way that's easy to scan, so that 
        users can look for patterns and insights. They can be embedded in primary 
        content, such as cards.
        <br />
        When the basic table isn't suitable for your needs. Feel free to create your
        own table as shown below. The example below shows you can group column
        headers by rendering multiple table rows inside a table head.`,
      },
      source: {
        type: "dynamic",
      },
    },
  },
} satisfies Meta;

export default meta;
export type TeliTableStory = StoryObj<typeof meta>;

export { TableExample };
