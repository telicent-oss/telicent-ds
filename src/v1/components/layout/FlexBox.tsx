import React from "react";
import Stack, { StackProps } from "@mui/material/Stack";

const FlexBox: React.FC<StackProps> = (props) => <Stack {...props}>{props.children}</Stack>;

export default FlexBox;
