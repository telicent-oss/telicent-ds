import { Radio as MuiRadio, FormControlLabel } from "@mui/material";
import type { RadioProps as MuiRadioProps } from "@mui/material/Radio";
import { forwardRef } from "react";

export type RadioProps = Omit<MuiRadioProps, "color"> & {
  label?: React.ReactNode;
  labelPlacement?: "end" | "start" | "top" | "bottom";
};

const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ label, labelPlacement = "end", value, ...props }, ref) => {
    if (!label) {
      return <MuiRadio {...props} value={value} ref={ref} color="primary" />;
    }

    return (
      <FormControlLabel
        value={value}
        control={<MuiRadio {...props} ref={ref} color="primary" />}
        label={label}
        labelPlacement={labelPlacement}
      />
    );
  },
);

export default Radio;
