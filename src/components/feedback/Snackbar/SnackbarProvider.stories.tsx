import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useSnackbar } from "notistack";
import Button from "../../buttons/Button/Button";
import SnackbarProvider from "./SnackbarProvider";
import { snackbar, type SnackbarType } from "./Snackbar";

const meta = {
  title: "Feedback/Snackbar",
  component: SnackbarProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The DS's snackbar system: filled Alert with severity colours, X-close affordance, and opinionated composition defaults. Mount \`SnackbarProvider\` once at the root; call \`snackbar()\` from anywhere in the tree.

Every prop is overridable. The \`Components\` prop merges onto the DS defaults so a callsite customising one type doesn't silently drop the DS content on the others.

---

### Defaults

- \`anchorOrigin\`: \`{ vertical: "top", horizontal: "right" }\`
- \`maxSnack\`: \`3\`
- \`autoHideDuration\`: \`7000\`ms — uniform across types; the X provides earlier manual dismissal.
- \`preventDuplicate\`: \`true\` — identical enqueue calls are suppressed. Override per call with \`preventDuplicate: false\`.
- \`Components\`: DS Snackbar mounted for \`success\`, \`error\`, \`warning\`, \`info\`. No \`default\` — a \`type\` is required.

---

### Dismiss affordance

Every toast renders an X \`IconButton\` in the Alert's \`action\` slot. Clicking the toast body does **not** dismiss — the X is the only manual affordance. Callsites can supply their own \`action\` at \`snackbar()\` time; it composes to the left of the X.

---

### Palette

The DS supplies opinionated \`success\` / \`warning\` / \`info\` / \`error\` colours that filled Alert renders through. Toggle Themes in the toolbar to spot-check per-theme rendering.

---

### Example

\`\`\`tsx
import {
  SnackbarProvider,
  UIThemeProvider,
  snackbar,
  useSnackbar,
  Button,
} from "@telicent-oss/ds";

// Root: mount once inside your theme provider.
<UIThemeProvider dark theme="AdminBlue">
  <SnackbarProvider>
    <App />
  </SnackbarProvider>
</UIThemeProvider>;

// Anywhere in the tree — fire-and-forget:
snackbar({ type: "success", message: "Dataset created." });

// With a callsite action (retry, undo, etc.):
const { closeSnackbar } = useSnackbar();

snackbar({
  type: "error",
  message: "Upload failed.",
  action: (id) => (
    <Button size="small" variant="text" onClick={() => closeSnackbar(id)}>
      Retry
    </Button>
  ),
});
\`\`\`
`,
      },
    },
  },
} satisfies Meta<typeof SnackbarProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

const TYPES: readonly SnackbarType[] = ["success", "error", "warning", "info"];

const TypeTriggers: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
    {TYPES.map((type) => (
      <Button
        key={type}
        variant="primary"
        onClick={() => snackbar({ type, message: `This is a ${type} snackbar.` })}
      >
        Show {type}
      </Button>
    ))}
  </div>
);

export const AllTypes: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "One trigger per type. Toggle Themes to spot-check filled-Alert rendering per theme.",
      },
    },
  },
  render: () => (
    <SnackbarProvider maxSnack={5} autoHideDuration={null}>
      <TypeTriggers />
    </SnackbarProvider>
  ),
};

const ActionComposition: React.FC = () => {
  const { closeSnackbar } = useSnackbar();
  return (
    <Button
      variant="primary"
      onClick={() =>
        snackbar({
          type: "error",
          message: "Upload failed.",
          action: (id) => (
            <Button
              size="small"
              variant="text"
              sx={{ color: "inherit" }}
              onClick={() => {
                closeSnackbar(id);
                snackbar({ type: "info", message: "Retrying..." });
              }}
            >
              Retry
            </Button>
          ),
        })
      }
    >
      Show snackbar with action
    </Button>
  );
};

export const WithAction: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A toast with an `action` supplied at `snackbar()` time — it renders to the left of the DS X. Use for retry, undo, or any per-toast affordance.",
      },
    },
  },
  render: () => (
    <SnackbarProvider>
      <ActionComposition />
    </SnackbarProvider>
  ),
};

const StackDemo: React.FC = () => (
  <Button
    variant="primary"
    onClick={() => {
      TYPES.forEach((type, i) => snackbar({ type, message: `Stacked ${type} #${i + 1}` }));
    }}
  >
    Fire 4 toasts at once
  </Button>
);

export const MaxStack: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Fires four snackbars in quick succession. Only three are visible at once (`maxSnack` default); each new toast auto-dismisses the oldest to make room.",
      },
    },
  },
  render: () => (
    <SnackbarProvider>
      <StackDemo />
    </SnackbarProvider>
  ),
};
