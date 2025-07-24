// pages/Search/ButtonZoomIn.tsx
import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const ButtonZoomIn: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => (
  <IconButton onClick={onClick} size="small">
    <AddIcon />
  </IconButton>
);
