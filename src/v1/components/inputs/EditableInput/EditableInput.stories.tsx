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
An input component that toggles between a static label and an editable text field.

- Click the pencil icon to enter edit mode.
- Type your new value.
- Click the floppy disk icon to save.

**Props:**
- \`value: string\` — the current text
- \`onChange: (value: string) => void\` — called when the user saves a new value
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

    return <EditableInput value={value} onSave={handleChange} />;
  },
};
