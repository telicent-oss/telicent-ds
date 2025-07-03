import { Meta, StoryObj } from "@storybook/react";
import Select, { Options } from "./Select";
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
A lightweight, dropdown built on Mui's \`<Select>\` with our design-system theming and overrides. It supports both controlled **and** uncontrolled modes: 

- **Controlled mode:** Pass \`value\` and  \`onChange\` to fully drive the selected value from the parent state.
- **Uncontrolled mode:** Pass \`defaultValue\` and \`onChange\` but omit \`value\` to let the component manage its own state after mount.

---

### When & How to use it 
 - **Forms & Filters:** use it in any place you need the user to choose one value from a short list (status picker, category filter, settings panel).

 - **No Internal State:** it has no internal state, you'll need to pass \`value\` and \`onChange\`.

 - **Label is optional:** only renders the label if you pass the \`label\` prop. You can choose to omit the prop for a cleaner label-free form.
 
 - **Min Width:** It has a min width by default that can be customized by using the \`width\` prop.


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

  const handleChange = (event: SelectChangeEvent<unknown>) => {
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
    value: "option1",
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
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {},
  },
};

export const WithNoLabel: Story = {
  args: {
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
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
