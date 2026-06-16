# Telicent DS Component Manifest

**AGENT INSTRUCTION:** This is your source of truth for UI components. Before writing any custom JSX or Tailwind classes for a visual element, you MUST find the closest match in this document.
- All components are imported directly from `@telicent-oss/ds`. (e.g., `import { Button, Card } from "@telicent-oss/ds";`)
- **Do not** write raw HTML (`<button>`, `<div>` for cards, `<input>`) if a component exists here.
- **Do not** use Tailwind for colors, borders, or shadows on these components; the theme handles it. Use Tailwind primarily for spacing (`gap-X`, `mt-X`) and sizing.

> Verified against `@telicent-oss/ds` v3.0.0 source (`src/export.ts`, `src/components/*`). Upstream source: `Telicent-io/claude-context` commit `0f5645d`. Every component name below resolves to a real package export. Where the upstream draft named a component that is not exported, this manifest gives the actual API instead (see "Buttons" and "Typography").

---

## 1. Buttons & Actions
*Use these instead of standard `<button>` tags. There is one `Button` component; the visual style is a `variant` prop, not a separate component per style.*
* **`Button`**: The standard button. Set emphasis with `variant`:
  * `variant="primary"` — main call-to-action on a page or form.
  * `variant="secondary"` — alternative actions (e.g. "Cancel", "Back").
  * `variant="tertiary"` — low-emphasis, neutral-colour actions.
  * `variant="text"` — text-only clickable actions (no background).
  * `variant="base"` — unstyled button base.
  * Size via `size="small" | "medium" | "large"`.
* **`IconButton`**: Use when a button only contains an Icon. Should include an `aria-label`.
* **`DropdownButton`**: Use for buttons that trigger a menu of options. (This is also the menu primitive — there is no standalone `Menu` export.)
* **`TooltipToggleButton`**: Toggle actions that require hover context.
* **`CopyToClipboard`**: Utility component specifically for copy-to-clipboard actions.
* **`Link`**: Use for navigation links. (There is no `LinkButton`; for a link that should read as a link, use `Link`; for a link-styled action, use `Button variant="text"`.)

## 2. Layout & Surfaces
*Use these to group content. Avoid writing custom `div` structures with manual padding/borders.*
* **`FlexBox` / `FlexGrid` / `FlexGridItem`**: Use for standard alignment and grid layouts. `FlexGridItem` is the child slot component for `FlexGrid`.
* **`Container`**: Use to wrap page content and restrict maximum width.
* **`Brand`**: Telicent brand mark component for use in headers and identity contexts.
* **`Card`**: The primary container for distinct data entities.
  * *Composition:* Usually composed with `CardContent` (for data) and `CardActions` (for buttons). There is no `CardHeader` export.
* **`Paper`**: A basic elevated surface background without the strict structure of a Card.
* **`PopOver`**: Use for tooltip-style overlays and contextual pop-up content.
* **`FixedPanel` / `FloatingPanel`**: Use for sidebars, property panels, or tool windows.
  * `FloatingPanel` exposes three sub-components: `FloatingPanel.DraggablePanel`, `FloatingPanel.Provider`, and `FloatingPanel.ToggleButton`.
  * `DraggableFloatingPanel` is also available as a named export for direct use.
* **`AppBar` / `Toolbar` / `AppChrome`**: Use strictly for top-level application navigation and headers.

## 3. Inputs & Forms
*Use these instead of standard `<input>`, `<select>`, or `<textarea>` tags. Ensure accessibility labels are passed.*
* **`TextField`**: Standard text input.
* **`EditableTextField`**: Use for inline-editing scenarios (e.g., clicking a title to rename it).
* **`SearchBox` / `MiniSearchBox`**: Use specifically for search inputs.
* **`Autocomplete` / `MiniSearchAutocomplete`**: Use when search requires type-ahead dropdown suggestions.
* **`SearchAutocompleteDialog`**: Full-screen dialog combining search input with autocomplete. Composes with `RecentSearches` (renders recent search history) and `SearchResults` (renders the results list).
* **`Select`**: Standard dropdown selection.
* **`Checkbox`**: For boolean selections or multi-select lists.
* **`Switch`**: For toggling states (On/Off).
* **`DatePicker` / `DateTimePicker`**: Use for any temporal inputs.

## 4. Data Display & Typography
*Use these to render text and structured data.*
* **`Text`**: Use for all body typography instead of `<p>` or `<span>`. Style via `variant` (`body1`, `body2`, `subtitle1`, `subtitle2`, `caption`, `overline`, …).
* **`H1` / `H2` / `H3` / `H4` / `H5` / `H6`**: Use for headings instead of `<h1>`–`<h6>`; each renders the matching semantic element. (There is no `Heading` component. `<Text variant="h2">` styles text as a heading but renders a `<p>` — use `H1`–`H6` when the semantic element matters.)
* **`TitleAndContent`**: Use for standard "Label: Value" data pairings.
* **`List`**: Standard list rendering.
* **`TreeView`**: Use for hierarchical or nested data structures.
* **`Chip`**: Use for tags, statuses, or small attributes.
* **`Divider`**: Use to separate content sections instead of `<hr>`.
* **`UserProfile` / `UserProfileContent` / `UserStatus`**: Components for rendering user avatars, profile details, and active states. `UserProfileContent` renders the expanded profile detail; `UserStatus` renders the online/status indicator.
* **`AppSwitch`**: Specific component for switching between different applications.
* **`IESType`**: Specific component for rendering IES data types.

## 5. Feedback & States
*Use these to communicate system status to the user.*
* **`Spinner`**: Circular loading indicator for localized loading (e.g., inside a button or small card).
* **`LinearProgress`**: Horizontal loading bar for page-level or wide-component loading.
* **`Skeleton`**: Use to render placeholder UI while `useQuery` is in an `isLoading` state.
* **`Dialog` / `Modal`**: Use to interrupt the user for confirmation (e.g., "Are you sure you want to delete?") or complex sub-forms.
* **`ErrorFallback`** (and `ErrorFallbackWrapper`): Render as the fallback of a React error boundary to display crash states gracefully. (The boundary itself is not a DS export; the DS provides the fallback UI.)

## 6. Icons
*The DS includes two icon sets. Import them directly from `@telicent-oss/ds`.*
* **SVG Icons** (custom Telicent icons): `BinIcon`, `CloseIcon`, `DataServiceIcon`, `DataSetIcon`, `DragHandleIcon`, `FloppyDiskIcon`, `GridIcon`, `ListIcon`, `LocationOnIcon`, `MapIcon`, `MinusCircleIcon`, `PlayIcon`, `PlusCircleIcon`, `TelicentMark`, `TelicentHorizontalSVG`, `UserIcon`, `XIcon`.
* **FontAwesome Icons** (wrapped FA icons): `ClockIcon`, `DownArrowIcon`, `DownloadIcon`, `SearchIcon`.
* **`TeliTypeIcon`**: Renders a type indicator icon for IES/ontology types.

---
**Agent Rule Checklist Before Generating JSX:**
1. Did I use `Card` instead of a custom styled `div`?
2. Are all texts wrapped in `H1`–`H6` or `Text`?
3. Did I use `Button` with the right `variant` instead of styling a raw `<button>`?
4. Are loading states handled by `Skeleton` or `Spinner`?
