import { prisma } from '@/lib/prisma'
import { staticProjects } from '@/lib/staticData'
import { NextRequest, NextResponse } from 'next/server'

// GET /api/projects - Obtenir tous les projects
export async function GET()
{
	try
	{
		// Vérifier si la base de données est disponible
		if (!process.env.DATABASE_URL) {
			return NextResponse.json({
				success: true,
				data: staticProjects,
				message: `${staticProjects.length} projet(s) trouvé(s) (mode statique)`
			})
		}

		const projects = await prisma.project.findMany({
			orderBy:
			{
				id: 'asc'
			}
		})
		
		return NextResponse.json({
			success: true,
			data: projects,
			message: `${projects.length} project(s) trouvé(s)`
		})
	}
	catch (error)
	{
		console.error('Erreur lors de la récupération des projects:', error)
		return NextResponse.json(
			{
				success: false,
				error: 'Erreur lors de la récupération des projects',
				data: []
			},
			{
				status: 500
			}
		)
	}
}

// POST /api/projects - Ajouter un nouveau project
export async function POST(request: NextRequest)
{
	try
	{
		const body = await request.json()
		const { name, description, technologies, status, url, imageUrl } = body

		// Validation des données
		if (!name || typeof name !== 'string' || name.trim().length === 0) {
			return NextResponse.json(
				{
					success: false,
					error: 'Le nom du project est requis et doit être une chaîne non vide'
				},
				{
					status: 400
				}
			)
		}

		if (!description || typeof description !== 'string' || description.trim().length === 0) {
			return NextResponse.json(
				{
					success: false,
					error: 'La description du project est requise'
				},
				{
					status: 400
				}
			)
		}

		if (!technologies || typeof technologies !== 'string' || technologies.trim().length === 0) {
			return NextResponse.json(
				{
					success: false,
					error: 'Les technologies du project sont requises'
				},
				{
					status: 400
				}
			)
		}

		if (!status || typeof status !== 'string' || status.trim().length === 0) {
			return NextResponse.json(
				{
					success: false,
					error: 'Le statut du project est requis'
				},
				{
					status: 400
				}
			)
		}

		// Créer le project
		const project = await prisma.project.create({
			data:
			{
				name: name.trim(),
				description: description.trim(),
				technologies: technologies.trim(),
				status: status.trim(),
				url: url || '',
				imageUrl: imageUrl || ''
			}
		})
 
		return NextResponse.json(
			{
				success: true,
				data: project,
				message: 'Project créé avec succès'
			},
			{
				status: 201
			}
		)
	}
	catch (error)
	{
		console.error('Erreur lors de la création du project:', error)
		return NextResponse.json(
			{
				success: false,
				error: 'Erreur lors de la création du project'
			},
			{
				status: 500
			}
		)
	}
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client']
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
