import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@mui/material";
import TextField from "./TextField";

const meta: Meta<typeof TextField> = {
  title: "Inputs/Text Field",
  component: TextField,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "boolean" },
    errorText: { control: "text" },
    disabled: { control: "boolean" },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A custom text input built on top of MUI's \`<TextField>\`, supporting label, error states, and all standard props.

Use \`error\` and \`errorText\` to display validation messages.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: "Full Name",
    placeholder: "Enter your name",
    error: false,
    errorText: "This field is required",
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Box sx={{ width: 300 }}>
        <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />
      </Box>
    );
  },
};

export const MultiLine: Story = {
  args: {
    label: "Miltiline Input",
    placeholder: "type anything that needs a lot of space in here",
    error: false,
    multiline: true,
    rows: 10,
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Box sx={{ width: 800 }}>
        <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />
      </Box>
    );
  },
};

export const HelperText: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The `helperText` prop affects the height of the text field. If two text fields are placed side by side, one with a helper text and one without, they will have different heights.",
      },
    },
  },
  render: (args) => (
    <Box sx={{ display: "flex", alignItems: "center", "& > :not(style)": { m: 1 } }}>
      <TextField value={" "} helperText={"This is a helper text"} label={"TextField"} />
      <TextField value={" "} label={"TextField"} />
    </Box>
  ),
};

export const ErrorMessage: Story = {
  args: {
    label: "Title",
    error: true,
    errorText: "Something went wrong, please try again.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The `error` prop toggles the error state. The `helperText` prop is used to display the `errorText`, providing feedback to the user about the error",
      },
    },
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Box sx={{ width: 300 }}>
        <TextField {...args} value={value} onChange={(e) => setValue(e.target.value)} />
      </Box>
    );
  },
};
