import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllUsers()
{
    try
	{
        console.log('Suppression de tous les utilisateurs...');

        // Compter d'abord le nombre d'utilisateurs
        const userCount = await prisma.user.count();
        console.log(`Nombre d'utilisateurs trouvés: ${userCount}`);

        if (userCount === 0)
		{
            console.log('Aucun utilisateur à supprimer.');
            return;
        }

        // Supprimer tous les utilisateurs
        const result = await prisma.user.deleteMany({});

        console.log(`✅ ${result.count} utilisateur(s) supprimé(s) avec succès!`);
    }
	catch (error)
	{
        console.error('❌ Erreur lors de la suppression des utilisateurs:', error);
    }
	finally
	{
        await prisma.$disconnect();
    }
}

// Exécuter le script
deleteAllUsers();
