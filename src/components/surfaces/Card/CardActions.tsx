import MUICardAction from "@mui/material/CardActions";
import React, { PropsWithChildren } from "react";

const CardActions: React.FC<PropsWithChildren> = ({ children }) => (
  <MUICardAction>{children}</MUICardAction>
);

export default CardActions;
