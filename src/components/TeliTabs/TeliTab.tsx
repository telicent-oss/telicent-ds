import React from "react";
import { Tab, TabProps } from "@mui/material";

import "./telitabs.css";

interface TeliTabProps extends Omit<TabProps, "value"> {
  tabIndex: number;
}

/**
 * @deprecated TeliTab is deprecated and will be removed in a future release.
 */
const TeliTab: React.FC<TeliTabProps> = ({ tabIndex, className: tabClassNames, ...other }) => {
  console.warn("TeliTab is deprecated and will be removed in a future release.");
  return <Tab className={tabClassNames} {...a11yProps(tabIndex)} {...other} />;
};

export default TeliTab;

function a11yProps(index: number) {
  if (index) {
    return {
      id: `teli-tab-${index}`,
      "aria-controls": `teli-tabpanel-${index}`,
    };
  }
}
