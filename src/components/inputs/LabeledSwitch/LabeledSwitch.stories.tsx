import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { LabeledSwitch } from "./LabeledSwitch";

const meta = {
  title: "Inputs/LabeledSwitch",
  component: LabeledSwitch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A form row combining a switch toggle with a title, an optional description, and optional helper/validation text. Wraps the switch in a FormControl fieldset so error state propagates to the row and every callsite doesn't reimplement the row layout, the subtitle-plus-body typography pairing, or the error wiring.

Ports the admin app's \`LabeledSwitch\` pattern into DS so multiple apps share a single implementation instead of drifting.

---

### The opinion

- **Fixed row layout** — text/subtext/helperText on the left, switch pinned to the right (\`justifyContent="space-between"\`). Callers don't choose placement; the row shape is the whole point of the component.
- **Narrowed \`onChange\` signature** — \`(checked: boolean) => void\` rather than MUI's \`(event, checked) => void\`. The event is dropped because callers overwhelmingly only need the boolean.
- **Composes DS.Switch, not raw MUI** — future DS Switch theming/tokens propagate for free.
- **Ref target is the switch button** (\`HTMLButtonElement\`), matching DS.Switch. Migrating from admin's local \`LabeledSwitch\` — which used \`inputRef\` — needs adjustment only when the ref is used for input-specific behaviour.

---

### Accessibility

- The FormControl renders as \`component="fieldset"\`, grouping the label + control semantically so screen readers announce them together.
- \`error\` propagates from the FormControl to \`FormHelperText\` and to any descendant that reads FormControl context, colouring the helper text red and setting \`aria-invalid\` on the input.
- Pass \`inputProps\` to attach additional a11y attributes to the underlying input (\`aria-labelledby\`, \`aria-describedby\`, \`data-testid\`, etc.).

---

### Defaults

- \`FormControl.component\`: \`"fieldset"\` — for semantic grouping.
- \`FormControl.variant\`: \`"standard"\` — flat, no border or underline.
- \`FormControl.fullWidth\`: \`true\` — the row fills its container.
- Layout: \`direction="row"\`, \`justifyContent="space-between"\`, \`alignItems="center"\`.
- Typography: \`text\` → Text \`variant="subtitle1"\`, \`subtext\` → Text \`variant="body2"\`.

---

### Other supported features

- \`inputProps\` — forwarded to the underlying input; \`inputProps.name\` also copies onto the Switch's \`name\` prop.
- Extra props (\`...rest\`) — forwarded to the composed DS.Switch, so \`sx\`, \`data-*\`, and other Switch props remain reachable at the callsite.

---

### When & how to use it

- **Rows in a settings/preferences panel** where each toggle has a title and (usually) a short description.
- **Scope-toggle lists** (permissions, feature flags, notification categories) — the pattern is a repeated row with title + description + on/off.
- **Do not use for a bare switch with no description** — reach for \`DS.Switch\` with a \`label\` prop instead.
- **Do not use inside a form-field grid where the switch must align with other inputs** — pair \`FormControlLabel\` with \`DS.Switch\` directly for that.

---

### Example

\`\`\`tsx
import { LabeledSwitch } from "@telicent-oss/ds";
import { Controller } from "react-hook-form";

<Controller
  control={form.control}
  name="scopeProfile"
  render={({ field, fieldState }) => (
    <LabeledSwitch
      text="Profile"
      subtext="Request standard user info (name, email, username)."
      checked={!!field.value}
      onChange={(v) => field.onChange(v)}
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  )}
/>
\`\`\`
        `,
      },
    },
  },
  args: {
    onChange: fn(),
  },
  argTypes: {
    text: {
      control: "text",
      description: 'Primary label, rendered as Text `variant="subtitle1"`. Required.',
    },
    subtext: {
      control: "text",
      description:
        'Optional short description, rendered as Text `variant="body2"` beneath the label. Use for one-line context; if the copy runs past a sentence or two, rethink the layout.',
    },
    checked: {
      control: "boolean",
      description: "Whether the switch is on. Controlled by the caller.",
    },
    onChange: {
      control: false,
      description:
        "Fires with the new checked value. Signature is narrowed from MUI's `(event, checked)` to `(checked)` — the event is dropped because callers overwhelmingly only need the boolean.",
      table: { type: { summary: "(checked: boolean) => void" } },
    },
    disabled: {
      control: "boolean",
      description: "Locks the switch. The row text stays visible; only interaction is blocked.",
    },
    error: {
      control: "boolean",
      description:
        "Marks the row as in an error state. Propagates through FormControl so `helperText` colours red and `aria-invalid` is set on the input.",
    },
    helperText: {
      control: "text",
      description:
        "Optional helper or validation text rendered below the description. Colours red when `error` is true.",
    },
    inputProps: {
      control: false,
      description:
        "Standard HTML input attributes forwarded to the underlying input (e.g. `aria-labelledby`, `data-testid`). `name` also copies onto the Switch's `name` prop.",
      table: { type: { summary: "InputHTMLAttributes<HTMLInputElement>" } },
    },
    ref: {
      control: false,
      description:
        "Ref to the switch button (`HTMLButtonElement`), matching DS.Switch's ref target. Not the underlying input.",
      table: { type: { summary: "Ref<HTMLButtonElement>" } },
    },
  },
} satisfies Meta<typeof LabeledSwitch>;

export default meta;
export type Story = StoryObj<typeof meta>;

const InteractiveTemplate: Story["render"] = (args) => {
  const [checked, setChecked] = useState<boolean>(args.checked ?? false);
  return (
    <div>
      <LabeledSwitch
        {...args}
        checked={checked}
        onChange={(v) => {
          setChecked(v);
          args.onChange(v);
        }}
      />
    </div>
  );
};

export const Basic: Story = {
  args: {
    text: "Enable feature",
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "Baseline — just a `text` label. Demonstrates that `subtext` and `helperText` are optional; the row still spaces the switch to the right and renders the label as `subtitle1`.",
      },
    },
  },
};

export const WithSubtext: Story = {
  args: {
    text: "Email notifications",
    subtext: "Send updates when your workspace changes.",
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "The common case — a titled toggle with a one-line description. Use this when a raw label wouldn't be enough for the user to know what the toggle controls.",
      },
    },
  },
};

export const WithHelperText: Story = {
  args: {
    text: "Email notifications",
    subtext: "Send updates when your workspace changes.",
    helperText: "You can change this later in preferences.",
    checked: true,
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "Helper text sits below the description and is styled the same in the neutral state. Use it for non-error hints — reversibility, defaults, follow-up steps. When the message describes an error, set `error` too so the styling changes.",
      },
    },
  },
};

export const ErrorState: Story = {
  args: {
    text: "Require MFA",
    subtext: "Force all users in this org to enrol in MFA.",
    error: true,
    helperText: "MFA setup incomplete for one or more users.",
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "`error` propagates from FormControl to the helper text, colouring it red and setting `aria-invalid` on the input. Pair with a validation library (react-hook-form, Formik) by forwarding `fieldState.error?.message` into `helperText` and `!!fieldState.error` into `error`.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    text: "OpenID",
    subtext: "Required by the authorization server — can't be turned off.",
    disabled: true,
    checked: true,
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "Locked-on pattern — the toggle communicates a permanently-enabled setting. The row text remains fully visible so the user can still read the rationale in `subtext`. Matches admin's ScopesSection OpenID case (required by the authorization server).",
      },
    },
  },
};

export const LongContent: Story = {
  args: {
    text: "Enable federated identity across the entire workspace hierarchy",
    subtext:
      "When enabled, all users, service accounts, and integrations in this workspace and every nested workspace will authenticate through the shared identity provider configured at the organisation level.",
    helperText:
      "Applies to new sessions only. Existing sessions continue using their previous authentication method until they expire or the user signs out.",
  },
  render: InteractiveTemplate,
  parameters: {
    docs: {
      description: {
        story:
          "The text column wraps freely; the switch stays pinned to the right at a fixed size. Use this to sanity-check a callsite where the description or helper text may run long — the layout doesn't break, but readability suffers past a sentence or two. If your copy consistently looks like this, consider a different layout.",
      },
    },
  },
};
