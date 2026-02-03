import { body, param, query, validationResult } from 'express-validator';

// Middleware pour gérer les erreurs de validation
export const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            message: 'Validation failed',
            errors: errors.array().map(err => ({
                field: err.path,
                message: err.msg
            }))
        });
    }
    next();
};

export const registerValidation = [
    body('email')
        .trim()
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail(),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
    body('userName')
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('Username must be between 2 and 50 characters')
        .matches(/^[a-zA-Z0-9_-]+$/)
        .withMessage('Username can only contain letters, numbers, underscores, and hyphens'),
    body('role')
        .optional()
        .isIn(['user', 'owner', 'agency'])
        .withMessage('Role must be user, owner, or agency'),
    validate
];

export const loginValidation = [
    body('email')
        .trim()
        .isEmail()
        .withMessage('Please provide a valid email address')
        .normalizeEmail(),
    body('password')
        .notEmpty()
        .withMessage('Password is required'),
    validate
];

export const createApartmentValidation = [
    body('title')
        .trim()
        .isLength({ min: 5, max: 200 })
        .withMessage('Title must be between 5 and 200 characters'),
    body('description')
        .optional()
        .trim()
        .isLength({ max: 5000 })
        .withMessage('Description cannot exceed 5000 characters'),
    body('address')
        .trim()
        .isLength({ min: 5, max: 500 })
        .withMessage('Address must be between 5 and 500 characters'),
    body('region')
        .trim()
        .notEmpty()
        .withMessage('Region is required'),
    body('property_type')
        .isIn(['apartment', 'house', 'studio', 'villa', 'land', 'commercial_space', 'other'])
        .withMessage('Invalid property type'),
    body('listing_type')
        .isIn(['rent', 'sale'])
        .withMessage('Listing type must be rent or sale'),
    body('price')
        .isFloat({ min: 0 })
        .withMessage('Price must be a positive number'),
    body('surface')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Surface must be a positive number'),
    body('rooms')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Rooms must be a positive integer'),
    validate
];

export const updateApartmentValidation = [
    body('title')
        .optional()
        .trim()
        .isLength({ min: 5, max: 200 })
        .withMessage('Title must be between 5 and 200 characters'),
    body('description')
        .optional()
        .trim()
        .isLength({ max: 5000 })
        .withMessage('Description cannot exceed 5000 characters'),
    body('price')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Price must be a positive number'),
    body('surface')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('Surface must be a positive number'),
    body('rooms')
        .optional()
        .isInt({ min: 0 })
        .withMessage('Rooms must be a positive integer'),
    validate
];

export const uuidParamValidation = (paramName = 'id') => [
    param(paramName)
        .isUUID()
        .withMessage(`${paramName} must be a valid UUID`),
    validate
];

export const searchApartmentValidation = [
    query('minPrice')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('minPrice must be a positive number'),
    query('maxPrice')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('maxPrice must be a positive number'),
    query('minSurface')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('minSurface must be a positive number'),
    query('propertyType')
        .optional()
        .isIn(['apartment', 'house', 'studio', 'villa', 'land', 'commercial_space', 'other'])
        .withMessage('Invalid property type'),
    query('listingType')
        .optional()
        .isIn(['rent', 'sale'])
        .withMessage('Listing type must be rent or sale'),
    validate
];

export const updateProfileValidation = [
    body('username')
        .optional()
        .trim()
        .isLength({ min: 2, max: 50 })
        .withMessage('Username must be between 2 and 50 characters'),
    body('phone')
        .optional()
        .trim()
        .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/)
        .withMessage('Please provide a valid phone number'),
    body('company_name')
        .optional()
        .trim()
        .isLength({ max: 200 })
        .withMessage('Company name cannot exceed 200 characters'),
    body('siret')
        .optional()
        .trim()
        .matches(/^[0-9]{14}$/)
        .withMessage('SIRET must be exactly 14 digits'),
    validate
];

export const createRequestValidation = [
    body('apartmentId')
        .isUUID()
        .withMessage('apartmentId must be a valid UUID'),
    body('message')
        .optional()
        .trim()
        .isLength({ max: 2000 })
        .withMessage('Message cannot exceed 2000 characters'),
    validate
];

export const updateRequestStatusValidation = [
    body('status')
        .isIn(['waiting', 'contacted', 'visit_planned', 'accepted', 'refused'])
        .withMessage('Invalid status'),
    body('visitDate')
        .optional()
        .isISO8601()
        .withMessage('visitDate must be a valid date'),
    validate
];

// Validation pour les préférences utilisateur
export const updatePreferencesValidation = [
    body('property_type')
        .optional()
        .isArray()
        .withMessage('property_type must be an array'),
    body('listing_type')
        .optional()
        .isIn(['rent', 'sale'])
        .withMessage('listing_type must be rent or sale'),
    body('min_price')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('min_price must be a positive number'),
    body('max_price')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('max_price must be a positive number'),
    body('min_surface')
        .optional()
        .isFloat({ min: 0 })
        .withMessage('min_surface must be a positive number'),
    body('regions')
        .optional()
        .isArray()
        .withMessage('regions must be an array'),
    validate
];
