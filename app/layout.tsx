import type { Metadata } from 'next'
import ThemeWrapper from './components/ThemeWrapper'

export const metadata: Metadata = {
  title: 'Laboratoire 2 - Services Web',
  description: 'Application de gestion de projects avec services REST',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  )
}
