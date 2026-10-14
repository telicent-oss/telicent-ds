import React, { FC, ReactNode } from "react";
import {
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
} from "@mui/material";
export {
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export type {
  DialogTitleProps,
  DialogContentProps,
  DialogActionsProps,
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
