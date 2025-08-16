import { prisma } from '@/lib/prisma'
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from 'next/server'

// Fonction pour vérifier le token JWT
function verifyToken(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  try {
    return jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key')
  } catch (error) {
    return null
  }
}

// GET /api/projects - Obtenir tous les projects (accès public)
export async function GET(request: NextRequest)
{
	try
	{
		const projects = await prisma.project.findMany({
			orderBy:
			{
				id: 'desc'
			}
		})
		
		// Retourner directement le tableau pour le dashboard admin et la page d'accueil
		return NextResponse.json(projects)
	}
	catch (error)
	{
		console.error('Erreur lors de la récupération des projects:', error)
		return NextResponse.json(
			{ message: 'Erreur lors de la récupération des projects' },
			{ status: 500 }
		)
	}
}

// POST /api/projects - Ajouter un nouveau project (authentification requise)
export async function POST(request: NextRequest)
{
	try
	{
		// Vérifier l'authentification
		const user = verifyToken(request)
		if (!user) {
			return NextResponse.json(
				{ message: 'Non autorisé' },
				{ status: 401 }
			)
		}

		const body = await request.json()
		const { name, description, technologies, status, url, imageUrl } = body

		// Validation des données
		if (!name || typeof name !== 'string' || name.trim().length === 0) {
			return NextResponse.json(
				{ message: 'Le nom du project est requis et doit être une chaîne non vide' },
				{ status: 400 }
			)
		}

		if (!description || typeof description !== 'string' || description.trim().length === 0) {
			return NextResponse.json(
				{ message: 'La description du project est requise' },
				{ status: 400 }
			)
		}

		if (!technologies || typeof technologies !== 'string' || technologies.trim().length === 0) {
			return NextResponse.json(
				{ message: 'Les technologies du project sont requises' },
				{ status: 400 }
			)
		}

		if (!status || typeof status !== 'string' || status.trim().length === 0) {
			return NextResponse.json(
				{ message: 'Le statut du project est requis' },
				{ status: 400 }
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
				imageUrl: imageUrl || null
			}
		})

		return NextResponse.json(project, { status: 201 })
	}
	catch (error)
	{
		console.error('Erreur lors de la création du project:', error)
		return NextResponse.json(
			{ message: 'Erreur lors de la création du project' },
			{ status: 500 }
		)
	}
}
