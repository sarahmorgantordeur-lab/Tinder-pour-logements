import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import apartmentRoutes from './apartmentRoutes.js';
import requestRoutes from './requestRoutes.js';

const setupRoutes = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/apartments', apartmentRoutes);
    app.use('/api/requests', requestRoutes);
};

export default setupRoutes;
