import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/projects/count - Compter le nombre total de projects
export async function GET()
{
	try
	{
		// Compter tous les produits en base
		const total = await prisma.project.count()

		return NextResponse.json({
			success: true,
			data:
			{
				total: total
			},
			message: `${total} project(s) en base`
		})
	}
	catch (error)
	{
		console.error('Erreur lors du comptage des projects:', error)
		return NextResponse.json(
			{
				success: false,
				error: 'Erreur lors du comptage des projects'
			},
			{
				status: 500
			}
		)
	}
}