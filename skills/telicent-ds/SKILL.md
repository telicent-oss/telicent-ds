---
name: telicent-ds
description: Reads the @telicent-oss/ds component manifest that ships inside the installed package and follows it as the source of truth for Telicent UI, falling back to the installed type declarations when the package predates it. Use when building, adding, or changing any Telicent app screen, page, form, dialog, or component; when the user names @telicent-oss/ds or the Telicent design system; or when editing a file that imports from @telicent-oss/ds. Pulls component names, props, and variants from the manifest instead of training memory.
license: Apache-2.0
allowed-tools: Read, Grep, Glob
metadata:
  author: telicent-oss
  version: '1.0.0'
---

# Telicent Design System (@telicent-oss/ds)

Before writing or editing any Telicent UI, fetch the component manifest for the version this project runs and follow it as the source of truth — not your training memory.

## Fetch the manifest

1. Find the installed `@telicent-oss/ds` package and read `dist/llms.txt` inside it.
   That file ships in the package, so it matches the installed version. Use it and stop
   here.

   Where the package lives varies by project: `node_modules/` beside the file you are
   editing, the workspace root, a pnpm store, or nowhere on disk under Yarn PnP. Locate
   it the way this project is actually laid out rather than assuming a path.

2. If the package has no `dist/llms.txt`, it is a release from before the manifest
   shipped. Read `dist/export.d.ts` in that same package and use it as the API. It is
   the only source that is certain to match what is installed.

3. If you cannot find the installed package at all, say so without guessing why, and
   ask. Do not substitute another version's API.

### The copy on the web is the wrong version

`https://telicent-oss.github.io/telicent-ds/llms.txt` is built from `main`, so it
documents unreleased source. Do not build from it.

### What the types cannot tell you

`export.d.ts` carries component and prop names, and nothing else: no `variant` values,
no theming, no setup, no recipes. A project on a release older than the packaged
manifest has no full reference, and upgrading is the only way to get one. Do not
substitute the web copy for it. If the installed types are unreadable too, say so and
ask - never write the API from memory.

## Rules

- Prefer an existing `@telicent-oss/ds` component over raw HTML, MUI, or Tailwind.
- Set colour through the theme, not Tailwind classes. Wrap the app in `UIThemeProvider`.
- Use only what the manifest documents — an absent component or prop is not public, so don't invent it.
- With no manifest for the installed version, use the installed types or ask — never guess the API.

## Gotchas

Checked against this repo's `main` on 2026-09-22, not against a published release.
Re-check against the installed package before relying on any of it.

- **A component looks missing? Search by what it DOES, not its MUI name** — the DS
  renames: `Stack`→`FlexBox`, `Grid`→`FlexGrid`, `Typography`→`Text` (headings are
  `H1`–`H6`), `CircularProgress`→`Spinner`, `ToggleButton`→`TooltipToggleButton`.
- **Then grep `dist/export.d.ts` for the bare identifier**, not one export form. A
  component can be re-exported under another name: `Text` appears as
  `export { Text_2 as Text }`, so `grep "export declare const Text"` reports it absent
  when it is there. The file is over 2000 lines, so grep it rather than read it.
- **`Box` is a top-level DS export**, not a namespace member: `import { Box } from
  "@telicent-oss/ds"`. It wraps MUI `Box` and adds `variant="outlined"`. Never swap it for
  `FlexBox` — that is a flex container and will change your layout. Never use `mui.Box` /
  `mui.Button` / `mui.IconButton`: the DS exports its own at top level, and reaching
  through the `mui` namespace bypasses the design system silently.
- **Icons:** `@telicent-oss/mui-icons-material`, same paths as `@mui/icons-material`, a
  slimmed subset. Missing icon → add it to that package's icons-manifest and rebuild;
  never import upstream.
- **Genuinely absent:** `ToggleButtonGroup`. Compose from documented primitives and say
  so — it is a gap in the DS, not the app's problem to keep solving. `Tabs`, `Tab` and
  `TabPanel` exist on `main` but are in no release yet.
- **Never silence a consuming app's `@mui/*` import ban** to get around a gap. No
  `eslint-disable`, no downgrade to `warn`. A silenced rule ships MUI and nobody sees it
  again.
- **`rc` / `TELFE-*` / `LAB-*` dist-tags are prereleases**, not the latest stable.
