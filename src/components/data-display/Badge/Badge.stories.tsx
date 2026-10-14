import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import IconButton from "../../buttons/Button/IconButton";
import FlexBox from "../../layout/FlexBox";
import { Text } from "../Text/Text";
import Badge from "./Badge";

const meta = {
  title: "Data display/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A count or a dot on another element, such as the number of filters applied on a Refine button. MUI's \`Badge\` under the DS theme.

---

### The opinion

- **\`color="primary"\` by default.** The badge reads in the app colour, and its text comes from \`primary.contrastText\`.
- **Hidden from assistive technology.** The badge is decoration. What it counts belongs in the accessible name of what it sits on.
- **The DS shape.** A 20px pill, 11px bold, with a ring in the page background that stands it off what it overlaps. Clicks pass through to the host.

---

### Accessibility

The badge sets \`aria-hidden="true"\`, so a screen reader never hears a bare "2". The host must carry the count instead:

- **Right:** an \`IconButton\` named "Refine, 2 filters applied", with the badge showing 2.
- **Wrong:** an \`IconButton\` named "Refine", where the count exists only visually. That fails WCAG 1.1.1 and 4.1.2.

If a badge has no labelled host, announce it with \`slotProps={{ badge: { "aria-hidden": false } }}\`.

---

### Defaults

- \`color\`: \`"primary"\`.
- \`slotProps.badge["aria-hidden"]\`: \`true\`. Your \`slotProps.badge\`, object or function, is merged after it.

---

### Other supported features

- \`max\` caps the count: 120 with \`max={99}\` shows "99+".
- \`variant="dot"\` shows presence without a number.
- A count of \`0\` is hidden unless you pass \`showZero\`. \`invisible\` hides it outright.
- Placement is the callsite's: move the badge with \`sx\` on \`.MuiBadge-badge\` to suit the host's shape.

---

### When & how to use it

- **Use it** for a small count or a "something new" dot on a control.
- **Don't use it** for status text such as "Draft" or "Failed"; that's a \`Chip\`.

---

### Example

\`\`\`tsx
import { Badge, IconButton } from "@telicent-oss/ds";

<Badge badgeContent={appliedCount}>
  <IconButton
    aria-label={appliedCount ? \`Refine, \${appliedCount} filters applied\` : "Refine"}
    onClick={onOpen}
  >
    <i className="fa-solid fa-sliders" aria-hidden />
  </IconButton>
</Badge>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    badgeContent: { control: { type: "number" }, description: "The count." },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "error", "info", "success", "warning", "default"],
      description: 'DS default `"primary"`.',
    },
    max: { control: { type: "number" }, description: "Counts above it show as `max+`." },
    showZero: { control: { type: "boolean" }, description: "Show a count of 0." },
    invisible: { control: { type: "boolean" }, description: "Hide the badge." },
    variant: {
      control: { type: "select" },
      options: ["standard", "dot"],
      description: "`dot` shows presence without a number.",
    },
    slotProps: {
      control: false,
      description:
        "Merged after the DS default, so `badge['aria-hidden']` stays `true` unless you set it.",
      table: { type: { summary: "BadgeProps['slotProps']" } },
    },
    children: { control: false },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const Host: React.FC<{ label: string }> = ({ label }) => (
  <IconButton aria-label={label}>
    <i className="fa-solid fa-sliders" aria-hidden />
  </IconButton>
);

export const OnIconButton: Story = {
  args: { badgeContent: 2 },
  parameters: {
    docs: {
      description: {
        story:
          "The Refine pattern: the count is in the button's name, \"Refine, 2 filters applied\", and the badge is hidden from screen readers.",
      },
    },
  },
  render: (args) => (
    <Badge {...args}>
      <Host label={`Refine, ${args.badgeContent} filters applied`} />
    </Badge>
  ),
};

export const ZeroHidden: Story = {
  args: { badgeContent: 0 },
  parameters: {
    docs: {
      description: {
        story: "A count of 0 shows no badge. Pass `showZero` to show it.",
      },
    },
  },
  render: (args) => (
    <Badge {...args}>
      <Host label="Refine" />
    </Badge>
  ),
};

export const Max: Story = {
  args: { badgeContent: 120, max: 99 },
  parameters: {
    docs: {
      description: { story: "`max={99}` shows 120 as 99+. The host's name keeps the real count." },
    },
  },
  render: (args) => (
    <Badge {...args}>
      <Host label="Refine, 120 filters applied" />
    </Badge>
  ),
};

export const Dot: Story = {
  args: { variant: "dot", badgeContent: 1 },
  parameters: {
    docs: {
      description: {
        story: "`variant=\"dot\"` for presence without a number, such as unread activity.",
      },
    },
  },
  render: (args) => (
    <Badge {...args}>
      <Host label="Notifications, new activity" />
    </Badge>
  ),
};

export const AnnouncedBadge: Story = {
  args: { badgeContent: 3, slotProps: { badge: { "aria-hidden": false } } },
  parameters: {
    docs: {
      description: {
        story:
          "The rare badge with no labelled host. `aria-hidden: false` lets a screen reader read the count itself.",
      },
    },
  },
  render: (args) => (
    <FlexBox direction="row" alignItems="center" gap={2}>
      <Badge {...args}>
        <Text component="span">Inbox</Text>
      </Badge>
    </FlexBox>
  ),
};
