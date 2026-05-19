import { BreakpointsOptions } from "@mui/material";

export const BREAKPOINT_VALUES = {
  xs: 0,
  sm: 800,
  md: 960,
  lg: 1280,
  xl: 1536,
} as const;

export const MUI_BREAKPOINTS: BreakpointsOptions = {
  values: BREAKPOINT_VALUES,
};
