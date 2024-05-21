import type { Meta, StoryObj } from "@storybook/react";
import { LinearProgress } from "./LinearProgress";

const meta = {
  component: LinearProgress,
} satisfies Meta<typeof LinearProgress>;

export default meta;

export type LinearProgressStory = StoryObj<typeof meta>;

export const Basic: LinearProgressStory = {
  args: {
    isActive: true
    
  },
  parameters: {
    docs: {
      description: {
        story: `A line`,
      },
    },
  },
};
