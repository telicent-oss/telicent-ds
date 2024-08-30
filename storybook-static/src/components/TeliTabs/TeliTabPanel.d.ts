import { default as React } from 'react';

interface TeliTabPanelProps {
    tabIndex: number;
    selectedTabIndex: number;
    children?: React.ReactNode;
}
declare const TeliTabPanel: React.FC<TeliTabPanelProps>;
export default TeliTabPanel;
