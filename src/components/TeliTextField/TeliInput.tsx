import React from "react";
import { Input, InputProps } from "@mui/material";

type TeliInputProps = Omit<
  InputProps,
  | "classes"
  | "color"
  | "components"
  | "componentsProps"
  | "disableUnderline"
  | "inputComponent"
  | "inputProps"
  | "slotProps"
  | "slots"
  | "sx"
> &
  Partial<{
    cursor: React.CSSProperties["cursor"];
    textAlign: React.CSSProperties["textAlign"];
  }>;

const TeliInput: React.FC<TeliInputProps> = ({
  cursor,
  textAlign,
  ...otherProps
}) => {
  return (
    <Input
      disableUnderline
      inputProps={{ sx: { cursor, textAlign } }}
      {...otherProps}
    />
  );
};

export default TeliInput;
