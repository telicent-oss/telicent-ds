import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";
import Brand from "./Brand";

const meta: Meta<typeof Brand> = {
  title: "Brand/Brand",
  component: Brand,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The Brand component displays the Telicent wordmark with an optional \`appName\` and \`beta\` badge. 
It can be rendered with a link and support two sizes \`base\` for standard size and \`jumbo\` for larger landing or home layouts.
The app name is displayed in uppercase and styled using the primary theme color.

---

###  How to use it 

\`\`\`jsx
<Brand
  appName="Design System"
  beta=false
  size="jumbo"
  
/>
\`\`\`
`,
      },
    },
    id: "switch-default",
    ariaLabel: "switch",
  },
  args: {
    appName: "Graph",
    beta: false,
    size: "base",
  },
  argTypes: {
    appName: {
      control: "text",
    },
    beta: {
      control: "boolean",
    },
    size: {
      control: "radio",
      options: ["base", "jumbo"],
    },
    href: {
      control: "text",
    },
    target: {
      control: "text",
    },
    rel: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Brand>;

export const Default: Story = {};

export const WithBeta: Story = {
  args: {
    beta: true,
  },
};

export const Jumbo: Story = {
  args: {
    size: "jumbo",
    beta: true,
  },
  render: (args) => (
    <Box sx={{ p: 2 }}>
      <Brand {...args} />
    </Box>
  ),
};

export const WithoutAppName: Story = {
  args: {
    appName: undefined,
  },
};

export const AsLink: Story = {
  args: {
    href: "https://telicent.io",
    target: "_blank",
    rel: "noreferrer",
    beta: true,
  },
};

export const OnDarkBackground: Story = {
  args: {
    appName: "Admin",
    beta: true,
  },
  render: (args) => (
    <Box
      sx={{
        p: 3,
        bgcolor: "grey.900",
      }}
    >
      <Brand {...args} />
    </Box>
  ),
};
