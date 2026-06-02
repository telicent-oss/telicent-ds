import React, { PropsWithChildren } from "react";
import MUICardContent from "@mui/material/CardContent";
import { SxProps, Theme } from "@mui/material/styles";

interface CardContentProps extends PropsWithChildren {
  sx?: SxProps<Theme>;
}

const CardContent: React.FC<CardContentProps> = ({ children, sx }) => (
  <MUICardContent sx={sx}>{children}</MUICardContent>
);

export default CardContent;
