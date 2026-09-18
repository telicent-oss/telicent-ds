import React from "react";
import MuiTab, { type TabProps as MuiTabProps } from "@mui/material/Tab";
import { tabId, tabPanelId, useTabsIdPrefix, type TabValue } from "./tabsContext";

export type TabProps = Omit<MuiTabProps, "value"> & {
  /**
   * Required, where MUI falls back to the child's index, and narrowed to
   * `string | number` because it becomes part of a DOM id.
   */
  value: TabValue;
};

// Plain function component rather than `forwardRef`: MUI v5 types `Tab`'s
// default root as `div` while ButtonBase renders a `button`, so a forwarded ref
// would have to be typed as something it never receives. `Tabs` measures its
// children through the container, not through child refs.
export const Tab = ({ value, ...props }: TabProps) => {
  const idPrefix = useTabsIdPrefix();

  return (
    <MuiTab
      value={value}
      id={tabId(idPrefix, value)}
      aria-controls={tabPanelId(idPrefix, value)}
      {...props}
    />
  );
};

export default Tab;
