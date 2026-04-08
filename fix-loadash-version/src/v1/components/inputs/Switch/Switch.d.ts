import { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';
export type SwitchProps = Omit<MuiSwitchProps, "color"> & {
    label?: string;
    labelPlacement?: "end" | "start" | "top" | "bottom";
};
declare const Switch: import('../../../../../node_modules/react').ForwardRefExoticComponent<Omit<SwitchProps, "ref"> & import('../../../../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Switch;
