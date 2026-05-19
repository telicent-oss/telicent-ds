import React from 'react'
import { Typography } from '@mui/material'

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
