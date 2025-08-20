import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Supprimer les données existantes
  await prisma.project.deleteMany()

  // Ajouter des projets de test
  const projects = [
    {
      name: 'Portfolio Personnel',
      description: 'Un portfolio moderne développé avec Next.js, TypeScript et Material-UI',
      technologies: 'Next.js, TypeScript, Material-UI, Prisma, PostgreSQL',
      status: 'Terminé',
      url: 'https://github.com/votre-username/portfolio'
    },
    {
      name: 'Application E-commerce',
      description: 'Plateforme de vente en ligne avec panier et paiement',
      technologies: 'React, Node.js, Express, MongoDB, Stripe',
      status: 'En cours',
      url: 'https://github.com/votre-username/ecommerce-app'
    },
    {
      name: 'Système de Gestion',
      description: 'Application de gestion des tâches et projets',
      technologies: 'Vue.js, Laravel, MySQL, Docker',
      status: 'Planifié',
      url: ''
    }
  ]

  for (const project of projects) {
    await prisma.project.create({
      data: project
    })
  }

  console.log('Données de test ajoutées avec succès !')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
