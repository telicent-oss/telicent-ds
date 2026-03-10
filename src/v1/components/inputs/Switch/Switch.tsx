import { Switch as MuiSwitch, FormControlLabel } from "@mui/material";
import type { SwitchProps as MuiSwitchProps } from "@mui/material/Switch";
import { forwardRef } from "react";

export type SwitchProps = Omit<MuiSwitchProps, "color"> & {
  label?: string;
  labelPlacement?: "end" | "start" | "top" | "bottom";
};

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(({ label, labelPlacement = "end", ...props }, ref) => {
  const switchElement = (
    <MuiSwitch
      {...props}
      ref={ref}
      color="primary"
      sx={{
        "& .MuiSwitch-switchBase:hover": {
          backgroundColor: "transparent",
        },
      }}
    />
  );

  if (!label) {
    return switchElement;
  }

  return <FormControlLabel control={switchElement} label={label} labelPlacement={labelPlacement} />;
});

export default Switch;
