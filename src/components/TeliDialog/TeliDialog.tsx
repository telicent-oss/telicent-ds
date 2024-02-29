import React, { FC } from "react";
import {
  Dialog,
  DialogActions,
  DialogActionsProps,
  DialogContent,
  DialogContentProps,
  DialogProps,
  DialogTitle,
  DialogTitleProps,
} from "@mui/material";
import "./telidialog.css";

/**
 * A Dialog is a type of modal window that appears in front of app content to provide critical information or ask for a decision.
 * They can also be used to inform users about a task and can contain critical information, require decisions, or involve multiple tasks.
 * Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.
 * Dialogs are purposefully interruptive, so they should be used sparingly.
 * More information about how this component can be used can be found [here](https://mui.com/material-ui/react-dialog/#scrolling-long-content)
 */
const TeliDialog: FC<DialogProps> = ({
  open,
  onClose,
  children,
  ...otherProps
}) => {
  return (
    <Dialog open={open} onClose={onClose} {...otherProps}>
      {children}
    </Dialog>
  );
};

const TeliDialogContent: FC<DialogContentProps> = ({ children }) => (
  <DialogContent className="bg-black-100/40">{children}</DialogContent>
);

const TeliDialogActions: FC<DialogActionsProps> = ({ children }) => (
  <DialogActions className="py-3 bg-black-100/40">{children}</DialogActions>
);

const TeliDialogTitle: FC<DialogTitleProps> = ({ children }) => (
  <DialogTitle className="py-3 bg-black-100/40">{children}</DialogTitle>
);
export { TeliDialog, TeliDialogContent, TeliDialogActions, TeliDialogTitle };
