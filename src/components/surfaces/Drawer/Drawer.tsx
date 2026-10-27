import MuiDrawer, { type DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import React from "react";

export type DrawerProps = MuiDrawerProps & {
  /**
   * Width of a left or right panel, in px when a number. The theme caps it
   * at the viewport, so a fixed width never runs off a narrow screen.
   */
  width?: number | string;
};

/**
 * A controlled side sheet: MUI's Drawer under the DS theme. The caller owns
 * `open` and `onClose`, and Escape and a backdrop click both call `onClose`.
 */
export const Drawer: React.FC<DrawerProps> = ({ width, PaperProps, ...props }) => {
  const paperSx = PaperProps?.sx;
  const consumerSx = Array.isArray(paperSx) ? paperSx : paperSx ? [paperSx] : [];
  return (
    <MuiDrawer
      PaperProps={
        width === undefined ? PaperProps : { ...PaperProps, sx: [{ width }, ...consumerSx] }
      }
      {...props}
    />
  );
};

export default Drawer;
