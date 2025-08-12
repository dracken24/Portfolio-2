# Démarrage rapide - 5 minutes

## Pour l'enseignant : Test rapide du laboratoire

### 1. Installation (1 minute)
```bash
npm install
```

### 2. Configuration base de données (2 minutes)
1. Créez un compte sur [neon.tech](https://neon.tech)
2. Créez une base PostgreSQL
3. Copiez l'URL de connexion
4. Créez `.env.local` :
```bash
DATABASE_URL="postgresql://user:pass@host.neon.tech/db?sslmode=require"
```

### 3. Synchronisation (30 secondes)
```bash
npx prisma generate
npx prisma db push
```

### 4. Démarrage (30 secondes)
```bash
npm run dev
```

### 5. Test immédiat (1 minute)
Ouvrez http://localhost:3000 - la page doit s'afficher.

**Testez avec curl :**
```bash
# Ajouter un produit

curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -d '{"name": "Project Test", "description": "La description du project", "technologies": "Les technologies utilisees", "status": "Terminee", "url": "urlDuProject.com"}'

# Lister les produits
curl http://localhost:3000/api/projects

# Supprimer le produit
curl -X DELETE http://localhost:3000/api/projects/1
```

## Pour l'étudiant : Ce que vous devez faire

### Étape 1 : Récupérer le code
- Cloner ce repository
- Ouvrir dans VS Code

### Étape 2 : Configurer votre base de données
- Créer un compte Neon.tech (gratuit)
- Obtenir votre URL de connexion
- Créer le fichier `.env.local`

### Étape 3 : Tester vos 3 services
- Utiliser Postman ou curl
- GET /api/products
- POST /api/products
- DELETE /api/products/[id]

### Étape 4 : Comprendre et expliquer
- Comment chaque service fonctionne
- Comment la base de données est configurée
- Comment les erreurs sont gérées

## Checklist de validation

### Pour l'enseignant
- [ ] Le projet se lance sans erreur
- [ ] Les 3 endpoints répondent
- [ ] Les données sont persistées
- [ ] Les erreurs sont gérées
- [ ] La documentation est claire

### Pour l'étudiant
- [ ] J'ai testé tous les endpoints
- [ ] J'ai compris le code
- [ ] J'ai pris des captures d'écran
- [ ] J'ai committé sur GitHub
- [ ] Je peux expliquer comment ça marche

## Résolution de problèmes

### "Cannot connect to database"
```bash
# Vérifiez votre URL dans .env.local
# Testez la connexion sur neon.tech
npx prisma studio  # Doit s'ouvrir sans erreur
```

### "Prisma Client not found"
```bash
npx prisma generate
```

### "Port 3000 in use"
```bash
npm run dev -- -p 3001
# Puis utilisez http://localhost:3001
```

### "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

## Ressources

- **Documentation :** Lisez `README.md` pour le guide complet
- **Tests :** Consultez `EXEMPLES_TESTS.md` pour tous les cas de test
- **Étudiant :** Suivez `GUIDE_ETUDIANT.md` étape par étape

## Objectifs pédagogiques

À la fin de ce TP, l'étudiant sait :
1. **Créer une API REST** avec Next.js App Router
2. **Connecter une base de données** PostgreSQL avec Prisma
3. **Gérer les opérations CRUD** (Create, Read, Delete)
4. **Tester des services web** avec Postman
5. **Valider les données** et gérer les erreurs
6. **Déployer sur le cloud** (bonus avec Vercel)

**Durée estimée :** 3-4 heures pour un étudiant débutant
**Prérequis :** Bases de JavaScript/TypeScript et HTTP