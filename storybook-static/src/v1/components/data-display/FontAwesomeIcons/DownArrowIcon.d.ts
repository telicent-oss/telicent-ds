import { default as React } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type DownArrowIconProps = Omit<FontAwesomeIconProps, "icon">;
declare const DownArrow: React.FC<DownArrowIconProps>;
export default DownArrow;
