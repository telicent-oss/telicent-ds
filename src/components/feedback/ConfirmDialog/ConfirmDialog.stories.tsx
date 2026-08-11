import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Button from "../../buttons/Button/Button";
import MinusCircleIcon from "../../data-display/Icons/MinusCircleIcon";
import ConfirmDialog from "./ConfirmDialog";

const meta = {
  title: "Feedback/Confirm dialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A modal dialog that asks the user to confirm an action — submits, publishes, restarts, deletes, or anything else that needs explicit consent before proceeding. Encodes the DS-blessed layout, colour language, focus behaviour, and pending-state handling so consuming apps don't reimplement (or diverge on) any of it.

Owns nothing but its own rendering — the caller controls \`open\` and \`isPending\` so the dialog integrates with any mutation library (React Query, RTK, custom).

---

### Variants

The visual tone is chosen by the \`variant\` prop:

- **Neutral** (default, no \`variant\`) — primary confirm button, no header icon by default. For routine confirmations where the consequence is minor or purely acknowledgement (submit, save, send invitation, one-time key display).
- **Warning** (\`variant="warning"\`) — amber-tinted header pill with \`WarningIcon\`, amber confirm button. For high-consequence but non-destructive actions where the user should be warned before proceeding (dirty-form leave-page, restart service, apply migration).
- **Destructive** (\`variant="destructive"\`) — red-tinted header pill with \`BinIcon\`, red confirm button. For irreversible operations that remove something (delete, revoke, archive, remove-from-team).

The safe default is neutral — a forgotten \`variant\` prop under-sells the action rather than over-selling it.

---

### Other supported features

- **Pending state** — while \`isPending\` is true both buttons disable, the confirm label swaps to \`pendingLabel\`, and dismissal (backdrop click / Escape) is blocked to prevent race conditions between "cancel" and "in-flight mutation".
- **Alert callout** — pass \`alert={{ severity, message }}\` to surface an important consequence of the action as a visually distinct Alert above the buttons. Developer-authored, static — not for showing async mutation errors.
- **Custom icon** — override \`icon\` for any variant. The same icon renders in the header pill and on the confirm button.
- **Stable selectors** — override \`id\` to produce stable ids for E2E and telemetry: \`\${id}-title\`, \`\${id}-body\`, \`\${id}-cancel\`, \`\${id}-confirm\`, \`\${id}-alert\`.

---

### When & how to use it

- **Anywhere the user needs to make a yes/no decision with a consequence** — deletes, publishes, revokes, form submits with side effects, dirty-form leave-page prompts.
- **Do not use for informational modals with a single "OK" button** — that's a different shape (an alert/acknowledgement dialog), not covered here.
- **Do not use for form validation errors** — inline field errors or an Alert on the form itself are the right tool.
- **Wire \`isPending\` to your mutation** — the component won't manage the async lifecycle for you, but it handles the UX of it correctly if you supply the state. If a server error needs to be shown after the action, handle that in the calling flow (e.g. a toast) rather than trying to render it inside the dialog.

---

### Example

\`\`\`tsx
import { ConfirmDialog } from "@telicent-oss/ds";
import { useMutation } from "@tanstack/react-query";

const deleteMutation = useMutation({ mutationFn: deleteDataset });

<ConfirmDialog
  open={confirmOpen}
  variant="destructive"
  onClose={() => setConfirmOpen(false)}
  onConfirm={() => deleteMutation.mutate(datasetId)}
  title="Delete dataset?"
  body="The dataset and its metadata will be removed from the catalogue."
  confirmLabel="Delete"
  pendingLabel="Deleting…"
  isPending={deleteMutation.isPending}
  alert={{
    severity: "warning",
    message: "This permanently removes the dataset and orphans its distributions. This action cannot be undone.",
  }}
/>
\`\`\`
        `,
      },
    },
  },
  args: {
    onConfirm: fn(),
    onClose: fn(),
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the dialog is shown. Controlled by the consumer.",
    },
    title: {
      control: "text",
      description: 'Short, action-focused heading (e.g. "Delete project?").',
    },
    body: {
      control: false,
      description: "Body content. A string is wrapped in body2 Text; a ReactNode is rendered as-is.",
      table: { type: { summary: "ReactNode" } },
    },
    confirmLabel: {
      control: "text",
      description:
        'Label for the confirm button. Defaults to `"Confirm"` — set explicitly (e.g. `"Delete"`, `"Publish"`, `"Leave"`) for clarity.',
    },
    cancelLabel: {
      control: "text",
      description: 'Label for the cancel button. Defaults to `"Cancel"`.',
    },
    pendingLabel: {
      control: "text",
      description: 'Confirm-button label while `isPending` is true. Defaults to `"Working…"`.',
    },
    icon: {
      control: false,
      description:
        "Icon shown in the header pill and on the confirm button. Defaults to `BinIcon` for destructive, `WarningIcon` for warning, none for neutral.",
      table: { type: { summary: "ReactNode" } },
    },
    isPending: {
      control: "boolean",
      description: "When true: buttons disable, confirm label swaps to `pendingLabel`, and close is blocked.",
    },
    alert: {
      control: false,
      description:
        "Optional callout rendered as an Alert below the body. Use it to emphasise domain consequences the user must read before confirming (e.g. \"This permanently removes the dataset and orphans its distributions.\"). Not for surfacing async mutation errors — those belong in the calling flow, not inside the confirmation.",
      table: { type: { summary: "{ severity: AlertColor; message: string }" } },
    },
    variant: {
      control: "radio",
      options: [undefined, "warning", "destructive"],
      description:
        'Visual tone. Undefined = neutral (default). `"warning"` = amber for consequential-but-not-destructive actions. `"destructive"` = red for irreversible removals.',
    },
    id: {
      control: "text",
      description:
        'Optional id prefix used for stable selectors. Defaults to `"confirm-dialog"`, producing `${id}-title`, `${id}-body`, `${id}-cancel`, `${id}-confirm`, `${id}-error`.',
    },
    ariaLabel: {
      control: "text",
      description: "Overrides the dialog's accessible name. When omitted, the title is used via `aria-labelledby`.",
    },
  },
} satisfies Meta<typeof ConfirmDialog>;

export default meta;
export type Story = StoryObj<typeof meta>;

const InteractiveTemplate: Story["render"] = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <ConfirmDialog
        {...args}
        open={open}
        onClose={() => {
          setOpen(false);
          args.onClose();
        }}
        onConfirm={() => {
          setOpen(false);
          args.onConfirm();
        }}
      />
    </>
  );
};

export const Neutral: Story = {
  args: {
    open: false,
    title: "Publish this dataset?",
    body: "Consumers with access will see the new version immediately.",
    confirmLabel: "Publish",
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "The default. No `variant` set — primary confirm button, no header icon. Use for actions that need explicit consent but aren't dangerous (publish, submit, save, send).",
      },
    },
  },
};

export const Warning: Story = {
  args: {
    open: false,
    variant: "warning",
    title: "Leave without saving?",
    body: "Your edits will be lost if you leave now.",
    confirmLabel: "Leave",
    cancelLabel: "Stay",
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "For consequential actions that aren't destructive per se, but where the user should think twice — dirty-form leave-page, restart service, apply migration. Amber pill with `WarningIcon`, amber confirm button.",
      },
    },
  },
};

export const Destructive: Story = {
  args: {
    open: false,
    variant: "destructive",
    title: "Delete project?",
    body: "This can't be undone. All related assets will also be removed.",
    confirmLabel: "Delete",
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "For irreversible operations that remove something — delete, revoke, archive, remove-from-team. Red pill with `BinIcon`, red confirm button. Explicit opt-in — the default is neutral, so this styling never appears by accident.",
      },
    },
  },
};

export const WithAlert: Story = {
  args: {
    open: false,
    variant: "destructive",
    title: "Delete dataset?",
    body: "The dataset and its metadata will be removed from the catalogue.",
    confirmLabel: "Delete",
    alert: {
      severity: "warning",
      message:
        "This permanently removes the dataset and orphans its distributions. This action cannot be undone.",
    },
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "Use `alert` to surface an important consequence of the action as a visually distinct callout above the buttons. This is developer-authored context — pick the severity that matches the tone (`warning` for consequences, `info` for heads-up, `success` rarely). Not for showing async mutation errors.",
      },
    },
  },
};

export const CustomIcon: Story = {
  args: {
    open: false,
    variant: "destructive",
    title: "Revoke API key?",
    body: "The key will stop working immediately. Existing clients using it will fail.",
    confirmLabel: "Revoke",
    icon: <MinusCircleIcon />,
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "Override `icon` for any variant. Use for destructive actions that aren't deletes (revoke, archive, remove-from-team) or to reinforce a warning with a domain-specific glyph. The same icon renders in the header pill and on the confirm button.",
      },
    },
  },
};

export const LongBody: Story = {
  args: {
    open: false,
    variant: "destructive",
    title: "Delete workspace?",
    body: "Deleting this workspace will permanently remove all projects, datasets, dashboards, saved queries, sharing rules, and audit logs contained within it. This action affects 12 collaborators and cannot be undone once confirmed.",
    confirmLabel: "Delete",
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "The body wraps as needed within the 420px dialog. Use longer body copy when the user needs to understand exactly what the action affects before confirming.",
      },
    },
  },
};
