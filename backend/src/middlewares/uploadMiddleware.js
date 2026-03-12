import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const makeStorage = (folder) => multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, `../../uploads/${folder}`));
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

const documentFilter = (_req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Type de fichier non autorisé. Utilisez PDF, JPG ou PNG.'), false);
    }
};

const handleUpload = (uploadFn) => {
    return (req, res, next) => {
        uploadFn(req, res, (err) => {
            if (err instanceof multer.MulterError) {
                if (err.code === 'LIMIT_FILE_SIZE') return res.status(400).json({ message: 'Fichier trop volumineux' });
                if (err.code === 'LIMIT_FILE_COUNT') return res.status(400).json({ message: 'Trop de fichiers' });
                return res.status(400).json({ message: err.message });
            }
            if (err) return res.status(400).json({ message: err.message });
            next();
        });
    };
};

export const uploadPicturesMiddleware = handleUpload(
    multer({ storage: makeStorage('properties'), fileFilter: imageFilter, limits: { fileSize: 10 * 1024 * 1024 } }).array('pictures', 10)
);

export const uploadProfilePhotosMiddleware = handleUpload(
    multer({ storage: makeStorage('profile_photos'), fileFilter: imageFilter, limits: { fileSize: 5 * 1024 * 1024 } }).array('photos', 5)
);

export const uploadDocumentMiddleware = handleUpload(
    multer({ storage: makeStorage('documents'), fileFilter: documentFilter, limits: { fileSize: 10 * 1024 * 1024 } }).single('document')
);
