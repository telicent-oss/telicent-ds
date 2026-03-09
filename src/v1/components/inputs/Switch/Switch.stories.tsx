import { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";
import { Box } from "@mui/material";
import { useState } from "react";

const meta: Meta<typeof Switch> = {
  title: "Inputs/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A simple switch component built on Mui's \`<Switch>\` with our design-system theming and overrides. It supports the following use cases:

- **Controlled mode:** Pass \`checked\` and \`onChange\` to fully control the switch state.
- **Uncontrolled mode:** Use \`defaultChecked\` for the initial value and let the switch manage its own state.

---

### When & How to use it
- **Settings toggles:** Ideal for enabling/disabling settings or features.
- **Forms:** Use when the user needs to toggle a binary option.

\`\`\`jsx
<Switch
  checked={enabled}
  id="switch-demo"
  onChange={handleChange}
  label="Enable notifications"
/>
\`\`\`
`,
      },
    },
    id: "switch-default",
    ariaLabel: "switch",
  },
  decorators: [(Story) => <Box sx={{ margin: "auto" }}>{Story()}</Box>],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

const RenderSwitch = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Switch checked={checked} onChange={handleChange} id="switch-demo" {...args} />;
};

export const Default: Story = {
  args: {
    checked: true,
    id: "switch-default",
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    checked: false,
    id: "switch-disabled",
    disabled: true,
    onChange: () => {},
  },
};

export const WithLabel: Story = {
  args: {
    checked: true,
    id: "switch-with-label",
    label: "Enable feature",
    onChange: () => {},
  },
};

export const Required: Story = {
  args: {
    checked: false,
    id: "switch-required",
    label: "Required setting",
    required: true,
    onChange: () => {},
  },
};

export const NoLabel: Story = {
  args: {
    checked: true,
    id: "switch-no-label",
    onChange: () => {},
  },
};

export const ExampleWithOnChange: Story = {
  render: (args) => <RenderSwitch {...args} />,
  args: {
    disabled: false,
  },
};
