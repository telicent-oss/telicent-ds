import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";

import Button, { ButtonProps } from "./Button";
import DataSetIcon from "../../data-display/Icons/DataSetIcon";
import { figmaDesign } from "../../../../../.storybook/figmaDesign";
import { FlexBox } from "../../layout";

const meta = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    ...figmaDesign(
      "https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6065-28532&m=dev",
    ),
    docs: {
      description: {
        component: `
A styled button component built on top of MUI's \`<Button>\`, using our design system overrides.

---

### Supported Variants

**Standard MUI Variants:**
- \`contained\`, \`outlined\`, \`text\` - standard MUI variants, work with \`color\` prop

**Custom Design System Variants:**
- \`primary\` - main action button (contained + primary color)
- \`secondary\` - secondary action button (contained + secondary color)
- \`tertiary\` - tertiary action button with neutral grey (outlined + custom tertiary color)

---

### Supported Props

- **Variants:** \`contained\`, \`outlined\`, \`text\`, \`primary\`, \`secondary\`, \`tertiary\`
- **Colors:** \`primary\`, \`secondary\`, \`error\`, \`info\`, \`success\`, \`warning\` (for standard MUI variants)
- **Sizes:** \`small\`, \`medium\`, \`large\`
- **Icons:** Use \`startIcon\` or \`endIcon\` to enhance buttons visually
- **Style:** Use \`style="base"\` to render an unstyled button
- **Full Width:** Use \`fullWidth\` for block-style buttons

---

### Example

\`\`\`tsx
// Standard MUI
<Button variant="contained" color="primary">Text</Button>

// Custom variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  args: { children: "Button", onClick: fn(), color: "primary", variant: "contained" },
  argTypes: {
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "info", "success", "warning"],
    },
    variant: {
      control: "select",
      options: ["contained", "outlined", "text"],
    },
  },
  decorators: (Story) => <Box sx={{ button: { marginInline: 2 }, a: { marginInline: 2 } }}>{Story()}</Box>,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button using custom variant `variant="primary"`',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button using custom variant `variant="secondary"`',
      },
    },
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button using custom variant `variant="tertiary"` - uses neutral grey color',
      },
    },
  },
};

export const StandardMUIVariants: Story = {
  render: (args) => (
    <>
      <Button variant="contained" color="primary">
        Contained Primary
      </Button>
      <Button variant="outlined" color="primary">
        Outlined Primary
      </Button>
      <Button variant="text" color="primary">
        Text Primary
      </Button>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "Standard MUI variants (contained, outlined, text) with color prop",
      },
    },
  },
};

export const Sizes: Story = {
  render: (args) => (
    <>
      <Button size="large" variant="primary">
        {args.children}
      </Button>
      <Button size="medium" variant="primary">
        {args.children}
      </Button>
      <Button size="small" variant="primary">
        {args.children}
      </Button>
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

export const StartIcon: Story = {
  render: (args) => (
    <>
      <Button variant="primary" startIcon={<DataSetIcon />}>
        Primary Button
      </Button>
      <Button variant="secondary" startIcon={<DataSetIcon />}>
        Secondary Button
      </Button>
      <Button variant="tertiary" startIcon={<DataSetIcon />}>
        Tertiary Button
      </Button>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use `startIcon={<IconComponent />}` to place an icon before the button label",
      },
    },
  },
};

export const EndIcon: Story = {
  render: (args) => (
    <>
      <Button variant="primary" endIcon={<DataSetIcon />}>
        Primary Button
      </Button>
      <Button variant="secondary" endIcon={<DataSetIcon />}>
        Secondary Button
      </Button>
      <Button variant="tertiary" endIcon={<DataSetIcon />}>
        Tertiary Button
      </Button>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use `endIcon={<IconComponent />}` to place an icon after the button label",
      },
    },
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <FlexBox direction="column" spacing={2}>
      <Button variant="primary" fullWidth>
        Primary Button
      </Button>
      <Button variant="secondary" fullWidth>
        Secondary Button
      </Button>
      <Button variant="tertiary" fullWidth>
        Tertiary Button
      </Button>
    </FlexBox>
  ),
  parameters: {
    docs: {
      description: {
        story: `Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use \`fullWidth\` to push the box out.`,
      },
    },
  },
};
