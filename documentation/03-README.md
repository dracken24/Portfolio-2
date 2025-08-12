# Laboratoire 2 – Créer 3 services web REST avec Next.js, Prisma et Neon.tech

## Objectif

Créer une application Next.js avec 4 services web REST pour gérer des produits :
1. **GET /api/products** - Obtenir la liste des produits
2. **POST /api/products** - Ajouter un nouveau produit  
3. **PUT /api/products/[id]** - Modifier un produit par ID
4. **DELETE /api/products/[id]** - Supprimer un produit par ID

## Technologies utilisées

- **Next.js 14** (App Router)
- **TypeScript**
- **Prisma** (ORM)
- **PostgreSQL** (Neon.tech)

## Prérequis

- Node.js 18+ installé
- Compte gratuit sur [Neon.tech](https://neon.tech)
- VS Code recommandé

## Installation et configuration

### Étape 1 : Cloner et installer

```bash
git clone [votre-repo]
cd laboratoire2
npm install
```

### Étape 2 : Configurer la base de données

1. Créez un compte sur [Neon.tech](https://neon.tech)
2. Créez une nouvelle base de données PostgreSQL
3. Copiez l'URL de connexion fournie par Neon
4. Créez un fichier `.env.local` à la racine du projet :

```bash
# .env.local
DATABASE_URL="postgresql://username:password@hostname:5432/database?sslmode=require"
```

**Exemple d'URL Neon.tech :**
```
DATABASE_URL="postgresql://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname?sslmode=require"
```

### Étape 3 : Installer Prisma et générer la base

```bash
npm install prisma @prisma/client
npx prisma generate
npx prisma db push
```

### Étape 4 : Démarrer l'application

```bash
npm run dev
```

Ouvrez http://localhost:3000 dans votre navigateur.

## Tester les services web

### 1. GET /api/products - Obtenir tous les produits

**Postman/Thunder Client :**
- **Méthode :** GET
- **URL :** `http://localhost:3000/api/products`

**Réponse exemple :**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "iPhone 15",
      "price": 999.99,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "message": "1 produit(s) trouvé(s)"
}
```

### 2. POST /api/products - Ajouter un produit

**Postman/Thunder Client :**
- **Méthode :** POST
- **URL :** `http://localhost:3000/api/products`
- **Headers :** `Content-Type: application/json`
- **Body (JSON) :**

```json
{
  "name": "iPhone 15",
  "price": 999.99
}
```

**Réponse exemple :**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "iPhone 15",
    "price": 999.99,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Produit créé avec succès"
}
```

### 3. PUT /api/products/[id] - Modifier un produit

**Postman/Thunder Client :**
- **Méthode :** PUT
- **URL :** `http://localhost:3000/api/products/1` (remplacez 1 par l'ID du produit)
- **Headers :** `Content-Type: application/json`
- **Body (JSON) :**

```json
{
  "name": "iPhone 15 Pro",
  "price": 1199.99
}
```

**Réponse exemple :**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "iPhone 15 Pro",
    "price": 1199.99,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T11:45:00.000Z"
  },
  "message": "Produit modifié avec succès"
}
```

### 4. DELETE /api/products/[id] - Supprimer un produit

**Postman/Thunder Client :**
- **Méthode :** DELETE
- **URL :** `http://localhost:3000/api/products/1` (remplacez 1 par l'ID du produit)

**Réponse exemple :**
```json
{
  "success": true,
  "message": "Produit \"iPhone 15 Pro\" supprimé avec succès"
}
```

## Test avec curl (terminal)

```bash
# 1. Ajouter un produit
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "MacBook Pro", "price": 2499.99}'

# 2. Obtenir tous les produits
curl http://localhost:3000/api/products

# 3. Modifier un produit (ID 1)
curl -X PUT http://localhost:3000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"name": "MacBook Pro M3", "price": 2699.99}'

# 4. Supprimer un produit (ID 1)
curl -X DELETE http://localhost:3000/api/products/1
```

## Structure du projet

```
laboratoire2/
├── app/
│   ├── api/
│   │   └── products/
│   │       ├── route.ts          # GET et POST /api/products
│   │       └── [id]/
│   │           └── route.ts      # PUT, DELETE, GET /api/products/[id]
│   ├── layout.tsx                # Layout principal
│   └── page.tsx                  # Page d'accueil
├── lib/
│   └── prisma.ts                 # Configuration Prisma
├── prisma/
│   └── schema.prisma             # Schéma de base de données
├── package.json
├── .env.local                    # Variables d'environnement (à créer)
└── README.md
```

## Schéma de base de données

```prisma
model Product {
  id        Int      @id @default(autoincrement())
  name      String
  price     Float
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("products")
}
```

## Gestion des erreurs

Tous les endpoints gèrent les erreurs et retournent des réponses JSON cohérentes :

```json
{
  "success": false,
  "error": "Message d'erreur descriptif"
}
```

**Codes d'erreur :**
- `400` : Données invalides
- `404` : Ressource non trouvée
- `500` : Erreur serveur

## Dépannage

### Erreur de connexion à la base de données
- Vérifiez votre URL de connexion dans `.env.local`
- Assurez-vous que Neon.tech est accessible

### Erreur "Prisma Client not found"
```bash
npx prisma generate
```

### Erreur de migration
```bash
npx prisma db push --force-reset
```

## Critères d'évaluation

- ✅ GET /api/products fonctionne (25%)
- ✅ POST /api/products fonctionne (25%)
- ✅ PUT /api/products/[id] fonctionne (25%)
- ✅ DELETE /api/products/[id] fonctionne (25%)

## Ressources utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Prisma](https://www.prisma.io/docs)
- [Documentation Neon.tech](https://neon.tech/docs)

## Une fois terminé

1. Testez tous vos endpoints avec Postman
2. Commitez votre code sur GitHub
3. Ajoutez une capture d'écran de vos tests
4. Soumettez le lien de votre repository

**Bon travail !**