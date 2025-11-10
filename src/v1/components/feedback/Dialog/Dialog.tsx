import React, { FC, ReactNode } from "react";
import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from "@mui/material";

export interface DialogProps extends MuiDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Dialog: FC<DialogProps> = ({ open, onClose, children, ...otherProps }) => {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      sx={{
        "& .MuiPaper-root": {
          backgroundColor: "#1e1e1e",
          color: "#fff",
        },
      }}
      {...otherProps}
    >
      {children}
    </MuiDialog>
  );
};

export default Dialog;
