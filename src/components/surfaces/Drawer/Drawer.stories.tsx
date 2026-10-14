import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Button from "../../buttons/Button/Button";
import XIcon from "../../data-display/Icons/XIcon";
import { H2, Text } from "../../data-display/Text/Text";
import FlexBox from "../../layout/FlexBox";
import Drawer, { type DrawerProps } from "./Drawer";

const meta = {
  title: "Surfaces/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A controlled side sheet for a task done beside the page: filters, details, settings. MUI's \`Drawer\` under the DS theme.

---

### The opinion

- **Controlled.** The caller owns \`open\` and \`onClose\`. Escape, a backdrop click and your close button all go through \`onClose\`, so dismissal has one path. A form inside can discard its draft there and know it ran on every dismissal.
- **\`width\`.** A width for a left or right panel, in px when a number. No more \`PaperProps={{ sx: { width } }}\`.
- **Capped at the viewport.** A temporary (modal) drawer's paper has \`maxWidth: 100vw\`, so a fixed width never runs off a narrow screen.

---

### Accessibility

- It's modal: focus moves inside when it opens, is trapped while it's open, and returns to the trigger when it closes (WCAG 2.4.3).
- Give the trigger \`aria-expanded\`, and the panel a heading and a labelled close button (WCAG 4.1.2).

---

### Defaults

- \`width\`: unset. Pass one; MUI otherwise sizes the paper to its content.
- \`maxWidth\`: \`100vw\`, on temporary drawers only. The deprecated, persistent \`InsetDrawer\` keeps its own layout.

---

### Other supported features

- Every MUI \`Drawer\` prop passes through: \`anchor\`, \`variant\`, \`PaperProps\` (your \`sx\` merges after \`width\`), \`ModalProps\`.
- The paper is a flex column, so a header and footer stay put while a \`flex: 1\` body scrolls.

---

### When & how to use it

- **Use it** for a side task with its own controls, such as a filter panel with Apply.
- **Don't use it** for a small contextual overlay; reach for \`PopOver\`.
- **Not for the map inset.** The deprecated \`InsetDrawer\` is the map's ref-driven panel, kept for existing consumers.

---

### Example

\`\`\`tsx
import { Button, Drawer, FlexBox, Text, XIcon } from "@telicent-oss/ds";

<Drawer anchor="right" width={420} open={isOpen} onClose={onClose}>
  <FlexBox direction="row" justifyContent="space-between" sx={{ px: 3, py: 2 }}>
    <Text component="h2">Refine</Text>
    <Button variant="text" aria-label="Close refine" onClick={onClose}>
      <XIcon />
    </Button>
  </FlexBox>
  <FlexBox sx={{ flex: 1, overflowY: "auto", px: 3 }}>{filters}</FlexBox>
  <FlexBox direction="row" justifyContent="flex-end" sx={{ px: 3, py: 2 }}>
    <Button variant="primary" onClick={onApply}>Apply</Button>
  </FlexBox>
</Drawer>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    width: {
      control: { type: "number" },
      description: "Width of a left or right panel, in px when a number. Capped at the viewport.",
      table: { type: { summary: "number | string" } },
    },
    anchor: {
      control: { type: "select" },
      options: ["left", "right", "top", "bottom"],
      description: "The edge the drawer opens from.",
    },
    open: { control: { type: "boolean" }, description: "Controlled. The caller owns it." },
    onClose: { action: "closed", description: "Escape, a backdrop click, or your close button." },
    children: { control: false },
  },
  args: { onClose: fn() },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Sheet: React.FC<Partial<DrawerProps> & { body?: React.ReactNode }> = ({ body, ...args }) => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <>
      <Button variant="primary" aria-expanded={open} onClick={() => setOpen(true)}>
        Open drawer
      </Button>
      <Drawer anchor="right" {...args} open={open} onClose={close}>
        <FlexBox
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ px: 3, py: 2, borderBottom: 1, borderColor: "divider" }}
        >
          <H2 sx={{ fontSize: 20 }}>Refine</H2>
          <Button variant="text" aria-label="Close refine" onClick={close} sx={{ minWidth: 0 }}>
            <XIcon />
          </Button>
        </FlexBox>
        <FlexBox sx={{ flex: 1, overflowY: "auto", px: 3, py: 2 }}>
          {body ?? <Text>Panel content</Text>}
        </FlexBox>
        <FlexBox
          direction="row"
          justifyContent="flex-end"
          sx={{ px: 3, py: 2, borderTop: 1, borderColor: "divider" }}
        >
          <Button variant="primary" onClick={close}>
            Apply
          </Button>
        </FlexBox>
      </Drawer>
    </>
  );
};

export const Default: Story = {
  args: { open: false },
  parameters: {
    docs: {
      description: {
        story:
          "Opened from a button. The close button, Escape and a backdrop click all close it through `onClose`.",
      },
    },
  },
  render: () => <Sheet />,
};

export const Width: Story = {
  args: { open: false, width: 420 },
  parameters: {
    docs: {
      description: { story: "`width={420}` from the right: the filter panel's shape." },
    },
  },
  render: (args) => <Sheet width={args.width} />,
};

export const CappedAtViewport: Story = {
  args: { open: false, width: 1600 },
  parameters: {
    docs: {
      description: {
        story:
          "A width wider than the screen stops at the viewport, so the sheet never runs off a narrow window.",
      },
    },
  },
  render: (args) => <Sheet width={args.width} />,
};

export const HeaderBodyFooter: Story = {
  args: { open: false, width: 420 },
  parameters: {
    docs: {
      description: {
        story:
          "Long content scrolls in a `flex: 1` body between a fixed header and footer, because the paper is a flex column.",
      },
    },
  },
  render: (args) => (
    <Sheet
      width={args.width}
      body={
        <FlexBox direction="column" gap={1}>
          {Array.from({ length: 60 }, (_, i) => (
            <Text key={i}>Filter option {i + 1}</Text>
          ))}
        </FlexBox>
      }
    />
  ),
};
