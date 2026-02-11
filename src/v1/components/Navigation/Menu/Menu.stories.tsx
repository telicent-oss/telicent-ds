import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Box, Typography } from "@mui/material";

import { Menu } from "./Menu";
import IconButton from "../../buttons/Button/IconButton";
import { BinIcon, FloppyDiskIcon, GridIcon, MapIcon, UserIcon, XIcon } from "../../data-display";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const meta: Meta<typeof Menu> = {
  title: "Navigation/Menu",
  component: Menu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A generic, reusable **Menu** component that pairs a trigger (any button) with a list of menu options.

This is designed for common UI patterns like:
- **App switchers**
- **Overflow (kebab) menus**
- **Contextual actions** (e.g. "Edit", "Duplicate", "Delete")
- **Quick navigation** links

Unlike feature-specific menus, this component stays intentionally small:
- You provide the **trigger** via a \`button\` render prop.
- You provide menu \`options\` (label, optional icon, disabled state, optional link navigation).
- It handles anchoring, open/close state, and selection behavior.

---

### When & How to use it
Use **Menu** any time you want consistent menu behavior without re-implementing MUI anchoring and a11y wiring.

Example usage:

\`\`\`tsx
<Menu
  aria-label="actions-menu"
  menuId="actions-menu"
  options={[
    { id: "edit", label: "Edit", onClick: () => console.log("edit") },
    { id: "duplicate", label: "Duplicate", onClick: () => console.log("duplicate") },
    { id: "delete", label: "Delete", onClick: () => console.log("delete"), disabled: true },
  ]}
  button={(btnProps) => (
    <IconButton {...btnProps} aria-label="open menu">
      <GridIcon />
    </IconButton>
  )}
/>
\`\`\`
`,
      },
    },
    id: "menu-default",
  },
  decorators: (Story) => <Box sx={{ margin: "auto" }}>{Story()}</Box>,
} satisfies Meta<typeof Menu>;

export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    "aria-label": "menu",
    menuId: "menu-default",
    options: [
      { id: "profile", label: "Profile", onClick: () => console.log("Profile") },
      { id: "settings", label: "Settings", onClick: () => console.log("Settings") },
      { id: "logout", label: "Logout", onClick: () => console.log("Logout") },
    ],
    button: (btnProps) => (
      <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
    ),
  },
};

export const WithIconsAndDisabled: Story = {
  args: {
    "aria-label": "menu with icons",
    menuId: "menu-icons",
    options: [
      {
        id: "grid",
        label: "View grid",
        icon: (
          <Typography variant="caption">
            <GridIcon fontSize="small" color="primary" />
          </Typography>
        ),
      },
      {
        id: "save",
        label: "Save",
        icon: (
          <Typography variant="caption">
            <FloppyDiskIcon fontSize="small" color="primary" />
          </Typography>
        ),
      },
      {
        id: "delete",
        label: "Delete (disabled)",
        icon: (
          <Typography variant="caption">
            <BinIcon color="primary" />
          </Typography>
        ),
        disabled: true,
      },
    ],
    button: (btnProps) => (
      <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Menu options can include an optional `icon`, and can be disabled using `disabled: true`.",
      },
    },
  },
};

export const LinkNavigation: Story = {
  args: {
    "aria-label": "navigation menu",
    menuId: "menu-links",
    options: [
      { id: "docs", label: "Docs", href: "https://example.com/docs", target: "_blank" },
      { id: "status", label: "Status", href: "https://example.com/status", target: "_blank" },
      { id: "support", label: "Support", href: "https://example.com/support", target: "_blank" },
    ],
    button: (btnProps) => (
      <IconButton {...btnProps} aria-label="open navigation menu" color="primary">
        <GridIcon />
      </IconButton>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "If you provide `href`, the menu item will open a link (defaults to `_self` unless `target` is set).",
      },
    },
  },
};

export const WithDividerAndOnSelect: Story = {
  args: {
    "aria-label": "menu with divider",
    menuId: "menu-divider",
    options: [
      { id: "edit", label: "Edit", onClick: () => console.log("Edit") },
      { id: "duplicate", label: "Duplicate", onClick: () => console.log("Duplicate") },
      { id: "disabled", label: "Disabled Example", dividerAbove: true, disabled: true },
      { id: "delete", label: "Delete", onClick: () => console.log("Delete") },
    ],
    onSelect: (opt) => console.log("Selected:", opt.id),
    button: (btnProps) => (
      <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "You can add a divider before an option with `dividerAbove`, and also capture selection centrally via `onSelect`.",
      },
    },
  },
};
export const WithSelected: Story = {
  args: {
    "aria-label": "menu with selected item",
    menuId: "menu-selected",
    options: [
      {
        id: "profile",
        label: "Very long option name that exceeds typical width",
        onClick: () => console.log("Profile"),
      },
      { id: "settings", label: "Settings", onClick: () => console.log("Settings"), selected: true },
      { id: "logout", label: "Logout", onClick: () => console.log("Logout") },
    ],
    button: (btnProps) => (
      <IconButton {...btnProps} aria-label="open menu" color="primary">
        <GridIcon />
      </IconButton>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `selected: true` on a menu option to visually indicate the current selection when the menu opens (and optionally autofocus it, depending on Menu configuration).",
      },
    },
  },
};
