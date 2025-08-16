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

// GET /api/projects/[id] - Obtenir un project spécifique
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier l'authentification
    const user = verifyToken(request)
    if (!user) {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 401 }
      )
    }

    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json(
        { message: 'ID de projet invalide' },
        { status: 400 }
      )
    }

    const project = await prisma.project.findUnique({
      where: { id }
    })

    if (!project) {
      return NextResponse.json(
        { message: 'Projet non trouvé' },
        { status: 404 }
      )
    }

    return NextResponse.json(project)
  } catch (error) {
    console.error('Erreur lors de la récupération du projet:', error)
    return NextResponse.json(
      { message: 'Erreur lors de la récupération du projet' },
      { status: 500 }
    )
  }
}

// PUT /api/projects/[id] - Modifier un project
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier l'authentification
    const user = verifyToken(request)
    if (!user) {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 401 }
      )
    }

    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json(
        { message: 'ID de projet invalide' },
        { status: 400 }
      )
    }

    const body = await request.json()
    const { name, description, technologies, status, url, imageUrl } = body

    // Validation des données
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { message: 'Le nom du projet est requis' },
        { status: 400 }
      )
    }

    if (!description || typeof description !== 'string' || description.trim().length === 0) {
      return NextResponse.json(
        { message: 'La description du projet est requise' },
        { status: 400 }
      )
    }

    if (!technologies || typeof technologies !== 'string' || technologies.trim().length === 0) {
      return NextResponse.json(
        { message: 'Les technologies du projet sont requises' },
        { status: 400 }
      )
    }

    if (!status || typeof status !== 'string' || status.trim().length === 0) {
      return NextResponse.json(
        { message: 'Le statut du projet est requis' },
        { status: 400 }
      )
    }

    // Vérifier si le projet existe
    const existingProject = await prisma.project.findUnique({
      where: { id }
    })

    if (!existingProject) {
      return NextResponse.json(
        { message: 'Projet non trouvé' },
        { status: 404 }
      )
    }

    // Mettre à jour le projet
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        name: name.trim(),
        description: description.trim(),
        technologies: technologies.trim(),
        status: status.trim(),
        url: url || '',
        imageUrl: imageUrl || null
      }
    })

    return NextResponse.json(updatedProject)
  } catch (error) {
    console.error('Erreur lors de la modification du projet:', error)
    return NextResponse.json(
      { message: 'Erreur lors de la modification du projet' },
      { status: 500 }
    )
  }
}

// DELETE /api/projects/[id] - Supprimer un project
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Vérifier l'authentification
    const user = verifyToken(request)
    if (!user) {
      return NextResponse.json(
        { message: 'Non autorisé' },
        { status: 401 }
      )
    }

    const id = parseInt(params.id)
    if (isNaN(id)) {
      return NextResponse.json(
        { message: 'ID de projet invalide' },
        { status: 400 }
      )
    }

    // Vérifier si le projet existe
    const existingProject = await prisma.project.findUnique({
      where: { id }
    })

    if (!existingProject) {
      return NextResponse.json(
        { message: 'Projet non trouvé' },
        { status: 404 }
      )
    }

    // Supprimer le projet
    await prisma.project.delete({
      where: { id }
    })

    return NextResponse.json(
      { message: 'Projet supprimé avec succès' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Erreur lors de la suppression du projet:', error)
    return NextResponse.json(
      { message: 'Erreur lors de la suppression du projet' },
      { status: 500 }
    )
  }
}
