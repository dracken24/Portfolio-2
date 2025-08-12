# Laboratoire 2 - Projet Next.js avec Services Web REST

## Contexte pédagogique

Suite à la démonstration du système de gestion de produits, vous devez maintenant concevoir et développer votre propre application Next.js intégrant des services web REST et une interface utilisateur complète.

## Objectifs d'apprentissage

À la fin de ce laboratoire, vous serez capable de :

1. **Concevoir** une architecture REST cohérente pour un domaine métier
2. **Implémenter** au minimum 4 services web (CREATE, READ, UPDATE, DELETE)
3. **Développer** une interface utilisateur moderne et responsive
4. **Documenter** de manière professionnelle votre travail
5. **Tester** et valider le fonctionnement de vos services
6. **Expliquer** vos choix techniques et d'implémentation

## Spécifications techniques

### Contraintes obligatoires

1. **Framework :** Next.js 14 avec App Router
2. **Base de données :** PostgreSQL (Neon.tech ou autre)
3. **ORM :** Prisma
4. **Langage :** TypeScript
5. **Nombre minimum de services :** 4 endpoints REST
6. **Interface utilisateur :** Pages web fonctionnelles pour toutes les opérations

### Services REST requis

Votre application doit implémenter au minimum :

1. **CREATE** - Créer une nouvelle ressource (POST)
2. **READ** - Lire/Lister les ressources (GET)
3. **UPDATE** - Modifier une ressource existante (PUT)
4. **DELETE** - Supprimer une ressource (DELETE)

Ces services peuvent être complétés par des endpoints supplémentaires selon votre domaine métier.

## Suggestions de projets

### Niveau débutant

**Système de gestion de tâches**
- Entité : Task (id, title, description, completed, dueDate)
- Services : Créer tâche, lister tâches, marquer complétée, supprimer tâche
- Interface : Liste de tâches, formulaire d'ajout, cases à cocher

**Carnet d'adresses**
- Entité : Contact (id, name, email, phone, category)
- Services : Ajouter contact, rechercher contacts, modifier contact, supprimer contact
- Interface : Liste contacts, formulaire contact, recherche

**Bibliothèque personnelle**
- Entité : Book (id, title, author, genre, read)
- Services : Ajouter livre, lister livres, marquer lu, supprimer livre
- Interface : Catalogue, formulaire ajout, filtres par genre

### Niveau intermédiaire

**Système de gestion d'événements**
- Entité : Event (id, name, date, location, description, maxParticipants)
- Services : Créer événement, lister événements, modifier événement, annuler événement
- Interface : Calendrier, détails événement, inscription

**Gestionnaire de dépenses**
- Entité : Expense (id, amount, category, description, date)
- Services : Ajouter dépense, lister dépenses, modifier dépense, supprimer dépense
- Interface : Dashboard, graphiques, formulaires

**Portfolio de projets**
- Entité : Project (id, name, description, technologies, status, url)
- Services : Ajouter projet, lister projets, modifier projet, archiver projet
- Interface : Galerie projets, détails projet, administration

### Niveau avancé

**Système de réservation**
- Entités : Reservation, Resource, User
- Services complexes avec relations entre entités
- Interface : Calendrier de réservation, gestion des conflits

**Plateforme de reviews**
- Entités : Review, Product, User, Rating
- Services avec agrégations et calculs
- Interface : Système de notation, commentaires

**Gestionnaire d'inventaire**
- Entités : Item, Category, Location, Movement
- Services avec gestion de stock et historique
- Interface : Dashboard, alertes stock, rapports

## Livrables attendus

### 1. Code source complet

**Structure de projet requise :**
```
mon-projet/
├── app/
│   ├── api/
│   │   └── [votre-domaine]/
│   │       ├── route.ts
│   │       └── [id]/route.ts
│   ├── [votre-domaine]/
│   │   ├── page.tsx
│   │   ├── create/page.tsx
│   │   └── [id]/edit/page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── lib/
├── prisma/
├── tests/
└── documentation/
```

### 2. Documentation technique complète

**Fichier README.md principal :**
- Description du projet et du domaine métier choisi
- Instructions d'installation et de configuration
- Architecture technique et choix de conception
- Captures d'écran de l'interface utilisateur

**Documentation des services (fichier SERVICES.md) :**
- Description détaillée de chaque endpoint
- Exemples de requêtes et réponses
- Codes d'erreur et gestion des cas limites
- Collection Postman exportée

**Analyse du code (fichier CODE_ANALYSIS.md) :**
- Explication ligne par ligne des parties critiques
- Justification des choix d'implémentation
- Patterns utilisés et bonnes pratiques appliquées
- Optimisations possibles et améliorations futures

### 3. Tests et validation

**Tests automatisés :**
- Fichiers de test pour chaque service
- Scénarios de test positifs et négatifs
- Documentation des résultats de tests

**Tests manuels :**
- Collection Postman complète et fonctionnelle
- Tests d'interface utilisateur
- Validation des cas d'usage métier

### 4. Interface utilisateur

**Pages requises :**
- Page d'accueil avec vue d'ensemble
- Page de listing avec pagination/filtres
- Formulaire de création
- Formulaire de modification
- Confirmation de suppression

**Critères d'évaluation UI :**
- Design responsive et moderne
- Navigation intuitive
- Gestion des états de chargement
- Messages d'erreur et de succès
- Validation côté client

## Méthode de travail recommandée

### Phase 1 : Conception (1-2 jours)

1. **Choix du domaine métier**
   - Sélectionner un domaine qui vous intéresse
   - Définir clairement les entités et leurs propriétés
   - Esquisser les cas d'usage principaux

2. **Modélisation des données**
   - Créer le schéma Prisma
   - Définir les relations si applicable
   - Planifier la structure des APIs

3. **Conception de l'interface**
   - Créer des wireframes ou maquettes
   - Définir l'expérience utilisateur
   - Planifier la navigation

### Phase 2 : Implémentation backend (2-3 jours)

1. **Configuration du projet**
   - Initialiser Next.js avec TypeScript
   - Configurer Prisma et la base de données
   - Mettre en place la structure de dossiers

2. **Développement des services**
   - Implémenter les 4 services obligatoires
   - Ajouter la validation et la gestion d'erreurs
   - Tester chaque service avec Postman

3. **Documentation des APIs**
   - Documenter chaque endpoint
   - Créer les exemples de requêtes/réponses
   - Exporter la collection Postman

### Phase 3 : Implémentation frontend (2-3 jours)

1. **Composants de base**
   - Créer les composants réutilisables
   - Implémenter le layout principal
   - Configurer la navigation

2. **Pages principales**
   - Développer chaque page selon les spécifications
   - Intégrer les appels aux APIs
   - Gérer les états et les erreurs

3. **Polissage et tests**
   - Améliorer le design et l'UX
   - Tester tous les parcours utilisateur
   - Corriger les bugs identifiés

### Phase 4 : Documentation et finalisation (1 jour)

1. **Documentation complète**
   - Rédiger tous les fichiers de documentation
   - Créer les captures d'écran
   - Analyser et commenter le code

2. **Tests finaux**
   - Validation complète de l'application
   - Tests de performance basiques
   - Vérification de la documentation

## Critères d'évaluation

### Fonctionnalité (40%)

- **Services REST (20%)** : 4 services minimum, fonctionnels et robustes
- **Interface utilisateur (20%)** : Pages complètes et utilisables

### Qualité technique (30%)

- **Architecture et code (15%)** : Structure claire, bonnes pratiques
- **Gestion d'erreurs (10%)** : Validation, codes d'erreur appropriés
- **Sécurité et performance (5%)** : Optimisations de base

### Documentation (20%)

- **Clarté et complétude (15%)** : Documentation technique détaillée
- **Analyse du code (5%)** : Explications et justifications

### Innovation et présentation (10%)

- **Originalité du projet (5%)** : Créativité dans le choix du domaine
- **Qualité de présentation (5%)** : Interface soignée, démonstration

## Conseils pour réussir

### Choix du projet

1. **Commencez simple** : Préférez un domaine que vous maîtrisez
2. **Pensez utilisateur** : Choisissez quelque chose d'utile et concret
3. **Soyez réaliste** : Évaluez le temps disponible et vos compétences

### Développement

1. **Itérez rapidement** : Créez un MVP fonctionnel puis améliorez
2. **Testez fréquemment** : Validez chaque service avant de passer au suivant
3. **Documentez au fur et à mesure** : N'attendez pas la fin pour documenter

### Problèmes courants à éviter

1. **Projet trop ambitieux** : Respectez le scope minimum requis
2. **Interface négligée** : L'UI fait partie intégrante de l'évaluation
3. **Documentation insuffisante** : 20% de la note dépend de la documentation
4. **Tests incomplets** : Validez tous vos services avant la soumission

## Ressources et support

### Documentation officielle

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [React Documentation](https://react.dev)

### Outils recommandés

- **Base de données** : Neon.tech (gratuit)
- **Tests API** : Postman
- **Design** : Tailwind CSS (inclus dans Next.js)
- **Déploiement** : Vercel (optionnel)

### Support technique

- Sessions de questions-réponses programmées
- Forum de classe pour l'entraide
- Rendez-vous individuels sur demande

## Date limite et modalités de remise

**Date limite :** [À définir par l'enseignant]

**Modalités de remise :**
1. Repository GitHub public ou privé (avec accès enseignant)
2. Fichier README.md complet à la racine
3. Application déployée et accessible (optionnel mais valorisé)
4. Présentation orale de 10-15 minutes (selon modalités du cours)

**Éléments obligatoires dans le repository :**
- Code source complet et fonctionnel
- Documentation dans le dossier `/documentation/`
- Collection Postman exportée
- Captures d'écran de l'interface
- Instructions de déploiement

## Barème détaillé

| Critère | Points | Détail |
|---------|--------|--------|
| **Services REST** | **/20** | |
| - 4 services fonctionnels | 12 | 3 points par service (CREATE, READ, UPDATE, DELETE) |
| - Validation et gestion d'erreurs | 4 | Codes HTTP, messages d'erreur |
| - Robustesse et edge cases | 4 | Gestion des cas limites |
| **Interface utilisateur** | **/20** | |
| - Pages fonctionnelles | 10 | Toutes les opérations accessibles via UI |
| - Design et UX | 6 | Interface moderne et intuitive |
| - Responsive et accessibilité | 4 | Adaptation mobile, bonnes pratiques |
| **Qualité technique** | **/30** | |
| - Architecture et structure | 10 | Organisation du code, patterns |
| - Bonnes pratiques | 8 | Nommage, commentaires, réutilisabilité |
| - Performance et optimisation | 6 | Temps de réponse, requêtes optimisées |
| - Sécurité de base | 6 | Validation, sanitisation |
| **Documentation** | **/20** | |
| - Documentation technique | 12 | README, SERVICES.md, CODE_ANALYSIS.md |
| - Exemples et tutoriels | 4 | Collection Postman, captures d'écran |
| - Clarté et précision | 4 | Qualité rédactionnelle |
| **Innovation et présentation** | **/10** | |
| - Originalité du projet | 5 | Créativité, utilité du domaine choisi |
| - Qualité de présentation | 5 | Démonstration, supports visuels |
| **TOTAL** | **/100** | |

**Note de passage :** 60/100

## Grille d'évaluation détaillée

### Services REST (20 points)

#### CREATE - Service de création (5 points)
| Critère | Excellent (5) | Bien (4) | Satisfaisant (3) | Insuffisant (0-2) |
|---------|---------------|----------|------------------|-------------------|
| **Fonctionnalité** | Service entièrement fonctionnel, gère tous les cas | Service fonctionne avec cas standard | Service fonctionne partiellement | Service ne fonctionne pas ou erreurs |
| **Validation** | Validation complète des données (type, format, contraintes) | Validation de base présente | Validation minimale | Aucune validation |
| **Gestion erreurs** | Codes HTTP appropriés, messages clairs | Gestion d'erreurs présente | Gestion d'erreurs basique | Aucune gestion d'erreurs |
| **Code qualité** | Code propre, bien structuré, commenté | Code structuré et lisible | Code fonctionnel | Code difficile à comprendre |

#### READ - Service de lecture (5 points)
| Critère | Excellent (5) | Bien (4) | Satisfaisant (3) | Insuffisant (0-2) |
|---------|---------------|----------|------------------|-------------------|
| **Fonctionnalité** | Liste complète avec tri/pagination | Liste fonctionnelle | Liste basique | Service défaillant |
| **Performance** | Requêtes optimisées, pagination efficace | Requêtes correctes | Requêtes fonctionnelles | Requêtes lentes ou incorrectes |
| **Format réponse** | Structure JSON cohérente et complète | Structure JSON correcte | Structure JSON basique | Structure JSON incorrecte |

#### UPDATE - Service de modification (5 points)
| Critère | Excellent (5) | Bien (4) | Satisfaisant (3) | Insuffisant (0-2) |
|---------|---------------|----------|------------------|-------------------|
| **Fonctionnalité** | Modification complète avec validation d'existence | Modification fonctionnelle | Modification basique | Service défaillant |
| **Validation** | Validation complète des nouvelles données | Validation des données présente | Validation minimale | Aucune validation |
| **Cohérence** | Logique cohérente avec CREATE | Logique généralement cohérente | Logique partiellement cohérente | Logique incohérente |

#### DELETE - Service de suppression (5 points)
| Critère | Excellent (5) | Bien (4) | Satisfaisant (3) | Insuffisant (0-2) |
|---------|---------------|----------|------------------|-------------------|
| **Fonctionnalité** | Suppression sécurisée avec vérifications | Suppression fonctionnelle | Suppression basique | Service défaillant |
| **Sécurité** | Vérification d'existence, gestion des dépendances | Vérifications de base | Vérifications minimales | Aucune vérification |
| **Feedback** | Messages de confirmation clairs | Messages présents | Messages basiques | Aucun retour utilisateur |

### Interface Utilisateur (20 points)

#### Pages et Navigation (8 points)
| Critère | Excellent (4) | Bien (3) | Satisfaisant (2) | Insuffisant (0-1) |
|---------|---------------|----------|------------------|-------------------|
| **Complétude** | Toutes les pages requises présentes et fonctionnelles | Pages principales présentes | Quelques pages manquantes | Nombreuses pages manquantes |
| **Navigation** | Navigation intuitive et cohérente | Navigation claire | Navigation basique | Navigation confuse |

#### Design et UX (8 points)
| Critère | Excellent (4) | Bien (3) | Satisfaisant (2) | Insuffisant (0-1) |
|---------|---------------|----------|------------------|-------------------|
| **Apparence** | Design moderne, professionnel et attrayant | Design soigné et cohérent | Design acceptable | Design négligé |
| **Ergonomie** | Interface intuitive, expérience utilisateur optimale | Interface claire et utilisable | Interface fonctionnelle | Interface difficile à utiliser |

#### Responsive et Fonctionnalités (4 points)
| Critère | Excellent (2) | Bien/Satisfaisant (1) | Insuffisant (0) |
|---------|---------------|----------------------|-----------------|
| **Responsive** | Parfaite adaptation mobile et desktop | Adaptation correcte | Aucune adaptation mobile |
| **États UI** | Gestion loading, erreurs, succès, validations | Gestion partielle des états | Aucune gestion des états |

### Qualité Technique (30 points)

#### Architecture et Structure (10 points)
| Critère | Excellent (5) | Bien (4) | Satisfaisant (3) | Insuffisant (0-2) |
|---------|---------------|----------|------------------|-------------------|
| **Organisation** | Structure claire, séparation des responsabilités | Bonne organisation générale | Organisation acceptable | Organisation confuse |
| **Patterns** | Utilisation correcte des patterns Next.js/React | Patterns généralement corrects | Patterns basiques | Patterns incorrects |

#### Bonnes Pratiques (8 points)
| Critère | Excellent (4) | Bien (3) | Satisfaisant (2) | Insuffisant (0-1) |
|---------|---------------|----------|------------------|-------------------|
| **Code qualité** | Code propre, nommage cohérent, commentaires utiles | Code bien écrit | Code acceptable | Code difficile à maintenir |
| **TypeScript** | Utilisation optimale des types, interfaces | Bonne utilisation TypeScript | Utilisation basique | Types incorrects/manquants |

#### Performance et Sécurité (12 points)
| Critère | Excellent (4) | Bien (3) | Satisfaisant (2) | Insuffisant (0-1) |
|---------|---------------|----------|------------------|-------------------|
| **Performance** | Optimisations présentes, temps de réponse excellents | Bonnes performances | Performances acceptables | Performances médiocres |
| **Sécurité** | Validation rigoureuse, sanitisation, gestion erreurs | Sécurité de base présente | Sécurité minimale | Failles de sécurité |
| **Robustesse** | Gestion complète des cas limites et erreurs | Bonne robustesse | Robustesse basique | Application fragile |

### Documentation (20 points)

#### Documentation Technique (12 points)
| Critère | Excellent (4) | Bien (3) | Satisfaisant (2) | Insuffisant (0-1) |
|---------|---------------|----------|------------------|-------------------|
| **README.md** | Complet, clair, instructions détaillées | Bon README informatif | README basique | README insuffisant |
| **SERVICES.md** | Documentation complète des APIs avec exemples | Bonne documentation APIs | Documentation basique | Documentation manquante |
| **CODE_ANALYSIS.md** | Analyse approfondie et justifications | Bonne analyse du code | Analyse superficielle | Analyse manquante |

#### Exemples et Clarté (8 points)
| Critère | Excellent (4) | Bien (3) | Satisfaisant (2) | Insuffisant (0-1) |
|---------|---------------|----------|------------------|-------------------|
| **Collection Postman** | Collection complète, organisée, fonctionnelle | Collection correcte | Collection basique | Collection manquante |
| **Captures d'écran** | Images claires et représentatives | Bonnes captures | Captures basiques | Captures manquantes |

### Innovation et Présentation (10 points)

#### Originalité (5 points)
| Critère | Excellent (5) | Bien (4) | Satisfaisant (3) | Insuffisant (0-2) |
|---------|---------------|----------|------------------|-------------------|
| **Créativité** | Projet original, domaine métier innovant | Bon choix de projet | Projet standard | Projet sans originalité |
| **Valeur ajoutée** | Fonctionnalités supplémentaires pertinentes | Quelques fonctionnalités bonus | Fonctionnalités de base | Fonctionnalités insuffisantes |

#### Présentation (5 points)
| Critère | Excellent (5) | Bien (4) | Satisfaisant (3) | Insuffisant (0-2) |
|---------|---------------|----------|------------------|-------------------|
| **Démonstration** | Présentation claire, structurée et convaincante | Bonne présentation | Présentation acceptable | Présentation déficiente |
| **Support visuel** | Supports visuels excellents, démo fluide | Bons supports | Supports corrects | Supports insuffisants |

## Conseils pour maximiser votre note

### Pour obtenir 90-100 points (Excellent)
- Implémentez des fonctionnalités supplémentaires (recherche, filtres, pagination)
- Soignez particulièrement l'interface utilisateur et l'expérience utilisateur
- Documentez de manière exhaustive avec des exemples concrets
- Ajoutez des tests automatisés
- Démontrez une maîtrise avancée de Next.js et React

### Pour obtenir 75-89 points (Bien)
- Respectez scrupuleusement toutes les exigences minimales
- Assurez-vous que tous vos services fonctionnent parfaitement
- Créez une interface propre et fonctionnelle
- Documentez correctement votre travail
- Testez rigoureusement votre application

### Pour obtenir 60-74 points (Satisfaisant)
- Implémentez les 4 services obligatoires de manière fonctionnelle
- Créez les pages UI de base permettant d'utiliser tous les services
- Rédigez la documentation minimale requise
- Assurez-vous que l'application se lance et fonctionne

### Points de vigilance pour éviter l'échec
- **Testez régulièrement** : Un service qui ne fonctionne pas = 0 point pour ce service
- **Respectez les contraintes techniques** : Next.js, TypeScript, Prisma sont obligatoires
- **N'oubliez pas l'interface** : 20% de la note dépend de l'UI
- **Documentez au fur et à mesure** : La documentation représente 20% de la note
- **Préparez votre présentation** : 5% de la note finale

Bonne chance dans la réalisation de votre projet ! N'hésitez pas à faire preuve de créativité tout en respectant les exigences techniques.
