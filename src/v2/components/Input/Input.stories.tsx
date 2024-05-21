import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
export { Simple } from "./stories"; // Must be named

const meta = {
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

export type InputStory = StoryObj<typeof meta>;

export const Basic: InputStory = {
  args: {
    id: "example-id",
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Completely unadorned input field`,
      },
    },
  },
};
