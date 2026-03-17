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
            address: { create: { number: '42', street: 'Rue du Bailli', city: 'Ixelles', postal_code: '1050', country: 'Belgique' } }
        }
    });

    const candice = await prisma.user.upsert({
        where: { email: 'candice.prop@immobe.be' },
        update: {},
        create: {
            email: 'candice.prop@immobe.be',
            password: hashedPassword,
            firstname: 'Candice',
            lastname: 'Prop',
            role: 'owner',
            phone: '+32 478 33 22 11',
            address: { create: { number: '23', street: 'Rue Henri Degorge', city: 'Hornu', postal_code: '7301', country: 'Belgique' } }
        }
    });

    const justine = await prisma.user.upsert({
        where: { email: 'justine.loc@gmail.com' },
        update: {},
        create: {
            email: 'justine.loc@gmail.com',
            password: hashedPassword,
            firstname: 'Justine',
            lastname: 'Loc',
            role: 'user',
            phone: '+32 496 55 44 33',
            address: { create: { number: '8', street: 'Quai de la Goffe', city: 'Liège', postal_code: '4000', country: 'Belgique' } },
            tenant_profile: {
                create: {
                    household_size: 2,
                    budget_max: 2000,
                    min_surface: 50,
                    regions: ['Bruxelles', 'Brabant Wallon', 'Hornu', 'Liège'],
                    property_types: [
                        'Bungalow', 'Chalet', 'Castel', 'Farm', 'CountryHouse', 
                        'ApartmentBuilding', 'MixedUseBuilding', 'BelEtageHouse', 
                        'Mansion', 'Villa', 'ManorHouse', 'Pavilion', 'GroundFloor', 
                        'Duplex', 'Triplex', 'Studio', 'Penthouse', 'Loft', 
                        'StudentHousing', 'ServiceApartment', 'Appartement', 'Other'
                    ]
                }
            }
        }
    });

    console.log('✅ Users created:', thomas.firstname, candice.firstname, justine.firstname);

    // --- PROPERTIES ---
    const propertiesData = [
        {
            title: 'Bel appartement lumineux à Ixelles',
            description: 'Appartement 2 chambres en plein cœur d\'Ixelles. Parquet chêne, double vitrage, cave incluse.',
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
                '/uploads/properties/ixelles-3.jpg'
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
            owner_id: candice.id,
            address: { number: '10', street: 'Avenue Louise', city: 'Bruxelles', postal_code: '1050', country: 'Belgique' },
            images: [
                '/uploads/properties/bruxelles-1.jpg',
                '/uploads/properties/bruxelles-2.jpg',
                '/uploads/properties/bruxelles-3.jpg'
            ]
        },
        {
            title: 'Château à louer Hornu',
            description: 'Magnifique château à louer avec piscine et sauna',
            property_type: 'Castel',
            status: 'published',
            price: 1400,
            surface: 1997,
            rooms: 60,
            parking: true,
            owner_id: candice.id,
            address: { number: '23', street: 'Rue Henri Degorge', city: 'Hornu', postal_code: '7301', country: 'Belgique' },
            images: [
                '/uploads/properties/chateau-hornu-1.jpg',
                '/uploads/properties/chateau-hornu-2.jpg',
                '/uploads/properties/chateau-hornu-3.jpg'
            ]
        },
        {
            title: 'Duplex moderne à Schaerbeek',
            description: 'Duplex 3 chambres avec terrasse, lumineux et moderne.',
            property_type: 'Duplex',
            status: 'published',
            price: 1600,
            surface: 105,
            rooms: 4,
            parking: false,
            owner_id: thomas.id,
            address: { number: '54', street: 'Rue Royale Sainte-Marie', city: 'Schaerbeek', postal_code: '1030', country: 'Belgique' },
            images: [
                '/uploads/properties/schaerbeek-1.jpg',
                '/uploads/properties/schaerbeek-2.jpg'
            ]
        },
        {
            title: 'Studio étudiant Liège',
            description: 'Studio fonctionnel proche université, internet inclus.',
            property_type: 'StudentHousing',
            status: 'published',
            price: 490,
            surface: 25,
            rooms: 1,
            parking: false,
            owner_id: thomas.id,
            address: { number: '101', street: 'Rue de Bruxelles', city: 'Liège', postal_code: '4000', country: 'Belgique' },
            images: [
                '/uploads/properties/liege-studio-1.jpg',
                '/uploads/properties/liege-studio-2.jpg'
            ]
        },
        {
        title: 'Villa moderne avec piscine à Waterloo',
        description: 'Villa contemporaine 4 chambres avec piscine chauffée, jardin et garage.',
        property_type: 'Villa',
        status: 'published',
        price: 3200,
        surface: 280,
        rooms: 5,
        parking: true,
        owner_id: thomas.id,
        address: { number: '12', street: 'Chaussée de Bruxelles', city: 'Waterloo', postal_code: '1410', country: 'Belgique' },
        images: [
            '/uploads/properties/villa-waterloo-1.jpg',
            '/uploads/properties/villa-waterloo-2.jpg',
            '/uploads/properties/villa-waterloo-3.jpg'
        ]
    },
    {
        title: 'Chalet de montagne à Spa',
        description: 'Chalet cosy en bois, idéal pour week-ends et vacances. 3 chambres, cheminée.',
        property_type: 'Chalet',
        status: 'published',
        price: 850,
        surface: 120,
        rooms: 4,
        parking: true,
        owner_id: candice.id,
        address: { number: '45', street: 'Rue du Parc', city: 'Spa', postal_code: '4900', country: 'Belgique' },
        images: [
            '/uploads/properties/chalet-spa-1.jpg',
            '/uploads/properties/chalet-spa-2.jpg',
            '/uploads/properties/chalet-spa-3.jpg'
        ]
    },
    {
        title: 'Bungalow au bord du lac de Genval',
        description: 'Petit bungalow lumineux avec jardin, idéal pour couple ou famille.',
        property_type: 'Bungalow',
        status: 'published',
        price: 1200,
        surface: 65,
        rooms: 3,
        parking: true,
        owner_id: thomas.id,
        address: { number: '7', street: 'Chemin du Lac', city: 'Genval', postal_code: '1332', country: 'Belgique' },
        images: [
            '/uploads/properties/bungalow-genval-1.jpg',
            '/uploads/properties/bungalow-genval-2.jpg',
            '/uploads/properties/bungalow-genval-3.jpg'
        ]
    },
    {
        title: 'Mansion historique à Namur',
        description: 'Grande maison de maître avec 6 chambres, jardin et garages. Style classique.',
        property_type: 'Mansion',
        status: 'published',
        price: 4500,
        surface: 420,
        rooms: 8,
        parking: true,
        owner_id: candice.id,
        address: { number: '34', street: 'Avenue de la Plante', city: 'Namur', postal_code: '5000', country: 'Belgique' },
        images: [
            '/uploads/properties/mansion-namur-1.jpg',
            '/uploads/properties/mansion-namur-2.jpg',
            '/uploads/properties/mansion-namur-3.jpg',
            '/uploads/properties/mansion-namur-4.jpg'
        ]
    },
    {
        title: 'Penthouse panoramique à Anvers',
        description: 'Penthouse moderne avec terrasse 50m² et vue sur la ville. 3 chambres, garage inclus.',
        property_type: 'Penthouse',
        status: 'published',
        price: 3800,
        surface: 190,
        rooms: 4,
        parking: true,
        owner_id: thomas.id,
        address: { number: '50', street: 'Meir', city: 'Anvers', postal_code: '2000', country: 'Belgique' },
        images: [
            '/uploads/properties/penthouse-anvers-1.jpg',
            '/uploads/properties/penthouse-anvers-2.jpg',
            '/uploads/properties/penthouse-anvers-3.jpg'
        ]
    },
    {
        title: 'Loft industriel à Liège',
        description: 'Loft spacieux et lumineux avec mezzanine. Idéal pour artistes ou jeunes couples.',
        property_type: 'Loft',
        status: 'published',
        price: 1100,
        surface: 85,
        rooms: 2,
        parking: false,
        owner_id: candice.id,
        address: { number: '18', street: 'Rue des Tanneries', city: 'Liège', postal_code: '4000', country: 'Belgique' },
        images: [
            '/uploads/properties/loft-liege-1.jpg',
            '/uploads/properties/loft-liege-2.jpg',
            '/uploads/properties/loft-liege-3.jpg'
        ]
    },
    {
        title: 'Studio cosy à Louvain',
        description: 'Petit studio idéal pour étudiant, proche KU Leuven. Charges incluses.',
        property_type: 'StudentHousing',
        status: 'published',
        price: 580,
        surface: 22,
        rooms: 1,
        parking: false,
        owner_id: thomas.id,
        address: { number: '118', street: 'Naamsestraat', city: 'Louvain', postal_code: '3000', country: 'Belgique' },
        images: [
            '/uploads/properties/studio-louvain-1.jpg',
            '/uploads/properties/studio-louvain-2.jpg'
        ]
    }
    ];

    // Supprimer les biens existants
    await prisma.property.deleteMany({});
    console.log('🗑️  Anciens biens supprimés.');

    const createdProperties = {};
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
        console.log(`✅ Property created: ${data.title} (+${images.length} images)`);
    }

    // --- Appointments for Justine ---
    const now = new Date();
    const appts = [
        {
            title: 'Visite — Appartement Ixelles',
            date: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000),
            notes: 'Rendez-vous 14h devant l\'immeuble.',
            owner_id: thomas.id,
            tenant_id: justine.id,
            property_id: createdProperties['Bel appartement lumineux à Ixelles'].id
        },
        {
            title: 'Visite — Maison Bruxelles',
            date: new Date(now.getTime() + 4 * 24 * 60 * 60 * 1000),
            notes: 'Code interphone 4321.',
            owner_id: candice.id,
            tenant_id: justine.id,
            property_id: createdProperties['Maison familiale à Bruxelles'].id
        },
        {
            title: 'Visite — Château Hornu',
            date: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000),
            notes: 'Entrée principale, prévoir carte d’identité.',
            owner_id: candice.id,
            tenant_id: justine.id,
            property_id: createdProperties['Château à louer Hornu'].id
        },
        {
            title: 'Visite — Duplex Schaerbeek',
            date: new Date(now.getTime() + 10 * 24 * 60 * 60 * 1000),
            notes: 'Terrasse et vue agréable.',
            owner_id: thomas.id,
            tenant_id: justine.id,
            property_id: createdProperties['Duplex moderne à Schaerbeek'].id
        },
        {
            title: 'Visite — Studio étudiant Liège',
            date: new Date(now.getTime() + 12 * 24 * 60 * 60 * 1000),
            notes: 'Idéal pour étudiant, internet inclus.',
            owner_id: thomas.id,
            tenant_id: justine.id,
            property_id: createdProperties['Studio étudiant Liège'].id
        }
    ];

    for (const appt of appts) {
        await prisma.appointment.create({ data: appt });
        console.log(`📅 Appointment created: ${appt.title}`);
    }

    console.log(`\n🎉 Done! ${appts.length} appointments created for Justine.`);
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