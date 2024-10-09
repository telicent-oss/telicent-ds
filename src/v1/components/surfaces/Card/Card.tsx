import React from "react";
import MUICard, { CardProps as MUICardProps } from "@mui/material/Card";
import MUICardHeader, { CardHeaderProps as MUICardHeaderProps } from "@mui/material/CardHeader";

type CardProps = Omit<MUICardProps, "classes" | "raised" | "sx"> &
  Partial<{
    maxWidth: React.CSSProperties["maxWidth"];
  }>;

const Card: React.FC<CardProps> = ({ maxWidth, ...cardProps }) => (
  <MUICard className="Panel" sx={{ maxWidth }} {...cardProps} />
);

const CardHeader: React.FC<MUICardHeaderProps> = (cardHeaderProps) => (
  <MUICardHeader {...cardHeaderProps} />
);

export default Card;
export { Card };
export { CardHeader };
