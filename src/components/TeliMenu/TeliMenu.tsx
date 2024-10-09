import React, { FC } from "react";
import { Menu, MenuItem, MenuItemProps, MenuProps } from "@mui/material";
import "./telimenu.css";

const TeliMenu: FC<MenuProps> = ({
  open,
  onClose,
  children,
  ...otherProps
}) => {
  return (
    <Menu open={open} onClose={onClose} {...otherProps}>
      {children}
    </Menu>
  );
};

const TeliMenuItem: FC<MenuItemProps> = ({ children, ...props }) => (
  <MenuItem {...props}>{children}</MenuItem>
);

export { TeliMenu, TeliMenuItem };
