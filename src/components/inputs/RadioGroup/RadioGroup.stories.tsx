import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import RadioGroup from "./RadioGroup";
import Radio from "../Radio/Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Inputs/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Container that groups several \`<Radio>\`s into a single mutually-exclusive choice. Thin re-export of MUI's \`RadioGroup\` — the DS adds no opinion of its own here, it's exported so apps can import the whole radio set from \`@telicent-oss/ds\` without reaching into \`@mui/material\`.

The opinionated piece of the pair is \`<Radio>\`; this is the container.

---

### Defaults

None baked. Row/column layout, selection, and change handling all pass through to MUI.

---

### Example

\`\`\`tsx
import { Radio, RadioGroup } from "@telicent-oss/ds";

const [value, setValue] = useState("full");

<RadioGroup value={value} onChange={(e) => setValue(e.target.value)}>
  <Radio value="full" label="Full backup" />
  <Radio value="incremental" label="Incremental" />
</RadioGroup>
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Column: Story = {
  parameters: {
    docs: {
      description: {
        story: "Default vertical stack. The common shape — one option per row.",
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

export const Row: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "`row` lays the options horizontally. Use for 2–3 short options where the horizontal shape reads cleaner than a stack.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState("yes");
    return (
      <RadioGroup row value={value} onChange={(e) => setValue(e.target.value)}>
        <Radio value="yes" label="Yes" />
        <Radio value="no" label="No" />
      </RadioGroup>
    );
  },
};
