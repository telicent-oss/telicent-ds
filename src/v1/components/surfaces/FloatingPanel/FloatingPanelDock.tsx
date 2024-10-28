import React, { HTMLAttributes, PropsWithChildren } from "react";
import MUIBox from "@mui/material/Box";

interface FloatingPanelDockProps
  extends PropsWithChildren<HTMLAttributes<HTMLUListElement>> {}

/**
 * Appears at the bottom of the screen. Holds `FloatingPanelItem` items
 */
const FloatingPanelDock: React.FC<FloatingPanelDockProps> = (props) => {
  return (
    <MUIBox
      component="ul"
      columnGap={2}
      sx={{
        display: "flex",
        flexDirection: "row",
        position: "absolute",
        width: "fit-content",
        bottom: 0,
        left: 0,
      }}
      {...props}
    >
      {props.children}
    </MUIBox>
  );
};

export default FloatingPanelDock;
export type { FloatingPanelDockProps };
