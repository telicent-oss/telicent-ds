// packages/ds/src/UIThemeProvider.tsx
import React, { useEffect } from 'react'
import {
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
  useTheme as useMuiTheme,
} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { UITheme } from './colors/theme-colors'
import createTheme from './createTheme'

export type UIThemeProviderProps = React.PropsWithChildren<{
  theme: UITheme
  dark?: boolean
}>

const DEBUG_PALETTE_CHECK = false;

const UIThemeProvider: React.FC<UIThemeProviderProps> = ({
  theme,
  dark = false,
  children,
}) => {
  const mergedTheme = React.useMemo(() => createTheme(theme, dark), [theme, dark])
  const muiTheme   = useMuiTheme()

  useEffect(() => {
    if (DEBUG_PALETTE_CHECK) {

      console.group('⚛️ [UIThemeProvider] palette check')
      Object.entries(muiTheme.palette).forEach(([key, val]) => {
        const hasMain = val != null && typeof (val as any).main === 'string'
        console.log(
          `${key}:`,
          hasMain ? '✅ has .main' : '❌ missing .main',
          val
        )
      })
      console.groupEnd()
    }
  }, [muiTheme])

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={mergedTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}

export default UIThemeProvider
