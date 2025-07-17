import React, { forwardRef } from "react";
import { DrawerPresentational, DrawerPresentationalProps } from "./DrawerPresentational";
import { useDrawer, DrawerController } from "./useDrawer";
export { useDrawer, type DrawerController } from "./useDrawer";

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