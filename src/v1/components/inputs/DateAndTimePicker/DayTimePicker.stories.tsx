import { Meta, StoryObj } from "@storybook/react";
import DateTimePicker from "./DateTimePicker";
import { Box } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";

const meta = {
  title: "Inputs/DateTimePicker",
  component: DateTimePicker,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A reusable date & time input built on MUI's \`<DateTimePicker>\`, themed and wrapped in a \`LocalizationProvider\` with \`dayjs\` for convenience.

---

### When & How to use it

Use this component when your UI needs to collect a **precise date and time**, such as scheduling, events, or time-based records.

No need to wrap in a \`LocalizationProvider\` — it's already handled internally.

---

#### ✅ Controlled usage

\`\`\`tsx
const [value, setValue] = useState(dayjs());

<DateTimePicker
  label="Start time"
  value={value}
  onChange={setValue}
/>
\`\`\`

#### ✅ With date-time limits

\`\`\`tsx
<DateTimePicker
  value={value}
  onChange={setValue}
  minDateTime={dayjs().startOf("day")}
  maxDateTime={dayjs().endOf("day")}
/>
\`\`\`
`,
      },
    },
  },
  decorators: [(Story) => <Box sx={{ maxWidth: 320, mx: "auto" }}>{Story()}</Box>],
} satisfies Meta<typeof DateTimePicker>;

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

// ⏱ Controlled wrapper
const RenderDateTimePicker = ({ ...args }) => {
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return <DateTimePicker value={value} onChange={setValue} {...args} />;
};

export const Default: Story = {
  render: (args) => <RenderDateTimePicker {...args} />,
  args: {
    label: "Pick date & time",
  },
};

export const WithMinMax: Story = {
  render: (args) => <RenderDateTimePicker {...args} />,
  args: {
    label: "Restricted time range",
    minDateTime: dayjs().startOf("day"),
    maxDateTime: dayjs().add(2, "day").endOf("day"),
    helperText: "Only available within the next 48 hours",
  },
};

export const ErrorState: Story = {
  render: (args) => <RenderDateTimePicker {...args} />,
  args: {
    label: "Required field",
    error: true,
    helperText: "Date and time are required",
  },
};
