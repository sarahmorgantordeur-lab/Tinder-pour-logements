import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import apartmentRoutes from './apartmentRoutes.js';
import swipeRoutes from './swipeRoutes.js';
import matchRoutes from './matchRoutes.js';
import adminRoutes from './adminRoutes.js';
import appointmentRoutes from './appointmentRoutes.js';

const setupRoutes = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/properties', apartmentRoutes);
    app.use('/api/swipes', swipeRoutes);
    app.use('/api/conversations', matchRoutes);
    app.use('/api/admin', adminRoutes);
    app.use('/api/appointments', appointmentRoutes);
};

export default setupRoutes;
