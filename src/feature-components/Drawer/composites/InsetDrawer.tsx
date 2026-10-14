import React, { forwardRef } from "react";
import {
  DrawerPresentational,
  DrawerPresentationalProps,
} from "../primitives/DrawerPresentational";
import { useDrawer, DrawerController } from "../primitives/useDrawer";
import { SxProps, Theme } from "@mui/material";
export { useDrawer, type DrawerController } from "../primitives/useDrawer";

/** @deprecated Use the controlled `Drawer` from `@telicent-oss/ds` (ADR-0005). */
export interface InsetDrawerProps
  extends Omit<
    DrawerPresentationalProps,
    "open" | "onClose" | "ref" // required by app TS checks
  > {
  /** (default: true) */
  initialOpen?: boolean;
  onVisibilityChange?: (open: boolean) => void;
  PaperSx?: SxProps<Theme>;
}

/**
 * @deprecated The map inset's ref-driven panel. Use the controlled `Drawer`
 * from `@telicent-oss/ds`, which takes `open` and `onClose` (ADR-0005).
 * Kept for existing consumers; removed in a later major.
 */
export const InsetDrawer = forwardRef<DrawerController, InsetDrawerProps>(
  ({ initialOpen = true, onVisibilityChange, children, ...rest }, ref) => {
    const { drawerProps } = useDrawer({
      ref,
      initialOpen,
      onVisibilityChange,
    });

    return (
      <DrawerPresentational {...drawerProps} {...rest}>
        {children}
      </DrawerPresentational>
    );
  }
);

InsetDrawer.displayName = "InsetDrawer";
