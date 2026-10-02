import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Button from "../../buttons/Button/Button";
import { Text } from "../../data-display/Text/Text";
import FlexBox from "../../layout/FlexBox";
import PopOver from "./Popover";

const meta: Meta<typeof PopOver> = {
  title: "Surfaces/PopOver",
  component: PopOver,
  tags: ["autodocs"],
  args: {
    onClose: fn(),
  },
  parameters: {
    docs: {
      description: {
        component: `
Dismissible modal-style surface anchored to another element. Thin wrapper over MUI's \`Popover\` with two DS opinions: elevation baked to \`3\`, and a \`width\` convenience prop that sets a fixed paper width.

MUI's \`Popover\` composes Modal + Paper + Popper-style positioning: click-outside dismisses, Escape dismisses, focus is trapped inside while open, and content sits on a raised paper surface. The DS wrapper keeps that contract intact and adds two conveniences.

---

### The opinion

- **\`elevation\` defaults to \`3\`.** The DS's mid-range shadow — high enough to read as "temporary overlay", not so high it competes with a Dialog. Pass \`elevation={n}\` to override.
- **\`width\` sets a fixed paper width via \`slotProps\`.** Reach for it when the callsite needs a specific width (a filter panel expected to match a column, a menu with long labels). Skip it for content that should size to its contents.

Every other MUI \`Popover\` prop passes through unchanged, spread last, so a callsite can override any DS default.

---

### When to use which

\`PopOver\` vs \`Popper\` vs \`Tooltip\` vs \`Menu\` — same shape (float content beside an anchor), different contract:

| Component | Backdrop | Click-outside dismiss | Focus trap | Paper surface | Reach for it when |
| --- | :---: | :---: | :---: | :---: | --- |
| \`PopOver\` | ✓ | ✓ | ✓ | ✓ (\`elevation={3}\`) | The floating content is interactive and modal in nature — a context menu, a filter panel, a user menu, a mini-form. |
| \`Popper\` | ✗ | ✗ | ✗ | ✗ | You want *just* positioning — a typeahead listbox, a hover card, a floating label. You'll bring your own container and dismiss. |
| \`Tooltip\` | ✗ | — | ✗ | ✓ (small chip) | Passive, hover-triggered hint. Not interactive. |
| \`DropdownButton\` / \`Menu\` | ✗ | ✓ | ✓ | ✓ | A button that opens a menu of actions — the DS's opinionated shape for the "trigger + list" case. |

The bright line: **is the floating content interactive?** If yes, and the user's focus should be trapped there until they dismiss it, use \`PopOver\`. If the content is a passive hint or you're building your own dismiss (e.g. an autocomplete listbox whose lifecycle is tied to input blur), use \`Popper\`. If it's a "trigger + list of actions" and both live together, reach for \`DropdownButton\` first — \`PopOver\` is the primitive, \`DropdownButton\` is the ready-made shape.

---

### Focus and dismiss

Because \`PopOver\` is built on Modal:

- **Focus is trapped** inside the popover while open — Tab/Shift+Tab cycle through focusable descendants.
- **Escape closes** — fires \`onClose(event, "escapeKeyDown")\`.
- **Click outside closes** — fires \`onClose(event, "backdropClick")\`. Distinguish the reason if you need to suppress one (a filter panel might dismiss on outside click but require a "Cancel" button for Escape).
- **Focus is restored** to the previously-focused element on close — usually the anchor button.
- **A backdrop is rendered** behind the paper. It's transparent by default, but consumes clicks — nothing under the popover receives them until it closes.

If any of those are wrong for your case, you almost certainly want \`Popper\` instead.

---

### Positioning

Positioning is Cartesian — \`anchorOrigin\` picks a point on the anchor, \`transformOrigin\` picks a point on the popover paper, and the two are aligned. Both accept \`{ vertical, horizontal }\` with named ends (\`top\` / \`center\` / \`bottom\` / \`left\` / \`right\`) or pixel offsets.

For pointing at a coordinate rather than an element, set \`anchorReference="anchorPosition"\` and pass \`anchorPosition={{ top, left }}\`. Useful for right-click context menus.

---

### Defaults

- \`elevation\`: \`3\` — via the wrapper. Override with \`elevation={n}\`.
- \`width\`: undefined — passing a number renders a fixed-width paper via \`slotProps.paper\`.
- Everything else follows MUI's \`Popover\` defaults (\`anchorOrigin\` \`{ vertical: "top", horizontal: "left" }\`, \`anchorReference\` \`"anchorEl"\`, backdrop transparent, focus trapped).

---

### Other supported features

Every MUI \`Popover\` prop passes through: \`open\` / \`onClose\`, \`anchorEl\`, \`anchorOrigin\` / \`transformOrigin\`, \`anchorReference\` / \`anchorPosition\`, \`marginThreshold\`, \`disableAutoFocus\` / \`disableEnforceFocus\` / \`disableRestoreFocus\` (escape hatches for a11y edge cases), \`transitionDuration\`, \`slots\` / \`slotProps\`.

---

### Example

\`\`\`tsx
import { PopOver, Text, Button, FlexBox } from "@telicent-oss/ds";
import { useRef, useState } from "react";

const FilterMenu = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button ref={anchorRef} onClick={() => setOpen(true)}>
        Filters
      </Button>

      <PopOver
        open={open}
        anchorEl={anchorRef.current}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        width={320}
      >
        <FlexBox direction="column" gap={1} sx={{ p: 2 }}>
          <Text variant="h3">Filter results</Text>
          {/* form fields */}
        </FlexBox>
      </PopOver>
    </>
  );
};
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the popover is mounted and visible. Controlled — hold it in the consumer.",
      table: { type: { summary: "boolean" }, category: "PopOver" },
    },
    onClose: {
      control: false,
      description:
        "Fired with `(event, reason)` when the popover requests dismissal. `reason` is `\"backdropClick\"` or `\"escapeKeyDown\"` — inspect it if you need to distinguish the two.",
      table: {
        type: { summary: '(event: {}, reason: "backdropClick" | "escapeKeyDown") => void' },
        category: "PopOver",
      },
    },
    anchorEl: {
      control: false,
      description:
        "The DOM element the popover is positioned against. Usually a button's ref `.current`. Ignored when `anchorReference=\"anchorPosition\"`.",
      table: { type: { summary: "Element | (() => Element) | null" }, category: "PopOver" },
    },
    anchorOrigin: {
      control: false,
      description:
        "Point on the anchor where the popover attaches. `{ vertical: 'top' | 'center' | 'bottom' | number, horizontal: 'left' | 'center' | 'right' | number }`.",
      table: {
        defaultValue: { summary: '{ vertical: "top", horizontal: "left" }' },
        category: "PopOver",
      },
    },
    transformOrigin: {
      control: false,
      description: "Point on the popover paper that aligns with the anchor's `anchorOrigin`.",
      table: {
        defaultValue: { summary: '{ vertical: "top", horizontal: "left" }' },
        category: "PopOver",
      },
    },
    anchorReference: {
      control: "radio",
      options: ["anchorEl", "anchorPosition", "none"],
      description:
        'Which anchoring mode to use. `"anchorEl"` (default) reads `anchorEl`; `"anchorPosition"` reads `anchorPosition={{ top, left }}` — useful for right-click menus. `"none"` positions at (0,0).',
      table: { defaultValue: { summary: "anchorEl" }, category: "PopOver" },
    },
    width: {
      control: { type: "number", min: 120, max: 640, step: 20 },
      description:
        "DS convenience: fixed width on the paper, in pixels. Emitted as `slotProps={{ paper: { sx: { width } } }}` so it composes with any callsite `slotProps`.",
      table: { type: { summary: "number" }, category: "PopOver (DS)" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof PopOver>;

export const Default: Story = {
  args: { open: false },
  parameters: {
    docs: {
      description: {
        story:
          "The base shape every other story varies. Click the button, a paper surface opens beneath it, dismiss via Escape or clicking outside. Note the focus trap: pressing Tab inside the popover cycles through its focusable descendants, not the surrounding page.",
      },
    },
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button onClick={(event) => setAnchorEl(event.currentTarget)}>Open PopOver</Button>
        <PopOver
          {...args}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <Text sx={{ p: 2 }}>The content of the popover.</Text>
        </PopOver>
      </div>
    );
  },
};

export const WithWidth: Story = {
  args: { open: false, width: 320 },
  parameters: {
    docs: {
      description: {
        story:
          "The DS `width` prop sets a fixed paper width via `slotProps`. Reach for it when the surface needs to match a specific column or hold labels of a known length. Omit it for content that should hug its intrinsic width.",
      },
    },
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button onClick={(event) => setAnchorEl(event.currentTarget)}>Filter results</Button>
        <PopOver
          {...args}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <FlexBox direction="column" gap={1} sx={{ p: 2 }}>
            <Text variant="h3">Filter results</Text>
            <Text variant="body2">Paper is fixed at 320px regardless of content width.</Text>
          </FlexBox>
        </PopOver>
      </div>
    );
  },
};

export const AsUserMenu: Story = {
  args: { open: false },
  parameters: {
    docs: {
      description: {
        story:
          "The canonical `PopOver` use case: a user menu opened from an avatar. Interactive content (buttons), focus trapped while open, click-outside or Escape dismisses. For a plainer button + list-of-actions shape, prefer `DropdownButton` — this story exists to show the primitive underneath.",
      },
    },
  },
  render: (args) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button onClick={(event) => setAnchorEl(event.currentTarget)}>John Doe</Button>
        <PopOver
          {...args}
          open={open}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          width={200}
        >
          <FlexBox direction="column" sx={{ py: 1 }}>
            <Button variant="text" sx={{ justifyContent: "flex-start", px: 2 }}>
              Profile
            </Button>
            <Button variant="text" sx={{ justifyContent: "flex-start", px: 2 }}>
              Settings
            </Button>
            <Button variant="text" sx={{ justifyContent: "flex-start", px: 2 }}>
              Sign out
            </Button>
          </FlexBox>
        </PopOver>
      </div>
    );
  },
};

export const AnchorPosition: Story = {
  args: { open: false },
  parameters: {
    docs: {
      description: {
        story:
          '`anchorReference="anchorPosition"` positions the popover at a viewport coordinate rather than beside an element. The classic use is a right-click context menu — capture the event\'s `clientX` / `clientY` and pass them as `anchorPosition`.',
      },
    },
  },
  render: (args) => {
    const [position, setPosition] = React.useState<{ top: number; left: number } | null>(null);

    return (
      <>
        <FlexBox
          onContextMenu={(event) => {
            event.preventDefault();
            setPosition({ top: event.clientY, left: event.clientX });
          }}
          alignItems="center"
          justifyContent="center"
          sx={(theme) => ({
            minHeight: 200,
            width: 480,
            padding: 4,
            border: `2px dashed ${theme.palette.primary.main}`,
            borderRadius: 1,
            backgroundColor: theme.palette.background.default,
            cursor: "context-menu",
          })}
        >
          <Text variant="h3">Right-click anywhere in this box</Text>
        </FlexBox>
        <PopOver
          {...args}
          open={Boolean(position)}
          anchorReference="anchorPosition"
          anchorPosition={position ?? undefined}
          onClose={() => setPosition(null)}
        >
          <FlexBox direction="column" sx={{ py: 1, minWidth: 160 }}>
            <Button variant="text" sx={{ justifyContent: "flex-start", px: 2 }}>
              Copy
            </Button>
            <Button variant="text" sx={{ justifyContent: "flex-start", px: 2 }}>
              Paste
            </Button>
            <Button variant="text" sx={{ justifyContent: "flex-start", px: 2 }}>
              Inspect
            </Button>
          </FlexBox>
        </PopOver>
      </>
    );
  },
};
