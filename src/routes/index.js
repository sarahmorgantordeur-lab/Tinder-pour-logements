const authRoutes = require('./authRoutes.js');
const userRoutes = require('./userRoutes.js');
const apartmentRoutes = require('./apartmentRoutes.js');
const requestRoutes = require('./requestRoutes.js');

const setupRoutes = (app) => {
    app.use('/api/auth', authRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/apartments', apartmentRoutes);
    app.use('/api/requests', requestRoutes);
};

module.exports = setupRoutes;
