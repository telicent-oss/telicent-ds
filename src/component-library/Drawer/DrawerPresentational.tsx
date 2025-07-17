import React, { forwardRef, ReactNode } from "react";
import MuiDrawer, {
  DrawerProps as MuiMuiDrawerProps,
} from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Paper } from "../../export";
import { Button, IconButton } from "../../v1/components/inputs";

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
  };

  const mergedPaperSx = [
    defaultPaperSx,
    ...(Array.isArray(paperSx) ? paperSx : [paperSx]),
    ...(externalPaperProps?.sx
      ? Array.isArray(externalPaperProps.sx)
        ? externalPaperProps.sx
        : [externalPaperProps.sx]
      : []),
  ];

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
          sx: mergedPaperSx,
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
            sx={{
              position: "absolute",
              top: "50%",
              right: -20,
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
              elevation={0}
              variant="outlined"
              square
              sx={{ boxShadow: "none", height: "100%", width: "100%" }}
            >
              <IconButton
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

      {onToggle && !open && (
        /* duplicate as moving chevron disappears */
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translate(-50%, -50%)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            height: "100%",
            maxHeight: 185,
            width: 40,
            overflow: "visible",
          }}
        >
          <Paper
            elevation={0}
            square
            sx={{ boxShadow: "none", height: "100%", width: "100%" }}
          >
            <IconButton
              color="secondary"
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
