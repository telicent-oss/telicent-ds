import React from "react";
import MUIModal, { ModalProps as MUIModalProps } from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import CloseIcon from "../../data-display/Icons/CloseIcon";
import { modalPropsSchema } from "./schema";

export type ModalProps = Omit<
  MUIModalProps,
  // Do not allow change of look and feel
  | "slots"
  | "slotProps"
  | "BackdropComponent" // deprecated
  | "BackdropProps" // deprecated
  | "closeAfterTransition"
  | "components"
  | "componentsProps"
  | "container"
  | "disableAutoFocus" // Non-accessible
  | "disableEnforceFocus" // Non-accessible
  | "disableEscapeKeyDown"
  | "disableRestoreFocus"
  | "hideBackdrop"
  | "keepMounted"
  | "onBackdropClick" // deprecated
  | "onTransitionEnter"
  | "onTransitionExit"
> & {
  onClose:
    | ((
        event: {},
        reason:
          | "backdropClick" // MUI in-built
          | "escapeKeyDown" // MUI in-built
          | "closeButtonClick" // custom event. Maybe delete and _misuse_ "backdropClick"
      ) => void)
    | undefined;
};

export const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  modalPropsSchema.parse({ children, ...props }); // This has perf cost
  return (
    <MUIModal {...props}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          p: 2,
          borderRadius: 1,
          boxShadow: 24,
          minWidth: 300,
          maxWidth: "90vw", // Maximum width to leave margin
          maxHeight: "90vh", // Maximum height for the modal
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Close Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={(event) => props.onClose?.(event, "closeButtonClick")}
            sx={{
              fontSize: 18,
              // TODO ask how to color
              // HOW use theme.palette.primary.main
            }}
          >
            Close&nbsp;
            <CloseIcon sx={{ fontSize: 14 }} />
          </Button>
        </Box>

        {/* Content Section */}
        {children}
      </Box>
    </MUIModal>
  );
};

export default Modal;
