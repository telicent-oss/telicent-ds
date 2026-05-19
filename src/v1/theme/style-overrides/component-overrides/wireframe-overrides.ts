import { ThemeOptions } from "@mui/material";

export const WIREFRAME_FONT_FAMILY = '"SF Mono", "Cascadia Code", "Fira Code", Consolas, "DejaVu Sans Mono", monospace';

const generateWireframeOverrides = () =>
  ({
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: WIREFRAME_FONT_FAMILY,
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: WIREFRAME_FONT_FAMILY,
          border: `2px solid ${theme.palette.text.primary}`,
          backgroundColor: "transparent",
          color: theme.palette.text.primary,
          boxShadow: "none",
          borderRadius: 0,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            boxShadow: "none",
            border: `2px solid ${theme.palette.text.primary}`,
          },
        }),
        contained: ({ theme }) => ({
          backgroundColor: "transparent",
          color: theme.palette.text.primary,
          border: `2px solid ${theme.palette.text.primary}`,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
            border: `2px solid ${theme.palette.text.primary}`,
          },
        }),
        outlined: ({ theme }) => ({
          border: `2px solid ${theme.palette.text.primary}`,
          "&:hover": {
            border: `2px solid ${theme.palette.text.primary}`,
          },
        }),
        text: ({ theme }) => ({
          border: "2px solid transparent",
          "&:hover": {
            border: `2px solid ${theme.palette.text.primary}`,
          },
        }),
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          border: "2px solid transparent",
          "&:hover": {
            border: `2px solid ${theme.palette.text.primary}`,
          },
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `2px solid ${theme.palette.text.primary}`,
          boxShadow: "none",
          borderRadius: 0,
          backgroundImage: "none",
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `2px solid ${theme.palette.divider}`,
          boxShadow: "none",
          borderRadius: 0,
          backgroundImage: "none",
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: 64,
          boxShadow: "none",
          borderRadius: 0,
          backgroundImage: "none",
          borderBottom: "2px solid currentColor",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined" as const,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          fontFamily: WIREFRAME_FONT_FAMILY,
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: "2px",
            borderColor: theme.palette.text.primary,
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: theme.palette.text.primary,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "3px",
            borderColor: theme.palette.text.primary,
          },
          "& input::placeholder, & textarea::placeholder": {
            color: theme.palette.text.secondary,
            opacity: 1,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: WIREFRAME_FONT_FAMILY,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          border: `2px solid ${theme.palette.text.primary}`,
          fontFamily: WIREFRAME_FONT_FAMILY,
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: theme.palette.divider,
          borderWidth: "1px",
        }),
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          borderRadius: 0,
          border: `2px solid ${theme.palette.text.primary}`,
          fontFamily: WIREFRAME_FONT_FAMILY,
        }),
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: ({ theme }) => ({
          borderRadius: 0,
          border: `2px solid ${theme.palette.text.primary}`,
          boxShadow: "none",
        }),
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: WIREFRAME_FONT_FAMILY,
          borderRadius: 0,
          "&:hover": {
            backgroundColor: theme.palette.action.hover,
          },
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: WIREFRAME_FONT_FAMILY,
          borderBottom: `1px solid ${theme.palette.divider}`,
        }),
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          border: `2px solid ${theme.palette.text.primary}`,
          fontFamily: WIREFRAME_FONT_FAMILY,
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: ({ theme }) => ({
          backgroundColor: theme.palette.text.primary,
        }),
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontFamily: WIREFRAME_FONT_FAMILY,
          color: theme.palette.text.secondary,
          "&.Mui-selected": {
            color: theme.palette.text.primary,
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          border: `2px solid ${theme.palette.text.primary}`,
          fontFamily: WIREFRAME_FONT_FAMILY,
        }),
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: ({ theme }) => ({
          border: `2px solid ${theme.palette.text.primary}`,
          borderRadius: 0,
        }),
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 0,
          backgroundColor: theme.palette.action.hover,
        }),
        bar: {
          borderRadius: 0,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: {
          borderRadius: 0,
        },
        thumb: {
          borderRadius: 0,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  } satisfies ThemeOptions["components"]);

export default generateWireframeOverrides;
