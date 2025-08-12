import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import EditableInput from "./EditableInput";

const meta: Meta<typeof EditableInput> = {
  title: "Inputs/EditableInput",
  component: EditableInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A text display that can seamlessly switch between **read-only** and **edit** modes, ideal for inline editing in forms, tables, or profile pages.  

---

**How it works:**
1. In read-only mode, the current value is shown as text alongside an **edit** (pencil) icon.
2. Click the pencil icon to switch to edit mode, revealing a standard MUI \`<TextField>\` pre-filled with the current value.
3. Type your changes, then:
   - Click the **check** icon to save, triggering the \`onSave\` callback.
   - Click the **clear** icon to cancel and revert to the original value.

---

**Key Features:**
- Fully controlled via the \`value\` and \`onSave\` props.
- Inherits all standard MUI \`TextField\` props, allowing customization of width, placeholder, size, variant, and more.
- Works with any parent state management — simply update the \`value\` in \`onSave\` to persist changes.

---

**Props:**
- \`value: string\` — The current displayed text.
- \`onSave: (value: string) => void\` — Called when the user saves a new value.
- *(...plus all standard MUI \`TextFieldProps\`)*

**Tip:** Pass \`sx\` or \`style\` to control width, max-width, or other layout properties.

\`\`\`tsx
 const [value, setValue] = useState("");

<EditableInput value={value} onSave={setValue} label="test input" />
\`\`\`
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof EditableInput>;

export const Basic: Story = {
  render: () => {
    const [value, setValue] = useState("Click the pencil to edit");

    return <EditableInput value={value} onSave={setValue} label="test input" />;
  },
};

export const LongText: Story = {
  render: () => {
    const [value, setValue] = useState(
      "This is a longer paragraph of editable text that shows how the component handles more content. Edit me!"
    );

    const handleChange = (newValue: string) => {
      setValue(newValue);
    };

    return <EditableInput value={value} onSave={handleChange} label="long input text" fullWidth />;
  },
};

export const CustomWidth: Story = {
  render: () => {
    const [value, setValue] = useState("Edit me!");

    const handleChange = (newValue: string) => {
      setValue(newValue);
    };

    return <EditableInput value={value} onSave={handleChange} label="long input text" sx={{ width: "250px" }} />;
  },
};
