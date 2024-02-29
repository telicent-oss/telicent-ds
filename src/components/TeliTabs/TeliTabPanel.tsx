import React from "react";

interface TeliTabPanelProps {
  tabIndex: number;
  selectedTabIndex: number;
  children?: React.ReactNode;
}

const TeliTabPanel: React.FC<TeliTabPanelProps> = ({
  tabIndex,
  selectedTabIndex,
  children,
  ...other
}) => (
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

export default TeliTabPanel;
