# Exercice - Migration du schéma et adaptation des services

## Objectif

Modifier le schéma Prisma existant en ajoutant de nouveaux champs, effectuer la migration de la base de données, puis adapter tous les services web existants pour prendre en compte ces nouveaux champs.

## Contexte

Votre application de gestion de produits évolue. Les utilisateurs ont besoin de fonctionnalités supplémentaires qui nécessitent d'enrichir le modèle Product avec de nouveaux champs.

## Nouveau schéma Prisma requis

Remplacez votre schéma Product actuel par cette version enrichie :

```prisma
model Product {
  id          Int      @id @default(autoincrement())
  name        String
  description String?
  price       Float
  category    String
  stock       Int      @default(0)
  isActive    Boolean  @default(true)
  sku         String   @unique
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("products")
}
```

## Nouveaux champs ajoutés

| Champ | Type | Contraintes | Description |
|-------|------|-------------|-------------|
| `description` | String? | Optionnel | Description détaillée du produit |
| `category` | String | Obligatoire | Catégorie du produit (ex: "Electronics", "Clothing") |
| `stock` | Int | Par défaut 0 | Quantité disponible en stock |
| `isActive` | Boolean | Par défaut true | Produit actif/inactif dans le catalogue |
| `sku` | String | Unique, obligatoire | Code produit unique (Stock Keeping Unit) |

## Étapes à réaliser

### 1. Migration de la base de données

Vous devez :
- Modifier le fichier `prisma/schema.prisma`
- Générer et appliquer la migration
- Gérer les données existantes

### 2. Adaptation des services existants

Vous devez adapter TOUS les services déjà développés pour prendre en compte les nouveaux champs.

## Services à modifier

| Service existant | Endpoint | Modifications requises |
|------------------|----------|------------------------|
| **Lister tous les produits** | `GET /api/products` | Inclure tous les nouveaux champs dans la réponse |
| **Créer un produit** | `POST /api/products` | Valider et traiter les nouveaux champs obligatoires |
| **Obtenir un produit** | `GET /api/products/[id]` | Inclure tous les nouveaux champs dans la réponse |
| **Modifier un produit** | `PUT /api/products/[id]` | Permettre la modification de tous les champs |
| **Supprimer un produit** | `DELETE /api/products/[id]` | Aucune modification nécessaire |
| **Compter les produits** | `GET /api/products/count` | Option : compter seulement les produits actifs |
| **Produit le plus cher** | `GET /api/products/most-expensive` | Inclure nouveaux champs + filtrer par produits actifs |
| **Produit le moins cher** | `GET /api/products/cheapest` | Inclure nouveaux champs + filtrer par produits actifs |
| **Supprimer tous** | `DELETE /api/products/all` | Aucune modification nécessaire |
| **Recherche par nom** | `GET /api/products/search/[name]` | Inclure nouveaux champs dans la réponse |
| **Modifier prix** | `PATCH /api/products/[id]/price` | Aucune modification nécessaire |
| **Tri chronologique** | `GET /api/products/oldest-first` | Inclure nouveaux champs dans la réponse |
| **Vérification existence** | `HEAD /api/products/[id]` | Aucune modification nécessaire |

## Nouveaux services à créer (bonus)

| Nouveau service | Endpoint | Description |
|-----------------|----------|-------------|
| **Filtrer par catégorie** | `GET /api/products/category/[category]` | Lister produits d'une catégorie |
| **Produits en stock** | `GET /api/products/in-stock` | Lister produits avec stock > 0 |
| **Produits actifs** | `GET /api/products/active` | Lister produits avec isActive = true |
| **Mettre à jour stock** | `PATCH /api/products/[id]/stock` | Modifier la quantité en stock |
| **Désactiver produit** | `PATCH /api/products/[id]/deactivate` | Mettre isActive à false |
| **Recherche par SKU** | `GET /api/products/sku/[sku]` | Trouver un produit par son SKU |

## Défis à résoudre

### 1. Migration des données existantes

**Problème :** Les produits existants n'ont pas les nouveaux champs obligatoires.

**Questions :**
- Comment définir des valeurs par défaut pour `category` et `sku` ?
- Comment générer des SKU uniques pour les produits existants ?
- Faut-il supprimer les données existantes ou les migrer ?

### 2. Validation du nouveau modèle

**Nouveaux contrôles requis :**
- SKU doit être unique
- Catégorie ne doit pas être vide
- Stock doit être un nombre positif ou zéro
- Description peut être vide mais si fournie, doit avoir une longueur minimum

### 3. Gestion de la compatibilité

**Questions :**
- Les anciens clients de l'API vont-ils casser ?
- Comment gérer les requêtes qui n'envoient pas les nouveaux champs ?
- Faut-il créer des valeurs par défaut intelligentes ?

### 4. Performance

**Considérations :**
- Impact des nouveaux champs sur les requêtes existantes
- Index nécessaires pour les nouvelles recherches
- Taille des réponses JSON

## Format de données attendu

### Nouveau format pour POST /api/products

```json
{
  "name": "iPhone 15 Pro",
  "description": "Smartphone haut de gamme avec puce A17 Pro",
  "price": 1199.99,
  "category": "Electronics",
  "stock": 50,
  "isActive": true,
  "sku": "IPH15P-128-TBL"
}
```

### Nouveau format de réponse

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "iPhone 15 Pro",
    "description": "Smartphone haut de gamme avec puce A17 Pro",
    "price": 1199.99,
    "category": "Electronics",
    "stock": 50,
    "isActive": true,
    "sku": "IPH15P-128-TBL",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Produit créé avec succès"
}
```

## Commandes de migration

Vous devrez utiliser ces commandes dans l'ordre :

```bash
# 1. Modifier le schema.prisma avec le nouveau modèle

# 2. Créer la migration
npx prisma migrate dev --name add-product-fields

# 3. Générer le client Prisma mis à jour
npx prisma generate

# 4. Vérifier la migration avec Prisma Studio
npx prisma studio
```

## Stratégies de migration recommandées

### Option 1 : Migration avec valeurs par défaut
- Ajouter des valeurs par défaut pour tous les nouveaux champs
- Générer des SKU automatiquement
- Assigner une catégorie par défaut

### Option 2 : Migration avec reset
- Sauvegarder les données importantes
- Réinitialiser la base avec le nouveau schéma
- Recréer des données de test

### Option 3 : Migration manuelle
- Ajouter les champs un par un
- Créer plusieurs migrations séquentielles
- Tester à chaque étape

## Critères d'évaluation

### Migration (30%)
- Migration réussie sans perte de données
- Nouveau schéma correctement appliqué
- Base de données cohérente

### Adaptation des services (50%)
- Tous les services existants fonctionnent avec le nouveau schéma
- Validation correcte des nouveaux champs
- Gestion d'erreurs maintenue

### Nouveaux services (20%)
- Au moins 3 nouveaux services implémentés
- Utilisation pertinente des nouveaux champs
- Documentation mise à jour

## Livrables

1. **Schéma Prisma** modifié et migration appliquée
2. **Services adaptés** - tous les services existants fonctionnels
3. **Nouveaux services** - au moins 3 services bonus
4. **Collection Postman** mise à jour avec nouveaux formats
5. **Documentation** des changements et stratégie de migration

## Timeline suggérée

**Jour 1 :** Migration du schéma et adaptation des services principaux (GET, POST, PUT, DELETE)
**Jour 2 :** Adaptation des services simples créés précédemment
**Jour 3 :** Création des nouveaux services bonus et tests complets

## Points d'attention

### Erreurs courantes à éviter
- Oublier de générer le client Prisma après migration
- Ne pas gérer les champs optionnels dans les validations
- Ignorer l'unicité du SKU dans les tests
- Ne pas mettre à jour la collection Postman

### Conseils de débogage
- Utilisez `npx prisma studio` pour vérifier la structure de la base
- Testez chaque service après modification
- Vérifiez les logs d'erreur Prisma
- Validez les contraintes d'unicité

Cet exercice vous apprendra à gérer l'évolution d'un schéma de données en production et l'impact sur une API existante. C'est une compétence essentielle pour maintenir des applications en évolution constante.