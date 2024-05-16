import React, { PropsWithChildren } from "react";
import MUICardAction from "@mui/material/CardActions";

const CardActions: React.FC<PropsWithChildren> = ({ children }) => (
  <MUICardAction>{children}</MUICardAction>
);

export default CardActions;
