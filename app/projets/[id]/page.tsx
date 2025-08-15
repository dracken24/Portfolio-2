import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { headers } from "next/headers";
import Link from "next/link";
// import AppBarComponent from '../components/appBar';

async function fetchProduct(id: string) {
	const h = headers()
	const host = h.get("host")
	const proto = h.get("x-forwarded-proto") ?? "http"
	const baseUrl = host ? `${proto}://${host}` : "http://localhost:3000"

	const res = await fetch(`${baseUrl}/api/projects/${id}`, { cache: "no-store" })
	if (!res.ok) return null
	const json = await res.json()
	return json?.data ?? null
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
	const project = await fetchProduct(params.id)

	if (!project) {
	return (
	<main className="container mx-auto p-8">
		<p>Projet introuvable.</p>
		<Link className="underline" href="/projets">Retour</Link>
	</main>
	)
	}

	return (
		<Box>
			{/* AppBar */}
			{/* <AppBarComponent /> */}
			<Typography variant="h1">Projets</Typography>
			
			<Card sx={{padding: 5}}>
				<Stack spacing={2} direction="row">
					<Typography variant="h2">{project.name}</Typography>
					<Button variant="outlined" disabled>{project.status}</Button>
				</Stack>
				
				<Box>
					<Typography><Link href={project.url}>{project.url}</Link></Typography>
				
					<Typography variant="subtitle2">{project.technologies}</Typography>
					
					<Typography variant="body1">{project.description}</Typography>
					
					<Typography variant="body2">Créé le {new Date(project.createdAt).toLocaleString()}</Typography>
					<Typography variant="body2">Mis à jour le {new Date(project.updatedAt).toLocaleString()}</Typography>
					
					<Stack spacing={2} direction="row">
						<Button variant="text" href={`/projets/${project.id}/edit`}>Modifier</Button>
						<Button variant="text" color="secondary" href="/projets">Retour à la liste</Button>
					</Stack>
				</Box>
			</Card>
		</Box>
	)
}

