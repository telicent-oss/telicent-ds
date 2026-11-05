import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useEffect } from "react";

import { type UITheme, UIThemeSchema } from "../theme/colors/theme-colors";
import { buildLoaderCss } from "./loaderCss";
import { buildOverlayInner, OVERLAY_ID } from "./loaderMarkup";
import { CALLBACK_MESSAGE, DEFAULT_MESSAGE } from "./loaderRuntime";

type AppLoaderPreviewProps = { theme: UITheme; mode: "dark" | "light"; message: string };

// Renders what the plugin injects, plus the <html data-theme> the head
// script sets. Cleared on unmount so the mode doesn't leak into other stories.
const AppLoaderPreview: React.FC<AppLoaderPreviewProps> = ({ theme, mode, message }) => {
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    return () => {
      delete document.documentElement.dataset.theme;
    };
  }, [mode]);
  return (
    <>
      <style>{buildLoaderCss(theme)}</style>
      <div id={OVERLAY_ID} aria-live="polite" dangerouslySetInnerHTML={{ __html: buildOverlayInner(message) }} />
    </>
  );
};

const meta = {
  title: "Feedback/AppLoader",
  component: AppLoaderPreview,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, iframeHeight: 320 },
      description: {
        component: `
The loading screen every app shows before React mounts. It ships as a Vite plugin, not a component, because it has to paint from the first byte of HTML, before the bundle loads.

---

### The opinion

- **Dark unless the user chose light.** The head script reads \`modeStorageKey\` from localStorage and goes light only when it holds \`"light"\`. It never follows \`prefers-color-scheme\`, so nobody gets a bright screen they didn't ask for.
- **Colours come from the palette.** \`background.default\`, \`text.primary\` and \`primary.main\` for the app's theme in each mode. Apps hold no hex values.
- **Scripts are files, never inline.** App CSPs are \`script-src 'self'\`. The plugin emits content-hashed scripts and inlines only the CSS.

---

### Handoff contract

Remove the overlay by adding the \`app-ready\` class to \`<body>\` once the app is ready. It fades out over 400ms. The ids \`initial-overlay\`, \`initial-overlay-logo\` and \`initial-overlay-message\` are stable.

Apps that switch mode at runtime should keep \`<html data-theme>\` in step with their stored value.

---

### Defaults

- Message: "${DEFAULT_MESSAGE}", or "${CALLBACK_MESSAGE}" on any path containing \`/callback\`.
- Logo animation: 3.6s cycle, resumed across the \`/callback\` → \`/\` full-page navigation.
- Fonts: system stack only. Figtree's late swap made the text twitch.

---

### When to use it

Every Telicent app. Delete any hand-written overlay markup, inline styles and \`public/loading-overlay-*.js\` from \`index.html\` when adopting it.

\`\`\`ts
// vite.config.ts
import { appLoader } from "@telicent-oss/ds/app-loader";

export default defineConfig({
  plugins: [react(), appLoader({ theme: "GraphOrange", modeStorageKey: "graph.themeMode" })],
});
\`\`\`
`,
      },
    },
  },
  argTypes: {
    theme: {
      control: "select",
      options: UIThemeSchema.options,
      description: "Plugin option `theme`. Match the app's `UIThemeProvider`.",
    },
    mode: {
      control: "inline-radio",
      options: ["dark", "light"],
      description: "What the head script resolves from `modeStorageKey`. Dark unless the user stored light.",
    },
    message: {
      control: "select",
      options: [DEFAULT_MESSAGE, CALLBACK_MESSAGE],
      description: "Set by the message script from the URL. Not a plugin option.",
    },
  },
  args: { theme: "GraphOrange", mode: "dark", message: DEFAULT_MESSAGE },
} satisfies Meta<typeof AppLoaderPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
  parameters: { docs: { description: { story: "The default. Shown whenever no light preference is stored." } } },
};

export const Light: Story = {
  args: { mode: "light" },
  parameters: {
    docs: { description: { story: "Shown only when `modeStorageKey` holds `\"light\"`. The logo keeps the brand colour." } },
  },
};

export const LoggingIn: Story = {
  args: { message: CALLBACK_MESSAGE },
  parameters: { docs: { description: { story: "On `/callback`, while the OAuth redirect completes." } } },
};
