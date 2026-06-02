// pages/Search/ButtonZoomOut.tsx
import React from "react";
import { IconButton } from "@mui/material";
import { Remove as RemoveIcon } from "@telicent-oss/mui-icons-material";

export const ButtonZoomOut: React.FC<{ onClick?: () => void }> = ({
  onClick,
}) => (
  <IconButton onClick={onClick} size="small">
    <RemoveIcon />
  </IconButton>
);
