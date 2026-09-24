import React, { PropsWithChildren } from "react";

import InfoIcon from "../Icons/InfoIcon";
import IconPopover from "../_IconPopover/_IconPopover";

export type AppInfoProps = PropsWithChildren<{
  id?: string;
  ariaLabel?: string;
}>;

const AppInfo: React.FC<AppInfoProps> = ({
  id = "app-info",
  ariaLabel = "App information",
  children,
}) => (
  <IconPopover
    id={id}
    ariaLabel={ariaLabel}
    icon={<InfoIcon fontSize="medium" sx={{ fontSize: 24 }} />}
    width={240}
  >
    {children}
  </IconPopover>
);

export default AppInfo;
