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

- \`primary\` - main action button
- \`secondary\` - secondary action button
- \`tertiary\` - tertiary action button with neutral colour
- \`base\` - unstyled button base

---

### Supported Props

- **Variants:** \`primary\`, \`secondary\`, \`tertiary\`, \`base\`
- **Sizes:** \`small\`, \`medium\`, \`large\`
- **Icons:** Use \`startIcon\` or \`endIcon\` to enhance buttons visually
- **Full Width:** Use \`fullWidth\` for block-style buttons
- **SX Overrides:** Use \`sx\` for small visual adjustments where needed

---

### Example

\`\`\`tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>
<Button variant="base">Base</Button>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  args: {
    children: "Button",
    onClick: fn(),
    variant: "primary",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "base"],
    },
  },
  decorators: [(Story) => <Box sx={{ button: { marginInline: 2 }, a: { marginInline: 2 } }}>{Story()}</Box>],
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
        story: 'Primary button using `variant="primary"`',
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
        story: 'Secondary button using `variant="secondary"`',
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
        story: 'Tertiary button using `variant="tertiary"`',
      },
    },
  },
};

export const Base: Story = {
  args: {
    variant: "base",
  },
  parameters: {
    docs: {
      description: {
        story: 'Base button using `variant="base"`',
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
  render: () => (
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
        story: "Use `startIcon={<IconComponent />}` to place an icon before the button label.",
      },
    },
  },
};

export const EndIcon: Story = {
  render: () => (
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
        story: "Use `endIcon={<IconComponent />}` to place an icon after the button label.",
      },
    },
  },
};

export const FullWidth: Story = {
  render: () => (
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
        story:
          "Normally buttons will fill the container, including full width containers. These stories are surrounded by a constrained container, so `fullWidth` makes the button stretch to fill it.",
      },
    },
  },
};

export const SXOverrides: Story = {
  render: () => (
    <>
      <Button variant="primary" sx={{ minWidth: 220 }}>
        Wider Primary Button
      </Button>
      <Button variant="secondary" sx={{ borderRadius: 8 }}>
        Rounded Secondary Button
      </Button>
      <Button variant="tertiary" sx={{ px: 4 }}>
        Padded Tertiary Button
      </Button>
    </>
  ),
  parameters: {
    docs: {
      description: {
        story: "Use `sx` for small visual adjustments without changing the core variant styling.",
      },
    },
  },
};
