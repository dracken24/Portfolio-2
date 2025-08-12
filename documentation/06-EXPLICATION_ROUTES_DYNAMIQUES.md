# Explication détaillée - app/api/products/[id]/route.ts

## Vue d'ensemble des routes dynamiques

Ce fichier gère les opérations sur des produits **spécifiques** identifiés par leur ID, contrairement au fichier `app/api/products/route.ts` qui gère les opérations sur la **collection** de produits.

## Signification de [id] - Routes dynamiques Next.js

### Concept des routes dynamiques
```
app/api/products/[id]/route.ts
                 ^^^
                 |
                 Segment dynamique
```

- Les **crochets `[id]`** créent un segment de route dynamique
- Permet de capturer des valeurs variables dans l'URL
- `[id]` devient accessible via le paramètre `params.id`

### Exemples d'URLs capturées
```
/api/products/1       → params.id = "1"
/api/products/42      → params.id = "42" 
/api/products/999     → params.id = "999"
/api/products/abc     → params.id = "abc" (invalide mais capturé)
```

### Comparaison avec les routes statiques
```
app/api/products/route.ts        → /api/products (statique)
app/api/products/[id]/route.ts   → /api/products/123 (dynamique)
```

## Différences architecturales avec route.ts principal

### Fichier principal (/api/products/route.ts)
```typescript
// Opérations sur la COLLECTION
GET /api/products     → Lister TOUS les produits
POST /api/products    → Créer UN nouveau produit
```

### Fichier dynamique (/api/products/[id]/route.ts)
```typescript
// Opérations sur UN ÉLÉMENT spécifique
GET /api/products/[id]     → Obtenir UN produit par ID
PUT /api/products/[id]     → Modifier UN produit par ID  
DELETE /api/products/[id]  → Supprimer UN produit par ID
```

## Structure des paramètres

### Signature des fonctions
```typescript
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
```

**Décomposition :**
- `request` : Objet de requête HTTP standard
- `{ params }` : Destructuring de l'objet contexte
- `params: { id: string }` : Type TypeScript pour les paramètres de route
- `params.id` : Valeur capturée depuis l'URL (toujours de type string)

### Extraction de l'ID
```typescript
const id = parseInt(params.id)
```

**Pourquoi parseInt() ?**
- Les paramètres d'URL sont toujours des strings
- La base de données attend un number (entier)
- `parseInt()` convertit "123" → 123
- Retourne `NaN` si la conversion échoue

## Service DELETE - Suppression par ID

### Validation de l'ID
```typescript
if (isNaN(id) || id <= 0) {
  return NextResponse.json(
    {
      success: false,
      error: 'ID du produit invalide'
    },
    { status: 400 }
  )
}
```

**Vérifications :**
1. `isNaN(id)` : Vérifie si la conversion a échoué
2. `id <= 0` : IDs doivent être positifs (exclut 0 et négatifs)
3. **Status 400** : Bad Request - erreur côté client

### Vérification d'existence avant suppression
```typescript
const existingProduct = await prisma.product.findUnique({
  where: { id }
})

if (!existingProduct) {
  return NextResponse.json(
    {
      success: false,
      error: 'Produit non trouvé'
    },
    { status: 404 }
  )
}
```

**Pourquoi vérifier avant de supprimer ?**
- Évite les erreurs silencieuses
- Retourne un message d'erreur explicite
- **Status 404** : Not Found - ressource inexistante
- Permet d'inclure le nom du produit dans la réponse de succès

### Suppression effective
```typescript
await prisma.product.delete({
  where: { id }
})

return NextResponse.json({
  success: true,
  message: `Produit "${existingProduct.name}" supprimé avec succès`
})
```

**Points clés :**
- `prisma.product.delete()` : Méthode Prisma pour supprimer
- `where: { id }` : Condition de suppression (raccourci pour `where: { id: id }`)
- Message personnalisé avec le nom du produit supprimé
- Pas de `data` dans la réponse (ressource n'existe plus)

## Service PUT - Modification par ID

### Pattern de validation répétée
```typescript
// 1. Validation de l'ID (identique à DELETE)
const id = parseInt(params.id)
if (isNaN(id) || id <= 0) { ... }

// 2. Vérification d'existence (identique à DELETE)  
const existingProduct = await prisma.product.findUnique({ where: { id } })
if (!existingProduct) { ... }
```

**Factorisation possible :**
Ce code se répète dans PUT, DELETE et GET. Il pourrait être extrait dans une fonction utilitaire.

### Extraction et validation des données
```typescript
const body = await request.json()
const { name, price } = body

// Validation identique au POST principal
if (!name || typeof name !== 'string' || name.trim().length === 0) { ... }
if (!price || typeof price !== 'number' || price <= 0) { ... }
```

**Cohérence avec le POST :**
- Même logique de validation
- Mêmes messages d'erreur
- Comportement prévisible pour les clients

### Mise à jour en base
```typescript
const updatedProduct = await prisma.product.update({
  where: { id },
  data: {
    name: name.trim(),
    price: price
  }
})

return NextResponse.json({
  success: true,
  data: updatedProduct,
  message: 'Produit modifié avec succès'
})
```

**Différences avec create() :**
- `update()` au lieu de `create()`
- `where: { id }` : Spécifie quel enregistrement modifier
- `data` : Nouvelles valeurs à appliquer
- Retourne l'objet mis à jour avec `updatedAt` automatiquement mis à jour

## Service GET - Récupération par ID (bonus)

### Structure simplifiée
```typescript
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    // Validation ID
    if (isNaN(id) || id <= 0) { ... }
    
    // Récupération directe
    const product = await prisma.product.findUnique({
      where: { id }
    })
    
    // Vérification existence
    if (!product) { ... }
    
    return NextResponse.json({
      success: true,
      data: product,
      message: 'Produit trouvé'
    })
  } catch (error) { ... }
}
```

**Simplicité :**
- Pas de validation de données d'entrée (GET n'a pas de body)
- Une seule requête à la base de données
- Pattern identique aux autres services pour la cohérence

## Comparaison détaillée entre les deux fichiers

### /api/products/route.ts (Collection)
```typescript
// URL : /api/products
// Cible : Collection de produits

GET()                    // Récupérer TOUS les produits
POST(request)           // Créer UN nouveau produit

// Caractéristiques :
- Pas de paramètres d'URL
- GET utilise findMany()
- POST génère un nouvel ID
- Opérations sur l'ensemble
```

### /api/products/[id]/route.ts (Élément)
```typescript
// URL : /api/products/{id}
// Cible : UN produit spécifique

GET(request, {params})     // Récupérer UN produit
PUT(request, {params})     // Modifier UN produit  
DELETE(request, {params})  // Supprimer UN produit

// Caractéristiques :
- Paramètre {id} obligatoire
- Toutes utilisent findUnique()
- Validation d'ID requise
- Vérification d'existence
- Opérations sur un élément
```

### Architecture REST classique
```
Collection → /api/products
├── GET    → Lister tous
└── POST   → Créer nouveau

Élément → /api/products/{id}  
├── GET    → Obtenir un
├── PUT    → Modifier un
└── DELETE → Supprimer un
```

## Gestion d'erreurs comparée

### Routes de collection (sans ID)
```typescript
// Erreurs possibles :
- 400 : Données invalides (POST)
- 500 : Erreur serveur
```

### Routes d'élément (avec ID)
```typescript
// Erreurs supplémentaires :
- 400 : ID invalide (format)
- 404 : Ressource non trouvée
- 500 : Erreur serveur
```

## Patterns de développement observés

### 1. Cohérence des réponses
Tous les services suivent le même format :
```typescript
// Succès
{ success: true, data?: any, message: string }

// Erreur  
{ success: false, error: string }
```

### 2. Validation progressive
```
1. Validation syntaxique (types, format)
2. Validation logique (existence, contraintes)
3. Opération en base de données
4. Réponse structurée
```

### 3. Codes de statut HTTP appropriés
```
200 : GET réussi
201 : POST créé  
400 : Erreur client
404 : Non trouvé
500 : Erreur serveur
```

### 4. Réutilisation de patterns
Le code montre une structure répétitive qui pourrait bénéficier de :
- Middleware de validation d'ID
- Fonctions utilitaires partagées
- Validation centralisée avec des schémas

Cette architecture respecte les conventions REST et offre une API cohérente et prévisible pour les clients.