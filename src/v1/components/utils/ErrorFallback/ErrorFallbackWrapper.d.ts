import { default as React } from '../../../../../node_modules/react';
import { SxProps, Theme } from '@mui/material';

export type ErrorFallbackWrapperProps = {
    children: React.ReactNode;
    height?: number | string;
    sx?: SxProps<Theme>;
};
export declare const ErrorFallbackWrapper: React.FC<ErrorFallbackWrapperProps>;
