import React from "react";
import { Box, BoxProps, IconButtonProps, SxProps, Theme } from "@mui/material";
import { Paper } from "../../../export";
import { IconButton } from "../../../v1/components/inputs";
import { STYLES } from "./constants";
// ignore story-coverage.test.ts

export type TabButtonProps = {
  id: string;
  BoxSx: BoxProps["sx"]; // IDEA normalize against theme (when sx is a fn)
  onClick: IconButtonProps["onClick"];
  children: React.ReactNode;
  PaperSx?:SxProps<Theme>;
};

export const TabButton: React.FC<TabButtonProps> = ({
  id: dataTestId,
  BoxSx,
  PaperSx,
  onClick,
  children,
}) => (
  <Box
    id={dataTestId}
    sx={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      height: "100%",
      maxHeight: 185,
      width: 34,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "visible",
      pointerEvents: "auto",
      ...BoxSx,
    }}
  >
    <Paper
      id={`${dataTestId}-Paper`}
      elevation={0}
      variant="outlined"
      sx={{
        boxShadow: "none !important",
        height: "100%",
        width: "100%",
        ...STYLES.HACK_NO_BORDER,
        ...STYLES.left.paper,
        ...PaperSx,
      }}
    >
      <IconButton
        id={`${dataTestId}-IconButton`}
        color="inherit"
        onClick={onClick}
        disableRipple
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
          height: "100%",
          width: "100%",
          p: 0,
        }}
      >
        {children}
      </IconButton>
    </Paper>
  </Box>
);
