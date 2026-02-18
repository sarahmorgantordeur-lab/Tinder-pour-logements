import { verifyToken } from '../config/jwt.js';
import prisma from '../config/db.js';

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Accès non autorisé. Token manquant.'
      });
    }

    const token = authHeader.split(' ')[1];

    const decoded = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
        phone: true,
        avatar: true,
        company_name: true,
        siret: true,
        is_banned: true
      }
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Utilisateur non trouvé.'
      });
    }
    if (user.is_banned) {
      return res.status(403).json({
        success: false,
        message: 'Compte suspendu.'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication error:', error.message);

    return res.status(401).json({
      success: false,
      message: error.message || 'Token invalide ou expiré.'
    });
  }
};

export const verifySocketToken = async (token) => {
  try {
    const decoded = verifyToken(token);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        email: true,
        username: true,
        is_banned: true
      }
    });

    if (!user) {
      throw new Error('Utilisateur non trouvé');
    }

    if (user.is_banned) {
      throw new Error('Compte suspendu');
    }

    return {
      id: user.id,
      email: user.email,
      username: user.username
    };
  } catch (error) {
    console.error('Socket authentication error:', error.message);
    throw new Error('Authentication failed');
  }
};

export const optionalAuthenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const decoded = verifyToken(token);
      const user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: {
          id: true,
          email: true,
          username: true,
          role: true,
          phone: true,
          avatar: true,
          company_name: true,
          siret: true,
          is_banned: true
        }
      });

      if (user && !user.is_banned) {
        req.user = user;
      }
    }

    next();
  } catch (error) {
    // En cas d'erreur, on continue sans utilisateur authentifié
    next();
  }
};

export const isAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Authentification requise.'
    });
  }

  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Accès refusé. Droits administrateur requis.'
    });
  }
  next();
};
