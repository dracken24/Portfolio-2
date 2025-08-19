const { execSync } = require('child_process');

console.log('🚀 Démarrage du déploiement...');

try {
  // Générer le client Prisma
  console.log('📦 Génération du client Prisma...');
  execSync('npx prisma generate', { stdio: 'inherit' });
  
  // Déployer les migrations
  console.log('🗄️ Déploiement des migrations...');
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
  
  console.log('✅ Déploiement terminé avec succès!');
} catch (error) {
  console.error('❌ Erreur lors du déploiement:', error.message);
  process.exit(1);
}
