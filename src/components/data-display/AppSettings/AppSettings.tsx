import React, { PropsWithChildren } from "react";

import IconPopover from "../_IconPopover/_IconPopover";
import CogIcon from "../Icons/CogIcon";

export type AppSettingsProps = PropsWithChildren<{
  id?: string;
  ariaLabel?: string;
}>;

const AppSettings: React.FC<AppSettingsProps> = ({ id = "app-settings", ariaLabel = "App settings", children }) => (
  <IconPopover id={id} ariaLabel={ariaLabel} icon={<CogIcon fontSize="medium" sx={{ fontSize: 24 }} />} width={240}>
    {children}
  </IconPopover>
);

export default AppSettings;
