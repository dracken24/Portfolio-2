"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Project = {
	id: number
	name: string
	description: string
	technologies: string
	status: string
	url: string
}


export default function EditProjectPage({ params }: { params: { id: string } }) {
	const router = useRouter()
	const [project, setProject] = useState<Project | null>(null)
	const [name, setName] = useState("")
	const [description, setDescription] = useState("")
	const [technologies, setTechnologies] = useState("")
	const [status, setStatus] = useState("")
	const [url, setUrl] = useState("")
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [saving, setSaving] = useState(false)

useEffect(() => {
    async function load() {
		try {
	        const res = await fetch(`/api/projects/${params.id}`)
	        const json = await res.json()
	        if (!res.ok || json.success !== true) throw new Error(json.error || "Projet introuvable")
	        setProject(json.data)
	        setName(json.data.name)
			setDescription(json.data.description)
			setTechnologies(json.data.technologies)
			setStatus(json.data.status)
			setUrl(json.data.url)
		}
		catch (e: any) {setError(e.message)}
		finally {setLoading(false)}
    }
    load()
}, [params.id])

async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)
	    try {
			const res = await fetch(`/api/projects/${params.id}`, {
	        method: "PUT",
	        headers: { "Content-Type": "application/json" },
	        body: JSON.stringify({ name: name.trim(), description: description.trim(), technologies: technologies.trim(), status: status.trim(), url: url.trim()})
			})
			const json = await res.json()
			if (!res.ok || json.success !== true) throw new Error(json.error || "Modification impossible")
			router.push(`/projets/${params.id}`)
	    } catch (e: any) {
			setError(e.message)
	    } finally {
			setSaving(false)
	    }
	}

	if (loading) return <main className="container mx-auto p-8">Chargement...</main>
	if (error) return <main className="container mx-auto p-8 text-red-700">{error}</main>
	if (!project) return null

	return (
	<main className="container mx-auto p-8 max-w-lg">
		<h1 className="text-2xl font-semibold mb-6">Modifier le projet</h1>
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
			<label className="block mb-1">status</label>
			<input className="border rounded w-full p-2" value={url} onChange={(e) => setUrl(e.target.value)} required />
	    </div>
		
	    {error && <p className="text-red-700">{error}</p>}
		
	    <button disabled={saving} className="bg-black text-white px-4 py-2 rounded">
			{saving ? "Enregistrement..." : "Enregistrer"}
	    </button>
		<Link className="underline" href="/projets">Retour à la liste</Link>
		
		</form>
	</main>
	)
}

