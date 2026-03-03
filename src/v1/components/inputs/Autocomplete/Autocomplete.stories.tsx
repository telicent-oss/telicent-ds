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

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

type Story = StoryObj<typeof Autocomplete>;

const countryOptions: Option[] = [
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
        options={countryOptions}
        placeholder="Start typing…"
      />
    );
  },
};

export const Preselected: Story = {
  render: () => {
    const [value, setValue] = useState<Option | null>(countryOptions.find((o) => o.value === "AT") ?? null);
    return <Autocomplete label="Select country" value={value} onChange={setValue} options={countryOptions} />;
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
        options={countryOptions}
        helperText="Pick your country of residence"
        placeholder="Search countries"
      />
    );
  },
};

export const Disabled: Story = {
  render: () => {
    const [value] = useState<Option | null>(countryOptions.find((o) => o.value === "AU") ?? null);
    return <Autocomplete label="Country" value={value} onChange={() => {}} options={countryOptions} disabled />;
  },
};

export const AsyncLoading: Story = {
  render: () => {
    const [options, setOptions] = useState<Option[]>([]);
    const [value, setValue] = useState<Option | null>(null);
    const [loading, setLoading] = useState(false);

    const load = async () => {
      setLoading(true);
      await wait(900);
      setOptions(countryOptions);
      setLoading(false);
    };

    return (
      <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
        <Autocomplete
          label="Country (async)"
          options={options}
          value={value}
          onChange={setValue}
          placeholder={loading ? "Loading…" : "Start typing…"}
          disabled={loading}
          loading={loading}
          onOpen={() => {
            if (options.length === 0 && !loading) void load();
          }}
          noOptionsText={loading ? "Fetching countries…" : "No matches"}
        />

        <div style={{ fontSize: 12, opacity: 0.8 }}>Selected: {value ? `${value.label} (${value.value})` : "—"}</div>
      </div>
    );
  },
};

export const StoresIdInFormState: Story = {
  render: () => {
    // what a form library often stores
    const [countryCode, setCountryCode] = useState<string | null>("AT");

    const selected = countryOptions.find((o) => o.value === countryCode) ?? null;

    return (
      <div style={{ display: "grid", gap: 12, maxWidth: 420 }}>
        <Autocomplete
          label="Country (form stores id)"
          options={countryOptions}
          value={selected}
          onChange={(opt) => setCountryCode(opt?.value ?? null)}
          placeholder="Start typing…"
        />

        <div style={{ fontSize: 12, opacity: 0.8 }}>Form value (id): {countryCode ?? "—"}</div>
      </div>
    );
  },
};

export const MultiSelectWithLimit: Story = {
  render: () => {
    const [values, setValues] = useState<Option[]>([]);
    const limit = 3;

    return (
      <div style={{ display: "grid", gap: 12, maxWidth: 520 }}>
        <Autocomplete
          multiple
          label={`Pick up to ${limit} countries`}
          options={countryOptions}
          value={values}
          onChange={setValues}
          placeholder="Choose…"
          getOptionDisabled={(opt) => values.length >= limit && !values.some((v) => v.value === opt.value)}
        />

        <div style={{ fontSize: 12, opacity: 0.8 }}>
          Selected ({values.length}/{limit}): {values.length ? values.map((v) => v.label).join(", ") : "—"}
        </div>
      </div>
    );
  },
};
