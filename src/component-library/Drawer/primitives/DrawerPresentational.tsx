import React, { forwardRef, ReactNode } from "react";
import MuiDrawer, {
  DrawerProps as MuiMuiDrawerProps,
} from "@mui/material/Drawer";
import { Box } from "@mui/material";
import { SxProps, Theme } from "@mui/material/styles";
import ChevronLeftIcon from "@telicent-oss/mui-icons-material/ChevronLeft";
import ChevronRightIcon from "@telicent-oss/mui-icons-material/ChevronRight";
import { TabButton } from "./TabButton";
import { STYLES } from "./constants";
// ignore story-coverage.test.ts
export const NAME = "drawer-presentational";

export interface DrawerPresentationalProps
  extends Omit<MuiMuiDrawerProps, "PaperProps">,
    React.HTMLAttributes<HTMLDivElement> {
  PaperProps?: MuiMuiDrawerProps["PaperProps"];
  // IDEA Alternative to PaperSx is a theme
  PaperSx?: SxProps<Theme>;
  drawerWidth?: number;
  children: ReactNode;
  onToggle?: React.MouseEventHandler<HTMLButtonElement>;
  id?: string;
}

export const resolveWidth = (
  drawerWidth?: number,
  styleWidth?: number | string,
  defaultWidth = 800
): number => {
  if (drawerWidth != null) return drawerWidth;
  const parsed = parseFloat(String(styleWidth));
  return Number.isFinite(parsed) ? parsed : defaultWidth;
};

export const DrawerPresentational = forwardRef<
  HTMLDivElement,
  DrawerPresentationalProps
>(function DrawerPresentational(
  {
    open,
    onClose,
    onToggle,
    PaperProps,
    PaperSx,
    drawerWidth,
    style,
    children,
    ["id"]: id = "",
    ...props
  },
  ref
) {
  const width = resolveWidth(drawerWidth, style?.width, 800);
  const defaultPaperSx: SxProps<Theme> = {
    width,
    boxSizing: "border-box",
    position: "relative",
    overflow: "visible",
    transform: open ? "translateX(0)" : `translateX(-${width}px) `,
    transition: "transform 300ms ease",
    ...STYLES.HACK_NO_BORDER,
  };

  const mergedPaperSx = Object.assign(
    {},
    defaultPaperSx,
    ...(Array.isArray(PaperSx) ? PaperSx : [PaperSx]),
    ...(PaperProps?.sx
      ? Array.isArray(PaperProps.sx)
        ? PaperProps.sx
        : [PaperProps.sx]
      : [])
  );

  return (
    <Box
      id={id || NAME}
      sx={{ position: "relative", overflow: "visible", height: "100%" }}
    >
      <MuiDrawer
        id={`${NAME}--drawer`}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
          sx: { overflow: "visible" },
        }}
        SlideProps={{
          style: { overflow: "visible" },
        }}
        PaperProps={{
          ["id"]: `${NAME}--muidrawer-paper`,
          elevation: 0,
          square: true,
          sx: {
            ...mergedPaperSx,
            ...STYLES.HACK_NO_BORDER,
          },
          ...PaperProps,
        }}
        style={style}
        {...props}
      >
        <Box
          id={`${NAME}--box-scrollable`}
          ref={ref}
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
          <TabButton
            BoxSx={{
              right: -34,
            }}
            PaperSx={PaperSx}
            onClick={onToggle}
            id={`${NAME}--toggle-stand-in`}
          >
            <ChevronLeftIcon id="chevron-left-icon" fontSize="large" />
          </TabButton>
        )}
      </MuiDrawer>
      {onToggle && (
        <TabButton
          BoxSx={{
            transform: "translate(0%, -50%)",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            transition: "transform 300ms ease 300ms, opacity 0ms ease",
            opacity: open ? 0 : 1,
            pointerEvents: open ? "none" : "auto",
            left: 0,
          }}
          PaperSx={PaperSx}
          onClick={onToggle}
          id={`${NAME}--toggle-animated-slide`}
        >
          <ChevronRightIcon id="chevron-right-icon" fontSize="large" />
        </TabButton>
      )}
    </Box>
  );
});

DrawerPresentational.displayName = "DrawerPresentational";
