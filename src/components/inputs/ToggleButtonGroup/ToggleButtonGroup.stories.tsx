import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { ToggleButtonGroup } from "./ToggleButtonGroup";
import { ToggleButton } from "../ToggleButton/ToggleButton";

const meta: Meta<typeof ToggleButtonGroup> = {
  title: "Inputs/ToggleButtonGroup",
  component: ToggleButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A set of mutually-related toggle buttons — a view switch, a density picker, a text-alignment control.

\`@mui/material\` ships the group; the DS adds the accessible name it leaves optional, and a pill treatment that replaces the \`sx\` block apps were hand-rolling.

---

### The opinion

- **An accessible name is required by the type.** Pass \`aria-label\` or \`aria-labelledby\`, exactly one. A group of buttons with no name leaves a screen-reader user to infer what the set controls (ADR-0001).
- **\`pill\` fills the selected button solidly.** MUI paints it \`alpha(colour, action.selectedOpacity)\`, which on a dark surface reads as disabled. The DS fills it with \`primary.main\` and its \`contrastText\`.
- **The ripple is off under \`pill\`.** It paints over a flat fill and makes a selected button look washed.
- **\`pill\` rounds every button, including the first and last.** MUI squares the inner edges to fuse the group into one bar; a pill group wants separate pills.

---

### Use it for

A small set of mutually exclusive views or modes where both options should stay visible, so the current state is readable without inferring it from what the control offers.

Reach for \`Tabs\` instead when the buttons select a *panel* — that is a tablist, with different semantics and keyboard behaviour. Reach for \`Switch\` when the choice is genuinely binary and one state is the default.

---

### Defaults

Nothing is baked. \`exclusive\`, \`size\`, \`orientation\` and the rest pass through to MUI unchanged.

Note \`exclusive\`'s upstream behaviour: clicking the already-selected button fires \`onChange\` with \`null\`. Guard it, or the group deselects into no state at all:

\`\`\`tsx
onChange={(_event, next) => { if (next !== null) setView(next); }}
\`\`\`

---

### Example

\`\`\`tsx
import { ToggleButton, ToggleButtonGroup } from "@telicent-oss/ds";

const [view, setView] = useState<"list" | "map">("list");

<ToggleButtonGroup
  pill
  exclusive
  size="small"
  aria-label="Result view"
  value={view}
  onChange={(_event, next: "list" | "map" | null) => {
    if (next !== null) setView(next);
  }}
>
  <ToggleButton value="list" aria-label="List view">List</ToggleButton>
  <ToggleButton value="map" aria-label="Map view">Map</ToggleButton>
</ToggleButtonGroup>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    pill: {
      control: "boolean",
      description:
        "Render as a pill group: bordered well, rounded buttons, solid fill on the selected one.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "ToggleButtonGroup (DS)",
      },
    },
    "aria-label": {
      control: "text",
      description:
        "The group's accessible name, as a literal string. Required unless `aria-labelledby` is given — the type is a union permitting exactly one (ADR-0001).",
      table: { type: { summary: "string" }, category: "ToggleButtonGroup (DS)" },
    },
    "aria-labelledby": {
      control: "text",
      description:
        "Id of a visible element naming the group. Required unless `aria-label` is given.",
      table: { type: { summary: "string" }, category: "ToggleButtonGroup (DS)" },
    },
    value: {
      control: false,
      description: "Selected value(s). Controlled — hold it in the consumer.",
      table: { category: "ToggleButtonGroup" },
    },
    exclusive: {
      control: "boolean",
      description: "Single-select. Emits `null` when the active button is clicked again.",
      table: { category: "ToggleButtonGroup" },
    },
    children: {
      control: false,
      table: { type: { summary: "ReactNode" }, category: "ToggleButtonGroup" },
    },
  },
};

export default meta;
// `typeof ToggleButtonGroup`, not `typeof meta`: the required
// accessible-name union makes Storybook infer `args: never` from meta,
// so every render-only story would demand an impossible `args`. Same
// shape as Tabs.stories.tsx, which has the same union.
type Story = StoryObj<typeof ToggleButtonGroup>;

export const Pill: Story = {
  parameters: {
    docs: {
      description: { story: "The pill treatment, and the shape most Telicent screens want." },
    },
  },
  render: () => {
    const [view, setView] = useState<"list" | "map">("list");
    return (
      <ToggleButtonGroup
        pill
        exclusive
        size="small"
        aria-label="Result view"
        value={view}
        onChange={(_event, next: "list" | "map" | null) => {
          if (next !== null) setView(next);
        }}
      >
        <ToggleButton value="list" aria-label="List view">
          List
        </ToggleButton>
        <ToggleButton value="map" aria-label="Map view">
          Map
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Without `pill`: MUI's fused bar with squared inner edges and a translucent selected state. Use it where the group should read as one segmented control rather than separate pills.",
      },
    },
  },
  render: () => {
    const [view, setView] = useState<"list" | "map">("list");
    return (
      <ToggleButtonGroup
        exclusive
        size="small"
        aria-label="Result view"
        value={view}
        onChange={(_event, next: "list" | "map" | null) => {
          if (next !== null) setView(next);
        }}
      >
        <ToggleButton value="list" aria-label="List view">
          List
        </ToggleButton>
        <ToggleButton value="map" aria-label="Map view">
          Map
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const DeselectHazard: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Unguarded, an `exclusive` group deselects when you click the active button — MUI fires `onChange` with `null`. Click the selected one to see it empty. Guard it unless no selection is a legitimate state.",
      },
    },
  },
  render: () => {
    const [view, setView] = useState<"list" | "map" | null>("list");
    return (
      <ToggleButtonGroup
        pill
        exclusive
        size="small"
        aria-label="Result view, unguarded"
        value={view}
        onChange={(_event, next: "list" | "map" | null) => setView(next)}
      >
        <ToggleButton value="list" aria-label="List view">
          List
        </ToggleButton>
        <ToggleButton value="map" aria-label="Map view">
          Map
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
