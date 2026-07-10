import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTheme } from "@mui/material/styles";
import { Alert } from "./Alert";
import UIThemeProvider from "../../../theme/UIThemeProvider";

const meta = {
  title: "Feedback/Alert",
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

export type AlertStory = StoryObj<typeof meta>;

export const Basic: AlertStory = {
  args: {
    severity: "info",
    children: "This is an alert imported from @telicent-oss/ds.",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Thin re-export of MUI Alert. Imported via `import { Alert } from '@telicent-oss/ds'` so it runs against DS's bundled MUI copy and picks up the DS theme.",
      },
    },
  },
  render: (args) => <Alert {...args} />,
};

const Diag = () => {
  const t = useTheme();
  return (
    <pre style={{ margin: 0, fontSize: 12 }}>
      {JSON.stringify(
        {
          mode: t.palette.mode,
          "background.paper": t.palette.background.paper,
          "text.primary": t.palette.text.primary,
        },
        null,
        2,
      )}
    </pre>
  );
};

export const DarkModeThemingCheck: AlertStory = {
  parameters: {
    docs: {
      description: {
        story:
          "Renders Alert inside `<UIThemeProvider dark theme='AdminBlue'>`. If `mode` prints `dark`, `background.paper` is dark, and the alert itself renders on the dark surface, the DS-imported Alert is reading DS's theme correctly — confirming the wrapper-import path fixes the consumer-app dual-MUI issue.",
      },
    },
  },
  render: () => (
    <UIThemeProvider dark theme="AdminBlue">
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
        <Diag />
        <Alert severity="info">Info alert (dark mode)</Alert>
        <Alert severity="success">Success alert (dark mode)</Alert>
        <Alert severity="warning">Warning alert (dark mode)</Alert>
        <Alert severity="error">Error alert (dark mode)</Alert>
      </div>
    </UIThemeProvider>
  ),
};

export const LightModeThemingCheck: AlertStory = {
  parameters: {
    docs: {
      description: {
        story: "Same diagnostic under light mode for comparison.",
      },
    },
  },
  render: () => (
    <UIThemeProvider theme="AdminBlue">
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
        <Diag />
        <Alert severity="info">Info alert (light mode)</Alert>
        <Alert severity="success">Success alert (light mode)</Alert>
        <Alert severity="warning">Warning alert (light mode)</Alert>
        <Alert severity="error">Error alert (light mode)</Alert>
      </div>
    </UIThemeProvider>
  ),
};
