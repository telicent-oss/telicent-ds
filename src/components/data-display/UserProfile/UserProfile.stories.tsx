import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Box from "@mui/material/Box";

import UserProfile from "./UserProfile";
import UserProfileContent from "./UserProfileContent/UserProfileContent";
import TitleAndContent from "../Text/TitleAndContent/TitleAndContent";
import Divider from "../Divider/Divider";
import Button from "../../buttons/Button/Button";
import FlexBox from "../../layout/FlexBox";

const meta = {
  title: "Data display/User profile",
  component: UserProfile,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A user-identity trigger + dropdown that sits in the AppBar end slot. The
trigger renders a name, avatar, and chevron inline; clicking it opens a
right-aligned popover whose contents the app composes via \`children\`.

The DS owns the chrome — trigger button, dropdown anchoring, focus/dismiss
behaviour, a11y wiring. The app owns everything inside the dropdown
(user details rows, actions like Sign Out), typically composed from
\`UserProfileContent\` plus \`TitleAndContent\`, a \`Divider\`, and a primary
\`Button\`.

---

### Supported use cases

- **Name + avatar** — the default. Pass \`fullName\`; the name truncates
  responsively via a clamp and a title tooltip on overflow.
- **Icon-only** — omit \`fullName\` to render just the avatar and
  chevron. Use when the surrounding chrome already names the user, or
  when the dropdown surfaces the identity itself. This is the shape
  \`telicent-user-portal\` uses.
- **Custom id** — pass \`id\` for stable E2E selectors. The menu's id is
  derived as \`\${id}-menu\`, so multiple UserProfiles on the same page
  stay collision-free.

---

### Accessibility

- Trigger is a real \`<button>\` element (promoted via MUI Stack
  \`component="button"\`), not a clickable div. Native Enter / Space
  activation works for free; keyboard tab reaches it.
- Carries \`aria-haspopup="menu"\`, \`aria-expanded\` reflecting the open
  state, and \`aria-controls\` pointing at the menu id when open.
- The inner chevron is a decorative span (\`aria-hidden\`, \`tabIndex={-1}\`)
  rather than a nested interactive button — fixes the
  button-inside-button HTML the previous version produced.

---

### When & how to use it

- **In the AppBar end slot** — pair with \`AppInfo\` and \`AppSettings\` for
  the canonical Telicent app-header shape.
- **Compose the dropdown with \`UserProfileContent\`** — it wraps the row
  layout and spacing. Inside, use \`TitleAndContent\` for standard
  label:value pairs, \`Divider\` between sections, and a primary \`Button\`
  for Sign Out.

---

### Example

\`\`\`tsx
import {
  UserProfile,
  UserProfileContent,
  TitleAndContent,
  Divider,
  Button,
} from "@telicent-oss/ds";

<UserProfile id="user-profile" fullName={user.fullName}>
  <UserProfileContent>
    <TitleAndContent title="Username" content={user.username} />
    <TitleAndContent title="Email" content={user.email} />
    <TitleAndContent title="Deployed Organisation" content={user.org} />
  </UserProfileContent>
  <Divider sx={{ py: 1 }} />
  <Box sx={{ pt: 2 }}>
    <Button variant="primary" onClick={onSignOut}>Sign Out</Button>
  </Box>
</UserProfile>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    fullName: {
      control: "text",
      description:
        "The user's name shown next to the avatar. Truncates via a responsive clamp with a `title` tooltip on overflow. Omit for an icon-only trigger.",
      table: { type: { summary: "string" } },
    },
    id: {
      control: "text",
      description:
        'Lands on the trigger button for stable E2E selectors (project convention is `testIdAttribute: "id"`). The menu id is derived as `${id}-menu`. Defaults to the legacy hardcoded `"user-profile-menu"` for backwards compatibility when omitted.',
      table: { type: { summary: "string" } },
    },
    ariaLabel: {
      control: "text",
      description:
        'Accessible name for the trigger button — needed because `fullName` is hidden on small viewports and may be empty in icon-only mode. Default `"User menu"`.',
      table: { type: { summary: "string" } },
    },
    children: {
      control: false,
      description:
        "Dropdown contents. Compose from `UserProfileContent` for the row layout, plus `Divider` and a primary `Button` for actions.",
      table: { type: { summary: "ReactNode" } },
    },
  },
  decorators: [
    (Story) => (
      <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
        {Story()}
      </Box>
    ),
  ],
} satisfies Meta<typeof UserProfile>;

export default meta;
export type Story = StoryObj<typeof meta>;

const DropdownChildren = (
  <>
    <UserProfileContent>
      <TitleAndContent title="Username" content="Satoru Gojo" />
      <TitleAndContent title="Email" content="satoru.gojo@telicent.io" />
      <TitleAndContent title="Deployed Organisation" content="Telicent UK" />
    </UserProfileContent>
    <Divider sx={{ py: 1 }} />
    <FlexBox sx={{ pt: 2 }}>
      <Button
        variant="primary"
        startIcon={<i className="fa-solid fa-arrow-right-from-bracket" />}
        onClick={() => console.log("Sign Out")}
      >
        Sign Out
      </Button>
    </FlexBox>
  </>
);

export const Default: Story = {
  args: {
    fullName: "Satoru Gojo",
    children: DropdownChildren,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The canonical shape — name + avatar inline, dropdown with three identity rows (`TitleAndContent`) and a Sign Out button separated by a `Divider`. This is the composition every Telicent app assembles.",
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    children: DropdownChildren,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Omit `fullName` to render just the avatar and chevron — the shape `telicent-user-portal` uses when the username lives inside the dropdown rather than beside it. The dropdown contents are unchanged.",
      },
    },
  },
};

export const WithId: Story = {
  args: {
    id: "user-profile",
    fullName: "Satoru Gojo",
    children: DropdownChildren,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Supplies an `id` so E2E tests target the trigger as `#user-profile` and the opened menu as `#user-profile-menu`. The menu id derives from the prop — pages with multiple UserProfiles stay collision-free.",
      },
    },
  },
};

export const LongName: Story = {
  args: {
    fullName:
      "Alexander Montgomery-Fitzpatrick III, Senior Principal Engineer",
    children: DropdownChildren,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Long names clamp to a breakpoint-responsive `maxWidth` with ellipsis overflow. The full name is still available via the browser-native `title` tooltip on hover.",
      },
    },
  },
};
