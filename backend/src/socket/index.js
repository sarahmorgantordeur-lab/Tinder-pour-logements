import { Server } from 'socket.io';
import { verifyToken } from '../config/jwt.js';
import MatchService from '../services/matchService.js';

const getTokenFromHandshake = (socket) => {
    const authToken = socket.handshake?.auth?.token;
    if (authToken) return authToken;

    const header = socket.handshake?.headers?.authorization;
    if (header && header.startsWith('Bearer ')) {
        return header.split(' ')[1];
    }

    return null;
};

export const initSocket = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: process.env.CORS_ORIGIN || '*',
            methods: ['GET', 'POST']
        }
    });

    io.use((socket, next) => {
        try {
            const token = getTokenFromHandshake(socket);
            if (!token) {
                return next(new Error('Token manquant'));
            }
            const decoded = verifyToken(token);
            socket.user = decoded;
            return next();
        } catch (err) {
            return next(new Error(err.message || 'Token invalide'));
        }
    });

    io.on('connection', (socket) => {
        socket.on('join_match', async ({ matchId }, ack) => {
            try {
                if (!matchId) {
                    throw new Error('matchId requis');
                }
                await MatchService.getMatchById(matchId, socket.user.id);
                socket.join(`match:${matchId}`);
                if (typeof ack === 'function') ack({ ok: true });
            } catch (err) {
                if (typeof ack === 'function') ack({ ok: false, error: err.message });
            }
        });

        socket.on('leave_match', ({ matchId }) => {
            if (matchId) {
                socket.leave(`match:${matchId}`);
            }
        });

        socket.on('send_message', async ({ matchId, content }, ack) => {
            try {
                if (!matchId || !content || !content.trim()) {
                    throw new Error('matchId et content requis');
                }
                const message = await MatchService.sendMessage(
                    matchId,
                    socket.user.id,
                    content.trim()
                );
                io.to(`match:${matchId}`).emit('new_message', message);
                if (typeof ack === 'function') ack({ ok: true, message });
            } catch (err) {
                if (typeof ack === 'function') ack({ ok: false, error: err.message });
            }
        });
    });

    return io;
};
