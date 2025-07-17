import React from "react";
import { Box, BoxProps, Button } from "@mui/material";
export * from '../../Drawer/Drawer';

type Position =
  | "left"
  | "top-left"
  | "bottom-left"
  | "right"
  | "top-right"
  | "bottom-right";

// omit BoxProps['position'] to avoid collision
export interface ControlAreaProps extends Omit<BoxProps, 'position'> {
  position: Position;
}

export const ControlArea: React.FC<ControlAreaProps> = ({ position, children, sx, ...props }) => {
  const posStyles: React.CSSProperties = { position: "absolute" };
  switch (position) {
    case "left":
      Object.assign(posStyles, { left: 0, top: "50%", transform: "translateY(-50%)" });
      break;
    case "top-left":
      Object.assign(posStyles, { left: 0, top: 0 });
      break;
    case "bottom-left":
      Object.assign(posStyles, { left: 0, bottom: 0 });
      break;
    case "right":
      Object.assign(posStyles, { right: 0, top: "50%", transform: "translateY(-50%)" });
      break;
    case "top-right":
      Object.assign(posStyles, { right: 0, top: 0 });
      break;
    case "bottom-right":
      Object.assign(posStyles, { right: 0, bottom: 0 });
      break;
  }
  return (
    <Box {...props} sx={{ ...posStyles, ...sx }}>
      {children}
    </Box>
  );
};


export const Background: React.FC<BoxProps> = ({ sx = null, ...rest}) => (
  <Box
    sx={{ position: "relative", width: "100%", height: "100%", ...sx }}
    {...rest}
  />
);

export const Content: React.FC<BoxProps> = (props) => (
  <Box
    {...props}
    sx={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
      ...props.sx,
    }}
  />
);

export const workspace = {
  Background,
  Content,
  ControlArea,
};

export const MapLayerSelector: React.FC = () => (
  <Button variant="contained" size="small">
    Layers
  </Button>
);