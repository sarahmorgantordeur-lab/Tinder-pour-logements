import { PrismaClient } from '@prisma/client';
import express from 'express';
import AuthController from '../controllers/authController.js';
import { registerValidation, loginValidation } from '../utils/validators.js';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/register', registerValidation, AuthController.register);
router.post('/login', loginValidation, AuthController.login);


router.get("/agencies", async (req, res) => {
  try {
    const agencies = await prisma.agency.findMany({
      select: {
        nom_agence: true
      }
    })

    res.json(agencies)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erreur serveur" })
  }
})

export default router;
