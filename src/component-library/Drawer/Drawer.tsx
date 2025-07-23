import React, { forwardRef } from "react";
import { DrawerPresentational, DrawerPresentationalProps } from "./primitives/DrawerPresentational";
import { useDrawer, DrawerController } from "./primitives/useDrawer";
export { useDrawer, type DrawerController } from "./primitives/useDrawer";

export interface DrawerProps extends Omit<
DrawerPresentationalProps, 
 | "open" 
 | "onClose" 
 | "ref" // required by app TS checks
 > {
  /** (default: true) */
  initialOpen?: boolean;
  onVisibilityChange?: (open: boolean) => void;
}

export const Drawer = forwardRef<DrawerController, DrawerProps>(
  ({ initialOpen = true, onVisibilityChange, children, ...rest }, ref) => {
    const { drawerProps } = useDrawer(
      ref,
      initialOpen,
      onVisibilityChange
    );

    return (
      <DrawerPresentational
        {...drawerProps}
        {...rest}
      >
        {children}
      </DrawerPresentational>
    );
  }
);

Drawer.displayName = "Drawer";