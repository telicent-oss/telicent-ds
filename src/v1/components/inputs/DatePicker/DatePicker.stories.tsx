import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import dayjs, { Dayjs } from "dayjs";
import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Inputs/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A reusable date picker component built with MUI's \`<DatePicker>\`.

This version comes pre-wrapped with a \`LocalizationProvider\` using \`AdapterDayjs\`, so you **do not need to wrap it yourself** when using in your app or stories.

### Features
- Custom label
- Optional helper text
- Error state support
- Min/Max date restriction
- Wrapped internally with \`LocalizationProvider\` using \`dayjs\`

### Props
- \`value: Dayjs | null\` — selected date
- \`onChange: (value: Dayjs | null) => void\` — change handler
- \`label?: string\`
- \`disabled?: boolean\`
- \`error?: boolean\`
- \`helperText?: string\`
- \`minDate?: Dayjs\`
- \`maxDate?: Dayjs\`
- \`textFieldProps?: TextFieldProps\` — pass extra props to the underlying text field
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const WithMinMax: Story = {
  render: () => {
    const [date, setDate] = useState<Dayjs | null>(dayjs());
    const minDate = dayjs().subtract(5, "day");
    const maxDate = dayjs().add(10, "day");

    return (
      <DatePicker
        label="Choose within range"
        value={date}
        onChange={setDate}
        minDate={minDate}
        maxDate={maxDate}
        helperText={`Between ${minDate.format("DD/MM")} and ${maxDate.format("DD/MM")}`}
      />
    );
  },
};
