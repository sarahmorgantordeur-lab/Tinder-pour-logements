# Tinder-pour-logements (Backend)

API backend pour une application de type “Tinder” dédiée aux logements (swipe, matchs, messagerie, candidatures).

## Fonctionnalités
- Authentification JWT (register/login)
- Gestion utilisateurs, profils, préférences, favoris, historique de vues
- Gestion des appartements (CRUD + photos + géocodage)
- Swipe (like/dislike) + matches + messagerie (REST)
- Messagerie temps réel via socket.io (par match)
- Panneau admin backend (users, apartments, matches, messages)

## Stack
- Node.js + Express
- PostgreSQL + Prisma
- JWT, Multer, Nodemailer
- Socket.io

## Prérequis
- Node.js 18+
- PostgreSQL

## Installation
```bash
npm install
```

## Variables d’environnement
Créer un fichier `.env` à la racine :
```env
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/tinder_logements
JWT_SECRET=changeme
JWT_EXPIRES_IN=7d
JWT_REFRESH_EXPIRES_IN=30d
CORS_ORIGIN=*

# Rate limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# Email (Nodemailer)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_user
SMTP_PASS=your_pass
SMTP_FROM=no-reply@example.com

# Frontend
FRONTEND_URL=http://localhost:5173
```

## Base de données
```bash
npx prisma generate
npx prisma migrate dev
```

## Lancer le serveur
```bash
npm run dev
```

Health check :
```
GET /health
```

## Scripts npm
- `npm run dev` : serveur en mode watch
- `npm start` : serveur en mode production
- `npm run db:generate` : prisma generate
- `npm run db:push` : push du schéma (dev)
- `npm run db:migrate` : migrations

## Authentification
Toutes les routes protégées attendent :
```
Authorization: Bearer <token>
```

## Endpoints principaux (aperçu)

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Users
- `GET /api/users/profile`
- `PUT /api/users/profile`
- `PUT /api/users/preferences`
- `POST /api/users/favorites`
- `DELETE /api/users/favorites/:apartmentId`
- `GET /api/users/favorites`
- `POST /api/users/history`
- `GET /api/users/history`

### Appartements
- `GET /api/apartments`
- `GET /api/apartments/:id`
- `POST /api/apartments`
- `PUT /api/apartments/:id`
- `DELETE /api/apartments/:id`
- `GET /api/apartments/search/location`
- `GET /api/apartments/search/address`
- `POST /api/apartments/:id/pictures`
- `DELETE /api/apartments/:id/pictures`

### Swipes
- `POST /api/swipes`
- `GET /api/swipes`
- `GET /api/swipes/history`

### Matches & Messages (REST)
- `GET /api/matches`
- `GET /api/matches/:id`
- `DELETE /api/matches/:id`
- `POST /api/matches/:id/messages`
- `GET /api/matches/:id/messages`

### Admin
Base path: `/api/admin` (auth + rôle `admin`)
- Users: list / ban / role / delete
- Apartments: list / delete
- Matches: list / get / delete
- Messages: list / delete

## Socket.io (messagerie temps réel)
Connexion :
```js
const socket = io("http://localhost:3000", {
  auth: { token: "JWT_HERE" }
});
```

Événements :
- `join_match` `{ matchId }`
- `leave_match` `{ matchId }`
- `send_message` `{ matchId, content }`
- `new_message` (broadcast)

## Notes
- Les comptes bannis (`is_banned = true`) sont bloqués à la connexion et via middleware.
- Les suppressions admin nettoient les données associées (messages, swipes, etc.).

## Licence
MIT
