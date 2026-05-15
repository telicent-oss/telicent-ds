import React, { forwardRef } from "react";
import Stack, { StackProps } from "@mui/material/Stack";

const FlexBox = forwardRef<HTMLDivElement, StackProps>((props, ref) => (
  <Stack ref={ref} {...props}>
    {props.children}
  </Stack>
));

export default FlexBox;
