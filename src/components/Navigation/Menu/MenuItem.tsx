import React from "react";
import MuiMenuItem, { MenuItemProps } from "@mui/material/MenuItem";

export const MenuItem: React.FC<MenuItemProps> = (props) => <MuiMenuItem {...props} />;

export type { MenuItemProps };

export default MenuItem;
