import React from "react";
import { ToolbarProps, useTheme } from "@mui/material";
import { Toolbar as MuiToolbar } from "@mui/material";
import { FlexBox } from "../../layout";

const Toolbar: React.FC<ToolbarProps> = ({ children, sx, ...rest }) => {
  const theme = useTheme();
  return (
    <MuiToolbar
      disableGutters={true}
      variant="dense"
      sx={{ backgroundColor: theme.palette.mode === "dark" ? "#2e2e2e" : "#eeeeee", paddingX: 2, paddingY: 1, ...sx }}
      {...rest}
    >
      {children}
    </MuiToolbar>
  );
};

export default Toolbar;
