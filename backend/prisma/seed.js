import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import bcrypt from 'bcrypt';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Seeding database...');

    const hashedPassword = await bcrypt.hash('Password123!', 10);

    // --- USERS ---
    const thomas = await prisma.user.upsert({
        where: { email: 'thomas.dupont@immobe.be' },
        update: {},
        create: {
            email: 'thomas.dupont@immobe.be',
            password: hashedPassword,
            firstname: 'Thomas',
            lastname: 'Dupont',
            role: 'owner',
            phone: '+32 477 12 34 56',
            address: {
                create: {
                    number: '42',
                    street: 'Rue du Bailli',
                    city: 'Ixelles',
                    postal_code: '1050',
                    country: 'Belgique'
                }
            }
        }
    });

    const michel = await prisma.user.upsert({
        where: { email: 'michel.leblanc@immobe.be' },
        update: {},
        create: {
            email: 'michel.leblanc@immobe.be',
            password: hashedPassword,
            firstname: 'Michel',
            lastname: 'Leblanc',
            role: 'owner',
            phone: '+32 478 33 22 11',
            address: {
                create: {
                    number: '12',
                    street: 'Rue Royale',
                    city: 'Bruxelles',
                    postal_code: '1000',
                    country: 'Belgique'
                }
            }
        }
    });

    const alice = await prisma.user.upsert({
        where: { email: 'alice.martin@gmail.com' },
        update: {},
        create: {
            email: 'alice.martin@gmail.com',
            password: hashedPassword,
            firstname: 'Alice',
            lastname: 'Martin',
            role: 'user',
            phone: '+32 496 55 44 33',
            address: {
                create: {
                    number: '8',
                    street: 'Quai de la Goffe',
                    city: 'Liège',
                    postal_code: '4000',
                    country: 'Belgique'
                }
            },
            tenant_profile: {
                create: {
                    household_size: 2,
                    budget_max: 1200,
                    min_surface: 50,
                    regions: ['Bruxelles', 'Brabant Wallon'],
                    property_types: ['Appartement', 'Duplex', 'Studio']
                }
            }
        }
    });

    console.log('✅ Users created:', thomas.firstname, michel.firstname, alice.firstname);

    // --- PROPERTIES ---
    const propertiesData = [
        {
            title: 'Bel appartement lumineux à Ixelles',
            description: 'Superbe appartement 2 chambres en plein cœur d\'Ixelles. Parquet chêne, double vitrage, cave incluse.',
            property_type: 'Appartement',
            status: 'published',
            price: 1250,
            surface: 78,
            rooms: 3,
            parking: false,
            owner_id: thomas.id,
            address: { number: '42', street: 'Rue du Bailli', city: 'Ixelles', postal_code: '1050', country: 'Belgique' },
            images: [
                '/uploads/properties/ixelles-1.jpg',
                '/uploads/properties/ixelles-2.jpg',
                '/uploads/properties/ixelles-3.jpg',
                '/uploads/properties/ixelles-4.jpg'
            ]
        },
        {
            title: 'Maison familiale à Bruxelles',
            description: 'Maison 4 chambres avec jardin et garage. Quartier calme, proche écoles.',
            property_type: 'BelEtageHouse',
            status: 'published',
            price: 1800,
            surface: 160,
            rooms: 5,
            parking: true,
            owner_id: michel.id,
            address: { number: '10', street: 'Avenue Louise', city: 'Bruxelles', postal_code: '1050', country: 'Belgique' },
            images: [
                '/uploads/properties/bruxelles-1.jpg',
                '/uploads/properties/bruxelles-2.jpg',
                '/uploads/properties/bruxelles-3.jpg',
                '/uploads/properties/bruxelles-4.jpg',
                '/uploads/properties/bruxelles-5.jpg'
            ]
        },
        {
            title: 'Château à louer',
            description: 'Magnifique château à louer avec piscine et sauna',
            property_type: 'Castel',
            status: 'published',
            price: 1400,
            surface: 1997,
            rooms: 60,
            parking: true,
            owner_id: thomas.id,
            address: { number: '23', street: 'Rue Henri Degorge', city: 'Hornu', postal_code: '7301', country: 'Belgique' },
            images: [
                '/uploads/properties/chateau-hornu-1.jpg',
                '/uploads/properties/chateau-hornu-2.jpg',
                '/uploads/properties/chateau-hornu-3.jpg',
                '/uploads/properties/chateau-hornu-4.jpg'
            ]
        }
    ];

    // Supprimer les biens existants
    await prisma.property.deleteMany({});
    console.log('🗑️  Anciens biens supprimés.');

    const createdProperties = {};
    let created = 0;
    for (const { address, owner_id, images, ...data } of propertiesData) {
        const prop = await prisma.property.create({
            data: {
                ...data,
                owner: { connect: { id: owner_id } },
                address: { create: address }
            }
        });
        createdProperties[data.title] = prop;

        // Ajouter les images
        for (let i = 0; i < images.length; i++) {
            await prisma.announcementPhoto.create({
                data: { url: images[i], order: i, property_id: prop.id }
            });
        }

        created++;
        console.log(`  ✅ [${created}/${propertiesData.length}] ${data.title} (+${images.length} images)`);
    }

    console.log(`\n🎉 Done! ${created} properties with images created.`);

    // --- Appointments for Alice ---
    const propIxelles = createdProperties['Bel appartement lumineux à Ixelles'];
    const now = new Date();
    const appts = [
        {
            title: 'Visite — Appartement lumineux Ixelles',
            date: new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000),
            notes: 'Rendez-vous à 14h devant l\'immeuble. Prévoir une pièce d\'identité.',
            owner_id: thomas.id,
            tenant_id: alice.id,
            property_id: propIxelles.id
        }
    ];

    for (const appt of appts) {
        await prisma.appointment.create({ data: appt });
        console.log(`  📅 Rdv seedé : ${appt.title}`);
    }
}

main()
    .catch((e) => {
        console.error('❌ Seed failed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
        await pool.end();
    });