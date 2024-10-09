import React from "react";
import { useTheme } from "@mui/material";

export interface ToolbarProps
  extends React.ComponentProps<"div">,
    React.PropsWithChildren {}

const Toolbar: React.FC<ToolbarProps> = (props) => {
  const theme = useTheme();
  return (
    <div
      css={{
        backgroundColor: theme.palette.mode === "dark" ? "#2e2e2e" : "#eeeeee",
        height: 48,
        paddingInline: 10,
        paddingBlock: 4,
        marginTop: 2,
        color: "white",
      }}
      {...props}
    />
  );
};

export default Toolbar;
