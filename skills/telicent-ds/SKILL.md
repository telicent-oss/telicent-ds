---
name: telicent-ds
description: Fetches the live @telicent-oss/ds component manifest for the version this project runs and follows it as the source of truth for Telicent UI. Use when building, adding, or changing any Telicent app screen, page, form, dialog, or component; when the user names @telicent-oss/ds or the Telicent design system; or when editing a file that imports from @telicent-oss/ds. Pulls component names, props, and variants from the manifest instead of training memory.
license: Apache-2.0
allowed-tools: WebFetch(domain:telicent-oss.github.io)
metadata:
  author: telicent-oss
  version: '1.0.0'
---

# Telicent Design System (@telicent-oss/ds)

Before writing or editing any Telicent UI, fetch the component manifest for the version this project runs and follow it as the source of truth — not your training memory.

## Fetch the manifest

1. Read the installed major from the `node_modules/@telicent-oss/ds/package.json` file BY PATH — `require("@telicent-oss/ds/package.json")` throws, since the `exports` map does not expose it.
2. Fetch `https://telicent-oss.github.io/telicent-ds/v<major>/llms.txt` — e.g. major 3 → `https://telicent-oss.github.io/telicent-ds/v3/llms.txt`.
3. If that 404s — the package isn't installed here, or that major was published before `deploy-llms.yml` started writing per-major folders — fetch the latest at `https://telicent-oss.github.io/telicent-ds/llms.txt`.

The manifest is a complete, self-contained reference: setup, theming, every exported component with its props and `variant`s, and copy-paste recipes.

## Rules

- Prefer an existing `@telicent-oss/ds` component over raw HTML, MUI, or Tailwind.
- Set colour through the theme, not Tailwind classes. Wrap the app in `UIThemeProvider`.
- Use only what the manifest documents — an absent component or prop is not public, so don't invent it.
- If you had to fall back to the latest manifest (step 3) and its last line names a different major than the installed version, trust the installed types (`node_modules/@telicent-oss/ds/dist/export.d.ts`) wherever they disagree.
- If every fetch fails, fall back to those installed types or ask — never guess the API.

## Gotchas

Measured against DS 3.6.0 on 2026-08-24. Re-check against the manifest and the installed
types before relying on any of it.

- **A component looks missing? Search by what it DOES, not its MUI name** — the DS
  renames: `Stack`→`FlexBox`, `Grid`→`FlexGrid`, `Typography`→`Text` (headings are
  `H1`–`H6`), `CircularProgress`→`Spinner`, `ToggleButton`→`TooltipToggleButton`.
- **Then grep the installed types for the bare identifier**, not one export form.
  `grep "^export declare const Text"` reports `Text` absent; it is
  `export { Text_2 as Text }` in `dist/export.d.ts`.
- **`Box` is a top-level DS export**, not a namespace member: `import { Box } from
  "@telicent-oss/ds"`. It wraps MUI `Box` and adds `variant="outlined"`. Never swap it for
  `FlexBox` — that is a flex container and will change your layout. Never use `mui.Box` /
  `mui.Button` / `mui.IconButton`: the DS exports its own at top level, and reaching
  through the `mui` namespace bypasses the design system silently.
- **Icons:** `@telicent-oss/mui-icons-material`, same paths as `@mui/icons-material`, a
  slimmed subset. Missing icon → add it to that package's icons-manifest and rebuild;
  never import upstream.
- **Genuinely absent:** `Tabs`, `Tab`, `ToggleButtonGroup`. Compose from documented
  primitives and say so — it is a gap in the DS, not the app's problem to keep solving.
- **Never silence a consuming app's `@mui/*` import ban** to get around a gap. No
  `eslint-disable`, no downgrade to `warn`. A silenced rule ships MUI and nobody sees it
  again.
- **`rc` / `TELFE-*` / `LAB-*` dist-tags are prereleases**, not the latest stable.
