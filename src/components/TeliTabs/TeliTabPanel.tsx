import React from "react";

interface TeliTabPanelProps {
  tabIndex: number;
  selectedTabIndex: number;
  children?: React.ReactNode;
}

/**
 * @deprecated TeliTabPanel is deprecated and will be removed in a future release.
 */
const TeliTabPanel: React.FC<TeliTabPanelProps> = ({ tabIndex, selectedTabIndex, children, ...other }) => {
  console.warn("TeliTabPanel is deprecated and will be removed in a future release.");
  return (
    <div
      role="tabpanel"
      hidden={selectedTabIndex !== tabIndex}
      id={`teli-tabpanel-${tabIndex}`}
      aria-labelledby={`teli-tab-${tabIndex}`}
      className="py-2"
      {...other}
    >
      {children}
    </div>
  );
};

export default TeliTabPanel;
