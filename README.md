# 🏠 FindMyRoof

FindMyRoof est une application web inspirée du principe de **matching**,
permettant aux locataires de découvrir des logements et d'entrer en
contact avec des propriétaires ou des agences immobilières.

Le projet a été réalisé dans le cadre d'un **projet de fin d'année en
développement web full‑stack**.

------------------------------------------------------------------------

# 📌 Objectifs du projet

Le projet vise à :

-   Simplifier la recherche de logement
-   Faciliter la mise en relation locataire / propriétaire
-   Offrir une interface moderne et intuitive
-   Mettre en pratique une architecture full‑stack moderne

Fonctionnalités principales :

-   création de compte utilisateur
-   consultation des logements
-   expression d'intérêt pour un logement
-   prise de contact avec propriétaire ou agence
-   organisation de visites

------------------------------------------------------------------------

# 👥 Types d'utilisateurs

### 👤 User (Locataire)

Peut : - créer un compte - consulter les logements - montrer son intérêt
pour un logement - contacter un propriétaire - organiser une visite

### 🏠 Owner (Propriétaire)

Peut : - créer et gérer ses logements - consulter les locataires
intéressés - discuter avec eux - proposer une date de visite

### 🏢 Agency (Agence immobilière)

Peut : - gérer plusieurs biens - répondre aux demandes - organiser les
visites

### ⚙️ Admin

Peut : - gérer les utilisateurs - superviser les logements - modérer le
contenu

------------------------------------------------------------------------

# 🏗 Architecture du projet

Le projet est organisé en **architecture full‑stack** avec séparation
claire entre frontend, backend et tests.

    FindMyRoof
    │
    ├── backend
    ├── client
    ├── cypress
    ├── docker-compose.yml
    └── README.md

------------------------------------------------------------------------

## 🧠 Comprendre l'architecture

Le projet est structuré de manière modulaire afin de faciliter la
maintenance et le travail en équipe.

Les différentes couches permettent de séparer :

-   la gestion des routes
-   la logique métier
-   la communication avec la base de données
-   l'interface utilisateur

------------------------------------------------------------------------

# 🔧 Backend

Le backend est développé avec :

-   Node.js
-   Express
-   Prisma ORM
-   PostgreSQL
-   JWT
-   bcrypt

Structure principale :

    backend
    │
    ├── prisma
    │   ├── schema.prisma
    │   └── seed.js
    │
    ├── src
    │   ├── config
    │   ├── controllers
    │   ├── middlewares
    │   ├── routes
    │   ├── services
    │   ├── socket
    │   ├── utils
    │   └── server.js

Les différentes couches permettent :

Routes → gestion des endpoints API\
Controllers → gestion des requêtes HTTP\
Services → logique métier\
Middlewares → authentification et sécurité

------------------------------------------------------------------------

# 🎨 Frontend

Le frontend est développé avec :

-   React
-   Vite
-   SCSS

Structure :

    client/src
    │
    ├── components
    ├── pages
    ├── layouts
    ├── contexts
    ├── hooks
    ├── routes
    └── styles

Les composants permettent de créer une interface **modulaire et
réutilisable**.

------------------------------------------------------------------------

# 🧪 Tests

Le projet utilise **Cypress** pour les tests end‑to‑end.

Exemples :

-   test de connexion
-   test d'inscription
-   test des fonctionnalités principales

Structure :

    cypress
    ├── e2e
    ├── fixtures
    └── support

------------------------------------------------------------------------

# 🐳 Docker

Docker est utilisé pour faciliter l'exécution du projet dans un
environnement isolé.

Configuration :

    docker-compose.yml

Permet de lancer facilement :

-   backend
-   frontend
-   base de données

------------------------------------------------------------------------

# 🚀 Installation du projet

## 1. Cloner le projet

    git clone https://github.com/your-repository/findmyroof.git

## 2. Installer les dépendances

Backend

    cd backend
    npm install

Frontend

    cd client
    npm install

## 3. Configurer les variables d'environnement

Créer un fichier `.env` dans backend.

Exemple :

    DATABASE_URL=postgresql://user:password@localhost:5432/findmyroof
    JWT_SECRET=supersecretkey
    PORT=3000

## 4. Générer Prisma

    npx prisma generate

## 5. Migrations

    npx prisma migrate dev

## 6. Seed de la base

    node prisma/seed.js

## 7. Lancer le backend

    npm run dev

## 8. Lancer le frontend

    cd client
    npm run dev

------------------------------------------------------------------------

# 📈 Améliorations possibles

-   système de recommandation de logements
-   notifications
-   géolocalisation
-   application mobile

------------------------------------------------------------------------

# 📚 Contexte académique

Projet réalisé dans le cadre d'un **projet de fin d'année en
développement web full‑stack**.

Compétences démontrées :

-   conception d'une base de données
-   création d'une API REST
-   authentification sécurisée
-   développement React
-   tests automatisés
-   utilisation de Docker

------------------------------------------------------------------------

# 👨‍💻 Auteur

Projet réalisé par **Amélien Sampaix**Sarah Tordeur**Charles-Edouard Robin.**
