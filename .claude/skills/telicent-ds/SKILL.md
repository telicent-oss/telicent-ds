---
name: telicent-ds
description: Fetches the live @telicent-oss/ds component manifest for the version this project runs and follows it as the source of truth for Telicent UI. Use when building, adding, or changing any Telicent app screen, page, form, dialog, or component; when the user names @telicent-oss/ds or the Telicent design system; or when editing a file that imports from @telicent-oss/ds. Pulls component names, props, and variants from the manifest instead of training memory, and avoids raw HTML/MUI/Tailwind where a DS component exists.
allowed-tools: WebFetch(domain:telicent-oss.github.io)
---

# Telicent Design System (@telicent-oss/ds)

Before writing or editing any Telicent UI, fetch the component manifest for the version this project runs and follow it as the source of truth — not your training memory.

## Fetch the manifest

1. Read the installed major version from `node_modules/@telicent-oss/ds/package.json`.
2. Fetch `https://telicent-oss.github.io/telicent-ds/v<major>/llms.txt` — e.g. major 3 → `https://telicent-oss.github.io/telicent-ds/v3/llms.txt`.
3. If that 404s (the package isn't installed here, or that major predates per-major publishing), fetch the latest at `https://telicent-oss.github.io/telicent-ds/llms.txt`.

The manifest is a complete, self-contained reference: setup, theming, every exported component with its props and `variant`s, and copy-paste recipes.

## Rules

- Prefer an existing `@telicent-oss/ds` component over raw HTML, MUI, or Tailwind.
- Set colour through the theme, not Tailwind classes. Wrap the app in `UIThemeProvider`.
- Use only what the manifest documents — an absent component or prop is not public, so don't invent it.
- If you had to fall back to the latest manifest (step 3) and its last line names a different major than the installed version, trust the installed types (`node_modules/@telicent-oss/ds/dist/export.d.ts`) wherever they disagree.
- If every fetch fails, fall back to those installed types or ask — never guess the API.
