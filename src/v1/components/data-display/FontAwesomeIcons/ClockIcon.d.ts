import { default as React } from '../../../../../node_modules/react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type ClockIconProps = Omit<FontAwesomeIconProps, "icon">;
declare const ClockIcon: React.FC<ClockIconProps>;
export default ClockIcon;
