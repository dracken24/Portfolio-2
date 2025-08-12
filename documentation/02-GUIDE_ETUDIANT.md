# Guide étudiant - Étape par étape

## Objectif de ce laboratoire

Vous allez apprendre à créer **4 services web REST** qui permettent de :

1. **Ajouter** un produit dans une base de données
2. **Lister** tous les produits  
3. **Modifier** un produit par son ID
4. **Supprimer** un produit par son ID

**Temps estimé :** 3-4 heures

## Ce que vous allez apprendre

- Créer une API REST avec Next.js
- Connecter une application à une base de données PostgreSQL
- Utiliser Prisma comme ORM (Object-Relational Mapping)
- Tester des services web avec Postman
- Gérer les erreurs et valider les données

## Liste de vérification avant de commencer

- [ ] Node.js 18+ installé ([télécharger ici](https://nodejs.org/))
- [ ] VS Code installé ([télécharger ici](https://code.visualstudio.com/))
- [ ] Postman installé ([télécharger ici](https://www.postman.com/))
- [ ] Compte GitHub créé
- [ ] Compte Neon.tech créé (gratuit)

## Étape 1 : Récupérer le projet

### Option A : Cloner le repository (recommandé)

```bash
git clone [URL_DU_REPO]
cd laboratoire2
```

### Option B : Télécharger le ZIP

1. Téléchargez le ZIP du repository
2. Décompressez dans un dossier de votre choix
3. Ouvrez le terminal dans ce dossier

### Installer les dépendances

```bash
npm install
```

**Résultat attendu :** Les packages sont installés sans erreur.

## Étape 2 : Configurer la base de données

### 2.1 Créer votre base de données Neon.tech

1. Allez sur [https://neon.tech](https://neon.tech)
2. Créez un compte gratuit
3. Cliquez sur "Create a project"
4. Donnez un nom à votre projet (ex: "laboratoire2")
5. **IMPORTANT :** Copiez l'URL de connexion qui ressemble à :

   ```
   postgresql://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname?sslmode=require
   ```

### 2.2 Configurer les variables d'environnement

1. Dans VS Code, créez un fichier `.env.local` à la racine du projet
2. Ajoutez votre URL de connexion :

```bash
# .env.local
DATABASE_URL="votre_url_neon_ici"
```

**Exemple :**

```bash
DATABASE_URL="postgresql://alex:AbC123dEf@ep-cool-darkness-123456.us-east-2.aws.neon.tech/dbname?sslmode=require"
```

### 2.3 Synchroniser le schéma avec la base

```bash
npx prisma generate
npx prisma db push
```

**Résultat attendu :**

```
✓ Generated Prisma Client
✓ Schema successfully applied
```

## Étape 3 : Démarrer l'application

```bash
npm run dev
```

**Résultat attendu :**

- Terminal affiche : `Ready - started server on 0.0.0.0:3000`
- Ouvrez <http://localhost:3000>
- Vous voyez la page d'accueil du laboratoire

## Étape 4 : Tester vos services web

### 4.1 Ouvrir Postman

1. Lancez Postman
2. Créez une nouvelle collection "Laboratoire 2"
3. Créez 3 requests dans cette collection

### 4.2 Test 1 : GET - Lister les produits

**Configuration :**

- **Méthode :** GET
- **URL :** `http://localhost:3000/api/projects`
- Cliquez sur "Send"

**Résultat attendu :**

```json
{
  "success": true,
  "data": [],
  "message": "0 produit(s) trouvé(s)"
}
```

### 4.3 Test 2 : POST - Ajouter un produit

**Configuration :**

- **Méthode :** POST
- **URL :** `http://localhost:3000/api/products`
- **Headers :** Ajoutez `Content-Type: application/json`
- **Body :** Sélectionnez "raw" et "JSON", puis ajoutez :

```json
{
  "name": "iPhone 15",
  "price": 999.99
}
```

- Cliquez sur "Send"

**Résultat attendu :**

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

### 4.4 Test 3 : Vérifier que le produit est listé

Refaites le Test 1 (GET). Vous devriez maintenant voir votre produit.

### 4.5 Test 4 : PUT - Modifier un produit

**Configuration :**

- **Méthode :** PUT
- **URL :** `http://localhost:3000/api/products/1` (remplacez 1 par l'ID de votre produit)
- **Headers :** Ajoutez `Content-Type: application/json`
- **Body :** Sélectionnez "raw" et "JSON", puis ajoutez :

```json
{
  "name": "iPhone 15 Pro",
  "price": 1199.99
}
```

- Cliquez sur "Send"

**Résultat attendu :**

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

### 4.6 Test 5 : DELETE - Supprimer un produit

**Configuration :**

- **Méthode :** DELETE
- **URL :** `http://localhost:3000/api/products/1` (remplacez 1 par l'ID de votre produit)
- Cliquez sur "Send"

**Résultat attendu :**

```json
{
  "success": true,
  "message": "Produit \"iPhone 15 Pro\" supprimé avec succès"
}
```

## Étape 5 : Comprendre le code

### 5.1 Structure des fichiers

Ouvrez ces fichiers dans VS Code pour comprendre leur rôle :

```
app/
├── api/
│   └── products/
│       ├── route.ts           ← GET et POST
│       └── [id]/
│           └── route.ts       ← PUT, DELETE, GET par ID
├── layout.tsx                 ← Layout principal
└── page.tsx                   ← Page d'accueil

lib/
└── prisma.ts                  ← Configuration base de données

prisma/
└── schema.prisma              ← Modèle des données
```

### 5.2 Analyser app/api/products/route.ts

Ce fichier contient 2 fonctions :

**GET function :**

```typescript
export async function GET() {
  // Récupère tous les produits depuis la base
  const products = await prisma.product.findMany()
  // Retourne la liste en JSON
}
```

**POST function :**

```typescript
export async function POST(request: NextRequest) {
  // Récupère les données du body
  const { name, price } = await request.json()
  // Valide les données
  // Crée le produit en base
  // Retourne le produit créé
}
```

### 5.3 Analyser app/api/products/[id]/route.ts

**PUT function :**

```typescript
export async function PUT(request, { params }) {
  // Récupère l'ID depuis l'URL
  const id = parseInt(params.id)
  // Vérifie que le produit existe
  // Récupère et valide les nouvelles données
  // Met à jour le produit
  // Retourne le produit modifié
}
```

**DELETE function :**

```typescript
export async function DELETE(request, { params }) {
  // Récupère l'ID depuis l'URL
  const id = parseInt(params.id)
  // Vérifie que le produit existe
  // Supprime le produit
  // Retourne confirmation
}
```

## Étape 6 : Expliquer votre travail

Préparez-vous à expliquer :

### 6.1 Comment fonctionne chaque service ?

**GET /api/products :**
> "Ce service récupère tous les produits de la base de données PostgreSQL en utilisant Prisma avec `findMany()`, les trie par date de création décroissante, et retourne une réponse JSON avec la liste et le nombre de produits trouvés."

**POST /api/products :**
> "Ce service reçoit un objet JSON avec `name` et `price`, valide que le nom n'est pas vide et que le prix est positif, crée un nouveau produit en base avec `prisma.product.create()`, et retourne le produit créé avec son ID généré automatiquement."

**PUT /api/products/[id] :**
> "Ce service extrait l'ID depuis l'URL, vérifie que le produit existe avec `findUnique()`, récupère et valide les nouvelles données (nom et prix), met à jour le produit avec `prisma.product.update()`, et retourne le produit modifié avec sa nouvelle date de mise à jour."

**DELETE /api/products/[id] :**
> "Ce service extrait l'ID depuis l'URL, vérifie qu'il s'agit d'un nombre valide, cherche le produit avec `findUnique()`, le supprime avec `delete()` s'il existe, et retourne une confirmation de suppression."

### 6.2 Comment avez-vous configuré la base de données ?

> "J'ai créé un compte Neon.tech gratuit, généré une base PostgreSQL, copié l'URL de connexion dans `.env.local`, défini le modèle Product dans `schema.prisma` avec ID, nom, prix et timestamps, puis synchronisé avec `prisma db push`."

### 6.3 Comment gérez-vous les erreurs ?

> "Chaque endpoint est dans un bloc try-catch, valide les données d'entrée (nom requis, prix positif, ID numérique), vérifie l'existence des ressources avant suppression, et retourne des codes HTTP appropriés (400 pour données invalides, 404 pour ressource non trouvée, 500 pour erreur serveur)."

## Étape 7 : Livrable final

### 7.1 Tests complets

Assurez-vous que tous ces tests passent :

- [ ] GET retourne une liste vide au début
- [ ] POST ajoute un produit et retourne ses données
- [ ] GET retourne le produit ajouté
- [ ] PUT modifie le produit et retourne ses nouvelles données
- [ ] DELETE supprime le produit
- [ ] GET retourne une liste vide après suppression
- [ ] POST avec nom vide retourne une erreur 400
- [ ] POST avec prix négatif retourne une erreur 400
- [ ] PUT avec ID inexistant retourne une erreur 404
- [ ] DELETE avec ID inexistant retourne une erreur 404

### 7.2 Capture d'écran

Prenez une capture montrant :

1. Postman avec vos 4 requests configurées
2. Un résultat de GET avec plusieurs produits
3. Un résultat de POST réussi
4. Un résultat de PUT réussi
5. Un résultat de DELETE réussi

### 7.3 Repository GitHub

1. Créez un repository GitHub
2. Commitez tout votre code
3. Ajoutez votre capture d'écran
4. Vérifiez que le fichier `env.example` est présent
5. Soumettez le lien

### 7.4 README personnalisé

Ajoutez une section à la fin du README :

```markdown
## Mon travail

**Réalisé par :** [Votre nom]
**Date :** [Date de soumission]

### Captures d'écran
[Ajoutez vos captures ici]

### Ce que j'ai appris
- [Listez 3-5 choses que vous avez apprises]

### Difficultés rencontrées
- [Décrivez les problèmes et comment vous les avez résolus]
```

## Critères d'évaluation rappel

- **25%** - Service GET fonctionne correctement
- **25%** - Service POST fonctionne correctement
- **25%** - Service PUT fonctionne correctement
- **25%** - Service DELETE fonctionne correctement

## Aide en cas de problème

### Erreur de connexion à la base

1. Vérifiez votre URL dans `.env.local`
2. Testez la connexion sur Neon.tech
3. Régénérez l'URL si nécessaire

### Erreur "Prisma Client not found"

```bash
npx prisma generate
```

### Port 3000 déjà utilisé

```bash
npm run dev -- -p 3001
```

Puis utilisez `http://localhost:3001` dans vos tests.

### Services ne répondent pas

1. Vérifiez que le serveur est démarré (`npm run dev`)
2. Vérifiez l'URL dans Postman
3. Vérifiez la console pour les erreurs

**Bon courage !**
