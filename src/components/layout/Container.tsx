import React from "react";
import MUIContainer, { ContainerProps as MUIContainerProps } from "@mui/material/Container";

// type ContainerProps = {

// }

const Container: React.FC<MUIContainerProps> = (containerProps) => (
  <MUIContainer {...containerProps} />
);

export default Container;
