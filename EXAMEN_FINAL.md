# Test de Protection des Routes Admin

## Instructions de test

### 1. Test d'accès direct sans authentification
1. Essayez d'accéder directement à `http://localhost:3000/admin/dashboard`
2. **Résultat attendu** : Redirection automatique vers la page d'accueil

![Test d'accès direct sans authentification](./public/imgs/Examen_Final/Screenshot%202025-09-20%101702.png)


### 2. Test de connexion normale
1. Allez sur la page d'accueil
2. Cliquez sur le bouton de connexion admin
3. Connectez-vous avec des identifiants valides
4. **Résultat attendu** : Redirection vers le dashboard admin

![Test de connexion normale 1](./public/imgs/Examen_Final/Screenshot%202025-09-20%101836.png)

![Test de connexion normale 1](./public/imgs/Examen_Final/Screenshot%202025-09-20%101927.png)



## Points de sécurité implémentés

**Middleware Next.js** : Protection côté serveur des routes `/admin/*`
**Cookies sécurisés** : Token stocké dans un cookie httpOnly
**Vérification JWT** : Validation du token et du rôle admin
**Redirection automatique** : Redirection vers l'accueil si non authentifié
