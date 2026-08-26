import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useSnackbar, type VariantType } from "notistack";
import Button from "../../buttons/Button/Button";
import SnackbarProvider from "./SnackbarProvider";

const meta = {
  title: "Feedback/Snackbar",
  component: SnackbarProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The DS's snackbar system: filled Alert with severity colours, X-close affordance, and opinionated composition defaults. Mount \`SnackbarProvider\` once at the root; call \`enqueueSnackbar\` / \`useSnackbar\` from anywhere in the tree.

Every prop is overridable. The \`Components\` prop merges onto the DS defaults so a callsite customising one variant doesn't silently drop the DS content on the others.

---

### Defaults

- \`anchorOrigin\`: \`{ vertical: "top", horizontal: "right" }\`
- \`maxSnack\`: \`3\`
- \`autoHideDuration\`: \`7000\`ms — uniform across variants; the X provides earlier manual dismissal.
- \`preventDuplicate\`: \`true\` — identical enqueue calls are suppressed. Override per call with \`preventDuplicate: false\`.
- \`Components\`: DS Snackbar mounted for \`default\`, \`success\`, \`error\`, \`warning\`, \`info\`.

---

### Dismiss affordance

Every toast renders an X \`IconButton\` in the Alert's \`action\` slot. Clicking the toast body does **not** dismiss — the X is the only manual affordance. Callsites can supply their own \`action\` at \`enqueueSnackbar\` time; it composes to the left of the X.

---

### Palette

The DS supplies opinionated \`success\` / \`warning\` / \`info\` / \`error\` colours that filled Alert renders through. Toggle Themes in the toolbar to spot-check per-theme rendering.

---

### Example

\`\`\`tsx
import {
  SnackbarProvider,
  UIThemeProvider,
  enqueueSnackbar,
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
enqueueSnackbar({ variant: "success", message: "Dataset created." });

// With a callsite action (retry, undo, etc.):
const { closeSnackbar } = useSnackbar();

enqueueSnackbar({
  variant: "error",
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

const VARIANTS: readonly VariantType[] = ["default", "success", "error", "warning", "info"];

const VariantTriggers: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-start" }}>
      {VARIANTS.map((variant) => (
        <Button
          key={variant}
          variant="primary"
          onClick={() =>
            enqueueSnackbar({
              message: `This is a ${variant} snackbar.`,
              variant,
            })
          }
        >
          Show {variant}
        </Button>
      ))}
    </div>
  );
};

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "One trigger per variant. Toggle Themes to spot-check filled-Alert rendering per theme.",
      },
    },
  },
  render: () => (
    <SnackbarProvider maxSnack={5} autoHideDuration={null}>
      <VariantTriggers />
    </SnackbarProvider>
  ),
};

const ActionComposition: React.FC = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  return (
    <Button
      variant="primary"
      onClick={() =>
        enqueueSnackbar({
          message: "Upload failed.",
          variant: "error",
          action: (id) => (
            <Button
              size="small"
              variant="text"
              sx={{ color: "inherit" }}
              onClick={() => {
                closeSnackbar(id);
                enqueueSnackbar({ message: "Retrying...", variant: "info" });
              }}
            >
              Retry
            </Button>
          ),
        })
      }
    >
      Show snackbar with callsite action
    </Button>
  );
};

export const WithCallsiteAction: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "A toast with a callsite-supplied `action` — the action renders to the left of the DS X. Use for retry, undo, or any per-toast affordance the callsite wants to expose.",
      },
    },
  },
  render: () => (
    <SnackbarProvider>
      <ActionComposition />
    </SnackbarProvider>
  ),
};

const StackDemo: React.FC = () => {
  const { enqueueSnackbar } = useSnackbar();
  return (
    <Button
      variant="primary"
      onClick={() => {
        VARIANTS.forEach((variant, i) =>
          enqueueSnackbar({
            message: `Stacked ${variant} #${i + 1}`,
            variant,
          }),
        );
      }}
    >
      Fire 5 toasts at once
    </Button>
  );
};

export const MaxStack: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Fires five snackbars in quick succession. Only three are visible at once (`maxSnack` default); the rest queue and appear as earlier toasts dismiss or auto-hide.",
      },
    },
  },
  render: () => (
    <SnackbarProvider>
      <StackDemo />
    </SnackbarProvider>
  ),
};
