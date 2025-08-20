'use client'

import { CustomThemeProvider } from '../contexts/ThemeContext'

export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <CustomThemeProvider>
      {children}
    </CustomThemeProvider>
  )
}
