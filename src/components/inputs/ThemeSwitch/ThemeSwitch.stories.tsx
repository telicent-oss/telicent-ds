import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { useGlobals } from "storybook/preview-api";

import ThemeSwitch from "./ThemeSwitch";
import ThemeSwitchRow, { ThemeSwitchRowProps } from "./ThemeSwitchRow";

const meta = {
  title: "Inputs/ThemeSwitch",
  component: ThemeSwitch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
A labelled light/dark preference switch. 52 × 28 track, 22px knob that carries the theme glyph (Font Awesome sun/moon) and slides 24px. Belongs in settings panels, account sheets, and onboarding — not the AppBar. The AppBar uses a 36px IconButton for the same intent.

Two exports:

- **\`ThemeSwitch\`** — the control on its own, for callers laying out their own row.
- **\`ThemeSwitchRow\`** — the control plus a labelled row with a hint line. Reach for this by default.

Both are **controlled only** — no internal \`checked\` state. This is Option A of the theming rollout: the visual + a11y layer. Persistence, OS preference detection, and writing to whatever drives \`<UIThemeProvider dark={…}>\` remains the caller's job (usually the app shell). A later \`useThemeMode()\` hook will absorb that plumbing into the DS; ThemeSwitch itself won't change.

---

### The opinion

- **On always means dark.** The on-state is only ever seen against dark chrome; that's why the app accent sits on the knob (a fill on 22px only), not on the track.
- **Fixed geometry.** 52 × 28 track, 22 × 22 knob, 24px travel, 14/11 radii. Not overridable — the pill shape is the system's one intentional exception to the 4/8px radius scale.
- **The knob follows the theme's primary colour.** Reads \`theme.palette.primary.main\` from \`<UIThemeProvider>\`, so \`GraphOrange\` gives you orange, \`AdminBlue\` gives you blue — the switch inherits whichever accent the app is running under.

---

### Accessibility

- Renders \`<button type="button" role="switch">\` with \`aria-checked\` tracking the \`checked\` prop. (Spec-locked to \`true\`/\`false\` — the mode name lives in the accessible name, not the state.)
- Space and Enter both toggle the switch via native \`<button>\` semantics — no synthetic key handlers.
- **The accessible name carries the mode.** Instead of \`aria-label="Theme"\` + \`aria-checked=true\`, the switch computes \`aria-label="Theme: currently dark"\` so screen readers announce the mode by name rather than the abstract on/off state. Sighted users still see the terse row label ("Theme"); SR users hear the richer version.
- Inside \`ThemeSwitchRow\`, the visible label and hint are \`aria-hidden\` — they're purely visual, since the switch's own \`aria-label\` already names the control and its state. This avoids the redundant "Theme, Theme: currently dark, switch, on" announcement double-read.
- When used standalone with a \`labelId\` prop, the caller binds to their own label via \`aria-labelledby\` and is responsible for state narration.
- Focus ring appears only on keyboard focus (\`:focus-visible\`).
- \`prefers-reduced-motion: reduce\` suppresses the knob slide and background fade.

---

### Defaults

- \`label\`: \`"Theme"\` — used both as the visible row label (in \`ThemeSwitchRow\`) and as the stem of the state-aware accessible name (\`"Theme: currently light"\` / \`"Theme: currently dark"\`).
- \`hint\` (row only): no hint by default. Pass a string to render a secondary line below the label; useful when an app wants to narrate the consequence in its own copy.
- Motion: 150ms ease-out on \`transform\` and \`background\`. No overshoot, no press scale.
- Radii: 14 (track), 11 (knob), 8 (row).

---

### Example

\`\`\`tsx
import { ThemeSwitchRow, UIThemeProvider } from "@telicent-oss/ds";
import { useState } from "react";

export const SettingsPanel = () => {
  const [dark, setDark] = useState(false);
  return (
    <UIThemeProvider theme="AdminBlue" dark={dark}>
      <ThemeSwitchRow checked={dark} onChange={setDark} />
      {/* ...rest of the app... */}
    </UIThemeProvider>
  );
};
\`\`\`
        `,
      },
    },
  },
  args: {
    onChange: fn(),
  },
  argTypes: {
    checked: {
      control: "boolean",
      description: "\`true\` = dark, \`false\` = light. Controlled by the caller.",
    },
    onChange: {
      control: false,
      description:
        "Fires with the new checked value. Signature is narrowed to `(checked: boolean) => void` for callsite ergonomics.",
      table: { type: { summary: "(checked: boolean) => void" } },
    },
    label: {
      control: "text",
      description:
        "The stem of the accessible name and the visible row label. Default `\"Theme\"`. When no `labelId` is provided, the switch composes `{label}: currently {light|dark}` as `aria-label` so screen readers hear the mode by name.",
    },
    labelId: {
      control: "text",
      description:
        "Id of an external label element. When set, `aria-labelledby` binds to it and `aria-label` is dropped.",
    },
    disabled: {
      control: "boolean",
      description:
        "Blocks interaction; renders at 0.5 opacity with the glyph in the disabled foreground colour.",
    },
    className: {
      control: false,
      description: "Passed through to the root button element for positioning.",
      table: { type: { summary: "string" } },
    },
  },
} satisfies Meta<typeof ThemeSwitch>;

export default meta;
type RowStory = StoryObj<ThemeSwitchRowProps>;

export const Default: RowStory = {
  args: { onChange: fn() },
  render: (args: ThemeSwitchRowProps) => {
    const [globals, updateGlobals] = useGlobals();
    const isDark = globals.mode === "dark";
    return (
      <div style={{ maxWidth: 480 }}>
        <ThemeSwitchRow
          {...args}
          checked={isDark}
          onChange={(v) => {
            updateGlobals({ mode: v ? "dark" : "light" });
            args.onChange(v);
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Wires the switch to Storybook's `Mode` global via `useGlobals()`. Toggling flips the toolbar's Mode setting, which the preview decorator reads to swap `<UIThemeProvider dark>` and repaint the wrapper background across every story. This is exactly the shape an app shell uses in production — read a boolean, write a boolean, feed it into `<UIThemeProvider>`. Try it: toggle the switch and watch the story canvas background flip alongside the switch itself.",
      },
    },
  },
};
