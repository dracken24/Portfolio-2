# Laboratoire 2 - Services Web REST

****Portfolio Web - Next.js avec Material-UI****

Portfolio web moderne développé avec Next.js 14, Material-UI, TypeScript et Prisma.

- Nadia DESJARDINS
- Jean-François LEFEBVRE,
- Natacha MEYER

[Lien sur Vercel](https://portfolio-2-khaki-chi.vercel.app/)

## Description du projet et du domaine métier choisi

On a décidé de faire un portfolio de projets. Ceci étant dit, ce n'est pas un portfolio officiel. C'était développé avec l'intention de créer un bon portfolio qui peut être utilisé comme un modèle de base.

**Repositories:**
[dracken24/Portfolio-2](https://github.com/dracken24/Portfolio-2)

## Instructions d'installation et de configuration

### Prérequis

- **Node.js** 18+ ([Télécharger](https://nodejs.org/))
- **Git** ([Télécharger](https://git-scm.com/))
- **Compte Neon.tech** pour la base de données PostgreSQL

Une fois vous avez clone le projet, veuillez creez une base de donnees dans votre compte Neon.tech et copier la string de connection.
Une string similaire a ceci:
`postgresql://neondb_owner:***************@ep-rapid-sky-ad5triop-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`

Dans la root du projet, veuillez creer une fichier `.env` et le remplir comme ceci-ci:

```
# ===== BASE DE DONNÉES NEON/POSTGRESQL =====
DATABASE_URL = "[votre string ici]"
```

Une fois faite, vous pouvez le lancer:

```bash
# Installation
npm install
npx prisma generate
npx prisma db push

# Lancer l'application
npm run dev
```

L'application sera disponible sur `http://localhost:3000`

Pour pouvez faire des tests avec l'aide du fichier `api.http` dans `./tests/`

## Architecture technique

```
PORTFOLIO/
├── app/
│   ├── a_propos
│   │   └── page.tsx
│   ├── admin/dashboard/
│   │   └── page.tsx
│   ├── api/
│   │   ├── auth/login
│   │   │  └── route.ts
│   │   └── projects/
│   │       ├── route.ts
│   │       └── [id]
│   │           └── route.ts
│   │
│   ├── components/
│   ├── contact
│   │   └── page.tsx
│   ├── contexts
│   ├── projets
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── lib/
├── prisma/
├── public/imgs/links
├── scripts/
└── tests/
```

## Captures d'écran de l'interface utilisateur

### Page d'accueil

![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/accueil.png)
Darkmode included!
![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/darkmode.png)

Et grâce au Navbar, on peut naviguer d'une page à l'autre avec ces sélections :
![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/navigation.png)

### Prokets

![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/projets.png)

### A Propos

![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/propos.png)

### Contact

![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/contact.png)

### Admin

Seulement accessible aux admins
![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/admin_connect.png)
Les admins peuvent ajouter , supprimer et modifier les projets ici.
![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/admin_page.png)
Ajouter un projet
![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/admin_add.png)
Si on laisse une section nécessaire vide, un pop-up va l'informer.
![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/admin_missing.png)
On peut modifier un projet en cliquant sur le bouton avec le crayon.
![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/admin_edit.png)

On peut supprimer un projet en cliquant sur le bouton avec la poubelle. Un pop-up pour confirmer va apparaître.
![picture](https://github.com/Ijipop/portfolio/blob/Ji/public/imgs/readme/admin_delete.png)

Pour plus informations:

- Documentation des services ([fichier SERVICES.md](https://github.com/Ijipop/portfolio/blob/a32ed38faf62ae525a3cd6de8027445a5aa76a77/SERVICES.md))
- Analyse du code ([fichier CODE_ANALYSIS.md](https://github.com/Ijipop/portfolio/blob/7534eb129791fc8de2c82600f6670bcb9f783ad9/CODE_ANALYSIS.md))
