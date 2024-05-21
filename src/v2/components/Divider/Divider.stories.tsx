import type { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";

const meta = {
  component: Divider,
} satisfies Meta<typeof Divider>;

export default meta;

export type DividerStory = StoryObj<typeof meta>;

export const Basic: DividerStory = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: `A line`,
      },
    },
  },
};
