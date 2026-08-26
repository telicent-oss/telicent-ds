import React, { FC } from "react";
import {
  SnackbarProvider as NotistackSnackbarProvider,
  type SnackbarProviderProps as NotistackSnackbarProviderProps,
} from "notistack";
import Snackbar from "./Snackbar";

const DEFAULT_ANCHOR_ORIGIN: NotistackSnackbarProviderProps["anchorOrigin"] = {
  vertical: "top",
  horizontal: "right",
};
const DEFAULT_MAX_SNACK = 3;
// 7s is comfortable-to-read given the DS Snackbar's X provides manual
// dismissal for anything the user wants to close sooner. Longer than
// notistack's 5s default but not so long that a forgotten toast lingers.
const DEFAULT_AUTO_HIDE_DURATION_MS = 7000;
// Suppress identical enqueue calls by default — event handlers, pollers, and
// mutation retries all commonly emit repeats. Callsites that genuinely want
// duplicates can pass `preventDuplicate: false` at enqueue time.
const DEFAULT_PREVENT_DUPLICATE = true;

const DEFAULT_COMPONENTS: NonNullable<NotistackSnackbarProviderProps["Components"]> = {
  default: Snackbar,
  success: Snackbar,
  error: Snackbar,
  warning: Snackbar,
  info: Snackbar,
};

export type SnackbarProviderProps = NotistackSnackbarProviderProps;

// Wraps notistack's SnackbarProvider with DS defaults: top-right anchor,
// max 3 stacked, 7s auto-hide, duplicate suppression on, and the DS
// Snackbar mounted for every variant. `Components` overrides merge onto
// the DS defaults so callers customising one variant don't silently
// regress the others to notistack's unstyled built-ins.
const SnackbarProvider: FC<SnackbarProviderProps> = ({
  anchorOrigin = DEFAULT_ANCHOR_ORIGIN,
  maxSnack = DEFAULT_MAX_SNACK,
  autoHideDuration = DEFAULT_AUTO_HIDE_DURATION_MS,
  preventDuplicate = DEFAULT_PREVENT_DUPLICATE,
  Components,
  children,
  ...otherProps
}) => (
  <NotistackSnackbarProvider
    anchorOrigin={anchorOrigin}
    maxSnack={maxSnack}
    autoHideDuration={autoHideDuration}
    preventDuplicate={preventDuplicate}
    Components={{ ...DEFAULT_COMPONENTS, ...Components }}
    {...otherProps}
  >
    {children}
  </NotistackSnackbarProvider>
);

export default SnackbarProvider;
