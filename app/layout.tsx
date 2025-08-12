import type { Metadata } from 'next'

export const metadata: Metadata =
{
	title: 'Laboratoire 2 - Services Web',
	description: 'Application de gestion de projects avec services REST',
}

export default function RootLayout({ children, }: { children: React.ReactNode })
{
	return (
		<html lang="fr">
			<body style={{ backgroundColor: '#505050' }}>{children}</body>
		</html>
	)
}
