import React, { forwardRef } from "react";
import MUIPopOver, {
  PopoverProps as MUIPopOverProps,
} from "@mui/material/Popover";

type PopOverProps = MUIPopOverProps &
  Partial<{
    width: number;
  }>;

const PopOver = forwardRef<HTMLDivElement, PopOverProps>((props, ref) => (
  <MUIPopOver
    ref={ref}
    elevation={3}
    slotProps={{
      paper: {
        sx: {
          backgroundColor: "#2A2A2A",
          backgroundImage: "none",
          width: props.width,
          padding: 2,
        },
      },
    }}
    {...props}
  />
));

export default PopOver;
