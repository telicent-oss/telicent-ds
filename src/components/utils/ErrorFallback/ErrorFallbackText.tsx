import { Typography } from '@mui/material'
import React from 'react'

export type ErrorFallbackTextProps = {
  name?: string
  message?: string
}

export const ErrorFallbackText: React.FC<ErrorFallbackTextProps> = ({
  name,
  message,
}) => (
  <Typography textAlign="center" color="textSecondary">
    {message ?? `⚠️ ${name || 'Component'} failed to load`}
  </Typography>
)
