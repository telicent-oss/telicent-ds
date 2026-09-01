export { default as LinearProgress } from "./LinearProgress/LinearProgress";
export { default as Spinner } from "./Spinner/Spinner";
export { default as Dialog } from "./Dialog/Dialog";
export * from "./Dialog/Dialog";
export { default as ConfirmDialog } from "./ConfirmDialog/ConfirmDialog";
export type { ConfirmDialogProps } from "./ConfirmDialog/ConfirmDialog";
export { Skeleton } from "./Skeleton/Skeleton";
export { Alert, type AlertColor } from "./Alert/Alert";
export { default as SnackbarProvider, type SnackbarProviderProps } from "./Snackbar/SnackbarProvider";
export { snackbar, useSnackbar, type SnackbarType, type SnackbarArgs } from "./Snackbar/Snackbar";
// Curated notistack re-exports. The vocab-neutral pieces stay notistack-side:
// `closeSnackbar` is a module-level dismissal, and the types describe a value
// (a key, an action node) rather than a verb the DS has an opinion on.
export {
  closeSnackbar,
  type SnackbarKey,
  type SnackbarAction,
} from "notistack";
