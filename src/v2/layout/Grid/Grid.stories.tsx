import type { Meta, StoryObj } from "@storybook/react";
import Grid from "./Grid";

const meta = {
  component: Grid,
} satisfies Meta<typeof Grid>;

export default meta;

export type GridStory = StoryObj<typeof meta>;

export const Basic: GridStory = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: `For 2d layouts.`,
      },
    },
  },
};
