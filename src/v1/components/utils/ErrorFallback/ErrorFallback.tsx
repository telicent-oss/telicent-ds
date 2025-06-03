import React from 'react'
import { ErrorFallbackText, ErrorFallbackTextProps } from './ErrorFallbackText';
import { ErrorFallbackWrapper, ErrorFallbackWrapperProps } from './ErrorFallbackWrapper';

export type ErrorFallbackProps = Omit<ErrorFallbackWrapperProps, "children"> & ErrorFallbackTextProps;

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  name,
  message,
  height = 256,
  sx,
}) => (
  <ErrorFallbackWrapper height={height} sx={sx}>
    <ErrorFallbackText name={name} message={message} />
  </ErrorFallbackWrapper>
)
