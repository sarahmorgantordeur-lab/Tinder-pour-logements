🏠 FindMyRoof

FindMyRoof est une application web inspirée du principe de matching, permettant aux locataires de découvrir des logements et d’entrer en contact avec les propriétaires ou agences immobilières.

Le système facilite la mise en relation entre les personnes recherchant un logement et celles proposant des biens, en simplifiant la découverte des annonces et l'organisation de visites.

Ce projet a été réalisé dans le cadre d’un projet de fin d’année en développement web full-stack.

📌 Objectifs du projet

Le projet vise à :

Simplifier la recherche de logement

Améliorer la mise en relation locataire / propriétaire

Offrir une interface moderne et intuitive

Structurer une application full-stack moderne

Les fonctionnalités principales permettent de :

créer un compte utilisateur

consulter des logements

montrer son intérêt pour un logement

contacter le propriétaire ou l'agence

organiser des visites

🧩 Concept

Contrairement à certaines applications de type “matching”, FindMyRoof fonctionne de manière simple :

Le locataire consulte les logements disponibles

Il montre son intérêt pour un logement

Il peut contacter le propriétaire ou l'agence

Une discussion peut être engagée

Une visite peut être planifiée

Le système facilite donc la mise en relation et l'organisation des visites.

👥 Types d'utilisateurs

Le système distingue plusieurs rôles :

👤 User (Locataire)

Peut :

créer un compte

consulter les logements

montrer son intérêt pour un logement

contacter le propriétaire

organiser une visite

🏠 Owner (Propriétaire)

Peut :

créer et gérer ses logements

consulter les locataires intéressés

discuter avec eux

proposer une date de visite

🏢 Agency (Agence immobilière)

Peut :

gérer plusieurs biens

répondre aux demandes

organiser les visites

⚙️ Admin

Peut :

gérer les utilisateurs

superviser les logements

modérer le contenu

🏗 Architecture du projet

Le projet est structuré selon une architecture backend moderne avec séparation des responsabilités.

FindMyRoof
│
├── .github/
│   └── workflows/
│       └── cypress.yml                 # Workflow GitHub Actions pour les tests Cypress
│
├── backend/                            # API backend Node.js / Express / Prisma
│   │
│   ├── .env.example                    # Exemple de variables d’environnement
│   ├── .gitignore
│   ├── Dockerfile                      # Conteneurisation du backend
│   ├── package.json
│   ├── package-lock.json
│   ├── prisma.config.ts
│   ├── README.md
│   │
│   ├── prisma/                         # Configuration base de données Prisma
│   │   ├── schema.prisma               # Schéma de la base de données
│   │   └── seed.js                     # Seed initial de la base
│   │
│   ├── src/
│   │   ├── server.js                   # Point d’entrée du serveur Express
│   │   │
│   │   ├── config/                     # Configurations globales
│   │   │   ├── db.js                   # Connexion / configuration base de données
│   │   │   └── jwt.js                  # Configuration JWT
│   │   │
│   │   ├── controllers/                # Contrôleurs HTTP
│   │   │   ├── adminController.js
│   │   │   ├── apartmentController.js
│   │   │   ├── appointmentController.js
│   │   │   ├── authController.js
│   │   │   ├── matchController.js
│   │   │   ├── swipeController.js
│   │   │   └── userController.js
│   │   │
│   │   ├── middlewares/                # Middlewares Express
│   │   │   ├── authMiddleware.js       # Vérification authentification
│   │   │   ├── roleMiddleware.js       # Vérification des rôles
│   │   │   └── uploadMiddleware.js     # Gestion upload fichiers
│   │   │
│   │   ├── routes/                     # Définition des routes API
│   │   │   ├── index.js
│   │   │   ├── adminRoutes.js
│   │   │   ├── apartmentRoutes.js
│   │   │   ├── appointmentRoutes.js
│   │   │   ├── authRoutes.js
│   │   │   ├── matchRoutes.js
│   │   │   ├── swipeRoutes.js
│   │   │   └── userRoutes.js
│   │   │
│   │   ├── services/                   # Logique métier
│   │   │   ├── adminService.js
│   │   │   ├── apartmentService.js
│   │   │   ├── authService.js
│   │   │   ├── matchService.js
│   │   │   └── swipeService.js
│   │   │
│   │   ├── socket/                     # Gestion temps réel / Socket.io
│   │   │   └── index.js
│   │   │
│   │   ├── utils/                      # Fonctions utilitaires
│   │   │   ├── fileUpload.js
│   │   │   └── validators.js
│   │   │
│   │   ├── generated/                  # Client Prisma généré automatiquement
│   │   │   └── prisma/
│   │   │       └── ...
│   │   │
│   │   └── uploads/                    # Dossiers de stockage de fichiers
│   │       ├── announcements/
│   │       ├── documents/
│   │       └── prolile/                # Attention : probable faute de frappe ("profile")
│   │
│   └── uploads/                        # Dossier upload exposé au niveau backend
│       ├── announcements/
│       ├── documents/
│       └── profile/
│
├── client/                             # Frontend React / Vite
│   │
│   ├── .gitignore
│   ├── Dockerfile                      # Conteneurisation du frontend
│   ├── README.md
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── index.html                      # Point d’entrée HTML Vite
│   │
│   ├── public/
│   │   ├── robots.txt
│   │   └── vite.svg
│   │
│   └── src/
│       ├── main.jsx                    # Entrée React
│       ├── App.jsx                     # Composant racine
│       ├── api.js                      # Centralisation appels API
│       │
│       ├── assets/                     # Ressources statiques
│       │   ├── fonts/
│       │   ├── icons/
│       │   └── images/
│       │
│       ├── components/                 # Composants réutilisables
│       │   ├── auth/
│       │   │   ├── AuthLayoutForm.jsx
│       │   │   ├── Login.jsx
│       │   │   ├── Register.jsx
│       │   │   └── SwitchAuth.jsx
│       │   │
│       │   ├── cards/
│       │   │   ├── AppartementCard.jsx
│       │   │   └── AppartementOwnerCard.jsx
│       │   │
│       │   ├── create/
│       │   │   └── CreateAgency.jsx
│       │   │
│       │   ├── navigation/
│       │   │   └── NavLink.jsx
│       │   │
│       │   └── ui/
│       │       ├── Button.jsx
│       │       ├── Modal.jsx
│       │       ├── Select.jsx
│       │       └── TextInput.jsx
│       │
│       ├── contexts/                   # Context API React
│       │   ├── AuthContext.jsx
│       │   └── HomeContext.jsx
│       │
│       ├── hooks/                      # Hooks personnalisés
│       │   ├── useAuth.js
│       │   └── useHome.js
│       │
│       ├── layouts/                    # Layouts de page
│       │   ├── Home.jsx
│       │   └── components/
│       │       ├── Footer.jsx
│       │       └── Headers.jsx
│       │
│       ├── pages/                      # Pages principales
│       │   ├── AgendaPage.jsx
│       │   ├── CreateAnnouncementPage.jsx
│       │   ├── EditAnnouncement.jsx
│       │   ├── LandingPage.jsx
│       │   ├── UserPublicProfilePage.jsx
│       │   ├── discussionPage.jsx
│       │   ├── profilePage.jsx
│       │   │
│       │   └── home_pages/             # Pages d’accueil selon le rôle
│       │       ├── AgencyHome.jsx
│       │       ├── OwnerHome.jsx
│       │       └── UserHome.jsx
│       │
│       ├── routes/                     # Gestion du routage React
│       │   └── AppRouter.jsx
│       │
│       └── styles/                     # Styles SCSS
│           ├── main.scss
│           ├── _base.scss
│           ├── _reset.scss
│           ├── _variables.scss
│           ├── components/
│           ├── layouts/
│           └── pages/
│
│                 # Configuration Cypress
├── docker-compose.yml                  # Orchestration Docker
├── package.json                        # Scripts racine pour les tests
├── package-lock.json
├── package-lock 2.json                 # Fichier en double à nettoyer
└── prisma.config.ts                    # Config Prisma présente aussi à la racine




## 🧠 Comprendre l’architecture

Le projet **FindMyRoof** suit une architecture **full-stack modulaire**, séparant clairement le backend, le frontend, les tests et les outils de déploiement.

Cette organisation permet :

- une meilleure **maintenabilité**
- une **évolutivité du projet**
- une séparation claire des responsabilités
- un développement en équipe plus simple

---



