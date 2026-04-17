import React from "react";
import { Tabs, TabsProps } from "@mui/material";

import "./telitabs.css";

export interface TeliTabsProps extends Omit<TabsProps, "value"> {
  /**
   * The value of the currently selected `Tab`.
   */
  selectedTabIndex: number;
}

/**
 * @deprecated TeliTabs is deprecated and will be removed in a future release.
 */
const TeliTabs: React.FC<TeliTabsProps> = ({ selectedTabIndex, ...other }) => {
  console.warn("TeliTabs is deprecated and will be removed in a future release.");
  return (
    <Tabs className="gap-x-3" textColor="secondary" indicatorColor="secondary" value={selectedTabIndex} {...other} />
  );
};

export default TeliTabs;
