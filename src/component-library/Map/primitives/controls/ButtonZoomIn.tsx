// pages/Search/ButtonZoomIn.tsx
import React from "react";
import { IconButton } from "@mui/material";
import { Add as AddIcon } from "@telicent-oss/mui-icons-material";

export const ButtonZoomIn: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => (
  <IconButton onClick={onClick} size="small">
    <AddIcon />
  </IconButton>
);
