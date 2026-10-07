import { ThemeOptions, toggleButtonGroupClasses } from "@mui/material";
import { UITheme } from "../../colors/theme-colors";
import { PILL_GROUP_CLASS, PILL_HEIGHT } from "../../../tokens";

// Rung 4. The colours are already the right palette tokens; two things
// the palette cannot carry drive this file.
//
// 1. MUI paints a selected ToggleButton as
//    `alpha(selectedColor, palette.action.selectedOpacity)`
//    (ToggleButton.js:78). That translucent wash reads as disabled on a
//    dark surface. `action.selectedOpacity` IS a palette token, so rung 1
//    could express it — but the value is right everywhere else: menu
//    rows and list items should stay translucent when selected. A solid
//    fill is this component's opinion, not the theme's.
//
// 2. MUI squares the inner edges from the group root, with
//    `& .MuiToggleButtonGroup-firstButton` and its middle/last siblings
//    (ToggleButtonGroup.js:78-97) — not the `:not(:first-of-type)`
//    pseudo-selectors its older versions used. Those rules sit at
//    specificity 0,2,0, so an equal-specificity override loses on source
//    order. Repeating the pill class takes these to 0,3,0 and wins
//    outright, which is what lets apps drop the `!important` they were
//    using.
const generateToggleButtonOverrides = (_uiTheme: UITheme) =>
  ({
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ({ theme }) => ({
          [`&.${PILL_GROUP_CLASS}`]: {
            width: "fit-content",
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 999,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(0.5),
            gap: theme.spacing(1),
          },
          // Doubled class, deliberately: see note 2 above.
          [`&.${PILL_GROUP_CLASS}.${PILL_GROUP_CLASS} .${toggleButtonGroupClasses.grouped}`]: {
            border: 0,
            borderRadius: 999,
            margin: 0,
            minHeight: PILL_HEIGHT,
            height: PILL_HEIGHT,
            minWidth: "auto",
            padding: theme.spacing(0, 2.5),
            textTransform: "none",
            whiteSpace: "nowrap",
            fontSize: 13,
            color: theme.palette.text.primary,
            "&.Mui-selected, &.Mui-selected:hover": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            },
            "& .MuiTouchRipple-root": { display: "none" },
          },
        }),
      },
    },
  } satisfies ThemeOptions["components"]);

export default generateToggleButtonOverrides;
