# Guide de Déploiement Vercel

## Déploiement Initial (Sans Base de Données)

L'application peut être déployée sans base de données en mode statique. Les données seront fournies par des fichiers statiques.

### Étapes :

1. **Pousser le code vers GitHub**
   ```bash
   git add .
   git commit -m "Configuration pour déploiement Vercel"
   git push origin master
   ```

2. **Déployer sur Vercel**
   - Connectez-vous à Vercel
   - Importez votre repository GitHub
   - Vercel détectera automatiquement Next.js
   - Cliquez sur "Deploy"

3. **L'application fonctionnera en mode statique** avec des données d'exemple

## Déploiement Complet (Avec Base de Données)

### Option 1 : Base de Données Vercel (Recommandée)

1. **Dans votre dashboard Vercel :**
   - Allez dans votre projet
   - Onglet "Storage"
   - Créez une nouvelle base de données PostgreSQL
   - Vercel configurera automatiquement `DATABASE_URL`

2. **Variables d'environnement requises :**
   - `DATABASE_URL` : Configuré automatiquement par Vercel
   - `JWT_SECRET` : Clé secrète pour JWT (générez une clé aléatoire)

3. **Redéployez l'application**

### Option 2 : Base de Données Externe

1. **Créez une base de données PostgreSQL** (Supabase, Neon, Railway, etc.)

2. **Ajoutez les variables d'environnement dans Vercel :**
   - `DATABASE_URL` : URL de votre base de données
   - `JWT_SECRET` : Clé secrète pour JWT

3. **Redéployez l'application**

## Résolution des Problèmes

### Erreur de Build
- Vérifiez que toutes les dépendances sont installées
- Assurez-vous que le script `postinstall` fonctionne

### Erreur de Base de Données
- Vérifiez que `DATABASE_URL` est configuré
- Testez la connexion à la base de données
- L'application fonctionnera en mode statique si la DB n'est pas disponible

### Erreur de Prisma
- Le client Prisma est généré automatiquement
- Vérifiez que le schéma est valide
