# Exercice - Services Web Avancés

## Contexte

Maintenant que vous maîtrisez les opérations CRUD de base (CREATE, READ, UPDATE, DELETE) sur les produits, il est temps d'approfondir vos compétences en créant des services web plus sophistiqués et utiles dans un contexte professionnel.

## Objectif

Développer des services web REST avancés en vous basant sur le modèle Product existant, sans modifier le schéma Prisma actuel. Ces services doivent répondre à des besoins métier réels et démontrer votre capacité à concevoir des APIs complètes.

## Contraintes techniques

- Utiliser le schéma Prisma existant (model Product) sans modification
- Respecter les conventions REST et les codes de statut HTTP
- Maintenir la cohérence avec les services existants (format de réponse, gestion d'erreurs)
- Documenter chaque nouveau service
- Créer les tests correspondants

## Services à implémenter

### 1. Service d'insertion en lot

**Problématique métier :** Les gestionnaires d'inventaire ont besoin d'importer plusieurs produits simultanément depuis un fichier CSV ou lors d'une synchronisation avec un système tiers.

**Spécifications :**
- Endpoint : `POST /api/products/bulk`
- Accepter un tableau de produits en JSON
- Valider chaque produit individuellement
- Gérer les cas où certains produits échouent et d'autres réussissent
- Retourner un rapport détaillé des succès et échecs

**Questions à résoudre :**
- Comment gérer les erreurs partielles ?
- Faut-il utiliser une transaction pour garantir la cohérence ?
- Quel format de réponse pour un rapport de traitement en lot ?
- Comment limiter le nombre de produits par lot pour éviter les timeouts ?

### 2. Service de recherche et filtrage

**Problématique métier :** Les utilisateurs doivent pouvoir rechercher des produits par nom et filtrer par gamme de prix pour naviguer efficacement dans un large catalogue.

**Spécifications :**
- Endpoint : `GET /api/products/search`
- Paramètres de requête : `q` (recherche), `minPrice`, `maxPrice`, `limit`, `offset`
- Recherche insensible à la casse dans le nom
- Filtrage par gamme de prix
- Pagination des résultats
- Tri par pertinence puis par prix

**Questions à résoudre :**
- Comment implémenter une recherche textuelle efficace ?
- Comment combiner plusieurs critères de filtrage ?
- Quelle stratégie de pagination adopter ?
- Comment gérer les cas où aucun résultat n'est trouvé ?

### 3. Service de statistiques

**Problématique métier :** Les responsables commerciaux ont besoin d'indicateurs sur le catalogue pour prendre des décisions stratégiques.

**Spécifications :**
- Endpoint : `GET /api/products/stats`
- Retourner : nombre total, prix moyen, prix min/max, produit le plus cher, produit le moins cher
- Inclure des statistiques par gamme de prix (économique, moyen, premium)
- Format de réponse structuré et facile à utiliser

**Questions à résoudre :**
- Comment définir les gammes de prix automatiquement ?
- Que faire si la base est vide ?
- Comment optimiser les requêtes pour calculer ces statistiques ?
- Faut-il mettre en cache ces données ?

### 4. Service de gestion de stock (simulation)

**Problématique métier :** Simuler un système de gestion de stock en utilisant uniquement le champ `price` existant pour représenter la quantité disponible.

**Spécifications :**
- Endpoint : `PATCH /api/products/{id}/stock`
- Actions : `increase`, `decrease`, `set`
- Paramètre : `quantity` (nombre à ajouter/retirer/définir)
- Empêcher les quantités négatives
- Historique des mouvements dans les logs

**Questions à résoudre :**
- Comment valider que la quantité reste positive ?
- Comment différencier cette opération d'une modification de prix ?
- Quel format pour les logs de mouvement ?
- Comment gérer les accès concurrents ?

### 5. Service d'export de données

**Problématique métier :** Les utilisateurs doivent pouvoir exporter la liste des produits dans différents formats pour l'analyse ou l'archivage.

**Spécifications :**
- Endpoint : `GET /api/products/export`
- Paramètre : `format` (json, csv, xml)
- Filtrage optionnel par critères
- Headers appropriés pour le téléchargement
- Noms de fichiers avec timestamp

**Questions à résoudre :**
- Comment structurer les données pour chaque format ?
- Comment gérer les gros volumes de données ?
- Quels headers HTTP pour forcer le téléchargement ?
- Comment optimiser les performances pour les exports volumineux ?

## Défis bonus (optionnels)

### 6. Service de validation avancée

**Objectif :** Créer un endpoint de validation qui vérifie la cohérence des données sans les sauvegarder.

**Spécifications :**
- Endpoint : `POST /api/products/validate`
- Valider format, contraintes métier, doublons potentiels
- Retourner des suggestions d'amélioration
- Mode "strict" vs "permissif"

### 7. Service de recommandations

**Objectif :** Proposer des produits similaires basés sur le prix ou le nom.

**Spécifications :**
- Endpoint : `GET /api/products/{id}/similar`
- Algorithme simple basé sur la proximité de prix
- Limite configurable de résultats
- Exclusion du produit de référence

### 8. Service de maintenance

**Objectif :** Outils d'administration pour nettoyer et optimiser les données.

**Spécifications :**
- Endpoint : `POST /api/products/maintenance`
- Actions : `cleanup-duplicates`, `normalize-names`, `update-prices`
- Mode preview pour voir les changements avant application
- Rapport détaillé des modifications

## Critères d'évaluation

### Fonctionnalité (40%)
- Services implémentés correctement
- Gestion appropriée des cas d'erreur
- Respect des spécifications métier

### Qualité technique (30%)
- Code propre et maintenant
- Performance et optimisation
- Gestion des cas limites

### Documentation (20%)
- Documentation des APIs
- Exemples d'utilisation
- Tests Postman/curl

### Innovation (10%)
- Créativité dans l'implémentation
- Fonctionnalités supplémentaires pertinentes
- Solutions élégantes aux problèmes posés

## Livrables attendus

1. **Code source** des nouveaux services dans le projet existant
2. **Documentation** détaillée de chaque service (format, paramètres, réponses)
3. **Collection Postman** mise à jour avec les nouveaux endpoints
4. **Tests** automatisés ou manuels pour chaque service
5. **Rapport technique** expliquant vos choix d'implémentation

## Conseils méthodologiques

### Approche recommandée

1. **Analysez** chaque service individuellement
2. **Concevez** l'API avant d'implémenter
3. **Commencez** par les services les plus simples
4. **Testez** chaque service avant de passer au suivant
5. **Documentez** au fur et à mesure

### Questions à se poser

- Quels sont les cas d'usage réels de ce service ?
- Comment gérer les erreurs spécifiques à ce contexte ?
- Quelles validations métier sont nécessaires ?
- Comment optimiser les performances ?
- Quelle expérience utilisateur offrir ?

### Pièges à éviter

- Ne pas modifier le schéma Prisma existant
- Oublier la cohérence avec les services existants
- Négliger la gestion d'erreurs
- Implémenter sans concevoir l'API d'abord
- Ignorer les aspects de performance

## Ressources utiles

### Documentation technique
- [Prisma Query Reference](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### Patterns REST
- Opérations en lot : POST sur collection avec suffixe
- Recherche : GET avec paramètres de requête
- Actions spécifiques : PATCH avec body d'action
- Export : GET avec paramètre de format

### Optimisation
- Utilisation d'index pour les recherches
- Pagination pour les gros volumes
- Validation côté serveur obligatoire
- Cache pour les statistiques si nécessaire

## Timeline suggérée

- **Jour 1-2** : Conception des APIs et documentation
- **Jour 3-4** : Implémentation des services 1-3
- **Jour 5-6** : Implémentation des services 4-5 et tests
- **Jour 7** : Défis bonus et finalisation

## Format de remise

Repository GitHub avec :
- Code source intégré au projet existant
- Documentation dans `/documentation/SERVICES_AVANCES.md`
- Collection Postman mise à jour
- Fichier de test ou script de démonstration
- README mis à jour avec les nouveaux services

**Date limite :** [À définir par l'enseignant]

**Modalités :** Présentation de 15 minutes par équipe démontrant les services développés et expliquant les choix techniques.

Cet exercice vous permettra de démontrer votre capacité à concevoir et implémenter des services web professionnels répondant à des besoins métier réels. Bonne chance !