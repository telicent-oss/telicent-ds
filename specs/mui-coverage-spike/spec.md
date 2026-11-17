# Spike: Storybook for unexported MUI components

Show every MUI component the DS does not export, rendered stock and under the Telicent theme, so the FE team can size the work to bless each one for our theme, palette, and UX requirements.

Output is an estimate, not a shipped feature. Nothing is exported and nothing is released.

## Not in this spike

No change to `src/export.ts`. The `mui` namespace stays at three keys.

Stories import `@mui/material` directly. The eslint ban on `@mui/*` lives in consuming apps, not in this repo, so the spike needs no export to render anything. Deciding how these components eventually reach app authors is a separate decision that this spike exists to inform.

## Counts

Measured against `dist/export.d.ts` (228 names) and `node_modules/@mui/material` (133 component modules).

| Bucket | Count | In the spike |
| --- | --- | --- |
| Name or capability the DS already owns | 33 | no |
| Cannot be assessed visually | 26 | no |
| Child of a parent | 39 | yes, inside the parent's page |
| Standalone | 35 | yes, own page |

74 components across 35 pages.

## Pages

- file: `src/mui/<Name>.stories.tsx`, title `MUI Coverage/<Name>`
- stock story: `parameters: { stock: true }`, no DS provider
- themed story `WithTelicentTheme`: identical markup inside `UIThemeProvider`
- both follow the mode toolbar
- a page shows the parent with its children in place, not each child alone
- add a variant story only where it changes the assessment (`Slider` marks, `Table` dense)

The difference between the two panels is what the theme already does. The gap between the themed panel and our UX requirements is the work being sized.

### Stock

`.storybook/preview.tsx` wraps every story in `UIThemeProvider`, which renders `<CssBaseline />` (`src/theme/UIThemeProvider.tsx:20`). The `MuiCssBaseline` override injects `FONT_FACES_CSS` and scrollbar rules into the document, and a nested `ThemeProvider` cannot retract CSS already in the page.

So the decorator must not run for stock stories. `preview.tsx` reads `context.parameters.stock` and renders `<Story />` under `<ThemeProvider theme={createTheme({ palette: { mode } })}>` from `@mui/material/styles`, with no DS provider. Passing the toolbar mode keeps both panels in the same mode; mode is MUI's own knob, so the panel stays stock.

Two limits:

- **autodocs**: a page rendering both stories in one document lets the themed story's `CssBaseline` inject globals that reach the stock story. Disable autodocs for `src/mui/`; comparison happens by toggling stories
- **`src/main.css`**: imported globally by `src/export.ts`, so its resets and fonts reach the stock panel

### Portals

`Backdrop`, `Menu`, `Popover`, `Popper`, `Snackbar`, `SpeedDial`, and `Tooltip` render into `document.body`, outside the story wrapper. Each needs `disablePortal` or an explicit `container`.

`disablePortal` changes positioning and stacking against production, so those seven pages show theming, not layout.

## What the theme already gives them

`createThemePure` sets `palette`, `typography`, `breakpoints`, and `components`, so anything under `UIThemeProvider` gets Telicent colours and type without any work. That part is free and should not be estimated.

What they lack is DS `styleOverrides`. `generateComponentOverrides` covers eleven keys: MuiAppBar, MuiAutocomplete, MuiAvatar, MuiButton, MuiCard, MuiCardActions, MuiCardContent, MuiCssBaseline, MuiIconButton, MuiMenuItem, MuiPaper.

Two of those land in the 74:

- **already overridden**: `Avatar` and `Menu`, via `MuiAvatar` and `MuiMenuItem`. If their panels look identical, the override is not reaching the component, which is a bug to raise
- **themed only**: the other 72, carrying Telicent colour and type on MUI's radii, padding, elevation, and density. Widest gap on Badge, Breadcrumbs, Fab, Accordion, Stepper, Rating, SpeedDial
- **nothing to override**: Grid, Collapse, Fade, Grow, Slide, Zoom, Popper, Backdrop. Layout and motion only, so zero design work

## Assessment

Each page carries a `docs.description.component` line naming what a reviewer should judge: palette fit, density, radii, focus and hover states, dark mode.

The spike ends with one table, `specs/mui-coverage-spike/assessment.md`, one row per component:

| Column | Values |
| --- | --- |
| Component | name |
| Effort | none / small / medium / large |
| Blocked on | palette token, UX decision, nothing |
| Notes | what specifically is wrong under our theme |

The FE team fills it from the Storybook. That table is the deliverable that answers "how much work".

## Excluded

**Owned by a DS component**:

- `Stack`: `src/components/layout/FlexBox.tsx` wraps it
- `Typography`: `H1`-`H6` own it

**Renders nothing to judge**:
`ClickAwayListener`, `Portal`, `NoSsr`, `Unstable_TrapFocus`

**Global side-effects, would fight `UIThemeProvider`**:
`CssBaseline`, `ScopedCssBaseline`, `GlobalStyles`, `StyledEngineProvider`, `DefaultPropsProvider`, `InitColorSchemeScript`

**Superseded**:

- `Hidden`: use `useMediaQuery`
- `Unstable_Grid2`: use `Grid`
- `Icon`, `SvgIcon`: use `@telicent-oss/mui-icons-material`
- `TextareaAutosize`: use `TextField multiline`

**Needs a parent to render**, so covered by the parent's page:
`BottomNavigationAction`, `ImageListItemBar`, `ListItemSecondaryAction`, `PaginationItem`, `SnackbarContent`, `SpeedDialIcon`, `StepConnector`, `StepIcon`, `TabScrollButton`

`Menu` stays in. `DropdownButton` is a composed control, not the raw menu primitive.

## Standalone pages

Accordion, Avatar, Backdrop, Badge, BottomNavigation, Breadcrumbs, ButtonBase, ButtonGroup, CircularProgress, Collapse, Fab, Fade, FormControl, Grid, Grow, ImageList, Input, Menu, Pagination, Popover, Popper, Radio, RadioGroup, Rating, Slide, Slider, Snackbar, SpeedDial, Stepper, SwipeableDrawer, Table, Tabs, ToggleButtonGroup, Tooltip, Zoom

## Children shown inside a parent page

| Parent | Children |
| --- | --- |
| Accordion | AccordionActions, AccordionDetails, AccordionSummary |
| Alert | AlertTitle |
| Avatar | AvatarGroup |
| Card | CardActionArea, CardMedia |
| Dialog | DialogContentText |
| FormControl | FormControlLabel, FormGroup, FormHelperText, FormLabel |
| ImageList | ImageListItem |
| Input | FilledInput, InputAdornment, InputBase, InputLabel, NativeSelect, OutlinedInput |
| List | ListItemAvatar, ListSubheader |
| Menu | MenuItem, MenuList |
| SpeedDial | SpeedDialAction |
| Stepper | MobileStepper, Step, StepButton, StepContent, StepLabel |
| Table | TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel |
| Tabs | Tab |
| ToggleButtonGroup | ToggleButton |

`Alert`, `Card`, `Dialog`, and `List` are DS-owned names, so their children appear on a page named for the child group rather than the DS component.

## Done when

- `yarn build-storybook` passes and `MUI Coverage` lists 35 pages, each with a stock and a themed story
- every page renders in light and dark with no console error
- `Avatar` and `Menu` differ between panels, confirming their overrides reach them
- `assessment.md` has a row per component with an effort value
