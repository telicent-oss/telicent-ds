import { default as React } from 'react';
import { TabProps } from '@mui/material';

interface TeliTabProps extends Omit<TabProps, "value"> {
    tabIndex: number;
}
declare const TeliTab: React.FC<TeliTabProps>;
export default TeliTab;
