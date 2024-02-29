import React from "react";
import { Tab, TabProps } from "@mui/material";
import classNames from "classnames";

import "./telitabs.css";

interface TeliTabProps extends Omit<TabProps, "value"> {
  tabIndex: number;
}

const TeliTab: React.FC<TeliTabProps> = ({
  tabIndex,
  className: tabClassNames,
  ...other
}) => <Tab className={tabClassNames} {...a11yProps(tabIndex)} {...other} />;

export default TeliTab;

function a11yProps(index: number) {
  if (index) {
    return {
      id: `teli-tab-${index}`,
      "aria-controls": `teli-tabpanel-${index}`,
    };
  }
}
