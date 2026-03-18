import express from 'express';
import AuthController from '../controllers/authController.js';
import { registerValidation, loginValidation } from '../utils/validators.js';
import prisma from '../config/db.js';

const router = express.Router();

router.post('/register', registerValidation, AuthController.register);
router.post('/login', loginValidation, AuthController.login);

router.get("/agencies", async (req, res) => {
  const { q } = req.query;
  if (!q || q.length < 3) {
    return res.json([]);
  }

  try {
    const agencies = await prisma.agency.findMany({
      where: {
        nom_agence: {
          contains: q,
          mode: 'insensitive'
        }
      },
      select: { nom_agence: true }
    });
    res.json(agencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

export default router;
