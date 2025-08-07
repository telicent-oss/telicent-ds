import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import dayjs, { Dayjs } from "dayjs";

import DateTimePicker from "./DateTimePicker";

const meta: Meta<typeof DateTimePicker> = {
  title: "Inputs/DateTimePicker",
  component: DateTimePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A reusable DateTime Picker component built with MUI's \`<DateTimePicker>\`.

This version includes an internal \`LocalizationProvider\` using the \`dayjs\` adapter, so you can use it straight away.

### Features:
- Date and time selection in one field
- Error and helper text
- Min/max date-time range
- Automatically wrapped with LocalizationProvider

### Props:
- \`value: Dayjs | null\`
- \`onChange: (value: Dayjs | null) => void\`
- \`label?: string\`
- \`minDateTime\` / \`maxDateTime\`
- \`textFieldProps\`: extra props for underlying \`TextField\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Basic: Story = {
  render: () => {
    const [dateTime, setDateTime] = useState<Dayjs | null>(dayjs());

    return <DateTimePicker label="Pick date & time" value={dateTime} onChange={setDateTime} />;
  },
};

export const WithHelperText: Story = {
  render: () => {
    const [dateTime, setDateTime] = useState<Dayjs | null>(dayjs());

    console.log(dateTime);

    return (
      <DateTimePicker
        label="Pick date & time"
        value={dateTime}
        onChange={setDateTime}
        helperText="This is a helper text, it can be used to display errors or validation issues"
      />
    );
  },
};
