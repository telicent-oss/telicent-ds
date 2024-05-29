import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";

import Button from "./Button";
import DataSetIcon from "../../data-display/Icons/DataSetIcon";

const meta = {
  title: "Inputs/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "Buttons allow users to take actions, and make choices, with a single tap.",
      },
    },
  },
  tags: ["autodocs"],
  args: { children: "Button", onClick: fn() },
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
    fullWidth: {
      description: "If true, the button will take up the full width of its container.",
      type: "boolean",
      table: {
        defaultValue: {
          summary: "false",
        },
      },
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
    variant: {
      description: "The type of button variant to use",
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    endIcon: {
      description: "Element placed after the children.",
    },
    startIcon: {
      description: "Element placed before the children.",
    },
  },
  decorators: (Story) => (
    <Box display="flex" gap={2}>
      {Story()}
    </Box>
  ),
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
};

export const Sizing: Story = {
  render: (args) => (
    <>
      <Button size="large">{args.children}</Button>
      <Button size="medium">{args.children}</Button>
      <Button size="small">{args.children}</Button>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "For larger or smaller buttons, use the `size` prop.",
      },
    },
  },
};

export const WithIconsAndLabel: Story = {
  render: (args) => (
    <>
      <Button startIcon={<DataSetIcon />}>{args.children}</Button>
      <Button endIcon={<DataSetIcon />}>{args.children}</Button>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: `Sometimes you might want to have icons for certain buttons to 
        enhance the UX of the application as we recognize logos more easily than 
        plain text.`,
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
};
