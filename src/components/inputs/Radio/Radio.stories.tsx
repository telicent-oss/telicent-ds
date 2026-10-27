import { Box } from "@mui/material";
import { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import RadioGroup from "../RadioGroup/RadioGroup";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  title: "Inputs/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A single radio input built on MUI's \`<Radio>\` with DS theming. Pair with \`<RadioGroup>\` when offering a choice between several mutually-exclusive options; use standalone only for the (rare) one-off two-state case where a \`Switch\` would be wrong semantically.

---

### The opinion

- **\`color="primary"\` is baked.** The \`color\` prop is omitted from \`RadioProps\` so a callsite can't pick a different accent. The DS has one accent per theme — the current theme's \`primary\` — and inputs follow it. Matches \`Switch\` and \`Checkbox\`.
- **\`label\` is a Radio prop, not a wrapping concern.** When you pass \`label\`, the wrapper internally pairs the control with a \`FormControlLabel\` — the three-line \`<FormControlLabel value="x" control={<Radio />} label="X" />\` composition becomes \`<Radio value="x" label="X" />\`. \`value\` is routed to the \`FormControlLabel\` so \`RadioGroup\` selection resolves correctly.
- **No label → no wrapper.** Standalone Radio renders only the control.

---

### Defaults

- \`color\`: \`primary\` — not exposed; the DS owns the accent choice.
- \`labelPlacement\`: \`end\` — matches Switch and MUI.

---

### When & how to use it

- **Pair with \`RadioGroup\`** for mutually-exclusive options.
- **Reach for \`Switch\`** when the choice is on/off for a single setting.
- **Reach for \`Checkbox\`** when more than one option can be selected at once.

---

### Example

\`\`\`tsx
import { Radio, RadioGroup } from "@telicent-oss/ds";

const BackupType = () => {
  const [value, setValue] = useState("full");
  return (
    <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
      <Radio value="full" label="Full backup" />
      <Radio value="incremental" label="Incremental" />
    </RadioGroup>
  );
};
\`\`\`
`,
      },
    },
    id: "radio-default",
    ariaLabel: "radio",
  },
  decorators: [(Story) => <Box sx={{ margin: "auto" }}>{Story()}</Box>],
  argTypes: {
    label: {
      control: "text",
      description:
        "Caption rendered next to the radio. When set, the component internally wraps with `FormControlLabel` and routes `value` to the label so `RadioGroup` selection still binds.",
      table: { type: { summary: "ReactNode" }, category: "Radio (DS)" },
    },
    labelPlacement: {
      control: { type: "radio" },
      options: ["end", "start", "top", "bottom"],
      description:
        "Where the label sits relative to the control. Only applies when `label` is set.",
      table: { defaultValue: { summary: "end" }, category: "Radio (DS)" },
    },
    checked: {
      control: "boolean",
      description:
        "Controlled checked state. Pair with `onChange` and hold the state in the consumer, or use `defaultChecked` for uncontrolled.",
      table: { type: { summary: "boolean" }, category: "Radio" },
    },
    disabled: {
      control: "boolean",
      description: "Render the control inert.",
      table: { defaultValue: { summary: "false" }, category: "Radio" },
    },
    required: {
      control: "boolean",
      description: "Required attribute on the underlying input.",
      table: { defaultValue: { summary: "false" }, category: "Radio" },
    },
    value: {
      control: "text",
      description: "The value this radio contributes to its parent `RadioGroup`.",
      table: { type: { summary: "string" }, category: "Radio" },
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { id: "radio-default", value: "option-a" },
  parameters: {
    docs: {
      description: {
        story:
          "A bare, standalone radio with no label. Rare — radios almost always ship inside a `RadioGroup`. Shown here to demonstrate the no-label branch.",
      },
    },
  },
};

export const WithLabel: Story = {
  args: {
    id: "radio-with-label",
    value: "option-a",
    label: "Full backup",
    defaultChecked: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "`label` collapses the usual `<FormControlLabel value='x' control={<Radio />} label='X' />` composition into a single Radio call. The wrapper handles the pairing internally.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    id: "radio-disabled",
    value: "option-a",
    label: "Not available",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "`disabled` greys the control and blocks pointer / keyboard interaction.",
      },
    },
  },
};

export const InsideRadioGroup: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The intended shape. `RadioGroup` owns the selected `value`; each `Radio` carries its own `value` and `label`. `value` routes through the internal `FormControlLabel` so the group's selection logic resolves correctly even though the DS wrapper hides the FormControlLabel from the callsite.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("full");
    return (
      <RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="full" label="Full backup" />
        <Radio value="incremental" label="Incremental backup" />
        <Radio value="snapshot" label="Snapshot only" />
      </RadioGroup>
    );
  },
};
