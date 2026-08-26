import React, { forwardRef } from "react";
import {
  useSnackbar,
  enqueueSnackbar as notistackEnqueue,
  type CustomContentProps,
  type SnackbarKey,
  type SnackbarAction,
  type OptionsObject,
} from "notistack";
import { Alert } from "../Alert/Alert";
import IconButton from "../../buttons/Button/IconButton";
import CloseIcon from "../../data-display/Icons/CloseIcon";

// The four severities the DS supports. Notistack's own union additionally
// includes "default"; the DS deliberately excludes it — every snackbar must
// declare an intent so nothing ships silently rendered as info.
export type SnackbarType = "success" | "error" | "warning" | "info";

// Public DS enqueue verb. Wraps notistack's `enqueueSnackbar` so callsites
// speak the DS's vocabulary (`type`) and cannot reach notistack's `default`
// variant. All other options pass through to notistack unchanged.
export type SnackbarArgs = Omit<OptionsObject, "variant"> & {
  type: SnackbarType;
  message: React.ReactNode;
};

export const snackbar = ({ type, message, ...options }: SnackbarArgs): SnackbarKey =>
  notistackEnqueue({ ...options, variant: type, message });

// Private content component mounted by SnackbarProvider for every DS type.
// Not exported from the barrel — apps consume the wrapped provider and the
// `snackbar()` verb, not this template.

type SnackbarContentProps = Omit<CustomContentProps, "action" | "variant"> & {
  id: SnackbarKey;
  action?: SnackbarAction;
  variant: SnackbarType;
};

const Snackbar = forwardRef<HTMLDivElement, SnackbarContentProps>(
  ({ id, message, variant, action, className, style }, ref) => {
    const { closeSnackbar } = useSnackbar();
    const actionNode = typeof action === "function" ? action(id) : action;

    return (
      <Alert
        ref={ref}
        className={className}
        style={style}
        variant="filled"
        severity={variant}
        sx={{ maxWidth: 320, overflowWrap: "anywhere" }}
        action={
          <>
            {actionNode}
            <IconButton
              size="small"
              aria-label="Dismiss notification"
              onClick={() => closeSnackbar(id)}
              sx={{ color: "inherit" }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </>
        }
      >
        {message}
      </Alert>
    );
  },
);
Snackbar.displayName = "Snackbar";

export default Snackbar;
