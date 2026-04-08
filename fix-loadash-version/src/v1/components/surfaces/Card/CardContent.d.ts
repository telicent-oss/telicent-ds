import { default as React, PropsWithChildren } from '../../../../../node_modules/react';
import { SxProps, Theme } from '@mui/material/styles';
interface CardContentProps extends PropsWithChildren {
    sx?: SxProps<Theme>;
}
declare const CardContent: React.FC<CardContentProps>;
export default CardContent;
