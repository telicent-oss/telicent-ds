// pages/Search/ButtonZoomIn.tsx
import { IconButton } from "@mui/material";
import { Add as AddIcon } from "@telicent-oss/mui-icons-material";
import React from "react";

export const ButtonZoomIn: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => (
  <IconButton onClick={onClick} size="small" aria-label="Zoom in">
    <AddIcon />
  </IconButton>
);
