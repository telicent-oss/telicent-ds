import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../../buttons/Button/Button";
import SnackbarProvider from "./SnackbarProvider";
import { useSnackbar, type SnackbarType } from "./Snackbar";

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

### When to use each type

- **\`success\`** — an action completed and the user cares (dataset saved, resource created, config applied).
- **\`error\`** — an action failed. Mutation errors, network failures, anything the user should know went wrong.
- **\`warning\`** — a partial success or proceed-with-caution notice (e.g. "Loaded 4 of 6; 2 could not be loaded"). Use for reversible degradations, not hard failures.
- **\`info\`** — neutral update the user might want to see (background job progressed, session refreshed).

Snackbars are **non-blocking**. If the user must acknowledge before continuing, use \`ConfirmDialog\` or a dedicated dialog instead.

---

### Defaults

- \`anchorOrigin\`: \`{ vertical: "top", horizontal: "right" }\`
- \`maxSnack\`: \`3\`
- \`autoHideDuration\`: \`7000\`ms — uniform across types; the X provides earlier manual dismissal.
- \`preventDuplicate\`: \`true\` — identical enqueue calls are suppressed. Override per call with \`preventDuplicate: false\`.
- \`Components\`: DS Snackbar mounted for \`success\`, \`error\`, \`warning\`, \`info\`. No \`default\` — a \`type\` is required.

---

### Per-call options

Every provider default can be overridden per \`snackbar()\` call. Common overrides:

- **\`action\`** — a \`ReactNode\` or \`(id) => ReactNode\`. Composes to the left of the DS X. Use for retry/undo affordances.
- **\`autoHideDuration\`** — override the 7s default for a single toast. Pass \`null\` to make it persistent.
- **\`persist\`** — shortcut for \`autoHideDuration: null\`. The toast stays until X is clicked or \`closeSnackbar(id)\` is called.
- **\`preventDuplicate\`** — set to \`false\` for a single toast if duplicates are genuinely wanted.
- **\`key\`** — supply a stable key to reference the toast later for programmatic dismiss or duplicate-suppression grouping.

Full \`notistack\` \`OptionsObject\` shape is accepted; see the notistack docs for the complete list.

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

\`message\` accepts any \`ReactNode\`, not just strings:

\`\`\`tsx
snackbar({
  type: "warning",
  message: (
    <>
      <strong>Partial import.</strong> 4 of 6 records loaded; check the log for failures.
    </>
  ),
});
\`\`\`

Keep it short — the 320px width cap wraps anything longer than a sentence or two.

---

### Where to call \`snackbar()\`

\`snackbar()\` is a plain module-level function — no hook, no context required. Call it from:

- Event handlers (button \`onClick\`, form \`onSubmit\`)
- React Query callbacks (\`onSuccess\`, \`onError\`)
- Module-scope handlers (auth interceptors, WebSocket listeners)
- Effect closures

\`useSnackbar()\` is only needed inside a React component when you need \`closeSnackbar\` for programmatic dismiss.
`,
      },
    },
  },
} satisfies Meta<typeof SnackbarProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

const TYPES: readonly SnackbarType[] = ["success", "error", "warning", "info"];

// Story helpers use the hook form `useSnackbar()` so each story binds to its own
// SnackbarProvider via React context (rather than the module-level `snackbar()`
// which shares one notistack singleton across the whole autodocs page).
// The Example section above teaches the module-level form for real consumer
// code; both forms are valid DS API paths.
const TypeTriggers: React.FC = () => {
  const { snackbar } = useSnackbar();
  return (
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
};

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
    <SnackbarProvider>
      <TypeTriggers />
    </SnackbarProvider>
  ),
};

const ActionComposition: React.FC = () => {
  const { snackbar, closeSnackbar } = useSnackbar();
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

const StackDemo: React.FC = () => {
  const { snackbar } = useSnackbar();
  return (
    <Button
      variant="primary"
      onClick={() => {
        TYPES.forEach((type, i) => snackbar({ type, message: `Stacked ${type} #${i + 1}` }));
      }}
    >
      Fire 4 toasts at once
    </Button>
  );
};

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
