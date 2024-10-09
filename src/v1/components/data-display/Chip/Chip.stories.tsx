import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";

import Chip from "./Chip";

const meta = {
  title: "Data display/Chip",
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: "Buttons allow users to take actions, and make choices, with a single tap.",
      },
    },
  },
  tags: ["autodocs"],
  args: { label: "Chip" },
  argTypes: {
    disabled: {
      description: "If true, the component is disabled.",
      type: "boolean",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
    },
    label: {
      description: "The content of the component.",
    },
    onClick: {
      description: "Callback fired when the chip is clicked.",
      type: "function",
    },
    onDelete: {
      description:
        "Callback fired when the delete icon is clicked. If set, the delete icon will be shown.",
      type: "function",
    },
    size: {
      description: "The size of the component.",
      table: {
        defaultValue: {
          summary: "medium",
        },
      },
      control: "select",
      options: ["small", "medium", "large"],
    },
  },
  decorators: (Story) => (
    <Box display="flex" gap={2}>
      {Story()}
    </Box>
  ),
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Outlined: Story = {
  args: {
    variant: "outlined",
  },
};

export const ClickableChips: Story = {
  render: (args) => (
    <>
      <Chip onClick={fn()} {...args} />
      <Chip variant="outlined" onClick={fn()} {...args} />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Chips with the `onClick` prop defined change appearance on focus, hover, and click.",
      },
    },
  },
};

export const DeletableChips: Story = {
  render: (args) => (
    <>
      <Chip onDelete={fn()} {...args} />
      <Chip variant="outlined" onDelete={fn()} {...args} />
    </>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Chips with the onDelete prop defined will display a delete icon which changes appearance on hover.",
      },
    },
  },
};
