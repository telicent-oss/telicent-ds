import MuiMenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import React from "react";

export const MenuItem: React.FC<MenuItemProps> = (props) => <MuiMenuItem {...props} />;

export type { MenuItemProps };

export default MenuItem;
