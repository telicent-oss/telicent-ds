import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Autocomplete, { Option } from "./Autocomplete";
import { figmaDesign } from "../../../../../.storybook/figmaDesign";

const meta: Meta<typeof Autocomplete> = {
  title: "Inputs/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  parameters: {
    ...figmaDesign(
      "https://www.figma.com/design/DTHPiGn1VDLvUpiuxSqC0h/MUI-for-Figma-Material-UI-v5.16.0?node-id=6046-4249&t=jap5NMqoYYKJjVJz-4",
    ),
    docs: {
      description: {
        component: `
A Design System wrapper around MUI **Autocomplete** that follows **MUI’s expected value model**.

---

## How MUI expects Autocomplete to work

MUI Autocomplete is designed to be controlled using the **actual option object(s)**, not just an id.

- **Single select**: \`value\` should be \`Option | null\`
- **Multi select**: \`value\` should be \`Option[]\` and you set \`multiple\`

This is important because MUI needs the full option object to:
- Render the selected label(s) correctly
- Match options to selected values (using \`isOptionEqualToValue\`)
- Render tags (chips) in \`multiple\` mode
- Handle keyboard interactions and deletion (tag props)

This wrapper keeps that model so you don’t have to do id-to-option mapping inside the component.

---

## Controlled usage in apps

### Single select
Store the selected **Option** (or \`null\`) in state:

\`\`\`tsx
const [country, setCountry] = useState<Option | null>(null);

<Autocomplete
  label="Country"
  options={options}
  value={country}
  onChange={setCountry}
/>
\`\`\`

### Multi select (chips)
Store an array of **Option**:

\`\`\`tsx
const [countries, setCountries] = useState<Option[]>([]);

<Autocomplete
  multiple
  label="Countries"
  options={options}
  value={countries}
  onChange={setCountries}
/>
\`\`\`

### If your app stores ids (e.g. in a form)
Keep this component MUI-native, and map at the app layer:

\`\`\`tsx
// app stores countryCode: string | null
const selected = options.find(o => o.value === countryCode) ?? null;

<Autocomplete
  label="Country"
  options={options}
  value={selected}
  onChange={(opt) => setCountryCode(opt?.value ?? null)}
/>
\`\`\`

This keeps the DS component simple while still supporting id-based form state.

---

## Props
- \`label: string\` — Input label.
- \`options: Option[]\` — Array of \`{ label; value; icon? }\`.
- **Single mode**
  - \`value: Option | null\`
  - \`onChange: (value: Option | null) => void\`
- **Multiple mode**
  - \`multiple: true\`
  - \`value: Option[]\`
  - \`onChange: (value: Option[]) => void\`
- \`placeholder?: string\`
- \`disabled?: boolean\`
- \`error?: boolean\`
- \`helperText?: string\`
- \`fullWidth?: boolean\` (default \`true\`)
- \`size?: "small" | "medium"\` (default \`"small"\`)
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

const demoOptions: Option[] = [
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
    const [value, setValue] = useState<Option | null>(null);
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
    const [value, setValue] = useState<Option | null>(demoOptions.find((o) => o.value === "AT") ?? null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={demoOptions} />;
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [value, setValue] = useState<Option | null>(null);
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
    const [value] = useState<Option | null>(demoOptions.find((o) => o.value === "AU") ?? null);
    return <Autocomplete label="Country" value={value} onChange={() => {}} options={demoOptions} disabled />;
  },
};

export const LongList: Story = {
  render: () => {
    const many: Option[] = Array.from({ length: 50 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `opt-${i + 1}`,
    }));
    const [value, setValue] = useState<Option | null>(null);
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

export const MultiSelect: Story = {
  render: () => {
    const many: Option[] = Array.from({ length: 10 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `opt-${i + 1}`,
    }));
    const [values, setValues] = useState<Option[]>([]);
    return <Autocomplete multiple label="Countries" value={values} onChange={setValues} options={many} />;
  },
};
