import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Box,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

type Row = { name: string; note: string };
type Section = { title: string; blurb: string; rows: Row[] };

const dsOwned = [
  "Alert", "AppBar", "Autocomplete", "Box", "Button", "Card", "CardActions",
  "CardContent", "CardHeader", "Checkbox", "Chip", "Container", "Dialog",
  "DialogActions", "DialogContent", "DialogTitle", "Divider", "Drawer",
  "IconButton", "LinearProgress", "Link", "List", "ListItem", "ListItemButton",
  "ListItemIcon", "ListItemText", "Modal", "Paper", "Select", "Skeleton",
  "Switch", "TextField", "Toolbar",
];

const sections: Section[] = [
  {
    title: "The design system already exports one",
    blurb:
      "Same name, already in @telicent-oss/ds. Use the design-system version; nothing to assess.",
    rows: dsOwned.map((name) => ({ name, note: "use the DS component" })),
  },
  {
    title: "A design-system component replaces it",
    blurb: "Different name, same job.",
    rows: [
      { name: "Stack", note: "FlexBox wraps it" },
      { name: "Typography", note: "H1 to H6" },
      { name: "Icon, SvgIcon", note: "@telicent-oss/mui-icons-material" },
    ],
  },
  {
    title: "Dropped from the review",
    blurb: "Deliberately out of this round.",
    rows: [
      { name: "Rating", note: "not wanted" },
      { name: "Radio, RadioGroup", note: "not wanted" },
      { name: "SwipeableDrawer", note: "not wanted" },
      { name: "BottomNavigation", note: "not wanted" },
    ],
  },
  {
    title: "Injects global styles",
    blurb:
      "Each one writes styles into the document. A second route to that fights UIThemeProvider.",
    rows: [
      { name: "CssBaseline", note: "UIThemeProvider mounts it already" },
      { name: "ScopedCssBaseline", note: "same, scoped" },
      { name: "GlobalStyles", note: "global CSS injection" },
      { name: "StyledEngineProvider", note: "emotion setup" },
      { name: "DefaultPropsProvider", note: "prop defaults, theme's job" },
      { name: "InitColorSchemeScript", note: "colour-scheme bootstrap" },
    ],
  },
  {
    title: "Renders nothing to look at",
    blurb: "Behaviour wrappers with no visual output.",
    rows: [
      { name: "ClickAwayListener", note: "behaviour only" },
      { name: "Portal", note: "behaviour only" },
      { name: "NoSsr", note: "behaviour only" },
      { name: "Unstable_TrapFocus", note: "behaviour only" },
    ],
  },
  {
    title: "Superseded by MUI",
    blurb: "Deprecated or replaced in MUI itself.",
    rows: [
      { name: "Hidden", note: "use useMediaQuery" },
      { name: "Unstable_Grid2", note: "use Grid" },
      { name: "TextareaAutosize", note: "use TextField multiline" },
    ],
  },
  {
    title: "Needs its parent to render",
    blurb: "Covered inside the parent's section of the kitchen sink.",
    rows: [
      { name: "BottomNavigationAction", note: "BottomNavigation" },
      { name: "ImageListItemBar", note: "ImageList" },
      { name: "ListItemSecondaryAction", note: "List children" },
      { name: "PaginationItem", note: "Pagination" },
      { name: "SnackbarContent", note: "Snackbar" },
      { name: "SpeedDialIcon", note: "SpeedDial" },
      { name: "StepConnector", note: "Stepper" },
      { name: "StepIcon", note: "Stepper" },
      { name: "TabScrollButton", note: "Tabs" },
    ],
  },
];

const total = sections.reduce((n, s) => n + s.rows.length, 0);

const NotIncluded: React.FC = () => (
  <Box>
    <Typography variant="h4" component="h1" gutterBottom>
      Not included — {total} components
    </Typography>
    <Typography variant="body2" sx={{ mb: 3 }}>
      Everything MUI ships that the kitchen sink does not show, and why. Nothing
      here needs assessing.
    </Typography>
    {sections.map((section) => (
      <Box key={section.title} component="section" sx={{ mb: 4 }}>
        <Typography variant="h6" component="h2">
          {section.title} ({section.rows.length})
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          {section.blurb}
        </Typography>
        <Divider sx={{ mb: 1 }} />
        <TableContainer>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>MUI component</TableCell>
                <TableCell>Instead</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {section.rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    ))}
  </Box>
);

const meta: Meta<typeof NotIncluded> = {
  title: "MUI Coverage/Proposed excluded",
  component: NotIncluded,
  tags: ["!autodocs"],
};
export default meta;

type Story = StoryObj<typeof NotIncluded>;

export const All: Story = { render: () => <NotIncluded /> };
