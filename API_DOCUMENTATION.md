# Documentation API - Plateforme Immobilière

## Vue d'ensemble

Cette API permet de gérer une plateforme immobilière de type "Tinder" avec système de matching entre utilisateurs et propriétaires.

## URL de base

```
http://localhost:PORT/api
```

## Authentification

L'API utilise JWT (JSON Web Tokens) pour l'authentification. Après connexion, incluez le token dans l'en-tête de vos requêtes :

```
Authorization: Bearer <token>
```

---

## Routes d'authentification

### POST /api/auth/register
Inscription d'un nouvel utilisateur.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "userName": "John Doe",
  "role": "utilisateur" // "utilisateur", "propriétaire", ou "agence"
}
```

**Réponse:**
```json
{
  "message": "User register sucessfully",
  "user": {...}
}
```

### POST /api/auth/login
Connexion d'un utilisateur.

**Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Réponse:**
```json
{
  "message": "Login successful",
  "user": {...},
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## Routes utilisateur

### GET /api/users/profile
Obtenir le profil de l'utilisateur connecté.

**Authentification:** Requise

**Réponse:**
```json
{
  "user": {
    "id": "...",
    "email": "...",
    "username": "...",
    "role": "utilisateur",
    ...
  }
}
```

### PUT /api/users/profile
Mettre à jour le profil.

**Authentification:** Requise

**Body:** Champs à modifier

### POST /api/users/favorites
Ajouter un appartement aux favoris.

**Authentification:** Requise

**Body:**
```json
{
  "apartmentId": "..."
}
```

### DELETE /api/users/favorites/:apartmentId
Retirer un appartement des favoris.

**Authentification:** Requise

### GET /api/users/favorites
Obtenir la liste des favoris.

**Authentification:** Requise

### POST /api/users/history
Ajouter un appartement à l'historique de visualisation.

**Authentification:** Requise

**Body:**
```json
{
  "apartmentId": "..."
}
```

### GET /api/users/history
Obtenir l'historique de visualisation.

**Authentification:** Requise

### PUT /api/users/preferences
Mettre à jour les préférences de recherche.

**Authentification:** Requise

**Body:**
```json
{
  "propertyType": ["appartement", "maison"],
  "listingType": "location",
  "minPrice": 500,
  "maxPrice": 1500,
  "minSurface": 50,
  "regions": ["Paris", "Lyon"],
  "tags": ["parking", "balcon"]
}
```

### POST /api/users/documents
Ajouter un document au profil.

**Authentification:** Requise

**Body:**
```json
{
  "name": "Carte d'identité",
  "url": "https://...",
  "type": "identité"
}
```

### DELETE /api/users/documents/:documentId
Supprimer un document.

**Authentification:** Requise

---

## Routes appartements

### GET /api/apartments
Obtenir tous les appartements (avec filtres optionnels).

**Query params:**
- `propertyType`: Type de bien (appartement, maison, villa...)
- `listingType`: Type d'annonce (location, vente)
- `region`: Région
- `minPrice`: Prix minimum
- `maxPrice`: Prix maximum
- `minSurface`: Surface minimum
- `disponibility`: true/false

**Exemple:**
```
GET /api/apartments?listingType=location&region=Paris&minPrice=800&maxPrice=1500
```

**Réponse:**
```json
{
  "apartments": [...]
}
```

### GET /api/apartments/:id
Obtenir un appartement par ID.

**Réponse:**
```json
{
  "apartment": {
    "id": "...",
    "title": "...",
    "description": "...",
    "address": "...",
    "region": "...",
    "propertyType": "appartement",
    "listingType": "location",
    "price": 1200,
    "surface": 65,
    "rooms": 3,
    "photos": [...],
    "tags": ["parking", "balcon"],
    "owner": {...},
    ...
  }
}
```

### POST /api/apartments
Créer un nouvel appartement.

**Authentification:** Requise (Propriétaire/Agence)

**Body:**
```json
{
  "title": "Bel appartement centre-ville",
  "description": "...",
  "address": "123 rue Example",
  "region": "Paris",
  "propertyType": "appartement",
  "listingType": "location",
  "price": 1200,
  "surface": 65,
  "rooms": 3,
  "photos": ["url1", "url2"],
  "tags": ["parking", "balcon", "ascenseur"]
}
```

### GET /api/apartments/owner/my-apartments
Obtenir ses propres appartements.

**Authentification:** Requise (Propriétaire/Agence)

### PUT /api/apartments/:id
Mettre à jour un appartement.

**Authentification:** Requise (Propriétaire/Agence)

**Body:** Champs à modifier

### DELETE /api/apartments/:id
Supprimer un appartement.

**Authentification:** Requise (Propriétaire/Agence)

### POST /api/apartments/:id/photos
Ajouter une photo.

**Authentification:** Requise (Propriétaire/Agence)

**Body:**
```json
{
  "photoUrl": "https://..."
}
```

### DELETE /api/apartments/:id/photos
Supprimer une photo.

**Authentification:** Requise (Propriétaire/Agence)

**Body:**
```json
{
  "photoUrl": "https://..."
}
```

---

## Routes demandes

### POST /api/requests
Créer une nouvelle demande de contact.

**Authentification:** Requise (Utilisateur)

**Body:**
```json
{
  "apartmentId": "...",
  "message": "Je suis intéressé par cet appartement..."
}
```

### GET /api/requests/my-requests
Obtenir ses propres demandes.

**Authentification:** Requise (Utilisateur)

### GET /api/requests/:id
Obtenir une demande par ID.

**Authentification:** Requise

### DELETE /api/requests/:id
Supprimer une demande.

**Authentification:** Requise (Utilisateur)

### POST /api/requests/:id/documents
Ajouter un document à une demande.

**Authentification:** Requise (Utilisateur)

**Body:**
```json
{
  "name": "Bulletin de salaire",
  "url": "https://...",
  "uploadedAt": "2026-01-26T..."
}
```

### GET /api/requests/apartment/:apartmentId
Obtenir toutes les demandes pour un appartement.

**Authentification:** Requise (Propriétaire/Agence)

### GET /api/requests/owner/all
Obtenir toutes les demandes pour tous ses appartements.

**Authentification:** Requise (Propriétaire/Agence)

### GET /api/requests/owner/stats
Obtenir les statistiques des demandes.

**Authentification:** Requise (Propriétaire/Agence)

**Réponse:**
```json
{
  "stats": {
    "total": 45,
    "enAttente": 12,
    "contacté": 8,
    "visitePlanifiée": 5,
    "accepté": 15,
    "refusé": 5
  }
}
```

### PUT /api/requests/:id/status
Mettre à jour le statut d'une demande.

**Authentification:** Requise (Propriétaire/Agence)

**Body:**
```json
{
  "status": "contacté", // "en attente", "contacté", "visite planifiée", "accepté", "refusé"
  "visitDate": "2026-02-15T14:00:00Z" // Optionnel, pour "visite planifiée"
}
```

---

## Statuts des demandes

- **en attente**: Demande créée, pas encore traitée
- **contacté**: Propriétaire a contacté le candidat
- **visite planifiée**: Visite programmée
- **accepté**: Candidature acceptée
- **refusé**: Candidature refusée

---

## Rôles utilisateur

- **utilisateur**: Acheteur/locataire, peut créer des demandes
- **propriétaire**: Peut créer des annonces et gérer les demandes
- **agence**: Identique à propriétaire

---

## Codes d'erreur

- **200**: Succès
- **201**: Créé avec succès
- **400**: Requête invalide
- **401**: Non authentifié
- **403**: Accès refusé (permissions insuffisantes)
- **404**: Ressource non trouvée
- **409**: Conflit (ex: email déjà utilisé)
- **500**: Erreur serveur

---

## Exemples d'utilisation

### Inscription et connexion
```bash
# Inscription
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"pass123","userName":"John Doe","role":"utilisateur"}'

# Connexion
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"pass123"}'
```

### Recherche d'appartements
```bash
curl -X GET "http://localhost:3000/api/apartments?listingType=location&region=Paris&minPrice=800&maxPrice=1500"
```

### Créer une demande
```bash
curl -X POST http://localhost:3000/api/requests \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"apartmentId":"...","message":"Je suis intéressé"}'
```
