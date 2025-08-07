import { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./DatePicker";
import { Box } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

const meta = {
  title: "Inputs/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A date-only input built on MUI's \`<DatePicker>\`, wrapped with our design-system styling and pre-configured with \`dayjs\` support.

---

### When & How to use it

Use this component when you need users to pick a **single calendar date**, with or without constraints. It is already wrapped in a \`LocalizationProvider\` internally, so no setup is needed.

#### ✅ Controlled usage

\`\`\`tsx
const [date, setDate] = useState(dayjs());

<DatePicker
  label="Start date"
  value={date}
  onChange={setDate}
/>
\`\`\`

#### ✅ With date limits

\`\`\`tsx
<DatePicker
  value={date}
  onChange={setDate}
  minDate={dayjs().subtract(7, "day")}
  maxDate={dayjs().add(7, "day")}
/>
\`\`\`
`,
      },
    },
  },
  decorators: [(Story) => <Box sx={{ maxWidth: 300, mx: "auto" }}>{Story()}</Box>],
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof DatePicker>;

// ⏱ Controlled example
const RenderDatePicker = ({ ...args }) => {
  const [date, setDate] = useState<Dayjs | null>(dayjs());

  return <DatePicker value={date} onChange={setDate} {...args} />;
};

export const Default: Story = {
  render: (args) => <RenderDatePicker {...args} />,
  args: {
    label: "Pick a date",
  },
};

export const WithMinMax: Story = {
  render: (args) => <RenderDatePicker {...args} />,
  args: {
    label: "Restricted range",
    minDate: dayjs().subtract(5, "day"),
    maxDate: dayjs().add(5, "day"),
    helperText: "You can only select dates within ±5 days",
  },
};

export const ErrorState: Story = {
  render: (args) => <RenderDatePicker {...args} />,
  args: {
    label: "Required",
    error: true,
    helperText: "Please select a valid date",
  },
};
