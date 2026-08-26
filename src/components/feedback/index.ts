export { default as LinearProgress } from "./LinearProgress/LinearProgress";
export { default as Spinner } from "./Spinner/Spinner";
export { default as Dialog } from "./Dialog/Dialog";
export * from "./Dialog/Dialog";
export { default as ConfirmDialog } from "./ConfirmDialog/ConfirmDialog";
export type { ConfirmDialogProps } from "./ConfirmDialog/ConfirmDialog";
export { Skeleton } from "./Skeleton/Skeleton";
export { Alert, type AlertColor } from "./Alert/Alert";
export { default as SnackbarProvider, type SnackbarProviderProps } from "./Snackbar/SnackbarProvider";
export { snackbar, type SnackbarType, type SnackbarArgs } from "./Snackbar/Snackbar";
// Curated notistack re-exports. The DS is the single source of truth for
// snackbar-adjacent imports in prod apps — same shape as the MUI
// curated-growth direction. We re-export the symbols apps genuinely need
// to close a specific toast (from a callsite action) or type an action;
// the enqueue verb goes through DS's `snackbar()` instead.
export {
  closeSnackbar,
  useSnackbar,
  type SnackbarKey,
  type SnackbarAction,
} from "notistack";
