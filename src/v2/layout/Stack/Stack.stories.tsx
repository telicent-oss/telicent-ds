import type { Meta, StoryObj } from "@storybook/react";
import Stack from "./Stack";
import { ExampleContent } from "../examples";

const meta = {
  component: Stack,
} satisfies Meta<typeof Stack>;

export default meta;

export type StackStory = StoryObj<typeof meta>;

export const Basic: StackStory = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: `For 1-dimensional layouts.`,
      },
    },
  },
  render: (args) => (
    <Stack {...args}><ExampleContent /></Stack>
  )
};
