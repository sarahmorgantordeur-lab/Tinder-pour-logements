import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uploadPath = path.join(__dirname, '../../uploads');

        if (file.fieldname === 'avatar') {
            uploadPath = path.join(uploadPath, 'avatars');
        } else if (file.fieldname === 'pictures') {
            uploadPath = path.join(uploadPath, 'apartments');
        } else if (file.fieldname === 'document') {
            uploadPath = path.join(uploadPath, 'documents');
        }

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        const ext = path.extname(file.originalname);
        cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
    }
});

const imageFilter = (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Type de fichier non autorisé. Utilisez JPG, PNG ou WebP.'), false);
    }
};

const documentFilter = (req, file, cb) => {
    const allowedTypes = [
        'image/jpeg', 'image/jpg', 'image/png',
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Type de fichier non autorisé. Utilisez JPG, PNG, PDF ou DOC.'), false);
    }
};

// Configurations multer
const uploadAvatar = multer({
    storage,
    fileFilter: imageFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB
}).single('avatar');

const uploadApartmentPictures = multer({
    storage,
    fileFilter: imageFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB
}).array('pictures', 10); // Max 10 images

const uploadDocument = multer({
    storage,
    fileFilter: documentFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // 10MB
}).single('document');

const uploadDocuments = multer({
    storage,
    fileFilter: documentFilter,
    limits: { fileSize: 10 * 1024 * 1024 }
}).array('documents', 5); // Max 5 documents

// Middleware wrapper pour gérer les erreurs multer
const handleUpload = (uploadFn) => {
    return (req, res, next) => {
        uploadFn(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                if (err.code === 'LIMIT_FILE_SIZE') {
                    return res.status(400).json({ message: 'Fichier trop volumineux' });
                }
                if (err.code === 'LIMIT_FILE_COUNT') {
                    return res.status(400).json({ message: 'Trop de fichiers' });
                }
                return res.status(400).json({ message: err.message });
            }
            if (err) {
                return res.status(400).json({ message: err.message });
            }
            next();
        });
    };
};

export const uploadAvatarMiddleware = handleUpload(uploadAvatar);
export const uploadPicturesMiddleware = handleUpload(uploadApartmentPictures);
export const uploadDocumentMiddleware = handleUpload(uploadDocument);
export const uploadDocumentsMiddleware = handleUpload(uploadDocuments);
