import React, { Ref } from "react";
import { FormControl, FormHelperText } from "@mui/material";
import type { SwitchProps as MuiSwitchProps } from "@mui/material/Switch";
import Switch from "../Switch/Switch";
import FlexBox from "../../layout/FlexBox";
import Text from "../../data-display/Text/Text";

export type LabeledSwitchProps = {
  text: string;
  subtext?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  inputProps?: MuiSwitchProps["inputProps"];
  ref?: Ref<HTMLButtonElement>;
};

export const LabeledSwitch = ({
  text,
  subtext,
  checked,
  onChange,
  disabled,
  error,
  helperText,
  inputProps,
  ref,
  ...rest
}: LabeledSwitchProps) => (
  <FormControl error={!!error} component="fieldset" variant="standard" fullWidth>
    <FlexBox direction="row" justifyContent="space-between" alignItems="center">
      <FlexBox>
        <Text variant="subtitle1">{text}</Text>
        {subtext && <Text variant="body2">{subtext}</Text>}
        {helperText && <FormHelperText error={error}>{helperText}</FormHelperText>}
      </FlexBox>
      <Switch
        ref={ref}
        checked={checked}
        onChange={(_, val) => onChange(val)}
        disabled={disabled}
        inputProps={inputProps}
        name={inputProps?.name}
        {...rest}
      />
    </FlexBox>
  </FormControl>
);

export default LabeledSwitch;
