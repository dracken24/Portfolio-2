# Commandes laboratoire 2

## Installation

```bash
git clone [URL_REPO]
cd laboratoire2
npm install
```

## Configuration base de données

```bash
# 1. Créer compte sur neon.tech
# 2. Créer fichier .env.local avec DATABASE_URL
# 3. Synchroniser schéma
npx prisma generate
npx prisma db push
```

## Démarrage

```bash
npm run dev
```

## Test avec curl

```bash
# Ajouter un produit
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "iPhone 15", "price": 999.99}'

# Lister tous les produits
curl http://localhost:3000/api/products

# Modifier un produit
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "iPhone 15 Pro", "price": 1199.99}'

# Supprimer un produit
curl -X DELETE http://localhost:3000/api/products/1
```

## Test avec fichier .http

```bash
# Installer extension REST Client dans VS Code
# Ouvrir tests/api.http
# Cliquer sur "Send Request" au-dessus de chaque requête
```

## Test avec Collection Postman

```bash
# 1. Ouvrir Postman
# 2. Importer la collection : File > Import > tests/Laboratoire2-Collection.postman_collection.json
# 3. Importer l'environnement : File > Import > tests/Laboratoire2-Environment.postman_environment.json
# 4. Sélectionner l'environnement "Laboratoire 2 - Environment"
# 5. Exécuter les requêtes individuellement ou lancer toute la collection
```

## Prisma utilitaires

```bash
# Regénérer le client Prisma
npx prisma generate

# Synchroniser schéma avec base
npx prisma db push

# Réinitialiser la base
npx prisma db push --force-reset

# Interface graphique base
npx prisma studio
```

## Dépannage

```bash
# Port 3000 occupé
npm run dev -- -p 3001

# Tuer processus Node.js (Windows)
taskkill /f /im node.exe

# Nettoyer cache npm
npm cache clean --force

# Réinstaller dépendances
rm -rf node_modules package-lock.json
npm install
```

## Structure projet

```
laboratoire2/
├── app/api/products/route.ts     # GET + POST
├── app/api/products/[id]/route.ts # DELETE
├── lib/prisma.ts                 # Config Prisma
├── prisma/schema.prisma          # Modèle données
├── tests/api.http                # Tests HTTP
└── .env.local                    # Variables env
```

## Endpoints disponibles

```
GET    /api/products      # Lister produits
POST   /api/products      # Ajouter produit
PUT    /api/products/[id] # Modifier produit
DELETE /api/products/[id] # Supprimer produit
GET    /api/products/[id] # Obtenir produit (bonus)
```

## Format données

```json
// POST/PUT body
{
  "name": "string",
  "price": number
}

// Réponse succès
{
  "success": true,
  "data": {...},
  "message": "string"
}

// Réponse erreur
{
  "success": false,
  "error": "string"
}
```

## Variables environnement

```bash
# .env.local
DATABASE_URL="postgresql://user:pass@host.neon.tech/db?sslmode=require"
```

## Validation données

```
name: string non vide requis
price: number positif requis
id: integer positif pour DELETE
```

## Codes erreur HTTP

```
200: Succès
201: Créé
400: Données invalides
404: Ressource non trouvée
500: Erreur serveur
```