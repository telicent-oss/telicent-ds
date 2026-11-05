import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider as MuiLocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import React, { ComponentProps } from "react";

type MuiProps = ComponentProps<typeof MuiLocalizationProvider>;

export type LocalizationProviderProps = Omit<MuiProps, "dateAdapter"> & {
  dateAdapter?: MuiProps["dateAdapter"];
};

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  dateAdapter = AdapterDayjs,
  children,
  ...rest
}) => (
  <MuiLocalizationProvider dateAdapter={dateAdapter} {...rest}>
    {children}
  </MuiLocalizationProvider>
);

export { AdapterDayjs };

export default LocalizationProvider;
