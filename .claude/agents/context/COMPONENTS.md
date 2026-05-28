# Telicent DS Component Manifest (v1)

**AGENT INSTRUCTION:** This is your source of truth for UI components. Before writing any custom JSX or Tailwind classes for a visual element, you MUST find the closest match in this document. 
- All components are imported directly from `@telicent-oss/ds`. (e.g., `import { PrimaryButton, Card } from "@telicent-oss/ds";`)
- **Do not** write raw HTML (`<button>`, `<div>` for cards, `<input>`) if a component exists here.
- **Do not** use Tailwind for colors, borders, or shadows on these components; the theme handles it. Use Tailwind primarily for spacing (`gap-X`, `mt-X`) and sizing.

### Relationship to MUI

DS wraps MUI v5. The intent is that DS components follow MUI's API philosophy: same prop naming conventions, same composition patterns, same controlled/uncontrolled behavior. When using a DS component, **assume MUI conventions apply** unless the source file shows otherwise. When a DS component's API diverges from its MUI equivalent, that's a bug or tech debt, not a design choice — do not perpetuate the divergence.

When writing or extending DS components:
- Match MUI's prop naming (`variant`, `size`, `color`, `disabled`, `onChange`, `value`/`defaultValue`).
- Match MUI's composition model (slots, `component` prop, `sx` prop passthrough).
- Consult the corresponding MUI doc (linked in Section 8) for API shape expectations.

### MUI fallback rule

When DS does not export a component you need, fall back to `@mui/material` directly. Two tiers:

1. **Simple pass-through** (Tabs, Tooltip, Alert, Breadcrumbs, Badge, Drawer, Accordion, Slider, Radio, Pagination, Stepper, Snackbar, Table): import from `@mui/material`. These inherit the DS theme automatically. No wrapper needed, no approval needed.
2. **Composed or opinionated** (anything requiring custom logic, state management, or layout beyond what MUI provides out of the box): flag to the team before building. DS may already have a pattern or a Figma spec that should drive the API.

See **Section 9** below for the full MUI fallback list.

---

## 1. Buttons & Actions
*Use these instead of standard `<button>` tags.*
* [`Button`](src/components/buttons/Button/Button.tsx): All button actions. Uses `variant` prop to select style:
  * `variant="primary"` — main call-to-action
  * `variant="secondary"` — alternative actions (Cancel, Back)
  * `variant="tertiary"` — low-emphasis actions
  * `variant="text"` — text-only clickable actions
* [`IconButton`](src/components/buttons/Button/IconButton.tsx): Button containing only an icon. **Must** include `aria-label`.
* [`DropdownButton`](src/components/data-display/DropdownButton/DropdownButton.tsx): Triggers a menu of options.
* [`Link`](src/components/buttons/Link/LinkButton.tsx): Link styled as a button.
* [`CopyToClipboard`](src/components/buttons/CopyToClipboard/CopyToClipboard.tsx): Copy-to-clipboard utility.
* [`TooltipToggleButton`](src/components/inputs/TooltipToggleButton.tsx): Toggle actions with hover context.

## 2. Layout & Surfaces
*Use these to group content. Avoid writing custom `div` structures with manual padding/borders.*
* [`FlexBox`](src/components/layout/FlexBox.tsx) / [`FlexGrid`](src/components/layout/FlexGrid.tsx) / `FlexGridItem`: Standard alignment and grid layouts.
* [`Container`](src/components/layout/Container/Container.tsx): Wraps page content, restricts max width.
* [`Card`](src/components/surfaces/Card/Card.tsx): Primary container for distinct data entities.
  * Compose with [`CardContent`](src/components/surfaces/Card/CardContent.tsx) (data) and [`CardActions`](src/components/surfaces/Card/CardActions.tsx) (buttons).
* [`Paper`](src/components/surfaces/Paper/Paper.tsx): Elevated surface without Card's strict structure.
* [`FixedPanel`](src/components/surfaces/FixedPanel/FixedPanel.tsx) / [`FloatingPanel`](src/components/surfaces/FloatingPanel/) / [`DraggableFloatingPanel`](src/components/surfaces/FloatingPanel/DraggableFloatingPanel.tsx): Sidebars, property panels, movable tool windows.
* [`AppBar`](src/components/surfaces/AppBar/AppBar.tsx) / [`Toolbar`](src/components/surfaces/Toolbar/Toolbar.tsx) / [`AppChrome`](src/components/layout/AppChrome.tsx): Top-level application navigation and headers only.
* [`PopOver`](src/components/surfaces/PopOver/Popover.tsx): Content anchored on top of a trigger element.
* [`Drawer`](src/feature-components/Drawer/composites/Drawer.tsx): Collapsible side panel with toggle tab. Wraps MUI Drawer with `useDrawer` controller, `initialOpen`, `onVisibilityChange`. Prefer over raw MUI `Drawer`.

## 3. Inputs & Forms
*Use these instead of standard `<input>`, `<select>`, or `<textarea>` tags. Ensure accessibility labels are passed.*
* [`TextField`](src/components/inputs/TextField/TextField.tsx): Standard text input.
* [`EditableTextField`](src/components/inputs/EditableTextField/EditableTextField.tsx): Inline-editing (e.g., click title to rename).
* [`SearchBox`](src/components/inputs/SearchBox/SearchBox.tsx) / [`MiniSearchBox`](src/components/inputs/SearchBox/MiniSearchBox.tsx): Search-specific inputs.
* [`Autocomplete`](src/components/inputs/Autocomplete/Autocomplete.tsx) / [`MiniSearchAutocomplete`](src/components/inputs/SearchBox/MiniSearchAutocomplete.tsx): Type-ahead dropdown suggestions.
* [`SearchAutocompleteDialog`](src/components/SearchAutocompleteDialog/SearchAutocompleteDialog.tsx): Search autocomplete in a dialog overlay. Includes [`RecentSearches`](src/components/SearchAutocompleteDialog/RecentSearches.tsx) and [`SearchResults`](src/components/SearchAutocompleteDialog/SearchResults.tsx).
* [`Select`](src/components/inputs/Select/Select.tsx): Standard dropdown selection.
* [`Checkbox`](src/components/inputs/Checkbox/Checkbox.tsx): Boolean or multi-select.
* [`Switch`](src/components/inputs/Switch/Switch.tsx): Toggle states (On/Off).
* [`DatePicker`](src/components/inputs/DatePicker/DatePicker.tsx) / [`DateTimePicker`](src/components/inputs/DateAndTimePicker/DateTimePicker.tsx): Temporal inputs.

## 4. Data Display & Typography
*Use these to render text and structured data.*
* [`Text` / `H1`-`H6`](src/components/data-display/Text/Text.tsx): All typography. Use instead of `<p>`, `<h1>`-`<h6>`, `<span>`. Wraps MUI `Typography`; variant determined by component choice.
* [`TitleAndContent`](src/components/data-display/Text/TitleAndContent/TitleAndContent.tsx): "Label: Value" data pairings.
* [`List`](src/components/data-display/List/List.tsx): Standard list rendering.
* [`TreeView`](src/components/data-display/TreeView/TreeView.tsx): Hierarchical or nested data structures.
* [`Chip`](src/components/data-display/Chip/Chip.tsx): Tags, statuses, small attributes.
* [`Divider`](src/components/data-display/Divider/Divider.tsx): Section separator. Use instead of `<hr>`.
* [`UserProfile`](src/components/data-display/UserProfile/UserProfile.tsx) / [`UserProfileContent`](src/components/data-display/UserProfile/UserProfileContent/UserProfileContent.tsx) / [`UserStatus`](src/components/data-display/UserProfile/UserProfileContent/UserStatus.tsx): User avatars, profile content, and active states.
* [`AppSwitch`](src/components/data-display/AppSwitch/AppSwitch.tsx): Switch between applications.
* [`IESType`](src/components/data-display/IESType/IESType.tsx) / [`TeliTypeIcon`](src/components/TypeIcon/TypeIcon.tsx): Render IES data types and ontology-driven type icons.
* [`Brand`](src/components/Brand/Brand.tsx): Telicent branding/logo.

## 5. Feedback & States
*Use these to communicate system status to the user.*
* [`Spinner`](src/components/feedback/Spinner/Spinner.tsx): Circular loading (localized). Wraps MUI `CircularProgress`.
* [`LinearProgress`](src/components/feedback/LinearProgress/LinearProgress.tsx): Horizontal loading bar (page-level).
* [`Skeleton`](src/components/feedback/Skeleton/Skeleton.tsx): Placeholder UI while `useQuery` is loading.
* [`Dialog`](src/components/feedback/Dialog/Dialog.tsx) / [`Modal`](src/components/utils/Modal/Modal.tsx): Interruptions for confirmation or complex sub-forms.
* [`ErrorFallback`](src/components/utils/ErrorFallback/ErrorFallback.tsx): Crash state display inside `ErrorBoundary`.

## 6. Icons
*Import directly from `@telicent-oss/ds`.*
* Custom ([`src/components/data-display/Icons/`](src/components/data-display/Icons/)): `BinIcon`, `CloseIcon`, `XIcon`, `GridIcon`, `UserIcon`, `PlayIcon`, `MapIcon`, `FloppyDiskIcon`, `PlusCircleIcon`, `MinusCircleIcon`, `DragHandleIcon`, `DataServiceIcon`, `DataSetIcon`.
* FontAwesome ([`src/components/data-display/FontAwesomeIcons/`](src/components/data-display/FontAwesomeIcons/)): `SearchIcon`, `ClockIcon`, `DownloadIcon`, `DownArrowIcon`.
* For anything else, import from `@telicent-oss/mui-icons-material` (re-exports `@mui/icons-material`).

## 7. Hooks
* `useExtendedTheme()`: Access the full DS theme object (colors, spacing, typography).
* `useDebounce(value, delay)`: Debounce helper.
* `useFloatingPanels()`: Floating panel state management.

## 8. Map & Geo
*Feature-level components for map-based views.*
* [`MapCanvas`](src/feature-components/Map/primitives/MapCanvas/MapCanvas.tsx): Base map rendering primitive (MapLibre).
* [`BasicMap`](src/feature-components/Map/composites/BasicMap/BasicMap.tsx): Pre-configured map with standard controls.
* [`LayerSelector`](src/feature-components/Map/primitives/LayerSelector/composites/LayerSelector/LayerSelector.tsx): Layer toggle UI.
* [`InsetInMap`](src/feature-components/InsetInMap/InsetInMap.tsx): Inset panel overlay on map.

## 9. MUI Fallback Components
*Not wrapped by DS. Import directly from `@mui/material`. These inherit the DS theme via the shared ThemeProvider. Fetch the linked doc for full API/props/examples.*

| Component | When to use | Docs |
|-----------|-------------|------|
| `Tabs` / `Tab` | Switching between views within the same context | [react-tabs](https://mui.com/material-ui/react-tabs.md) |
| `Tooltip` | Hover/focus context on any element (DS uses internally but does not export) | [react-tooltip](https://mui.com/material-ui/react-tooltip.md) |
| `Alert` | Inline status messages (success, warning, error, info) | [react-alert](https://mui.com/material-ui/react-alert.md) |
| `Snackbar` | Brief, auto-dismissing notifications. Pair with `Alert` for severity | [react-snackbar](https://mui.com/material-ui/react-snackbar.md) |
| `Breadcrumbs` | Hierarchical page location trail | [react-breadcrumbs](https://mui.com/material-ui/react-breadcrumbs.md) |
| `Badge` | Numeric or dot indicator on icons/avatars (unread counts, status) | [react-badge](https://mui.com/material-ui/react-badge.md) |
| `Accordion` | Collapsible content sections | [react-accordion](https://mui.com/material-ui/react-accordion.md) |
| `Menu` | Dropdown menu lists | [react-menu](https://mui.com/material-ui/react-menu.md) |
| `Slider` | Range or single-value numeric input (zoom, filters, thresholds) | [react-slider](https://mui.com/material-ui/react-slider.md) |
| `RadioGroup` / `Radio` | Mutually exclusive selection. Prefer over `Select` when 2-5 visible options | [react-radio-button](https://mui.com/material-ui/react-radio-button.md) |
| `Table` + related | Tabular data display | [react-table](https://mui.com/material-ui/react-table.md) |
| `Pagination` | Page-based navigation for large data sets | [react-pagination](https://mui.com/material-ui/react-pagination.md) |
| `Stepper` | Multi-step wizard workflows | [react-stepper](https://mui.com/material-ui/react-stepper.md) |
| `Avatar` | Standalone avatar. Prefer DS `UserProfile` when showing name + status | [react-avatar](https://mui.com/material-ui/react-avatar.md) |
| `ToggleButtonGroup` | Grouped exclusive or multi-select toggles (e.g., view mode: grid/list) | [react-toggle-button](https://mui.com/material-ui/react-toggle-button.md) |

---
**Agent Rule Checklist Before Generating JSX:**
1. Did I use `Card` instead of a custom styled `div`?
2. Are all texts wrapped in `H1`-`H6` or `Text`?
3. Did I use `Button` with the right `variant` instead of styling a raw `<button>`?
4. Are loading states handled by `Skeleton` or `Spinner`?
5. If the component I need isn't in sections 1-8, did I check section 9 before writing custom markup?
6. If it's not in section 9 either, did I flag it before building a custom component?
