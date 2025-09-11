import { verifyAdminAuth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// DELETE /api/projects/[id] - Supprimer un project par ID
export async function DELETE(request: NextRequest, { params }: { params: { id: string } })
{
	try
	{
		// Vérifier l'authentification admin
		const user = verifyAdminAuth(request);
		if (!user)
		{
			return NextResponse.json(
				{ success: false, error: 'Non autorisé' },
				{ status: 401 }
			);
		}

		const id = parseInt(params.id)

		// Validation de l'ID
		if (isNaN(id) || id <= 0)
		{
			return NextResponse.json(
				{
					success: false,
					error: 'ID du project invalide'
				},
				{
					status: 400
				}
			)
		}

		// Vérifier si le project existe
		const existingProject = await prisma.project.findUnique({where: { id }})

		if (!existingProject)
		{
			return NextResponse.json(
				{
					success: false,
					error: 'Project non trouvé'
				},
				{
					status: 404
				}
			)
		}

		// Supprimer le project
		await prisma.project.delete({ where: { id } })

		return NextResponse.json(
		{
			success: true,
			message: `Project "${existingProject.name}" supprimé avec succès`
		})
	}
	catch (error)
	{
		console.error('Erreur lors de la suppression du project:', error)
		return NextResponse.json(
			{
				success: false,
				error: 'Erreur lors de la suppression du project'
			},
			{
				status: 500
			}
		)
	}
}

// PUT /api/projects/[id] - Modifier un project par ID
export async function PUT(request: NextRequest,{ params }: { params: { id: string } })
{
	try
	{
		// Vérifier l'authentification admin
		const user = verifyAdminAuth(request);
		if (!user)
		{
			return NextResponse.json(
				{ success: false, error: 'Non autorisé' },
				{ status: 401 }
			);
		}

		const id = parseInt(params.id)

		// Validation de l'ID
		if (isNaN(id) || id <= 0)
		{
			return NextResponse.json(
				{
					success: false,
					error: 'ID du project invalide'
				},
				{
					status: 400
				}
			)
		}

		// Vérifier si le project existe
		const existingProject = await prisma.project.findUnique({ where: { id } })

		if (!existingProject)
		{
			return NextResponse.json(
				{
					success: false,
					error: 'Project non trouvé'
				},
				{
					status: 404
				}
			)
		}

		const body = await request.json()
		const { name, description, technologies, status, url, imageUrl, cathegory } = body

		// Validation des données
		if (!name || typeof name !== 'string' || name.trim().length === 0)
		{
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

		if (!description || typeof description !== 'string' || description.trim().length === 0)
		{
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

		if (!technologies || typeof technologies !== 'string' || technologies.trim().length === 0)
		{
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

		if (!status || typeof status !== 'string' || status.trim().length === 0)
		{
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

		if (!cathegory || typeof cathegory !== 'string' || cathegory.trim().length === 0)
		{
			return NextResponse.json(
				{
					success: false,
					error: 'La catégorie du projet est requise'
				},
				{
					status: 400
				}
			)
		}

		// Mettre à jour le project
		const updatedProject = await prisma.project.update(
		{
			where: { id },
			data:
			{
				name: name.trim(),
				description: description.trim(),
				technologies: technologies.trim(),
				status: status.trim(),
				cathegory: cathegory.trim(),
				url: url || '',
				imageUrl: imageUrl || ''
			}
		})

		return NextResponse.json(
		{
			success: true,
			data: updatedProject,
			message: 'Project modifié avec succès'
		})
	}
	catch (error)
	{
		console.error('Erreur lors de la modification du project:', error)
		
		return NextResponse.json(
			{
				success: false,
				error: 'Erreur lors de la modification du project'
			},
			{
				status: 500
			}
		)
	}
}

// GET /api/projects/[id] - Obtenir un project par ID (bonus)
export async function GET(request: NextRequest,{ params }: { params: { id: string } })
{
	try
	{
		const id = parseInt(params.id)

		// Validation de l'ID
		if (isNaN(id) || id <= 0)
		{
			return NextResponse.json(
				{
					success: false,
					error: 'ID du project invalide'
				},
				{
					status: 400
				}
			)
		}

		// Récupérer le project
		const project = await prisma.project.findUnique({ where: { id } })

		if (!project)
		{
			return NextResponse.json(
				{
					success: false,
					error: 'Project non trouvé'
				},
				{
					status: 404
				}
			)
		}

		return NextResponse.json(
		{
			success: true,
			data: project,
			message: 'Project trouvé'
		})
	}
	catch (error)
	{
		console.error('Erreur lors de la récupération du project:', error)
		return NextResponse.json(
			{
				success: false,
				error: 'Erreur lors de la récupération du project'
			},
			{
				status: 500
			}
		)
	}
}
