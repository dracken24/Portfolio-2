const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function createAdminUser()
{
	try
	{
		// Vérifier si un utilisateur admin existe déjà
		const existingAdmin = await prisma.user.findFirst(
		{
			where: { role: 'admin' }
		});

		if (existingAdmin)
		{
			console.log('Un utilisateur admin existe déjà.');
			return;
		}

		// Hasher le mot de passe
		const hashedPassword = await bcrypt.hash('admin123', 10);
 
		// Créer l'utilisateur admin
		const adminUser = await prisma.user.create(
		{
			data: 
			{
				email: 'admin@portfolio.com', // admin@portfolio.com default email
				password: hashedPassword, // admin123 default password
				name: 'Administrateur',
				role: 'admin',
				createdAt: new Date(),
				updatedAt: new Date()
			}
		});

		console.log('Utilisateur admin créé avec succès:');
		console.log('Email:', adminUser.email);
		console.log('Nom:', adminUser.name);
		console.log('Mot de passe: admin123');
		console.log('ID:', adminUser.id);
	}
	catch (error)
	{
		console.error('Erreur lors de la création de l\'utilisateur admin:', error);
	}
	finally
	{
		await prisma.$disconnect();
	}
}

createAdminUser();
