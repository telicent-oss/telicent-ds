import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";
import { Box } from "@mui/material";

const meta: Meta<typeof Spinner> = {
  title: "feedback/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  args: {
    size: 40,
    color: "primary",
  },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "inherit"],
    },
    variant: {
      control: "select",
      options: ["indeterminate", "determinate"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 24,
  },
};

export const Large: Story = {
  args: {
    size: 64,
  },
};

export const Determinate: Story = {
  args: {
    variant: "determinate",
    value: 65,
  },
};

export const InContainer: Story = {
  render: (args) => (
    <Box
      sx={{
        width: 200,
        height: 120,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px dashed",
      }}
    >
      <Spinner {...args} />
    </Box>
  ),
};
