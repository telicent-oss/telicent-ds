import { Meta, StoryObj } from "@storybook/react";
import CopyToClipboard from "./CopyToClipboard";
import { Box } from "@mui/material";
import { useState } from "react";

const meta: Meta<typeof CopyToClipboard> = {
  title: "Inputs/CopyToClipboard",
  component: CopyToClipboard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A versatile 'Copy to Clipboard' button component built on top of Mui's \`Button\` and FontAwesome icons. It allows users to copy text to their clipboard and provides immediate visual feedback by changing the icon from a 'copy' icon to a 'check' icon.

By default, the icon inherits the app's primary color. However, this color can easily be customized by passing a different color through the \`sx\` prop.

## The component supports the following use cases:
- **Controlled mode:** Use the \`text\` and \`title\` props to define the content that will be copied and the button's tooltip text.
- **Icon Feedback:** The button dynamically changes the icon from a copy icon to a checkmark once the content is successfully copied to the clipboard.

---

### When & How to use it
- **Copying Links or Text:** Use this button in scenarios where users need to copy text or links to their clipboard (e.g., sharing URLs, copying ids).

Example usage:

\`\`\`jsx
<CopyToClipboard 
  text="http://example.com"
  title="Copy URL"
  ariaLabel="Copy URL button"
/>
\`\`\`
`,
      },
    },
    id: "copy-to-clipboard-default",
    ariaLabel: "copy uri",
  },
  decorators: (Story) => <Box sx={{ margin: "auto" }}>{Story()}</Box>,
} satisfies Meta<typeof CopyToClipboard>;

export default meta;

type Story = StoryObj<typeof CopyToClipboard>;


export const Default: Story = {
  args: {
    text: "this is a default example string",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button",
  },
};


export const Text: Story = {
  args: {
    text: "this is a primary",
    variant: "text",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button",
  },
};


export const Primary: Story = {
  args: {
    text: "this is a primary",
    color: "primary",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button",
  },
};

export const PrimaryText: Story = {
  args: {
    text: "this is a primary",
    color: "primary",
    variant: "text",
    title: "Copy to clipboard",
    ariaLabel: "Copy to clipboard button",
  },
};

export const WithCustomColour: Story = {
  args: {
    text: "this is a white color example string",
    title: "Copy to clipboard with white color",
    ariaLabel: "Copy to clipboard button with white color",
    sx: { color: "fuchsia", backgroundColor: 'darkslategrey' },
  },
};

export const WithSimulatedError = () => <CopyToClipboard text="This will fail" testFailure />;
