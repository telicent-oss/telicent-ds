import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Autocomplete from "./Autocomplete";

const meta: Meta<typeof Autocomplete> = {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
An opinionated wrapper around MUI **Autocomplete** for simple label/value option lists.

---

**How it works**
- Pass an array of \`{ label: string; value: string }\` options.
- The component is **controlled** via \`value\` (a string or \`null\`) and \`onChange\` (receives a string or \`null\`).
- It renders your DS \`<TextField>\` in \`renderInput\`, so all familiar props like \`label\`, \`helperText\`, \`error\`, \`size\`, and \`fullWidth\` work as expected.

---

**Props**
- \`label: string\` — Input label.
- \`value: string | null\` — Current selected option's \`value\`.
- \`onChange: (value: string | null) => void\` — Called with the new \`value\` (or \`null\`).
- \`options: { label: string; value: string }[]\`
- \`placeholder?: string\`
- \`disabled?: boolean\`
- \`error?: boolean\`
- \`helperText?: string\`
- \`fullWidth?: boolean\` (default \`true\`)
- \`size?: "small" | "medium"\` (default \`"small"\`)

**Tip:** To constrain width, wrap the component in a container (e.g. \`<div style={{ width: 280 }} />\`) since this wrapper doesn't expose \`sx\`.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

const demoOptions = [
  { label: "Afghanistan", value: "AF" },
  { label: "Albania", value: "AL" },
  { label: "Algeria", value: "DZ" },
  { label: "Andorra", value: "AD" },
  { label: "Angola", value: "AO" },
  { label: "Argentina", value: "AR" },
  { label: "Armenia", value: "AM" },
  { label: "Australia", value: "AU" },
  { label: "Austria", value: "AT" },
  { label: "Azerbaijan", value: "AZ" },
];

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <Autocomplete
        label="Select country"
        value={value}
        onChange={setValue}
        options={demoOptions}
        placeholder="Start typing…"
      />
    );
  },
};

export const Preselected: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>("AT");
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={demoOptions} />;
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <Autocomplete
        label="Country"
        value={value}
        onChange={setValue}
        options={demoOptions}
        helperText="Pick your country of residence"
        placeholder="Search countries"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value] = useState<string | null>("AU");
    return <Autocomplete label="Country" value={value} onChange={() => {}} options={demoOptions} disabled />;
  },
};

export const LongList: Story = {
  render: () => {
    const many = Array.from({ length: 100 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `opt-${i + 1}`,
    }));
    const [value, setValue] = useState<string | null>(null);
    return (
      <Autocomplete
        label="Lots of options"
        value={value}
        onChange={setValue}
        options={many}
        placeholder="Type to filter…"
      />
    );
  },
};
