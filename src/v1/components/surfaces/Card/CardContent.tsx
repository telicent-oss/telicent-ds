import React, { PropsWithChildren } from "react";
import MUICardContent from "@mui/material/CardContent";

const CardContent: React.FC<PropsWithChildren> = ({ children }) => (
  <MUICardContent>{children}</MUICardContent>
);

export default CardContent;
