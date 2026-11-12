import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from "@mui/material";
import React, { FC, ReactNode } from "react";
export type {
  DialogActionsProps,
  DialogContentProps,
  DialogTitleProps,
} from "@mui/material";
export {
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";


export interface DialogProps extends MuiDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Dialog: FC<DialogProps> = ({ open, onClose, children, ...otherProps }) => {
  return (
    <MuiDialog open={open} onClose={onClose} {...otherProps}>
      {children}
    </MuiDialog>
  );
};

export default Dialog;
