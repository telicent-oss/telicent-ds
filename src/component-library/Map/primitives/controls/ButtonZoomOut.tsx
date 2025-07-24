// pages/Search/ButtonZoomOut.tsx
import React from "react";
import { IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

export const ButtonZoomOut: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => (
  <IconButton onClick={onClick} size="small">
    <RemoveIcon />
  </IconButton>
);
