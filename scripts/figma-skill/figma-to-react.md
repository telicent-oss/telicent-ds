---
name: figma-to-react
description: >
  Translate Figma designs into React prototypes using @telicent-oss/ds (MUI-based design system).
  Two-phase workflow: (1) extract design state from Figma via MCP, (2) generate a file-based
  React+Vite project with real DS imports. Use this skill whenever the user wants to prototype a
  Figma design in React, extract design tokens from Figma, translate a Figma component to code,
  or create a DS-compliant React implementation of a design. Also trigger when user mentions
  "figma to react", "prototype from figma", "design to code", "advanced search prototype",
  or references a Figma file/link they want implemented. This skill is designed for designers
  to operate — it guides them conversationally and does not assume frontend engineering knowledge.
---

# Figma to React Prototype Skill

## Who runs this

A **designer** operating Claude Desktop. They are not expected to know React, npm, or TypeScript.
All technical steps are performed by Claude. The designer's role is to:
- Connect the Figma MCP
- Point Claude at the right Figma file/frame
- Approve components in batches (grouped by UI region)
- Relay the final output to engineering

---

## Step 0: Environment prerequisites

Before doing anything else, verify the designer's machine is ready.

### Node.js

Run `node --version` and `npm --version`. If either fails, stop and tell the user:

> I need Node.js to build the prototype. Please install it:
> 1. Go to https://nodejs.org
> 2. Download the LTS version (the big green button)
> 3. Run the installer — accept all defaults
> 4. Close and reopen your terminal, then come back here
>
> If you're unsure, ask your engineering team to help — they'll know what this is.

Minimum: Node 18+, npm 9+.

### Figma MCP

Check whether the Figma MCP is connected. If not:

> I need access to your Figma file. Please connect the Figma MCP:
> 1. In Claude Desktop, go to Settings > MCP Servers
> 2. Add the Figma MCP (you'll need a Figma API token — your Figma admin can generate
>    one at https://www.figma.com/developers/api#access-tokens)
> 3. Once connected, paste the Figma file URL or frame link here

---

## Key concept: MUI base file

The Figma designs are built on the **MUI Figma component library** with designer
customisations on top. This means:

- Figma component names correspond to MUI component names
- Figma variables represent design tokens (colors, spacing, typography, radii, etc.)
- @telicent-oss/ds wraps MUI, so the mapping chain is: **Figma > MUI > DS**

During extraction, pull **Figma variables first** as the primary token source, then
inspect individual components for overrides.

---

## Key concept: Authority

For each component and token, there's a question: **whose version is correct?**

| Authority | Meaning | What to do in prototype |
|-----------|---------|------------------------|
| **Figma** | Design intent is correct; DS should eventually adopt this | Use Figma values, mark with `// AUTHORITY: FIGMA — DS should adopt` |
| **DS** | DS is correct; Figma is outdated or drifted | Use DS values, mark with `// AUTHORITY: DS — Figma is stale` |
| **TBD** | Unclear — needs product/eng decision | Use Figma values (benefit of the doubt), mark with `// AUTHORITY: TBD — needs resolution` |

The designer can set authority during the approval loop. If they don't know, default to **TBD**.
The HANDOFF.md collects all TBD items for eng to resolve.

---

## Overview

| Phase | Name | Input | Output |
|-------|------|-------|--------|
| 1 | Extract Design State | Figma file URL or frame reference | `design-state.md` |
| 2 | Generate React Prototype | `design-state.md` | Vite+React project with @telicent-oss/ds |

---

## Before starting Phase 1

Read `~/.claude/figma-to-react/COMPONENTS.md`. It contains the full list of @telicent-oss/ds
exports with source paths, prop signatures, and MUI fallback guidance.

---

## Phase 1: Extract Design State

**Goal:** Produce a `design-state.md` document that an engineer (or Phase 2) can use to build
the prototype without re-reading the Figma file.

Read `~/.claude/figma-to-react/references/phase1-figma-extraction.md` for the full procedure, then follow it.

### Summary

1. **Connect and navigate** — Open the Figma file via MCP. List pages/frames. Ask user which to extract.
2. **Pull Figma variables** — Extract the variable collections (colors, spacing, typography, radii).
   These are the primary token source since the file is MUI-based.
3. **Inventory components** — Walk the frame's layer tree. For each MUI-named component, record
   it and classify as DS / DS-candidate / Bespoke. Record the **authority** for each.
4. **Map user flows** — Document state transitions across frames.
5. **Present for approval** — Show the user a summary grouped by UI region. Get approval.
6. **Save** — Write `design-state.md`.

### Classification rules

- **DS**: Figma component maps to a @telicent-oss/ds export. May need `sx` overrides.
- **DS-candidate**: Doesn't exist in DS but could/should. Build from DS primitives.
- **Bespoke**: One-off hero element specific to this page. Still uses DS tokens and primitives.

Always bias toward DS with `sx` overrides over Bespoke.

---

## Phase 2: Generate React Prototype

**Goal:** Produce a working Vite+React project the designer can run locally or hand to eng.

Read `~/.claude/figma-to-react/references/phase2-react-generation.md` for the full procedure, then follow it.

### Summary

1. **Scaffold project** — Vite+React 19+TypeScript. Install DS and all peer deps.
2. **Set up DS entrypoint** — Theme provider, CSS imports.
3. **Create token file** — From Figma variables, with authority annotations.
4. **Build components by UI region** — Group related components, build batch, get approval.
5. **Compose the page** — Assemble into full layout.
6. **Wire interactivity** — React state for user flows. Mock data, no API calls.
7. **Test and present** — Verify it builds. Show the designer how to run it.

### File structure

```
prototype/
  src/
    main.tsx                    # DS imports + theme provider
    App.tsx                     # Page composition
    components/
      ds-overrides/             # DS components with sx customisation
      ds-candidates/            # Future DS components
      bespoke/                  # Hero / one-off components
    theme/
      tokens.ts                 # Figma variables > code, with authority annotations
    mocks/
      data.ts                   # Mock data for populated states
    types/
      index.ts
  package.json
  vite.config.ts
  tsconfig.json
  README.md                     # How to run
  HANDOFF.md                    # Eng handoff: compliance, drift, TBDs, DS recommendations
```

---

## Approval loop (by UI region, not individual component)

Group components by spatial region of the design (e.g. "search bar area", "filter panel",
"results list"). For each region:

1. **Announce the region** — "I'm going to build the search bar area. This includes:
   [SearchInput (DS+sx), FilterDropzone (DS-candidate), SearchButton (DS)]. Here's my plan."
2. **Build all components in the region**
3. **Present the batch** — Summary of what was built, classifications, authority decisions
4. **Ask for approval** — "Does this region match the design? Any adjustments?"
5. **Iterate or proceed**

This keeps the loop productive without being tediously granular.

---

## Handoff to engineering

Generate `HANDOFF.md` containing:

1. **DS compliance summary** — Table: component, classification, authority, notes
2. **TBD items** — Every component/token marked TBD, with context for eng to decide
3. **Figma-leads** — Components where Figma is authoritative and DS should adopt
   (these are DS change proposals with concrete values)
4. **DS-leads** — Components where DS was used over Figma (Figma needs updating)
5. **Bespoke rationale** — Why each bespoke component exists, what DS changes would absorb it
6. **Recommended DS changes** — Proposed new components or prop additions
7. **Open questions** — Anything unresolved

---

## Self-improvement

After each use, the designer should note:
- Components where classification was wrong
- Tokens extracted incorrectly
- Authority calls that eng overturned

Feed these back to the skill maintainer (FE engineer) to update reference files.
