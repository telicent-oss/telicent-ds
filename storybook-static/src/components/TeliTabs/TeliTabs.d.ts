import { default as React } from 'react';
import { TabsProps } from '@mui/material';

export interface TeliTabsProps extends Omit<TabsProps, "value"> {
    /**
     * The value of the currently selected `Tab`.
     */
    selectedTabIndex: number;
}
declare const TeliTabs: React.FC<TeliTabsProps>;
export default TeliTabs;
