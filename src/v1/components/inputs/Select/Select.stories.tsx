import { Meta, StoryObj } from "@storybook/react";
import Select, { Options, SelectProps } from "./Select";
import { Box, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const OPTIONS: Options[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const meta: Meta<typeof Select> = {
  title: "Inputs/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A simple select dropdown component for selecting an option from a list.

> Note: You can easily customize the select dropdown by using the provided props.

\`\`\`jsx
<Select 
  label="Select an option"
  value={selectedValue}
  id="select-demo"
  options={options}
  width={300}
  onChange={handleChange}
  disabled={false}
/>
\`\`\`
`,
      },
    },
    id: "select-default",
    ariaLabel: "select-dropdown",
    options: OPTIONS,
  },
  decorators: (Story) => <Box sx={{ margin: "auto" }}>{Story()}</Box>,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const RenderSelect = ({ ...args }) => {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value as string);
  };

  return (
    <Select
      label="Select Option"
      value={selected}
      onChange={handleChange}
      options={OPTIONS}
      id="selected-demo"
      {...args}
    />
  );
};

export const Default: Story = {
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true,
  },
};

export const WithCustomWidth: Story = {
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {},
  },
};

/**
 * This exemple is set up using useState to simulate how it would
 * work on the app, how the selected item is styled
 *
 * Refer back to the top of the document on how to implement
 */
export const ExampleWithOnChange: Story = {
  render: (args) => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false,
  },
};
