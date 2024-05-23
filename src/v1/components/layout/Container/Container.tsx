import React from "react";
import MUIContainer from "@mui/material/Container";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  /** If true, the left and right padding is removed. */
  disablePadding: boolean;
  /** Set the maxWidth to match the minWidth of the current breakpoint. Useful
   * when the design is set for fixed sizes instead of trying to accommodate a
   * fluid viewport. It's fluid by default */
  fixed: boolean;
  /** Sets the maxWidth of the container. The container will grow with the size
   * of the screen. Set to false to disable maxWidth */
  maxWidth: "xs" | "sm" | "md" | "lg" | "xl" | false;
};

const Container: React.FC<ContainerProps> = (containerProps) => (
  <MUIContainer {...containerProps} />
);

export default Container;
