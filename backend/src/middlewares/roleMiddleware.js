/**
 * Middleware pour vérifier les rôles des utilisateurs
 * Rôles disponibles: 'user', 'owner', 'agency'
 */

export const requireRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: 'Authentification requise'
            });
        }

        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: 'Accès refusé. Permissions insuffisantes.'
            });
        }

        next();
    };
};

export const isOwner = requireRole('owner');
export const isAgency = requireRole('agency')
export const isUser = requireRole('user');
