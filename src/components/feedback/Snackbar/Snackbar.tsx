import React, { forwardRef } from "react";
import {
  useSnackbar,
  type CustomContentProps,
  type SnackbarKey,
  type SnackbarAction,
} from "notistack";
import { Alert, type AlertColor } from "../Alert/Alert";
import IconButton from "../../buttons/Button/IconButton";
import CloseIcon from "../../data-display/Icons/CloseIcon";

// Private content component mounted by DS's SnackbarProvider for every
// notistack variant. Not exported from the DS barrel — apps consume the
// wrapped provider, not this template.

type SnackbarContentProps = Omit<CustomContentProps, "action"> & {
  id: SnackbarKey;
  action?: SnackbarAction;
};

const variantToSeverity = (variant: CustomContentProps["variant"]): AlertColor =>
  variant === "default" ? "info" : (variant as AlertColor);

const Snackbar = forwardRef<HTMLDivElement, SnackbarContentProps>(
  ({ id, message, variant, action, className, style }, ref) => {
    const { closeSnackbar } = useSnackbar();
    const callsiteAction = typeof action === "function" ? action(id) : action;

    return (
      <Alert
        ref={ref}
        className={className}
        style={style}
        variant="filled"
        severity={variantToSeverity(variant)}
        sx={{ maxWidth: 320 }}
        action={
          <>
            {callsiteAction}
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
