# Laboratoire 2 - Services Web REST

Application Next.js avec 4 services web REST pour gérer des produits.

## Démarrage rapide

```bash
npm install
npx prisma generate
npx prisma db push
npm run dev
```

## Documentation complète

Consultez le dossier `documentation/` pour tous les guides (par ordre d'utilisation) :

- **[01-DEMARRAGE_RAPIDE.md](documentation/01-DEMARRAGE_RAPIDE.md)** - Installation en 5 minutes
- **[02-GUIDE_ETUDIANT.md](documentation/02-GUIDE_ETUDIANT.md)** - Guide pas-à-pas pour les étudiants  
- **[03-README.md](documentation/03-README.md)** - Documentation technique complète
- **[04-EXEMPLES_TESTS.md](documentation/04-EXEMPLES_TESTS.md)** - Exemples de tests Postman/curl
- **[05-EXPLICATION_CODE.md](documentation/05-EXPLICATION_CODE.md)** - Explication détaillée du code (collection)
- **[06-EXPLICATION_ROUTES_DYNAMIQUES.md](documentation/06-EXPLICATION_ROUTES_DYNAMIQUES.md)** - Routes dynamiques [id]
- **[07-LABORATOIRE_PROJET_LIBRE.md](documentation/07-LABORATOIRE_PROJET_LIBRE.md)** - Laboratoire 3 : Projet libre
- **[08-EXERCICES_SIMPLES.md](documentation/08-EXERCICES_SIMPLES.md)** - Exercices simples progressifs
- **[09-EXERCICE_SERVICES_AVANCES.md](documentation/09-EXERCICE_SERVICES_AVANCES.md)** - Exercices avancés
- **[10-MIGRATION_SCHEMA.md](documentation/10-MIGRATION_SCHEMA.md)** - Migration du schéma et adaptation

## Services disponibles

- `GET /api/products` - Lister tous les produits
- `POST /api/products` - Ajouter un nouveau produit
- `PUT /api/products/[id]` - Modifier un produit par ID
- `DELETE /api/products/[id]` - Supprimer un produit par ID

## Configuration requise

1. Compte [Neon.tech](https://neon.tech) (PostgreSQL gratuit)
2. Fichier `.env.local` avec `DATABASE_URL`
3. Node.js 18+

Voir `documentation/02-GUIDE_ETUDIANT.md` pour les instructions détaillées.