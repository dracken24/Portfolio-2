# Documentation des Services API

## Vue d'ensemble

Voici la documentation qui decrit tous les endpoints API disponibles dans l'application Portfolio. L'API utilise Next.js 14 avec Prisma pour la gestion de la base de données PostgreSQL.

**Base URL :** `http://localhost:3000/api`

---

## 🔐 Authentification

### POST /api/auth/login

**Description :** Authentifie un utilisateur administrateur et retourne un token JWT.

**Méthode :** `POST`

**URL :** `/api/auth/login`

**Body :**
```json
{
  "email": "admin@example.com",
  "password": "motdepasse123"
}
```

**Réponse de succès (200) :**
```json
{
  "message": "Connexion réussie",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@example.com",
    "name": "Administrateur",
    "role": "admin"
  }
}
```

**Réponse d'erreur (400) :**
```json
{
  "message": "Email et mot de passe requis"
}
```

**Réponse d'erreur (401) :**
```json
{
  "message": "Email ou mot de passe incorrect"
}
```

**Réponse d'erreur (500) :**
```json
{
  "message": "Erreur interne du serveur"
}
```

**Codes d'erreur :**
- `400` : Données manquantes ou invalides
- `401` : Identifiants incorrects
- `500` : Erreur serveur interne

---

## 📁 Projets

### GET /api/projects

**Description :** Récupère tous les projets de la base de données.

**Méthode :** `GET`

**URL :** `/api/projects`

**Réponse de succès (200) :**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Portfolio Personnel",
      "description": "Un portfolio moderne développé avec Next.js et Material-UI",
      "technologies": "Next.js, React, TypeScript, Material-UI",
      "status": "Terminé",
      "url": "https://github.com/user/portfolio",
      "imageUrl": "/imgs/links/portfolio.png",
      "createdAt": "2024-01-15T10:30:00.000Z",
      "updatedAt": "2024-01-15T10:30:00.000Z"
    }
  ],
  "message": "1 project(s) trouvé(s)"
}
```

**Réponse d'erreur (500) :**
```json
{
  "success": false,
  "error": "Erreur lors de la récupération des projects"
}
```

**Codes d'erreur :**
- `500` : Erreur serveur interne

---

### POST /api/projects

**Description :** Crée un nouveau projet dans la base de données.

**Méthode :** `POST`

**URL :** `/api/projects`

**Body :**
```json
{
  "name": "Nouveau Projet",
  "description": "Description détaillée du projet",
  "technologies": "React, Node.js, PostgreSQL",
  "status": "En cours",
  "url": "https://github.com/user/project",
  "imageUrl": "/imgs/links/project.png"
}
```

**Champs requis :**
- `name` : Nom du projet
- `description` : Description du projet
- `technologies` : Technologies utilisées
- `status` : Statut du projet

**Champs optionnels :**
- `url` : URL du projet
- `imageUrl` : URL de l'image du projet

**Réponse de succès (201) :**
```json
{
  "success": true,
  "data": {
    "id": 2,
    "name": "Nouveau Projet",
    "description": "Description détaillée du projet",
    "technologies": "React, Node.js, PostgreSQL",
    "status": "En cours",
    "url": "https://github.com/user/project",
    "imageUrl": "/imgs/links/project.png",
    "createdAt": "2024-01-15T11:00:00.000Z",
    "updatedAt": "2024-01-15T11:00:00.000Z"
  },
  "message": "Project créé avec succès"
}
```

**Réponse d'erreur (400) :**
```json
{
  "success": false,
  "error": "Le nom du project est requis et doit être une chaîne non vide"
}
```

**Réponse d'erreur (500) :**
```json
{
  "success": false,
  "error": "Erreur lors de la création du project"
}
```

**Codes d'erreur :**
- `400` : Données manquantes ou invalides
- `500` : Erreur serveur interne

---

### GET /api/projects/[id]

**Description :** Récupère un projet spécifique par son ID.

**Méthode :** `GET`

**URL :** `/api/projects/{id}`

**Paramètres :**
- `id` : ID du projet (integer, positif)

**Réponse de succès (200) :**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Portfolio Personnel",
    "description": "Un portfolio moderne développé avec Next.js et Material-UI",
    "technologies": "Next.js, React, TypeScript, Material-UI",
    "status": "Terminé",
    "url": "https://github.com/user/portfolio",
    "imageUrl": "/imgs/links/portfolio.png",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  },
  "message": "Project trouvé"
}
```

**Réponse d'erreur (400) :**
```json
{
  "success": false,
  "error": "ID du project invalide"
}
```

**Réponse d'erreur (404) :**
```json
{
  "success": false,
  "error": "Project non trouvé"
}
```

**Réponse d'erreur (500) :**
```json
{
  "success": false,
  "error": "Erreur lors de la récupération du project"
}
```

**Codes d'erreur :**
- `400` : ID invalide
- `404` : Projet non trouvé
- `500` : Erreur serveur interne

---

### PUT /api/projects/[id]

**Description :** Met à jour un projet existant.

**Méthode :** `PUT`

**URL :** `/api/projects/{id}`

**Paramètres :**
- `id` : ID du projet (integer, positif)

**Body :**
```json
{
  "name": "Projet Modifié",
  "description": "Description mise à jour du projet",
  "technologies": "React, Node.js, PostgreSQL, Docker",
  "status": "Terminé",
  "url": "https://github.com/user/project-updated",
  "imageUrl": "/imgs/links/project-updated.png"
}
```

**Champs requis :**
- `name` : Nom du projet (string, non vide)
- `description` : Description du projet (string, non vide)
- `technologies` : Technologies utilisées (string, non vide)
- `status` : Statut du projet (string, non vide)

**Champs optionnels :**
- `url` : URL du projet
- `imageUrl` : URL de l'image du projet

**Réponse de succès (200) :**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Projet Modifié",
    "description": "Description mise à jour du projet",
    "technologies": "React, Node.js, PostgreSQL, Docker",
    "status": "Terminé",
    "url": "https://github.com/user/project-updated",
    "imageUrl": "/imgs/links/project-updated.png",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T11:30:00.000Z"
  },
  "message": "Project modifié avec succès"
}
```

**Réponse d'erreur (400) :**
```json
{
  "success": false,
  "error": "ID du project invalide"
}
```

**Réponse d'erreur (404) :**
```json
{
  "success": false,
  "error": "Project non trouvé"
}
```

**Réponse d'erreur (500) :**
```json
{
  "success": false,
  "error": "Erreur lors de la modification du project"
}
```

**Codes d'erreur :**
- `400` : ID invalide ou données manquantes
- `404` : Projet non trouvé
- `500` : Erreur serveur interne

---

### DELETE /api/projects/[id]

**Description :** Supprime un projet de la base de données.

**Méthode :** `DELETE`

**URL :** `/api/projects/{id}`

**Paramètres :**
- `id` : ID du projet

**Réponse de succès (200) :**
```json
{
  "success": true,
  "message": "Project \"Portfolio Personnel\" supprimé avec succès"
}
```

**Réponse d'erreur (400) :**
```json
{
  "success": false,
  "error": "ID du project invalide"
}
```

**Réponse d'erreur (404) :**
```json
{
  "success": false,
  "error": "Project non trouvé"
}
```

**Réponse d'erreur (500) :**
```json
{
  "success": false,
  "error": "Erreur lors de la suppression du project"
}
```

**Codes d'erreur :**
- `400` : ID invalide
- `404` : Projet non trouvé
- `500` : Erreur serveur interne

---

## 🔧 Gestion des Erreurs

### Codes de statut HTTP

| Code | Description | Utilisation |
|------|-------------|-------------|
| 200 | OK | Requête réussie |
| 201 | Created | Ressource créée avec succès |
| 400 | Bad Request | Données invalides ou manquantes |
| 401 | Unauthorized | Authentification requise ou échouée |
| 404 | Not Found | Ressource non trouvée |
| 500 | Internal Server Error | Erreur serveur interne |

### Format des réponses d'erreur

Toutes les réponses d'erreur suivent ce format :

```json
{
  "success": false,
  "error": "Message d'erreur descriptif"
}
```

---

## 🚀 Utilisation

### 1. Authentification

```bash
# Login pour obtenir un token
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@portfolio.com",
    "password": "admin123"
  }'
```

### 2. Utilisation du token

```bash
# Récupérer tous les projets
curl -X GET http://localhost:3000/api/projects \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### 3. Créer un projet

```bash
# Créer un nouveau projet
curl -X POST http://localhost:3000/api/projects \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "name": "Mon Projet",
    "description": "Description du projet",
    "technologies": "React, Node.js",
    "status": "En cours"
  }'
```
