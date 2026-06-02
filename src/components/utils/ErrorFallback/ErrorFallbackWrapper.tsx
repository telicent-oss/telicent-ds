import React from 'react'
import { Box, SxProps, Theme } from '@mui/material'

export type ErrorFallbackWrapperProps = {
  children: React.ReactNode
  height?: number | string
  sx?: SxProps<Theme>
}

export const ErrorFallbackWrapper: React.FC<ErrorFallbackWrapperProps> = ({
  children,
  height = 256,
  sx,
}) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height={height}
    sx={sx}
  >
    {children}
  </Box>
)
