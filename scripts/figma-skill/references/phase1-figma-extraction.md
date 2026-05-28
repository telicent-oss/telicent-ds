# Phase 1: Extract Design State from Figma

## Prerequisites

- Figma MCP connected (with API token)
- User has provided a Figma file URL or frame link
- You have read `COMPONENTS.md`

## Key context

The Figma file is built on the **MUI Figma component library**. This means:
- Component instances in the layer tree use MUI names (Button, TextField, Chip, etc.)
- **Figma variables** (color, spacing, typography, etc.) are the primary token source
- Designer customisations sit on top of the MUI base — these are the overrides to capture

## Procedure

### Step 1: Connect and orient

1. Use the Figma MCP to access the file
2. List available pages and frames
3. Ask the user: "Which frame(s) should I extract? I can see: [list frames]"
4. Navigate to the selected frame(s)

### Step 2: Pull Figma variables

Use the Figma MCP to read the file's **variable collections**. These are the design tokens.

The MUI base file typically organises variables into collections like:
- Colors (primitives + semantic aliases)
- Spacing
- Border radius
- Typography scales
- Shadows / elevation

For each variable, record:

```markdown
### Figma Variables

#### Colors
| Variable name | Value | Bound to (MUI) | DS equivalent | Authority |
|---------------|-------|-----------------|---------------|-----------|
| primary/main | #4A9EFF | palette.primary.main | theme.palette.primary.main | TBD |
| background/default | #1A1F2B | palette.background.default | theme.palette.background.default | TBD |
| ... | ... | ... | ... | ... |

#### Spacing
| Variable name | Value | Bound to (MUI) | DS equivalent | Authority |
|---------------|-------|-----------------|---------------|-----------|
| spacing/md | 12px | theme.spacing(1.5) | theme.spacing(1.5) | TBD |
| ... | ... | ... | ... | ... |
```

**Important:** Where a Figma variable value differs from the DS theme default for the same
semantic role, flag the mismatch. Ask the designer: "The Figma file uses #4A9EFF for the
primary color, but the DS uses [X]. Which is correct — should the DS adopt Figma's value,
or is Figma outdated?" Record their answer as the Authority.

If the designer doesn't know → Authority: **TBD**.

### Step 3: Extract per-element tokens

Some design values won't be captured by variables — they're set directly on elements
(one-off padding, a specific shadow, etc). Walk the selected frame and capture these:

```markdown
### Element-level overrides (not in Figma variables)

| Element | Property | Value | Notes |
|---------|----------|-------|-------|
| SearchInput wrapper | padding | 16px 20px | Larger than MUI default |
| SearchButton | border-radius | 0 8px 8px 0 | Right-side only |
| ... | ... | ... | ... |
```

### Step 4: Inventory components

Walk the frame's layer tree. Because the file uses MUI base components, the layer names
will often be MUI component names (Button, TextField, Autocomplete, etc.).

For each distinct UI element, record:

```markdown
## Component Inventory

### Region: [UI region name, e.g. "Search Bar"]

#### 1. [Figma layer name / MUI component name]

- **Figma node:** [layer path]
- **MUI base component:** [MUI component name from layer tree, if identifiable]
- **Description:** [What it looks like and does]
- **Classification:** DS | DS-candidate | Bespoke
- **DS mapping:** `ComponentName` from @telicent-oss/ds (if DS)
- **Authority:** Figma | DS | TBD
- **Authority rationale:** [Why — e.g. "Designer says this height is intentional
  and should be adopted by DS" or "Unknown, needs eng input"]
- **Props/overrides:**
  - `prop="value"`
  - `sx={{ key: value }}`
- **Bespoke rationale:** [if Bespoke — why can't this use a DS component]
- **Composed from:** [DS primitives] (if DS-candidate or Bespoke)
- **States:** [default, hover, focus, active, disabled, open, closed, etc.]
- **Content:** [Placeholder text/data visible in the design]
```

Group components by **UI region** (spatial area of the design), not by classification.
This makes the approval loop more natural — the designer thinks in regions, not categories.

### Step 5: Map user flows

If the Figma contains multiple frames for a single feature:

```markdown
## User Flows

### Flow: [Name]

1. **State: Default** — [Frame name]
   - [Description of visible state]

2. **State: Typing** — [Frame name]
   - [Description]

Transitions:
- Default → Typing: [trigger]
- Typing → Results: [trigger]
```

### Step 6: Document drift

```markdown
## Figma ↔ DS Drift

| Element | Figma value | DS v3 value | Authority | Action |
|---------|-------------|-------------|-----------|--------|
| Search input height | 48px | 40px | Figma | sx override, propose DS change |
| Button border-radius | 8px | 4px | TBD | Use Figma, flag for eng |
| Primary color | #4A9EFF | #3D85C6 | DS | Use DS value, update Figma |
| ... | ... | ... | ... | ... |
```

The "Action" column describes what Phase 2 should do.

### Step 7: Present for approval (by region)

For each UI region, show the designer:

> **Region: Search Bar**
>
> Components found: SearchInput (DS+sx), FilterDropzone (DS-candidate), SearchButton (DS)
>
> Authority decisions needed:
> - SearchInput height: Figma says 48px, DS says 40px. Which is correct?
> - [etc.]
>
> Does this look right?

After all regions are approved, save `design-state.md`.

## Quality checklist

- [ ] Figma variables extracted (not just per-element inspection)
- [ ] Every visible element has a component inventory entry
- [ ] Components are grouped by UI region
- [ ] Each component has an Authority field (Figma / DS / TBD)
- [ ] MUI base component names recorded where identifiable from layer tree
- [ ] Drift table populated with authority and action
- [ ] User has approved each region
