# Test de Protection des Routes Admin

## Instructions de test

### 1. Test d'accès direct sans authentification
1. Ouvrez un navigateur en mode privé/incognito
2. Essayez d'accéder directement à `http://localhost:3000/admin/dashboard`
3. **Résultat attendu** : Redirection automatique vers la page d'accueil

### 2. Test avec token invalide
1. Ouvrez les outils de développement (F12)
2. Allez dans l'onglet Application/Storage > Cookies
3. Ajoutez un cookie `adminToken` avec une valeur invalide
4. Essayez d'accéder à `http://localhost:3000/admin/dashboard`
5. **Résultat attendu** : Redirection vers la page d'accueil

### 3. Test de connexion normale
1. Allez sur la page d'accueil
2. Cliquez sur le bouton de connexion admin
3. Connectez-vous avec des identifiants valides
4. **Résultat attendu** : Redirection vers le dashboard admin

### 4. Test de déconnexion
1. Depuis le dashboard admin, cliquez sur le bouton de déconnexion
2. **Résultat attendu** : Redirection vers la page d'accueil et suppression du cookie

### 5. Test d'accès aux API protégées
1. Sans être connecté, essayez d'accéder à `http://localhost:3000/api/projects` avec POST
2. **Résultat attendu** : Erreur 401 "Non autorisé"

## Points de sécurité implémentés

✅ **Middleware Next.js** : Protection côté serveur des routes `/admin/*`
✅ **Cookies sécurisés** : Token stocké dans un cookie httpOnly
✅ **Vérification JWT** : Validation du token et du rôle admin
✅ **Protection des API** : Vérification d'authentification sur les routes POST/PUT/DELETE
✅ **Redirection automatique** : Redirection vers l'accueil si non authentifié
✅ **Nettoyage des sessions** : Suppression des cookies lors de la déconnexion

## Avantages de cette approche

1. **Sécurité renforcée** : Impossible de contourner la protection en manipulant le localStorage
2. **Protection côté serveur** : Le middleware vérifie l'authentification avant même que la page se charge
3. **Cookies sécurisés** : httpOnly empêche l'accès JavaScript malveillant
4. **Centralisation** : Toute la logique d'authentification est centralisée dans `lib/auth.ts`
5. **Maintenabilité** : Code plus propre et plus facile à maintenir
