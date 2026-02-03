import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import setupRoutes from './routes/index.js';
import prisma from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

app.use('/uploads', express.static('uploads'));


// Démarrage du serveur
const startServer = async () => {
    try {
        await prisma.$connect();
        console.log('Connected to PostgreSQL database');

        app.listen(PORT, () => {
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
