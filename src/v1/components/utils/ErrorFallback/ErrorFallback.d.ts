import { default as React } from '../../../../../node_modules/react';
import { ErrorFallbackTextProps } from './ErrorFallbackText';
import { ErrorFallbackWrapperProps } from './ErrorFallbackWrapper';

export type ErrorFallbackProps = Omit<ErrorFallbackWrapperProps, "children"> & ErrorFallbackTextProps;
export declare const ErrorFallback: React.FC<ErrorFallbackProps>;
