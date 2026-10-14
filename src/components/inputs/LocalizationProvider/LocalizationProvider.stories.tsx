import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import LocalizationProvider from "./LocalizationProvider";
import DatePicker from "../DatePicker/DatePicker";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";

const meta: Meta<typeof LocalizationProvider> = {
  title: "Inputs/LocalizationProvider",
  component: LocalizationProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Root-level date/time context for every \`<DatePicker>\` / \`<DateTimePicker>\` on the page. Wraps MUI X's \`LocalizationProvider\` with the DS's chosen adapter (dayjs) pre-wired, so apps mount it once at the app root with no adapter prop.

---

### The opinion

- **\`dateAdapter\` defaults to \`AdapterDayjs\`.** The DS has already picked dayjs — \`<DatePicker>\` and \`<DateTimePicker>\` import from \`dayjs\` directly. Exposing the adapter choice on the provider while hard-coding it inside the inputs would be incoherent, so the DS owns the decision end to end.
- **\`dateAdapter\` is still overridable.** Pass your own adapter (\`AdapterLuxon\`, \`AdapterDateFns\`, etc.) only if you also replace the DS pickers — a mismatch between provider adapter and picker adapter breaks parsing.
- **\`AdapterDayjs\` is re-exported** for apps that need to pass it explicitly (keep an existing call shape) or use it outside the provider for date formatting.

---

### When & how to use it

Mount once at the app root, inside the theme provider, outside any route tree. Every \`<DatePicker>\` / \`<DateTimePicker>\` beneath it reads from the same context.

\`\`\`tsx
import { UIThemeProvider } from "@telicent-oss/ds";
import { LocalizationProvider, DatePicker } from "@telicent-oss/ds/date-pickers";

const App = () => (
  <UIThemeProvider dark theme="AdminBlue">
    <LocalizationProvider>
      <Routes />
    </LocalizationProvider>
  </UIThemeProvider>
);
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof LocalizationProvider>;

export default meta;

type Story = StoryObj<typeof LocalizationProvider>;

export const WrappingADatePicker: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The intended shape — the provider wraps a subtree, and `<DatePicker>` inside reads from it. The provider carries no visual output of its own; this story exists to show the composition.",
      },
    },
  },
  render: () => {
    const [value, setValue] = useState<Dayjs | null>(dayjs());
    return (
      <LocalizationProvider>
        <DatePicker label="Pick a date" value={value} onChange={setValue} />
      </LocalizationProvider>
    );
  },
};
