import { FC } from '../../../../../node_modules/react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type DownloadIconProps = Omit<FontAwesomeIconProps, "icon"> & {
    color?: "primary" | "inherit";
};
declare const Download: FC<DownloadIconProps>;
export default Download;
