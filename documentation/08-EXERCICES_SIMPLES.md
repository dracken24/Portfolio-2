# Exercices simples - Consolidation des acquis

## Objectif

Consolider vos connaissances des services web REST en créant des services supplémentaires simples sur le modèle Product existant. Ces exercices vous permettront de pratiquer les concepts de base sans complexité technique.

## Contexte

Vous disposez déjà de 4 services fonctionnels :
- GET /api/products (lister tous)
- POST /api/products (créer)
- PUT /api/products/[id] (modifier)
- DELETE /api/products/[id] (supprimer)

Vous allez maintenant ajouter des services complémentaires simples.

## Exercice 1 : Compter les produits

### Objectif
Créer un service qui retourne simplement le nombre total de produits en base.

### Spécifications
- **Endpoint :** GET /api/products/count
- **Réponse :** Nombre total de produits
- **Format de réponse :**
```json
{
  "success": true,
  "data": {
    "total": 15
  },
  "message": "15 produit(s) en base"
}
```

### Questions à résoudre
- Quelle méthode Prisma utiliser pour compter ?
- Comment gérer le cas où il n'y a aucun produit ?

### Test à créer
Testez avec Postman que le service retourne le bon nombre après avoir ajouté et supprimé des produits.

## Exercice 2 : Produit le plus cher

### Objectif
Créer un service qui retourne le produit ayant le prix le plus élevé.

### Spécifications
- **Endpoint :** GET /api/products/most-expensive
- **Réponse :** Le produit le plus cher
- **Format de réponse :**
```json
{
  "success": true,
  "data": {
    "id": 5,
    "name": "MacBook Pro",
    "price": 2499.99,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Produit le plus cher trouvé"
}
```

### Questions à résoudre
- Comment trier par prix décroissant ?
- Que faire si la base est vide ?
- Comment prendre seulement le premier résultat ?

### Test à créer
Vérifiez que le service retourne bien le produit avec le prix maximum.

## Exercice 3 : Produit le moins cher

### Objectif
Créer un service qui retourne le produit ayant le prix le plus bas.

### Spécifications
- **Endpoint :** GET /api/products/cheapest
- **Réponse :** Le produit le moins cher
- **Gestion d'erreur :** Si aucun produit, retourner une erreur 404

### Questions à résoudre
- Comment trier par prix croissant ?
- Même structure de réponse que l'exercice précédent ?

## Exercice 4 : Supprimer tous les produits

### Objectif
Créer un service pour vider complètement la base de données des produits.

### Spécifications
- **Endpoint :** DELETE /api/products/all
- **Réponse :** Nombre de produits supprimés
- **Format de réponse :**
```json
{
  "success": true,
  "data": {
    "deleted": 8
  },
  "message": "8 produit(s) supprimé(s)"
}
```

### Questions à résoudre
- Quelle méthode Prisma pour supprimer tous les enregistrements ?
- Comment compter les éléments supprimés ?
- Faut-il une confirmation avant suppression ?

### Sécurité
Attention : ce service est dangereux en production ! Comment pourriez-vous le sécuriser ?

## Exercice 5 : Recherche par nom exact

### Objectif
Créer un service pour chercher un produit par son nom exact.

### Spécifications
- **Endpoint :** GET /api/products/search/[name]
- **Paramètre :** Le nom exact du produit dans l'URL
- **Réponse :** Le produit trouvé ou erreur 404

### Questions à résoudre
- Comment faire une recherche exacte avec Prisma ?
- La recherche doit-elle être sensible à la casse ?
- Que faire si plusieurs produits ont le même nom ?

### Exemple d'URL
GET /api/products/search/iPhone%2015 (pour "iPhone 15")

## Exercice 6 : Modifier seulement le prix

### Objectif
Créer un service spécialisé pour modifier uniquement le prix d'un produit.

### Spécifications
- **Endpoint :** PATCH /api/products/[id]/price
- **Body :** Nouveau prix seulement
- **Format du body :**
```json
{
  "price": 1599.99
}
```

### Questions à résoudre
- Différence entre PUT et PATCH ?
- Comment ne modifier qu'un seul champ avec Prisma ?
- Faut-il valider que le produit existe d'abord ?

## Exercice 7 : Lister par ordre de création

### Objectif
Créer un service qui liste les produits dans l'ordre de création (du plus ancien au plus récent).

### Spécifications
- **Endpoint :** GET /api/products/oldest-first
- **Réponse :** Liste triée par createdAt croissant

### Questions à résoudre
- Comment inverser l'ordre de tri par rapport au service principal ?
- Faut-il dupliquer la logique ou créer une fonction commune ?

## Exercice 8 : Vérifier si un produit existe

### Objectif
Créer un service qui vérifie simplement si un produit existe sans retourner ses données.

### Spécifications
- **Endpoint :** HEAD /api/products/[id]
- **Réponse :** Seulement le code de statut (200 si existe, 404 sinon)
- **Pas de body dans la réponse**

### Questions à résoudre
- Comment utiliser la méthode HTTP HEAD ?
- Comment retourner seulement un statut sans données ?

## Conseils pour réussir

### Méthodologie
1. Lisez entièrement l'exercice avant de commencer
2. Regardez comment les services existants sont structurés
3. Copiez la structure d'un service similaire
4. Modifiez seulement la logique métier
5. Testez avec Postman après chaque exercice

### Structure de fichier recommandée
Créez vos nouveaux services dans de nouveaux fichiers :
- `app/api/products/count/route.ts`
- `app/api/products/most-expensive/route.ts`
- `app/api/products/cheapest/route.ts`
- etc.

### Format de réponse cohérent
Gardez toujours la même structure :
```json
{
  "success": true/false,
  "data": {...},
  "message": "..."
}
```

### Gestion d'erreurs
N'oubliez pas le bloc try-catch dans chaque service :
```typescript
try {
  // Votre logique ici
} catch (error) {
  console.error('Erreur:', error)
  return NextResponse.json(
    { success: false, error: "Message d'erreur" },
    { status: 500 }
  )
}
```

## Tests recommandés

Pour chaque exercice, testez au minimum :
1. Le cas de fonctionnement normal
2. Le cas où aucun produit n'existe
3. Les cas d'erreur (ID invalide, etc.)

## Livrables

1. Code source de tous les nouveaux services
2. Collection Postman mise à jour
3. Test de chaque service avec capture d'écran
4. Explication de 2-3 lignes par service sur votre choix d'implémentation

## Progression suggérée

**Jour 1 :** Exercices 1-3 (services de lecture simple)
**Jour 2 :** Exercices 4-6 (services de modification)  
**Jour 3 :** Exercices 7-8 (services spécialisés) + tests et documentation

## Aide

Si vous êtes bloqué :
1. Regardez comment le service GET principal fonctionne
2. Consultez la documentation Prisma pour les méthodes de requête
3. Vérifiez les exemples dans les services existants
4. Testez étape par étape avec des console.log()

Ces exercices simples vous préparent aux défis plus complexes. L'objectif est de vous faire manipuler différents types de requêtes Prisma et de patterns d'API REST sans difficulté technique majeure.