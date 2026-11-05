import Stack, { StackProps } from "@mui/material/Stack";
import React, { forwardRef } from "react";

const FlexBox = forwardRef<HTMLDivElement, StackProps>((props, ref) => (
  <Stack ref={ref} {...props}>
    {props.children}
  </Stack>
));

export default FlexBox;
