import React from "react";
import { Button, ButtonProps } from "@mui/material";

type BadProps = Omit<ButtonProps, "variant" | "color"> & { style?: "primary" };

const Bad: React.FC<BadProps> = (props) => (
  <Button variant="contained" color="primary">{props.children}</Button>
);

export default Bad;
