import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

export type ButtonStory = StoryObj<typeof meta>;

export const Basic: ButtonStory = {
  args: {
    
  },
  parameters: {
    docs: {
      description: {
        story: `Basic button`,
      },
    },
  },
};
