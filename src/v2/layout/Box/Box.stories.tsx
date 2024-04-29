import type { Meta, StoryObj } from "@storybook/react";
import Box from "./Box";
import { ExampleContent } from "../examples";

const meta = {
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

export type BoxStory = StoryObj<typeof meta>;

export const Basic: BoxStory = {
  args: {
  },
  parameters: {
    docs: {
      description: {
        story: `The Box component is a generic, theme-aware container with access to CSS utilities from MUI System.`,
      },
    },
  },
  render: (args) => (
    <Box {...args}><ExampleContent /></Box>
  )
};
