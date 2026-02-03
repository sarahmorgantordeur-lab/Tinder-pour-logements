import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import apartmentRoutes from './apartmentRoutes.js';
import requestRoutes from './requestRoutes.js';
import swipeRoutes from './swipeRoutes.js';
import matchRoutes from './matchRoutes.js';
import adminRoutes from './adminRoutes.js';

const setupRoutes = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/apartments', apartmentRoutes);
    app.use('/api/requests', requestRoutes);
    app.use('/api/swipes', swipeRoutes);
    app.use('/api/matches', matchRoutes);
    app.use('/api/admin', adminRoutes);
};

export default setupRoutes;
