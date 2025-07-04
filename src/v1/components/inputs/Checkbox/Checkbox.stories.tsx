import { Meta, StoryObj } from "@storybook/react";
import Checkbox from "./Checkbox";
import { Box } from "@mui/material";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Inputs/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A simple checkbox component built on Mui's \`<Checkbox>\` with our design-system theming and overrides. It supports the following use cases:

- **Controlled mode:** Pass \`checked\` and \`onChange\` to fully control the checkbox's state.
- **Uncontrolled mode:** Use the \`defaultChecked\` prop for the initial value and let the checkbox manage its own state.

---

### When & How to use it
- **Forms:** Use it in any form where you need to allow the user to select multiple or binary options (e.g., terms of service, preferences).

\`\`\`jsx
<Checkbox 
  checked={checkedValue} 
  id="checkbox-demo" 
  required={true}
  onChange={handleChange} 
/>
\`\`\`
`,
      },
    },
    id: "checkbox-default",
    ariaLabel: "checkbox",
  },
  decorators: (Story) => <Box sx={{ margin: "auto" }}>{Story()}</Box>,
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

const RenderCheckbox = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Checkbox checked={checked} onChange={handleChange} id="checkbox-demo" {...args} />;
};

export const Default: Story = {
  args: {
    checked: true,
    id: "checkbox-default",
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    id: "checkbox-disabled",
    disabled: true,
    onChange: () => {},
  },
};

export const WithCustomLabel: Story = {
  args: {
    checked: true,
    id: "checkbox-custom-label",
    label: "Custom Label",
    onChange: () => {},
  },
};

export const WithRequired: Story = {
  args: {
    checked: false,
    id: "checkbox-custom-label",
    label: "Required",
    required: true,
    onChange: () => {},
  },
};

export const WithNoLabel: Story = {
  args: {
    checked: true,
    id: "checkbox-custom-label",
    required: true,
    onChange: () => {},
  },
};

export const ExampleWithOnChange: Story = {
  render: (args) => <RenderCheckbox {...args} />,
  args: {
    disabled: false,
  },
};
