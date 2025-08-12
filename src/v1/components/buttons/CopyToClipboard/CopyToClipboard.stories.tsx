import { Meta, StoryObj } from "@storybook/react";
import CopyToClipboard from "./CopyToClipboard";
import { Box, Paper, Typography } from "@mui/material";
import { useState } from "react";

const meta: Meta<typeof CopyToClipboard> = {
  title: "Buttons/CopyToClipboard",
  component: CopyToClipboard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A versatile 'Copy to Clipboard' button component built on top of Mui's \`Button\` and FontAwesome icons. It allows users to copy text to their clipboard and provides immediate visual feedback by changing the icon from a 'copy' icon to a 'check' icon.

By default, the icon inherits the app's primary color. However, this color can easily be customized by passing a different color through the \`sx\` prop.

## The component supports the following use cases:
- **Controlled mode:** Use the \`text\` props to define the content that will be copied to the clipboard.
- **Icon Feedback:** The button dynamically changes the icon from a copy icon to a checkmark once the content is successfully copied to the clipboard.
- **Failure State:** This include a failure state that can be done by passing \`testFailure\` as a prop. 
- **Custom Success Message:** use \`successMsg\` prop to define a custom messsage that will be displayed on the tooltip on success.

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

export const CustomSuccessMessage: Story = {
  args: {
    text: "Hooray!",
    successMsg: "Hooaray!!",
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can customise the tooltip to display a different message when the copy to clipboard is successfull just pass a string to  `successMsg`",
      },
    },
  },
};

export const CustomStyle: Story = {
  args: {
    text: "Text for clipboard via WithCustomStyle",
    title: "Copy to clipboard with white color",
    ariaLabel: "Copy to clipboard button with white color",
    sx: { color: "fuchsia", backgroundColor: "darkslategrey" },
  },
};

export const Error: Story = {
  args: {
    testFailure: true,
    text: "This will fail",
  },
  parameters: {
    docs: {
      description: {
        story: "You can see below how the tooltip would render in case of an error.",
      },
    },
  },
};
