import { PrismaClient } from '../generated/prisma/index.js';

const prisma = new PrismaClient();

// log des requêtes Prisma (pour debug)
prisma.$on('query', (e) => {
  console.log('Prisma query:', e.query);
});

prisma.$on('error', (e) => {
  console.error('Prisma error:', e);
});

export default prisma;
