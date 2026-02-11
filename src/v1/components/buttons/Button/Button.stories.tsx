import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Box from "@mui/material/Box";

import Button from "./Button";
import DataSetIcon from "../../data-display/Icons/DataSetIcon";

const meta = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
A styled button component built on top of MUI’s \`<Button>\`, using our design system overrides. It supports standard variants (contained, outlined, text) as well as a custom \`style="base"\` variant.

---

### Supported Props

- **Variants:** \`contained\`, \`outlined\`, \`text\`
- **Styles:** Our \`style="base"\` prop render a base button with no styles at all.
- **Sizes:** \`small\`, \`medium\`, \`large\`
- **Icons:** Use \`startIcon\` or \`endIcon\` to enhance buttons visually.
- **Disable Elevation:** Optional \`disableElevation\` removes box-shadow.
- **Full Width:** Use \`fullWidth\` for block-style buttons.

---

### Example

\`\`\`tsx
<Button variant="contained" color="primary">
  Text
</Button>
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
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    variant: "contained",
  },
  parameters: {
    docs: {
      description: {
        story: "To match Primary style in the design use `color=primary ` and `variant=contained`",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    color: "primary",
    variant: "outlined",
  },
  parameters: {
    docs: {
      description: {
        story: "To match Secondary style in the design use `color=primary ` and `variant=outlined`",
      },
    },
  },
};

export const Text: Story = {
  render: (args) => (
    <>
      <Button variant="text">{args.children}</Button>
      <Button variant="text" disabled>
        {args.children}
      </Button>
    </>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <>
      <Button size="large" variant="contained">
        {args.children}
      </Button>
      <Button size="medium" variant="contained">
        {args.children}
      </Button>
      <Button size="small" variant="contained">
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
  args: {
    color: "primary",
    variant: "contained",
    startIcon: <DataSetIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: "Use `startIcon={<IconComponent />}` to place an icon before the button label",
      },
    },
  },
};

export const EndIcon: Story = {
  args: {
    color: "primary",
    variant: "contained",
    endIcon: <DataSetIcon />,
  },
  parameters: {
    docs: {
      description: {
        story: "Use `endIcon={<IconComponent />}` to place it after the label",
      },
    },
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    variant: "contained",
  },
  parameters: {
    docs: {
      description: {
        story: `Normally buttons will fill the container - including full width containers. All of these stories are surrounded by a <Box />, which constrains width. You can use \`fullWidth\` to push the box out.`,
      },
    },
  },
};
