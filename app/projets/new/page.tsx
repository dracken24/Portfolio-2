"use client"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import AppBarComponent from '../components/appBar';

export default function NewProductPage() {
	const router = useRouter()
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [technologies, setTechnologies] = useState("")
	const [status, setStatus] = useState("")
	const [url, setUrl] = useState("")
	const [submitting, setSubmitting] = useState(false)
	const [error, setError] = useState<string | null>(null)

	async function handleSubmit(e: React.FormEvent) {
	e.preventDefault()
	setError(null)
	setSubmitting(true)
	try {
	const body = { name: name.trim(), description: description.trim(), technologies: technologies.trim(), status: status.trim(), url: url.trim()}
	const res = await fetch("/api/projects", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	})
	const json = await res.json()
	if (!res.ok || json.success !== true) {throw new Error(json.error || "Création impossible")}
	router.push("/projets")}
	catch (e: any) {setError(e.message)}
	finally {setSubmitting(false)}
	}

	return (
		<Box>
			{/* AppBar */}
			{/* <AppBarComponent /> */}
			<Typography variant="h1">Projets</Typography>
					
		
	<main className="container mx-auto p-8 max-w-lg">
		<h1 className="text-2xl font-semibold mb-6">Nouveau projet</h1>
		
		<form onSubmit={handleSubmit} className="space-y-4">
		<div>
			<label className="block mb-1">Nom</label>
			<input className="border rounded w-full p-2" value={name} onChange={(e) => setName(e.target.value)} required />
		</div>
		
	    <div>
			<label className="block mb-1">Description</label>
			<input className="border rounded w-full p-2" value={description} onChange={(e) => setDescription(e.target.value)} required />
	    </div>
		
		<div>
			<label className="block mb-1">Technologies</label>
			<input className="border rounded w-full p-2" value={technologies} onChange={(e) => setTechnologies(e.target.value)} required />
	    </div>
		
		<div>
			<label className="block mb-1">Status</label>
			<input className="border rounded w-full p-2" value={status} onChange={(e) => setStatus(e.target.value)} required />
	    </div>
		
		<div>
			<label className="block mb-1">URL</label>
			<input className="border rounded w-full p-2" value={url} onChange={(e) => setUrl(e.target.value)} required />
	    </div>
		
		{error && <p className="text-red-700">{error}</p>}
		
		<Link className="underline" href="/projets">Retour à la liste</Link>
		<button disabled={submitting} className="bg-black text-white px-4 py-2 rounded">
			{submitting ? "En cours..." : "Créer"}
		</button>
		
		</form>
	</main>
	</Box>
	)
}

