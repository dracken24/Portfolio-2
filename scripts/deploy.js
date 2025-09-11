const { execSync } = require('child_process');

console.log('🚀 Démarrage du déploiement...');

try
{
    // Générer le client Prisma
    console.log('📦 Génération du client Prisma...');
    execSync('npx prisma generate', { stdio: 'inherit' });

    // Pousser le schéma vers la base de données (pour le déploiement)
    console.log('🗄️ Synchronisation du schéma de base de données...');
    execSync('npx prisma db push', { stdio: 'inherit' });

    console.log('✅ Déploiement terminé avec succès!');
}
catch (error)
{
    console.error('❌ Erreur lors du déploiement:', error.message);
    process.exit(1);
}
