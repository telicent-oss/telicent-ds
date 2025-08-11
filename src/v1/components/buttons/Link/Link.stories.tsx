import { Meta, StoryObj } from "@storybook/react";
import Link from "./LinkButton";
import { Box } from "@mui/material";

const meta: Meta<typeof Link> = {
  title: "Buttons/Link",
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A button-styled link built on MUI's \`<Button>\` component, styled to match our design system guidelines for link interactions.

This component is used when a navigation or secondary action should *look* like a link but retain button semantics and behavior. 
It always renders with \`variant="text"\`, \`color="primary"\`, and ripple disabled.

**Features:**
- Subtle underline animation on hover
- Fully keyboard-accessible
- Strictly typed to avoid variant/color overrides
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  render: () => (
    <Box>
      <Link onClick={() => alert("Link clicked")}>Learn more</Link>
    </Box>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Box>
      <Link disabled>Unavailable link</Link>
    </Box>
  ),
};
