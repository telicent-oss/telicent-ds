import React, { ReactNode } from "react";
import { alpha, Theme } from "@mui/material/styles";

import Button from "../../buttons/Button/Button";
import BinIcon from "../../data-display/Icons/BinIcon";
import WarningIcon from "../../data-display/Icons/WarningIcon";
import { Text } from "../../data-display/Text/Text";
import { Box } from "../../layout/Box/Box";
import { Alert, AlertColor } from "../Alert/Alert";
import Dialog, { DialogActions, DialogContent } from "../Dialog/Dialog";

export type ConfirmDialogVariant = "destructive" | "warning";

export type ConfirmDialogAlert = {
  severity: AlertColor;
  message: string;
};

export interface ConfirmDialogProps {
  open: boolean;
  title: string;
  body: ReactNode;
  onConfirm: () => void;
  onClose: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  pendingLabel?: string;
  icon?: ReactNode;
  isPending?: boolean;
  alert?: ConfirmDialogAlert;
  variant?: ConfirmDialogVariant;
  id?: string;
  ariaLabel?: string;
}

const noop = () => {};

const defaultIconFor = (variant: ConfirmDialogVariant | undefined): ReactNode => {
  if (variant === "destructive") return <BinIcon fontSize="small" />;
  if (variant === "warning") return <WarningIcon fontSize="small" />;
  return null;
};

const paletteFor = (
  variant: ConfirmDialogVariant | undefined,
  theme: Theme
): { bg: string; color: string } => {
  if (variant === "destructive") {
    return {
      bg: alpha(theme.palette.error.main, 0.15),
      color: theme.palette.error.main,
    };
  }
  if (variant === "warning") {
    return {
      bg: alpha(theme.palette.warning.main, 0.15),
      color: theme.palette.warning.main,
    };
  }
  return {
    bg: alpha(theme.palette.primary.main, 0.15),
    color: theme.palette.primary.main,
  };
};

const buttonColorFor = (
  variant: ConfirmDialogVariant | undefined
): "primary" | "warning" | "error" => {
  if (variant === "destructive") return "error";
  if (variant === "warning") return "warning";
  return "primary";
};

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  title,
  body,
  onConfirm,
  onClose,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  pendingLabel = "Working…",
  icon,
  isPending = false,
  alert,
  variant,
  id = "confirm-dialog",
  ariaLabel,
}) => {
  const resolvedIcon = icon ?? defaultIconFor(variant);
  const titleId = `${id}-title`;

  return (
    <Dialog
      open={open}
      onClose={isPending ? noop : onClose}
      aria-labelledby={ariaLabel ? undefined : titleId}
      PaperProps={{ id, "aria-label": ariaLabel }}
      sx={{ "& .MuiDialog-paper": { width: 420, maxWidth: "100%" } }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, px: 3, pt: 3 }}>
        {resolvedIcon && (
          <Box
            sx={(theme) => {
              const { bg, color } = paletteFor(variant, theme);
              return {
                width: 36,
                height: 36,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: bg,
                color,
                flexShrink: 0,
              };
            }}
          >
            {resolvedIcon}
          </Box>
        )}
        <Text
          component="h2"
          id={titleId}
          sx={{ fontSize: "16px", fontWeight: 600, lineHeight: 1.3, m: 0 }}
        >
          {title}
        </Text>
      </Box>
      <DialogContent sx={{ pt: 2 }}>
        <Box id={`${id}-body`}>
          {typeof body === "string" ? <Text variant="body2">{body}</Text> : body}
        </Box>
        {alert && (
          <Alert id={`${id}-alert`} severity={alert.severity} sx={{ mt: 2 }}>
            {alert.message}
          </Alert>
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3, pt: 1, gap: 1 }}>
        <Button
          id={`${id}-cancel`}
          variant="tertiary"
          onClick={onClose}
          disabled={isPending}
        >
          {cancelLabel}
        </Button>
        <Button
          id={`${id}-confirm`}
          color={buttonColorFor(variant)}
          variant="primary"
          onClick={onConfirm}
          disabled={isPending}
          startIcon={resolvedIcon}
          sx={{ "& .MuiButton-startIcon > *": { fontSize: 16 } }}
        >
          {isPending ? pendingLabel : confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
