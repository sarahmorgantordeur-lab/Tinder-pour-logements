import prisma from '../config/db.js';

const SLOT_DURATION_MS = 60 * 60 * 1000; // 1 heure par visite

async function hasConflict(ownerId, date, excludeId = null) {
    const from = new Date(date.getTime() - SLOT_DURATION_MS);
    const to   = new Date(date.getTime() + SLOT_DURATION_MS);

    const conflict = await prisma.appointment.findFirst({
        where: {
            owner_id: ownerId,
            id:       excludeId ? { not: excludeId } : undefined,
            date:     { gte: from, lt: to },
        },
        select: { id: true, date: true, title: true },
    });
    return conflict;
}

const appointmentSelect = {
    id: true,
    title: true,
    date: true,
    notes: true,
    created_at: true,
    tenant: { select: { id: true, firstname: true, lastname: true, email: true } },
    property: { select: { id: true, title: true, address: { select: { city: true } } } },
};

const tenantAppointmentSelect = {
    id: true,
    title: true,
    date: true,
    notes: true,
    created_at: true,
    owner: { select: { id: true, firstname: true, lastname: true, email: true } },
    property: { select: { id: true, title: true, address: { select: { city: true } } } },
};

class AppointmentController {
    // GET /appointments/tenant — liste des rdv où l'utilisateur connecté est le locataire
    static async listAsTenant(req, res) {
        try {
            const appointments = await prisma.appointment.findMany({
                where: { tenant_id: req.user.id },
                select: tenantAppointmentSelect,
                orderBy: { date: 'asc' },
            });
            res.status(200).json({ appointments });
        } catch (error) {
            console.error('[Appointment.listAsTenant]', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // GET /appointments — liste des rdv de l'owner/agency connecté
    static async list(req, res) {
        try {
            const appointments = await prisma.appointment.findMany({
                where: { owner_id: req.user.id },
                select: appointmentSelect,
                orderBy: { date: 'asc' },
            });
            res.status(200).json({ appointments });
        } catch (error) {
            console.error('[Appointment.list]', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // POST /appointments
    static async create(req, res) {
        try {
            const { title, date, notes, tenant_id, property_id } = req.body;
            if (!title || !date || !tenant_id || !property_id) {
                return res.status(400).json({ message: 'title, date, tenant_id et property_id sont requis.' });
            }

            // Vérifier que le bien appartient à l'owner
            const property = await prisma.property.findUnique({ where: { id: property_id }, select: { owner_id: true } });
            if (!property) return res.status(404).json({ message: 'Bien introuvable.' });
            if (property.owner_id !== req.user.id) return res.status(403).json({ message: 'Non autorisé.' });

            const apptDate = new Date(date);
            const conflict = await hasConflict(req.user.id, apptDate);
            if (conflict) {
                const conflictTime = new Date(conflict.date).toLocaleString('fr-BE', { dateStyle: 'medium', timeStyle: 'short' });
                return res.status(409).json({ message: `Créneau indisponible : vous avez déjà "${conflict.title}" à ${conflictTime}.` });
            }

            const appointment = await prisma.appointment.create({
                data: {
                    title,
                    date: new Date(date),
                    notes: notes || null,
                    owner_id: req.user.id,
                    tenant_id,
                    property_id,
                },
                select: appointmentSelect,
            });
            res.status(201).json({ appointment });
        } catch (error) {
            console.error('[Appointment.create]', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // PUT /appointments/:id
    static async update(req, res) {
        try {
            const existing = await prisma.appointment.findUnique({ where: { id: req.params.id } });
            if (!existing) return res.status(404).json({ message: 'Rendez-vous introuvable.' });
            if (existing.owner_id !== req.user.id) return res.status(403).json({ message: 'Non autorisé.' });

            const { title, date, notes } = req.body;

            if (date) {
                const apptDate = new Date(date);
                const conflict = await hasConflict(existing.owner_id, apptDate, req.params.id);
                if (conflict) {
                    const conflictTime = new Date(conflict.date).toLocaleString('fr-BE', { dateStyle: 'medium', timeStyle: 'short' });
                    return res.status(409).json({ message: `Créneau indisponible : vous avez déjà "${conflict.title}" à ${conflictTime}.` });
                }
            }

            const appointment = await prisma.appointment.update({
                where: { id: req.params.id },
                data: {
                    ...(title !== undefined && { title }),
                    ...(date !== undefined && { date: new Date(date) }),
                    ...(notes !== undefined && { notes }),
                },
                select: appointmentSelect,
            });
            res.status(200).json({ appointment });
        } catch (error) {
            console.error('[Appointment.update]', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    // DELETE /appointments/:id — owner/agency ou tenant concerné
    static async remove(req, res) {
        try {
            const existing = await prisma.appointment.findUnique({ where: { id: req.params.id } });
            if (!existing) return res.status(404).json({ message: 'Rendez-vous introuvable.' });
            const isOwner  = existing.owner_id  === req.user.id;
            const isTenant = existing.tenant_id === req.user.id;
            if (!isOwner && !isTenant) return res.status(403).json({ message: 'Non autorisé.' });

            await prisma.appointment.delete({ where: { id: req.params.id } });
            res.status(200).json({ message: 'Rendez-vous supprimé.' });
        } catch (error) {
            console.error('[Appointment.remove]', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}

export default AppointmentController;
