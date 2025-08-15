"use client"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AppBarComponent from '../components/appBar';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import Link from "next/link";
import { useEffect, useState } from "react";

type Project = {
	id: number
	name: string
	description: string
	technologies: string
	status: string
	url: string
	createdAt: string
	updatedAt: string
}

export default function Projets()
{
	const [projects, setProjects] = useState<Project[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)
	
	async function load() {
	    try {
			setLoading(true)
			const res = await fetch("/api/projects", { cache: "no-store" })
			const json = await res.json()
			if (!res.ok || json.success !== true) {
			throw new Error(json.error || "Erreur lors du chargement")
			}
			setProjects(json.data as Project[])
		}
		catch (e: any) {setError(e.message)}
		finally {setLoading(false)}
	}
	
	useEffect(() => {
	    load()
	}, [])
	
	async function handleDelete(id: number) {
	    if (!confirm("Supprimer ce projet ?")) return
	    	const res = await fetch(`/api/projects/${id}`, { method: "DELETE" })
	    if (res.ok) {
		await load()
		} else {
			const j = await res.json().catch(() => ({}))
			alert(j.error || "Suppression impossible")
		}
	}
	
	function createLoadingCard() {
	    return (
			// <Card>
			// 	<CardContent>
					<Typography>Chargement...</Typography>
			// 	</CardContent>
			// </Card>
		)
	}
	
	function createProjetCard(id: number, name: string, description: string, url: string) {
	    return (
			<Card sx={{ maxWidth: 450 }}>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						<Link className="font-medium underline" href={`/projets/${id}`}>{name}</Link>
					</Typography>
					
					<Typography variant="body2" sx={{ color: 'text.secondary' }}>{description}</Typography>
					<Typography><Link href={url}>{url}</Link></Typography>
					
					<Stack spacing={2} direction="row">
						<Button variant="text" href={`/projets/${id}/edit`}>Modifier</Button>
						<Button variant="text" color="error" onClick={() => handleDelete(id)}>Supprimer</Button>
					</Stack>
				</CardContent>
			</Card>
		)
	}

	return (
		<Box>
			{/* AppBar */}
			<AppBarComponent />

			<Typography variant="h1">Projets</Typography>
			
			<Button variant="contained" color="success" href="/projets/new">Nouveau projet</Button>
			
			<Box>
				{/* {loading && <p>Chargement...</p>} */}
				{loading && createLoadingCard()}
				
				{error && <p className="text-red-600">{error}</p>}
				
				{!loading && projects.length === 0 && (<p>Aucun projet.</p>)}
				
				<Box
					sx={{
						width: '100%',
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
						gap: 2,
					}}
				>
					{projects.map((p) => (createProjetCard(p.id, p.name, p.description, p.url)))}
				</Box>
			</Box>
		</Box>
	)
}
