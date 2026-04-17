import React, { FC } from "react";
import { Menu, MenuItem, MenuItemProps, MenuProps } from "@mui/material";
import "./telimenu.css";

/**
 * @deprecated TeliMenu is deprecated and will be removed in a future release.
 */
const TeliMenu: FC<MenuProps> = ({ open, onClose, children, ...otherProps }) => {
  console.warn("TeliMenu is deprecated and will be removed in a future release.");
  return (
    <Menu open={open} onClose={onClose} {...otherProps}>
      {children}
    </Menu>
  );
};

const TeliMenuItem: FC<MenuItemProps> = ({ children, ...props }) => <MenuItem {...props}>{children}</MenuItem>;

export { TeliMenu, TeliMenuItem };
