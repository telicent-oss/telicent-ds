import { Meta, StoryObj } from "@storybook/react-vite";
import Select, { Options } from "./Select";
import { Box, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import Button from "../../buttons/Button/Button";
import PlusCircleIcon from "../../data-display/Icons/PlusCircleIcon";
import { userEvent, within } from "storybook/test";

const OPTIONS: Options[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const meta: Meta<typeof Select> = {
  title: "Inputs/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A lightweight dropdown component built on Mui's \`<Select>\` with our design-system theming and overrides. It supports both controlled **and** uncontrolled modes: 

- **Controlled mode:** Pass \`value\` and  \`onChange\` to fully drive the selected value from the parent state.
- **Uncontrolled mode:** Pass \`defaultValue\` and \`onChange\` but omit \`value\` to let the component manage its own state after mount.

---

### When & How to use it 
 - **Forms & Filters:** use it in any place you need the user to choose one value from a short list (status picker, category filter, settings panel).

 - **No Internal State:** it has no internal state, you'll need to pass \`value\` and \`onChange\`.

 - **Label is optional:** only renders the label if you pass the \`label\` prop. You can choose to omit the prop for a cleaner label-free form.
 
 - **Min Width:** It has a min width by default that can be customized by using the \`width\` prop.

 - **Footer slot:** pass the optional \`footer\` prop to render an action below the options (e.g. a "+ Create new …" button), separated by a divider. The footer is **not** selectable as a value. Use the render-function form \`footer={({ closeMenu }) => …}\` to dismiss the dropdown from your handler (see the **WithFooter** story), or pass a plain node when you don't need to close the menu yourself.


\`\`\`jsx
<Select 
  label="Select an option"
  value={selectedValue}
  id="select-demo"
  options={options}
  width={300}
  onChange={handleChange}
  disabled={false}
/>
\`\`\`
`,
      },
    },
    id: "select-default",
    ariaLabel: "select-dropdown",
    options: OPTIONS,
  },
  decorators: (Story) => <Box sx={{ margin: "auto" }}>{Story()}</Box>,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const RenderSelect = ({ ...args }) => {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelected(event.target.value as string);
  };

  return (
    <Select
      color="primary"
      label="Select Option"
      value={selected}
      onChange={handleChange}
      options={OPTIONS}
      id="selected-demo"
      {...args}
    />
  );
};

export const Default: Story = {
  args: {
    label: "Select an option",
    value: "option1",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: "Select an option",
    value: "none",
    id: "select-disabled",
    options: OPTIONS,
    width: 300,
    onChange: () => {},
    disabled: true,
  },
};

export const WithCustomWidth: Story = {
  args: {
    label: "Select an option",
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    width: 500,
    onChange: () => {},
  },
};

export const WithNoLabel: Story = {
  args: {
    value: "option2",
    id: "select-disabled",
    options: OPTIONS,
    onChange: () => {},
  },
};

/**
 * This exemple is set up using useState to simulate how it would
 * work on the app, how the selected item is styled
 *
 * Refer back to the top of the document on how to implement
 */
export const ExampleWithOnChange: Story = {
  render: (args) => <RenderSelect {...args} />,
  args: {
    width: 250,
    disabled: false,
  },
};

const OWNER_OPTIONS: Options[] = [
  { value: "mcga", label: "Maritime Coastguard Agency" },
  { value: "ukho", label: "UK Hydrographic Office" },
  { value: "imo", label: "IMO" },
  { value: "ch", label: "Companies House" },
  { value: "toss", label: "Telicent OSS" },
  { value: "dft", label: "Department for Transport" },
  { value: "ukg", label: "UK Government" },
];

/**
 * The `footer` prop renders an action below the option list, separated by a
 * divider — typically a "+ Create new …" button. The footer is **not**
 * selectable as a value; clicking it will not fire `onChange`.
 *
 * There are two forms:
 *
 * - **Render function** — `footer={({ closeMenu }) => …}` receives `closeMenu`,
 *   so your click handler can dismiss the dropdown before acting (e.g. before
 *   opening a "create" modal). This is the common case, shown below.
 * - **Plain node** — `footer={<MyAction />}` when you don't need to close the
 *   menu yourself (the menu stays open until the user clicks away).
 */
export const WithFooter: Story = {
  args: {
    label: "Owner",
    value: "imo",
    width: 320,
    onChange: () => {},
    options: OWNER_OPTIONS,
    footer: ({ closeMenu }) => (
      <Button
        variant="text"
        startIcon={<PlusCircleIcon />}
        onClick={() => {
          closeMenu();
          // In the host app this opens a "create new owner" inline panel.
          // For the story, just log — the interaction is what matters.
          console.log("create new owner clicked");
        }}
        sx={{
          width: "100%",
          justifyContent: "flex-start",
          textTransform: "none",
          color: "primary.main",
        }}
      >
        Create new owner
      </Button>
    ),
  },
  parameters: {
    // Make the dropdown visibly open when the story loads so the
    // reviewer sees the footer without having to click first.
    docs: {
      source: { type: "code" },
    },
  },
  play: async ({ canvasElement }) => {
    // Programmatically open the Select so the reviewer sees the
    // footer + divider without needing to interact.
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("combobox");
    await userEvent.click(trigger);
  },
};
