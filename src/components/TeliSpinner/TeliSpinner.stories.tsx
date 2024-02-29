import type { Meta, StoryObj } from "@storybook/react";
import TeliSpinner from "./TeliSpinner";

const meta = {
  component: TeliSpinner,
} satisfies Meta<typeof TeliSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
export const Secondary: Story = {
  args: {
    color: "secondary",
  },
};
