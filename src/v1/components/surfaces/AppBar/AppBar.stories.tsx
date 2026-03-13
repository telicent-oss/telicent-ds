import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "@mui/material";

import AppBar from "./AppBar";
import { AppSwitch, Divider, TitleAndContent, UserProfile } from "../../data-display";
import { Button } from "../../buttons";
import { appList } from "../../data-display/AppSwitch/AppSwitch.stories";
import { figmaDesign } from "../../../../../.storybook/figmaDesign";

const meta: Meta<typeof AppBar> = {
  title: "Surfaces/AppBar",
  component: AppBar,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A branded top-level navigation component built on MUI's \`<AppBar>\` with Telicent design-system styling. 
It supports a centered brand area, optional application name, version label, and flexible content areas on the left and right for things like app switching, user profile actions, or sign-out buttons.

---

### When & How to use it
- **Application headers:** Use at the top of a product or platform page.
- **Branding + navigation:** Ideal when you need consistent Telicent branding with contextual actions.
- **Flexible layouts:** Use \`startChild\` for left-side content such as an app switcher, and \`endChild\` for right-side content such as a user profile or action buttons.
- **Clickable:** Pass \`href\` to make this component clickabout, out of the box it opens in a blank tab.

\`\`\`jsx
<AppBar
  appName="Catalogue"
  isElevated
  href="/"
  startChild={<AppSwitch apps={appList} />}
  endChild={
    <Button color="primary" variant="contained">
      Sign Out
    </Button>
  }
/>
\`\`\`

---

### Layout behaviour
The AppBar uses a three-column grid layout:

- left area for supporting actions
- centered brand area
- right area for user actions

This keeps the brand visually centered while allowing flexible content on either side.
`,
      },
    },
    ...figmaDesign(
      "https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=5870-18322&t=M1U919ZxRbInOHt7-4",
    ),
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: "100%" }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    appName: {
      control: "text",
      description: "Optional application name displayed alongside the Telicent brand.",
    },
    version: {
      control: "text",
      description: "Optional version label displayed next to the brand area.",
    },
    href: {
      control: "text",
      description: "Optional URL that turns the centered brand area into a link.",
    },
    target: {
      control: "text",
      description: "Target browsing context for the brand link.",
    },

    beta: {
      control: "boolean",
      description: "If true, displays a beta badge next to the branding.",
    },
    isElevated: {
      control: "boolean",
      description: "If true, applies elevation to the AppBar.",
    },
    disableBrand: {
      control: "boolean",
      description: "If true, hides the Telicent branding elements.",
    },
    position: {
      control: "select",
      options: ["fixed", "absolute", "sticky", "static", "relative"],
      description: "Controls the CSS position of the AppBar.",
    },
  },
} satisfies Meta<typeof AppBar>;

export default meta;

type Story = StoryObj<typeof AppBar>;

const UserProfileExample = (
  <UserProfile fullName="JohnDoe@company.co.uk">
    <TitleAndContent title="Username" content="John Doe" />
    <TitleAndContent title="Email" content="JohnDoe@company.co.uk" />
    <TitleAndContent title="Deployed Organisation" content="Company UK" />
    <TitleAndContent title="Version number" content="1.2.3" />
    <Divider />
    <Box sx={{ pt: 1 }}>
      <Button
        onClick={() => console.log("Sign Out clicked")}
        color="primary"
        variant="contained"
        startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}
        data-testid="signOut"
      >
        Sign Out
      </Button>
    </Box>
  </UserProfile>
);

export const Default: Story = {
  args: {},
};

export const WithSignOutButton: Story = {
  args: {
    appName: "Catalogue",
    endChild: (
      <Button color="primary" variant="contained" startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}>
        Sign Out
      </Button>
    ),
  },
};

export const WithNoBrand: Story = {
  args: {
    disableBrand: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample,
  },
};

export const ClickableBrand: Story = {
  args: {
    appName: "Catalogue",
    href: "https://telicent.io",
    target: "_blank",
  },
};

export const UsageExample: Story = {
  args: {
    appName: "Catalogue",
    isElevated: true,
    startChild: <AppSwitch apps={appList} />,
    endChild: UserProfileExample,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Recommended application-header setup with branding, app navigation on the left, and a primary action on the right.",
      },
    },
  },
};
