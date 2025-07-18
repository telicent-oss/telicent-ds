import React, { forwardRef, ReactNode } from "react";
import MuiDrawer, {
  DrawerProps as MuiMuiDrawerProps,
} from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Paper } from "../../export";
import { IconButton } from "../../v1/components/inputs";

const STYLES = {
  left: {
    paper: {
      border: "none",
      borderRadius: "8 !important",
      borderTopLeftRadius: "0 !important",
      borderBottomLeftRadius: "0 !important",
    },
  },
  HACK_NO_BORDER: {
// Currently (18July2025) I don't trust theme
    border: 'none !important',
    borderRadius: "0 !important"
  }
};

export interface DrawerPresentationalProps
  extends Omit<MuiMuiDrawerProps, "PaperProps"> {
  PaperProps?: MuiMuiDrawerProps["PaperProps"];
  paperSx?: SxProps<Theme>;
  drawerWidth?: number;
  children: ReactNode;
  onToggle?: React.MouseEventHandler<HTMLButtonElement>;
}

export const DrawerPresentational = forwardRef<
  HTMLDivElement,
  DrawerPresentationalProps
>(function DrawerPresentational(
  {
    open,
    onClose,
    onToggle,
    paperSx,
    PaperProps: externalPaperProps,
    drawerWidth: dw,
    style,
    children,
    ...props
  },
  ref
) {
  const width = dw ?? (typeof style?.width === "number" ? style.width : 800);

  const defaultPaperSx: SxProps<Theme> = {
    width,
    boxSizing: "border-box",
    position: "relative",
    overflow: "visible",
    transform: open ? "translateX(0)" : `translateX(-${width}px)`,
    transition: "transform 300ms ease",
    ...STYLES.HACK_NO_BORDER
  }

  const mergedPaperSx = Object.assign(
    {},
    defaultPaperSx,
    ...(Array.isArray(paperSx) ? paperSx : [paperSx]),
    ...(externalPaperProps?.sx
      ? Array.isArray(externalPaperProps.sx)
        ? externalPaperProps.sx
        : [externalPaperProps.sx]
      : []),
  );

  return (
    <Box sx={{ position: "relative", overflow: "visible", height: "100%" }}>
      <MuiDrawer
        variant="persistent"
        anchor="left"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true, sx: { overflow: "visible" } }}
        SlideProps={{ style: { overflow: "visible" } }}
        PaperProps={{
          ref,
          elevation: 0,
          square: true,
          sx: {
            ...mergedPaperSx,
            ...STYLES.HACK_NO_BORDER
          },
          ...externalPaperProps,
        }}
        style={style}
        {...props}
      >
        <Box
          sx={{
            width,
            height: "100%",
            overflowY: "auto",
            position: "relative",
            
          }}
        >
          {children}
        </Box>

        {onToggle && open && (
          <Box
            data-chevron-box
            sx={{
              position: "absolute",
              top: "50%",
              right: -40,
              transform: "translateY(-50%)",
              height: "100%",
              maxHeight: 185,
              width: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
            }}
          >
            <Paper
              data-chevron-paper
              elevation={0}
              variant="outlined"
              square
              sx={{ boxShadow: "none !important", height: "100%", width: "100%", ...STYLES.HACK_NO_BORDER, ...STYLES.left.paper }}
            >
              <IconButton
                data-chevron-icon-button
                color="inherit"
                onClick={onToggle}
                size="large"
                sx={{ height: "100%", width: "100%", p: 0 }}
              >
                <ChevronLeftIcon />
              </IconButton>
            </Paper>
          </Box>
        )}
      </MuiDrawer>

      {onToggle && (
        <Box
          data-chevron-box-dup
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translate(0%, -50%)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            height: "100%",
            maxHeight: 185,
            width: 40,
            overflow: "visible",
            transition: "transform 300ms ease 300ms, opacity 0ms ease",
            opacity: open ? 0 : 1,
            pointerEvents: open ? "none" : "auto",
          }}
        >
          <Paper
            data-chevron-paper-dup
            elevation={0}
            square
            sx={{ boxShadow: "none !important", height: "100%", width: "100%", ...STYLES.HACK_NO_BORDER, ...STYLES.left.paper }}
          >
            <IconButton
              data-chevron-icon-button-dup
              color="inherit"
              onClick={onToggle}
              size="large"
              sx={{ height: "100%", width: "100%", p: 0 }}
            >
              <ChevronRightIcon />
            </IconButton>
          </Paper>
        </Box>
      )}
    </Box>
  );
});

DrawerPresentational.displayName = "DrawerPresentational";
