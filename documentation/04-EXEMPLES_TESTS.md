# Exemples de tests pour les services web

## Tests avec Postman

### Collection Postman complète

Importez cette collection dans Postman pour tester rapidement tous les endpoints :

```json
{
  "info": {
    "name": "Laboratoire 2 - Services Produits",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "GET - Obtenir tous les produits",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/api/products",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "products"]
        }
      }
    },
    {
      "name": "POST - Ajouter un produit",
      "request": {
        "method": "POST",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"name\": \"iPhone 15 Pro\",\n  \"price\": 1199.99\n}"
        },
        "url": {
          "raw": "http://localhost:3000/api/products",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "products"]
        }
      }
    },
    {
      "name": "DELETE - Supprimer un produit",
      "request": {
        "method": "DELETE",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/api/products/1",
          "protocol": "http",
          "host": ["localhost"],
          "port": "3000",
          "path": ["api", "products", "1"]
        }
      }
    }
  ]
}
```

## Scénario de test complet

### 1. Tester que la liste est vide au début

**Requête :**
```
GET http://localhost:3000/api/products
```

**Résultat attendu :**
```json
{
  "success": true,
  "data": [],
  "message": "0 produit(s) trouvé(s)"
}
```

### 2. Ajouter le premier produit

**Requête :**
```
POST http://localhost:3000/api/products
Content-Type: application/json

{
  "name": "MacBook Air M2",
  "price": 1299.99
}
```

**Résultat attendu :**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "MacBook Air M2",
    "price": 1299.99,
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Produit créé avec succès"
}
```

### 3. Ajouter plusieurs autres produits

```json
// Produit 2
{
  "name": "iPad Pro 12.9",
  "price": 899.99
}

// Produit 3
{
  "name": "AirPods Pro",
  "price": 279.99
}

// Produit 4
{
  "name": "Apple Watch Series 9",
  "price": 429.99
}
```

### 4. Vérifier que tous les produits sont listés

**Requête :**
```
GET http://localhost:3000/api/products
```

**Résultat attendu :**
```json
{
  "success": true,
  "data": [
    {
      "id": 4,
      "name": "Apple Watch Series 9",
      "price": 429.99,
      "createdAt": "2024-01-15T10:35:00.000Z",
      "updatedAt": "2024-01-15T10:35:00.000Z"
    },
    {
      "id": 3,
      "name": "AirPods Pro",
      "price": 279.99,
      "createdAt": "2024-01-15T10:34:00.000Z",
      "updatedAt": "2024-01-15T10:34:00.000Z"
    },
    {
      "id": 2,
      "name": "iPad Pro 12.9",
      "price": 899.99,
      "createdAt": "2024-01-15T10:33:00.000Z",
      "updatedAt": "2024-01-15T10:33:00.000Z"
    },
    {
      "id": 1,
      "name": "MacBook Air M2",
      "price": 1299.99,
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "message": "4 produit(s) trouvé(s)"
}
```

### 5. Supprimer un produit

**Requête :**
```
DELETE http://localhost:3000/api/products/2
```

**Résultat attendu :**
```json
{
  "success": true,
  "message": "Produit \"iPad Pro 12.9\" supprimé avec succès"
}
```

### 6. Vérifier que le produit a été supprimé

**Requête :**
```
GET http://localhost:3000/api/products
```

**Résultat attendu :** La liste ne doit plus contenir le produit avec l'ID 2.

## Tests d'erreurs à vérifier

### 1. POST avec données invalides

**Requête (nom manquant) :**
```json
{
  "price": 999.99
}
```

**Résultat attendu :**
```json
{
  "success": false,
  "error": "Le nom du produit est requis et doit être une chaîne non vide"
}
```

**Requête (prix invalide) :**
```json
{
  "name": "Produit test",
  "price": -50
}
```

**Résultat attendu :**
```json
{
  "success": false,
  "error": "Le prix doit être un nombre positif"
}
```

### 2. DELETE avec ID invalide

**Requête :**
```
DELETE http://localhost:3000/api/products/999
```

**Résultat attendu :**
```json
{
  "success": false,
  "error": "Produit non trouvé"
}
```

**Requête (ID non numérique) :**
```
DELETE http://localhost:3000/api/products/abc
```

**Résultat attendu :**
```json
{
  "success": false,
  "error": "ID du produit invalide"
}
```

## Tests avec curl (Terminal)

### Script de test complet

Créez un fichier `test.sh` (Linux/Mac) ou `test.bat` (Windows) :

```bash
#!/bin/bash
echo "=== Test des services web ==="

echo "1. Liste initiale (vide):"
curl -s http://localhost:3000/api/products | json_pp

echo -e "\n2. Ajout produit 1:"
curl -s -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "MacBook Air", "price": 1299.99}' | json_pp

echo -e "\n3. Ajout produit 2:"
curl -s -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "iPad Pro", "price": 899.99}' | json_pp

echo -e "\n4. Liste après ajouts:"
curl -s http://localhost:3000/api/products | json_pp

echo -e "\n5. Suppression du produit 1:"
curl -s -X DELETE http://localhost:3000/api/products/1 | json_pp

echo -e "\n6. Liste finale:"
curl -s http://localhost:3000/api/products | json_pp
```

### Commandes curl individuelles

```bash
# Test 1: Obtenir tous les produits
curl -X GET http://localhost:3000/api/products

# Test 2: Ajouter un produit
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name": "iPhone 15", "price": 999.99}'

# Test 3: Supprimer un produit
curl -X DELETE http://localhost:3000/api/products/1

# Test 4: Erreur - ID invalide
curl -X DELETE http://localhost:3000/api/products/abc

# Test 5: Erreur - données invalides
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -d '{"price": 999.99}'
```

## Capture d'écran recommandée

Pour votre livrable, prenez des captures d'écran montrant :

1. **Postman/Thunder Client** avec les 3 requests configurées
2. **Résultat de GET** avec plusieurs produits
3. **Résultat de POST** montrant la création réussie
4. **Résultat de DELETE** montrant la suppression
5. **Page web** sur http://localhost:3000 qui fonctionne

## Checklist finale

- [ ] Les 3 endpoints répondent correctement
- [ ] Les erreurs sont gérées (400, 404, 500)
- [ ] Les données sont persistées en base
- [ ] Le format JSON est cohérent
- [ ] Les messages sont en français
- [ ] La validation fonctionne (nom requis, prix positif)
- [ ] Le tri par date est respecté (plus récent en premier)

**Excellent travail !**