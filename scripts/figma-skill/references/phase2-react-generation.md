# Phase 2: Generate React Prototype

## Prerequisites

- `design-state.md` from Phase 1 (in working directory or provided in conversation)
- You have read `COMPONENTS.md`
- Node.js 18+ and npm 9+ verified (Step 0 in figma-to-react.md)

## Procedure

### Step 1: Scaffold the project

```bash
npm create vite@latest prototype -- --template react-ts
cd prototype

# Pin React 19 (required by @telicent-oss/ds v3)
npm install react@19 react-dom@19
npm install -D @types/react @types/react-dom

# DS and ALL peer/required dependencies
npm install @telicent-oss/ds
npm install @mui/material@^5.16.7 @emotion/react@^11.10.6 @emotion/styled@^11.10.6
npm install @mui/x-date-pickers@^8.9.2 dayjs
npm install @tanstack/react-query axios
npm install @telicent-oss/ontologyservice@^1.0.2
```

**Critical:** `@telicent-oss/ontologyservice` is a peer dependency of the DS.
Without it, imports may fail at runtime. For a prototype, it just needs to be
installed — it won't be called.

If any install fails, show the user the error and ask them to relay it to
their engineering team.

### Step 2: Configure the entry point

**src/main.tsx:**
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "@telicent-oss/ds/dist/style.css";
import "@telicent-oss/ds/dist/fontawesome.css";
import { UIThemeProvider } from "@telicent-oss/ds";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UIThemeProvider theme="DataNavy">
        <App />
      </UIThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
```

**Note:** `QueryClient` is a peer dep of the DS. It doesn't need real API
configuration for a prototype — it just needs to exist in the tree.

### Step 3: Create the token file

From `design-state.md` Figma variables section, create:

**src/theme/tokens.ts:**
```tsx
/**
 * Design tokens extracted from Figma variables.
 *
 * Authority annotations:
 * - FIGMA: Figma value is correct; DS should adopt this
 * - DS: DS value is correct; Figma should update
 * - TBD: Needs product/eng decision (using Figma value as default)
 */
export const tokens = {
  colors: {
    // AUTHORITY: DS — matches DS theme
    bgPrimary: "#1A1F2B",
    // AUTHORITY: FIGMA — DS should adopt (designer confirmed)
    accentPrimary: "#4A9EFF",
    // AUTHORITY: TBD — Figma uses #242936, DS uses #1E2433
    bgSurface: "#242936",
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,   // AUTHORITY: FIGMA — MUI default is 8, Figma uses 12
    lg: 16,
    xl: 24,
  },
  // ... etc from design-state.md
} as const;
```

Where authority is **DS**, use the DS theme value (access via `useExtendedTheme()`
at runtime) rather than hardcoding. Where authority is **Figma** or **TBD**, hardcode
the Figma value in tokens.ts.

### Step 4: Build components (by UI region)

Process the component inventory from `design-state.md`, grouped by **UI region**
as documented in Phase 1.

Order: DS components first within each region (establishes baseline), then
DS-candidates, then Bespoke.

For each **region**:

#### a) Announce the batch

> I'm going to build the **[Region Name]** area. This includes:
> - [Component A] (DS — using `Button` with sx overrides)
> - [Component B] (DS-candidate — built from FlexBox + Chip)
> - [Component C] (Bespoke — custom layout, uses DS tokens)
>
> Authority decisions applied:
> - [Component A height]: Using Figma value (48px), authority: FIGMA
> - [Component B color]: Using DS value, authority: DS

#### b) Build all components in the region

Place each file in the appropriate directory:
- `src/components/ds-overrides/` — DS components with sx customisation
- `src/components/ds-candidates/` — Future DS components
- `src/components/bespoke/` — Hero/custom components

**File header template (all components):**
```tsx
/**
 * [CLASSIFICATION]: [ComponentName]
 * Region: [UI region name]
 * Figma source: [Frame/node reference]
 * Authority: [FIGMA | DS | TBD]
 *
 * [Classification-specific notes — see templates below]
 */
```

**DS components** — import from DS, apply sx:
```tsx
// DS mapping: SearchBox from @telicent-oss/ds
// Overrides: height (AUTHORITY: FIGMA), padding (AUTHORITY: TBD)
import { SearchBox } from "@telicent-oss/ds";
import { tokens } from "../../theme/tokens";
```

**DS-candidates** — build from DS primitives, document proposed API:
```tsx
// DS-CANDIDATE: FilterDropzone
// Proposed DS API: <FilterDropzone items={Chip[]} onAdd onRemove onReorder />
// To promote to DS: extract to @telicent-oss/ds, add stories, add to Figma library
import { FlexBox, Chip } from "@telicent-oss/ds";
```

**Bespoke** — build with DS tokens and primitives, document why it's bespoke:
```tsx
// BESPOKE: AdvancedSearchBar
// Why bespoke: Composite layout with search + filters + actions unique to this page
// DS primitives used: FlexBox, Paper
// DS tokens used: colors.bgSurface, spacing.lg, borders.radiusMd
import { FlexBox, Paper } from "@telicent-oss/ds";
import { tokens } from "../../theme/tokens";
```

#### c) Present the batch

> Built the **[Region Name]** area:
> - **ComponentA** (DS): Used `Button` with increased height (48px, authority: FIGMA)
> - **ComponentB** (DS-candidate): Built from FlexBox + Chip, supports add/remove
> - **ComponentC** (Bespoke): Custom composite layout with DS tokens
>
> Does this region match the design? Any adjustments?

#### d) Iterate or proceed

### Step 5: Compose the page

**src/App.tsx:** Assemble all regions using DS layout primitives:
```tsx
import { FlexBox, AppChrome, Paper } from "@telicent-oss/ds";
// Import all region components
```

### Step 6: Wire interactivity

For each user flow in `design-state.md`:
- `useState` / `useReducer` for state transitions
- Mock data in `src/mocks/data.ts`
- No API calls, no auth, no routing (unless multiple pages exist in the design)

### Step 7: Verify

```bash
cd prototype
npm run dev
```

If it builds, tell the user:

> The prototype is ready. To run it:
> ```
> cd prototype
> npm install
> npm run dev
> ```
> Then open http://localhost:5173 in your browser.
>
> To share with engineering, zip the `prototype/` folder and send it.
> They can unzip it, run `npm install && npm run dev`, and see it immediately.

If it doesn't build, fix the error. Common issues:
- Missing peer dep → install it
- Type error → fix or add `// @ts-ignore` with explanation (prototype, not production)
- CSS import order → DS CSS must be imported before component CSS

### Step 8: Generate handoff documents

**README.md** — For anyone opening the project:
- What this is (prototype of [Feature] from Figma)
- How to run
- Tech stack: Vite, React 19, @telicent-oss/ds v3, MUI 5

**HANDOFF.md** — For engineering (see figma-to-react.md for full spec). Must include:
1. DS compliance table (every component, with classification + authority)
2. All TBD items with context
3. Figma-leads list (proposed DS changes with concrete values)
4. DS-leads list (Figma should be updated)
5. Bespoke rationale
6. Recommended DS additions

## Do NOT

- Do not use Tailwind, CSS modules, or styled-components. MUI `sx` prop only.
- Do not skip the regional approval loop.
- Do not install additional UI libraries beyond DS + MUI.
- Do not hardcode colors as hex in component files. Use `tokens.ts` or DS theme.
- Do not aim for pixel-perfect. The goal is correct component architecture and DS usage.
- Do not resolve Authority: TBD items yourself. Flag them for eng.
