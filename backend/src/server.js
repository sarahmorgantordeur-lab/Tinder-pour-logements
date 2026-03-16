import 'dotenv/config';

import path from 'path';
import express from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import setupRoutes from './routes/index.js';
import prisma from './config/db.js';
import { initSocket } from './socket/index.js';

const app = express();
const server = http.createServer(app);
initSocket(server);
const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // 100 requests per window
    message: {
        message: 'Too many requests, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        message: 'Too many login attempts, please try again after 15 minutes.'
    },
    standardHeaders: true,
    legacyHeaders: false
});

// Middlewares de sécurité
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// app.use(limiter);
// app.use('/api/auth/login', authLimiter);
// app.use('/api/auth/register', authLimiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

setupRoutes(app);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

// Fichiers statiques — cross-origin autorisé pour l'affichage frontend
app.use('/uploads/documents', express.static('uploads/documents', {
    setHeaders: (res, filePath) => {
        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
        // PDF : forcer le téléchargement ; images : affichage inline
        if (filePath.endsWith('.pdf')) {
            res.setHeader('Content-Disposition', `attachment; filename="${path.basename(filePath)}"`);
        }
    }
}));
app.use('/uploads', express.static('uploads', {
    setHeaders: (res) => {
        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    }
}));

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

const startServer = async () => {
    try {
        await prisma.$connect();
        console.log('Connected to PostgreSQL database');

        server.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

// Gestion de la fermeture propre
process.on('SIGINT', async () => {
    await prisma.$disconnect();
    console.log('Disconnected from database');
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await prisma.$disconnect();
    console.log('Disconnected from database');
    process.exit(0);
});

startServer();

export default app;
