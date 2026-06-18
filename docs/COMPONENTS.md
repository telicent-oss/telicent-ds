# Telicent DS Component Manifest

> `@telicent-oss/ds` is Telicent's MUI-based React component library. This file is the complete, self-contained reference: setup, theming, every exported component, and copy-paste recipes. An agent that fetches it has what it needs to build a Telicent app UI without reading the source.

**AGENT INSTRUCTION:** This is your source of truth for UI components. Before writing any custom JSX or Tailwind classes for a visual element, you MUST find the closest match in this document.
- All components are imported directly from `@telicent-oss/ds`. (e.g., `import { Button, Card } from "@telicent-oss/ds";`)
- **Do not** write raw HTML (`<button>`, `<div>` for cards, `<input>`) if a component exists here.
- **Do not** use Tailwind for colors, borders, or shadows on these components; the theme controls them. Set colour through the theme palette (see Setup & Theming). Use Tailwind primarily for spacing (`gap-X`, `mt-X`) and sizing.

> Component names, props, and demonstrated states are generated from the `@telicent-oss/ds` type surface and stories, so they track the source. Setup, theming, and usage guidance are maintained by hand: reviewed against the source for v3.0.0, but not auto-checked on every build.

---

## Setup & Theming

Install:
```sh
npm install @telicent-oss/ds
```

Peer dependencies the consuming app must also install: `react@^19`, `react-dom@^19`, `@tanstack/react-query`, `@telicent-oss/ontologyservice@^1`, `axios`.

Import the styles once at the app entry. FontAwesome icons render only if the second file is loaded:
```ts
import "@telicent-oss/ds/dist/style.css";
import "@telicent-oss/ds/dist/fontawesome.css";
```

Wrap the app in `UIThemeProvider`. It supplies the MUI theme and `CssBaseline` internally — do not add your own `ThemeProvider` or `CssBaseline`.
```tsx
import { UIThemeProvider } from "@telicent-oss/ds";

<UIThemeProvider theme="DataNavy" dark={false}>
  <App />
</UIThemeProvider>
```
- `theme` (required): one of `"DataNavy"`, `"DocumentPink"`, `"GraphOrange"`, `"AdminBlue"`, `"Blank"`.
- `dark` (optional, default `false`): set it for the dark palette. Dark mode is this prop only — there is no runtime toggle or CSS class.

Read theme colours and tokens in app code with the `useExtendedTheme` hook. This is the sanctioned way to set a colour — use it instead of a Tailwind colour class:
```tsx
import { useExtendedTheme } from "@telicent-oss/ds";

const theme = useExtendedTheme();
// theme.palette.primary.main, theme.palette.tertiary.main, theme.palette.background.default
```
Palette keys include `primary`, `tertiary`, `text`, and `background`.

> Auth (`useAuth`, `AuthProvider`, `AuthContext`, `AuthRedirectUri`, `Callback`, and the `authorize-flow` utilities) is exported from `@telicent-oss/ds` and used by most Telicent apps, but it is out of scope for this UI component reference. See `src/utils/authorize-flow` in the source.

> Geospatial map components (`BasicMap`, `BasicMapV2`, `FeatureMap`, `MapCanvas`, `MapCanvasV2`, `LayerSelector`, `MapCanvasProvider`, and the `useMap` hook) are exported from `@telicent-oss/ds` and used by telicent-search and telicent-graph, but they are out of scope for this general UI component reference. See `src/feature-components/Map` in the source.

---

## 1. Buttons & Actions
*Use these instead of standard `<button>` tags. There is one `Button` component; the visual style is a `variant` prop, not a separate component per style.*
* **`Button`**: The standard button. Set emphasis with `variant`:
  * `variant="primary"` — main call-to-action on a page or form.
  * `variant="secondary"` — alternative actions (e.g. "Cancel", "Back").
  * `variant="tertiary"` — low-emphasis, neutral-colour actions.
  * `variant="text"` — text-only clickable actions (no background).
  * `variant="base"` — unstyled button base.
  * Size via `size="small" | "medium" | "large"` (default `medium`).
  * `onClick`, `type`, `disabled`, `startIcon`, `endIcon` pass through to MUI Button. There is **no `loading` prop** — show a pending state with `disabled` plus a label change, or an inline `<Spinner size={16} />` (see Recipes).
<!-- props:Button -->
<!-- stories:Buttons/Button -->
* **`IconButton`**: Use when a button only contains an Icon. Should include an `aria-label`.
* **`DropdownButton`**: Use for buttons that trigger a menu of options. (This is also the menu primitive — there is no standalone `Menu` export.)
<!-- props:DropdownButton -->
<!-- stories:Navigation/Menu -->
* **`TooltipToggleButton`**: Toggle actions that require hover context.
<!-- props:TooltipToggleButton -->
* **`CopyToClipboard`**: Utility component specifically for copy-to-clipboard actions.
<!-- props:CopyToClipboard -->
<!-- stories:Buttons/CopyToClipboard -->
* **`Link`**: Use for navigation links. (There is no `LinkButton`; for a link that should read as a link, use `Link`; for a link-styled action, use `Button variant="text"`.)
<!-- stories:Buttons/Link -->

## 2. Layout & Surfaces
*Use these to group content. Avoid writing custom `div` structures with manual padding/borders.*
* **`FlexBox`**: The main layout primitive (wraps MUI `Stack`), used more than any other component. Props: `direction="row" | "column"`, `spacing`, `gap` / `columnGap` / `rowGap`, `justifyContent`, `alignItems`, plus any MUI sx system prop.
* **`FlexGrid` / `FlexGridItem`**: 12-column grid (wrap MUI `Grid`). `FlexGrid` is the container, `FlexGridItem` the child slot; props pass through to MUI Grid (`spacing`, `columns`, breakpoint sizes).
<!-- stories:Component Library/FlexGrid -->
* **`Container`**: Use to wrap page content and restrict maximum width.
<!-- stories:Layout/Container -->
* **`Brand`**: Telicent brand mark component for use in headers and identity contexts.
<!-- props:Brand -->
<!-- stories:Brand/Brand -->
* **`Card`**: The primary container for distinct data entities.
  * *Composition:* Usually composed with `CardContent` (for data) and `CardActions` (for buttons). A `CardHeader` export also exists (passes through to MUI CardHeader), though most apps omit it and put the title inside `CardContent`.
  * *Props:* `maxWidth` is a DS-specific prop; other props pass through to MUI Card (e.g. `variant="outlined"`).
<!-- props:Card -->
<!-- props:CardContent -->
<!-- stories:Surfaces/Card -->
* **`Paper`**: A basic elevated surface background without the strict structure of a Card.
<!-- stories:Surfaces/Paper -->
* **`PopOver`**: Use for tooltip-style overlays and contextual pop-up content.
<!-- props:PopOver -->
<!-- stories:Surfaces/PopOver -->
* **`FixedPanel` / `FloatingPanel`**: Use for sidebars, property panels, or tool windows.
  * `FloatingPanel` exposes three sub-components: `FloatingPanel.DraggablePanel`, `FloatingPanel.Provider`, and `FloatingPanel.ToggleButton`.
  * `DraggableFloatingPanel` is the same component as `FloatingPanel.DraggablePanel`, exported directly. Use the named export for a standalone draggable panel; use the `FloatingPanel.*` namespace when you also need `.Provider` / `.ToggleButton` (also exported flat as `FloatingPanelProvider` and `FloatingPanelToggleButton`).
<!-- props:DraggableFloatingPanel -->
<!-- stories:Surfaces/FixedPanel -->
<!-- stories:Surfaces/FloatingPanel/FloatingPanel.DraggablePanel -->
* **`Drawer`**: Collapsible side panel with a built-in toggle tab. `children` is the panel content; `drawerWidth` sets its open width; `initialOpen` sets the starting state; `onVisibilityChange(open)` and `onToggle` report toggles. Style the surface with `PaperProps` / `PaperSx`.
<!-- props:Drawer -->
<!-- stories:Component Library/Drawer -->
* **`AppBar` / `Toolbar` / `AppChrome`**: Use strictly for top-level application navigation and headers. `AppChrome` is the app shell; pair it with `AppSwitch` for cross-app navigation.

  Application header — blessed method. Render the top-level chrome of a standalone app with `AppBar` and fill every chrome slot; do not ship the title-only form. Canonical composition:

  ```tsx
  <AppBar
    appName={config.appNameForHumans}                          // title, from config — never hardcode
    isElevated                                                  // shadow under the bar
    startChild={<AppSwitch apps={config.APP_SWITCH_LIBRARY} />} // cross-app switcher
    endChild={<UserProfile />}                                  // user menu + sign-out (common fill)
  />
  ```

  Required: `appName` (read from config, never hardcoded), `isElevated`, and both chrome slots filled — `startChild` with `AppSwitch` for cross-app navigation, `endChild` with a user affordance. `endChild` accepts any `ReactNode` within reason; `<UserProfile />` (user menu + sign-out) is the common choice, demonstrated by the `UsageExample` story (Surfaces/AppBar). Optional: `href` / `target` make the centered brand a link to the app root (see the `ClickableBrand` story); `beta` / `version` annotate the title; `disableBrand` drops the Telicent logo only when an app supplies its own brand via `startChild`; `position` defaults to page flow, set `sticky` only when the bar must stay visible on scroll. Anti-pattern: `<AppBar appName="X" />` — a title-only bar has no app-switcher and no user affordance, renders flat, and makes the app feel detached from the suite (this is the `Default` story).
<!-- props:AppBar -->
<!-- stories:Surfaces/AppBar -->
<!-- stories:Surfaces/Toolbar -->

## 3. Inputs & Forms
*Use these instead of standard `<input>`, `<select>`, or `<textarea>` tags. Ensure accessibility labels are passed.*
* **`TextField`**: Standard text input (wraps MUI TextField). Set the caption with `label`; use `value`/`onChange` as usual; DS adds `errorText` for an inline error message. Other props pass through to MUI TextField.
<!-- stories:Inputs/TextField -->
* **`EditableTextField`**: Use for inline-editing scenarios (e.g., clicking a title to rename it).
<!-- stories:Inputs/Editable TextField -->
* **`SearchBox` / `MiniSearchBox`**: Use specifically for search inputs.
<!-- props:SearchBox -->
<!-- props:MiniSearchBox -->
<!-- stories:Inputs/Search/MiniSearchBox -->
* **`Autocomplete` / `MiniSearchAutocomplete`**: Use when search requires type-ahead dropdown suggestions.
<!-- props:MiniSearchAutocomplete -->
<!-- stories:Inputs/Autocomplete -->
<!-- stories:Inputs/Search/MiniSearchAutocomplete -->
* **`SearchAutocompleteDialog`**: Full-screen dialog combining search input with autocomplete. Composes with `RecentSearches` (renders recent search history) and `SearchResults` (renders the results list).
<!-- props:SearchAutocompleteDialog -->
* **`Select`**: Standard dropdown (wraps MUI Select). Supply choices via the `options` prop — an array of `{ value, label }`, **not** `<MenuItem>` children. Use `value`/`onChange`/`label` as usual; optional `width`, `helperText`.
<!-- props:Select -->
<!-- stories:Inputs/Select -->
* **`Checkbox`**: Boolean or multi-select input (wraps MUI Checkbox). `label` renders the caption; `checked`/`onChange` control state.
<!-- props:Checkbox=CustomCheckbox -->
<!-- stories:Inputs/Checkbox -->
* **`Switch`**: On/Off toggle (wraps MUI Switch). `label`, `labelPlacement="end" | "start" | "top" | "bottom"` (default `end`), `checked`/`onChange`.
<!-- stories:Inputs/Switch -->
* **`DatePicker` / `DateTimePicker`**: Use for any temporal inputs.
<!-- props:DatePicker -->
<!-- props:DateTimePicker -->
<!-- stories:Inputs/DatePicker -->
<!-- stories:Inputs/DateTimePicker -->

## 4. Data Display & Typography
*Use these to render text and structured data.*
* **`Text`**: Use for all body typography instead of `<p>` or `<span>`. Style via `variant`: `body1` (default), `body2`, `subtitle1`, `subtitle2`, `caption`, `overline`, `h1`, `h2`, `h3`. (`h4`–`h6` are not valid `Text` variants — use the `H4`–`H6` components for those.)
<!-- props:Text -->
* **`H1` / `H2` / `H3` / `H4` / `H5` / `H6`**: Use for headings instead of `<h1>`–`<h6>`; each renders the matching semantic element. (There is no `Heading` component. `<Text variant="h2">` styles text as a heading but renders a `<p>` — use `H1`–`H6` when the semantic element matters.)
<!-- stories:Data Display/Headings -->
* **`TitleAndContent`**: Use for standard "Label: Value" data pairings.
<!-- props:TitleAndContent -->
* **`List`**: Standard list rendering.
* **`TreeView`**: Use for hierarchical or nested data structures.
<!-- props:TreeView -->
* **`Chip`**: Use for tags, statuses, or small attributes.
<!-- stories:Data display/Chip -->
* **`Divider`**: Use to separate content sections instead of `<hr>`.
<!-- stories:Data display/Divider -->
* **`UserProfile` / `UserProfileContent` / `UserStatus`**: Components for rendering user avatars, profile details, and active states. `UserProfileContent` renders the expanded profile detail; `UserStatus` renders the online/status indicator.
<!-- props:UserProfile -->
<!-- props:UserStatus -->
<!-- stories:Data display/User profile -->
* **`AppSwitch`**: Specific component for switching between different applications.
<!-- stories:Data display/App Switch -->
* **`IESType`**: Specific component for rendering IES data types.
<!-- props:IESType -->

## 5. Feedback & States
*Use these to communicate system status to the user.*
* **`Spinner`**: Circular loading indicator (wraps MUI CircularProgress; props `size`, `color`). Use for localized loading — inside a button or a small card.
<!-- stories:feedback/Spinner -->
* **`LinearProgress`**: Horizontal loading bar for page-level or wide-component loading.
<!-- stories:Feedback/Linear progress -->
* **`Skeleton`**: Use to render placeholder UI while `useQuery` is in an `isLoading` state.
<!-- stories:Feedback/Skeleton -->
* **`Dialog`**: Interrupt the user for confirmation or sub-forms (wraps MUI Dialog). Required `open` and `onClose`; compose with `DialogTitle` / `DialogContent` / `DialogActions`.
<!-- props:Dialog -->
<!-- stories:Feedback/Dialog -->
* **`Modal`**: Lower-level overlay with its own close button (`onClose(event, reason)`, optional `hideCloseButton`).
<!-- props:Modal -->
<!-- stories:Utils/Modal -->
* **`ErrorFallback`** (and `ErrorFallbackWrapper`, `ErrorFallbackText`): Render as the fallback of a React error boundary to display crash states gracefully. `ErrorFallbackText` is the text-only variant (no surrounding box). (The boundary itself is not a DS export; the DS provides the fallback UI.)
<!-- props:ErrorFallback -->
<!-- props:ErrorFallbackWrapper -->
<!-- props:ErrorFallbackText -->
<!-- stories:Utils/ErrorFallback -->

## 6. Icons
*The DS includes two icon sets. Import them directly from `@telicent-oss/ds`.*
* **SVG Icons** (custom Telicent icons): `BinIcon`, `CloseIcon`, `DataServiceIcon`, `DataSetIcon`, `DragHandleIcon`, `FloppyDiskIcon`, `GridIcon`, `ListIcon`, `LocationOnIcon`, `MapIcon`, `MinusCircleIcon`, `PlayIcon`, `PlusCircleIcon`, `TelicentMark`, `TelicentHorizontalSVG`, `UserIcon`, `XIcon`.
* **FontAwesome Icons** (wrapped FA icons): `ClockIcon`, `DownArrowIcon`, `DownloadIcon`, `SearchIcon`.
* **`TeliTypeIcon`**: Renders a type indicator icon for IES/ontology types.
<!-- stories:Data Display/Icons -->

---

## Recipes

*Real shapes from Telicent apps. Copy and adapt.*

**Themed app root** — styles, then the provider (which supplies the MUI theme + CssBaseline):
```tsx
import "@telicent-oss/ds/dist/style.css";
import "@telicent-oss/ds/dist/fontawesome.css";
import { UIThemeProvider } from "@telicent-oss/ds";

export function Root() {
  return (
    <UIThemeProvider theme="DataNavy" dark={false}>
      <App />
    </UIThemeProvider>
  );
}
```

**A form** — note `Select` takes an `options` array, not `<MenuItem>` children:
```tsx
import { FlexBox, TextField, Select, Checkbox, Button } from "@telicent-oss/ds";

<FlexBox direction="column" gap={2}>
  <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
  <Select
    label="Colour"
    value={colour}
    onChange={(e) => setColour(e.target.value)}
    options={[{ value: "r", label: "Red" }, { value: "b", label: "Blue" }]}
  />
  <Checkbox label="I agree" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
  <Button variant="primary" onClick={submit}>Save</Button>
</FlexBox>
```

**A react-hook-form form** — the common shape in Telicent apps: uncontrolled inputs (`TextField`) take `register`; controlled inputs (`Select`, `Autocomplete`) go through `Controller` and spread `field`:
```tsx
import { useForm, Controller } from "react-hook-form";
import { FlexBox, TextField, Select, Autocomplete, Button } from "@telicent-oss/ds";

const { register, control, handleSubmit, formState: { isValid } } = useForm<FormValues>();

<FlexBox direction="column" gap={2} component="form" onSubmit={handleSubmit(onSave)}>
  <TextField label="Name" {...register("name")} />
  <Controller
    name="classification"
    control={control}
    render={({ field }) => (
      <Select label="Classification" options={CLASSIFICATION_OPTIONS} {...field} fullWidth />
    )}
  />
  <Controller
    name="nationality"
    control={control}
    render={({ field }) => <Autocomplete label="Nationality" options={countryOptions} {...field} />}
  />
  <Button variant="primary" type="submit" disabled={!isValid}>Save</Button>
</FlexBox>
```

**A loading button** — there is no `loading` prop; gate on `disabled` and swap the label:
```tsx
import { Button, Spinner } from "@telicent-oss/ds";

<Button
  variant="primary"
  disabled={isPending}
  startIcon={isPending ? <Spinner size={16} color="inherit" /> : undefined}
>
  {isPending ? "Saving..." : "Save"}
</Button>
```

**A card with content and actions** — compose `CardContent` and `CardActions`:
```tsx
import { Card, CardContent, CardActions, Text, Button } from "@telicent-oss/ds";

<Card maxWidth={400}>
  <CardContent>
    <Text variant="h3">Dataset</Text>
    <Text>1,240 records</Text>
  </CardContent>
  <CardActions>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Open</Button>
  </CardActions>
</Card>
```

---
**Agent Rule Checklist Before Generating JSX:**
1. Did I import `style.css` + `fontawesome.css` and wrap the app in `UIThemeProvider`?
2. Did I use `Card` instead of a custom styled `div`?
3. Are all texts wrapped in `H1`–`H6` or `Text`?
4. Did I use `Button` with the right `variant` instead of styling a raw `<button>`?
5. Are loading states handled by `Skeleton`, `Spinner`, or a `disabled` button?
6. Did I set colours via the theme palette (`useExtendedTheme`) rather than Tailwind colour classes?
