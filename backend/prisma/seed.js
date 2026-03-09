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

    // --- Propriétaire particulier ---
    const owner1 = await prisma.user.upsert({
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

    // --- Utilisateur agence ---
    const agencyUser = await prisma.user.upsert({
        where: { email: 'contact@remax-brussels.be' },
        update: {},
        create: {
            email: 'contact@remax-brussels.be',
            password: hashedPassword,
            firstname: 'RE/MAX',
            lastname: 'Brussels',
            role: 'agency',
            phone: '+32 2 123 45 67',
            address: {
                create: {
                    number: '50',
                    street: 'Meir',
                    city: 'Anvers',
                    postal_code: '2000',
                    country: 'Belgique'
                }
            }
        }
    });

    // Profil agence
    await prisma.agency.upsert({
        where: { user_id: agencyUser.id },
        update: {},
        create: {
            nom_agence: 'RE/MAX Brussels',
            numero_tva: 'BE0123456789',
            user_id: agencyUser.id,
            address: {
                create: {
                    number: '50',
                    street: 'Meir',
                    city: 'Anvers',
                    postal_code: '2000',
                    country: 'Belgique'
                }
            }
        }
    });

    // --- Locataire ---
    const tenant = await prisma.user.upsert({
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

    console.log(
        '✅ Users:',
        owner1.firstname, owner1.lastname, '|',
        agencyUser.firstname, agencyUser.lastname, '|',
        tenant.firstname, tenant.lastname
    );

    // --- Biens immobiliers ---
    const properties = [
        // Bruxelles
        {
            title: 'Bel appartement lumineux à Ixelles',
            description: 'Superbe appartement 2 chambres en plein cœur d\'Ixelles. Parquet chêne, double vitrage, cave incluse.',
            property_type: 'Appartement',
            status: 'published',
            price: 1250,
            surface: 78,
            rooms: 3,
            parking: false,
            owner_id: owner1.id,
            address: { number: '42', street: 'Rue du Bailli', city: 'Ixelles', postal_code: '1050', country: 'Belgique' }
        },
        {
            title: 'Studio moderne près de la Grand-Place',
            description: 'Studio entièrement rénové au cœur de Bruxelles. Cuisine équipée, salle de bain moderne.',
            property_type: 'Studio',
            status: 'published',
            price: 750,
            surface: 32,
            rooms: 1,
            parking: false,
            owner_id: agencyUser.id,
            address: { number: '15', street: 'Rue des Bouchers', city: 'Bruxelles', postal_code: '1000', country: 'Belgique' }
        },
        {
            title: 'Maison de maître à Etterbeek',
            description: 'Magnifique maison de maître avec jardin privatif. 4 chambres, 2 salles de bain, garage double.',
            property_type: 'Mansion',
            status: 'published',
            price: 2800,
            surface: 220,
            rooms: 5,
            parking: true,
            owner_id: agencyUser.id,
            address: { number: '88', street: 'Avenue de Tervueren', city: 'Etterbeek', postal_code: '1040', country: 'Belgique' }
        },
        {
            title: 'Duplex à Schaerbeek',
            description: 'Duplex 3 chambres dans un immeuble belle époque rénové. Hauts plafonds, moulures, terrasse 12m².',
            property_type: 'Duplex',
            status: 'published',
            price: 1600,
            surface: 105,
            rooms: 4,
            parking: false,
            owner_id: owner1.id,
            address: { number: '54', street: 'Rue Royale Sainte-Marie', city: 'Schaerbeek', postal_code: '1030', country: 'Belgique' }
        },

        // Liège
        {
            title: 'Appartement cosy en bord de Meuse',
            description: 'Charmant appartement 2 chambres avec vue sur la Meuse. Parquet, ascenseur.',
            property_type: 'Appartement',
            status: 'published',
            price: 850,
            surface: 68,
            rooms: 3,
            parking: false,
            owner_id: owner1.id,
            address: { number: '8', street: 'Quai de la Goffe', city: 'Liège', postal_code: '4000', country: 'Belgique' }
        },
        {
            title: 'Studio étudiant près de l\'ULiège',
            description: 'Studio fonctionnel à 5 minutes de l\'ULiège. Internet inclus dans le loyer.',
            property_type: 'StudentHousing',
            status: 'published',
            price: 490,
            surface: 25,
            rooms: 1,
            parking: false,
            owner_id: agencyUser.id,
            address: { number: '101', street: 'Rue de Bruxelles', city: 'Liège', postal_code: '4000', country: 'Belgique' }
        },
        {
            title: 'Villa avec piscine à Angleur',
            description: 'Villa contemporaine 5 chambres avec piscine chauffée, double garage et grand jardin.',
            property_type: 'Villa',
            status: 'published',
            price: 3500,
            surface: 310,
            rooms: 6,
            parking: true,
            owner_id: owner1.id,
            address: { number: '12', street: 'Route du Condroz', city: 'Angleur', postal_code: '4031', country: 'Belgique' }
        },

        // Gand
        {
            title: 'Loft design dans le Patershol',
            description: 'Loft design au cœur du quartier historique Patershol. Cuisine américaine, mezzanine, poutres apparentes.',
            property_type: 'Loft',
            status: 'published',
            price: 1100,
            surface: 85,
            rooms: 2,
            parking: false,
            owner_id: agencyUser.id,
            address: { number: '23', street: 'Kraanlei', city: 'Gand', postal_code: '9000', country: 'Belgique' }
        },
        {
            title: 'Maison familiale à Gand-Nord',
            description: 'Belle maison 4 chambres avec jardin et garage. Quartier calme, école à 200m.',
            property_type: 'BelEtageHouse',
            status: 'published',
            price: 1450,
            surface: 165,
            rooms: 5,
            parking: true,
            owner_id: owner1.id,
            address: { number: '67', street: 'Wondelgemstraat', city: 'Gand', postal_code: '9000', country: 'Belgique' }
        },

        // Anvers
        {
            title: 'Penthouse avec terrasse panoramique',
            description: 'Exceptionnel penthouse au 8ème étage, terrasse 60m², vue panoramique sur les toits d\'Anvers.',
            property_type: 'Penthouse',
            status: 'published',
            price: 3800,
            surface: 190,
            rooms: 4,
            parking: true,
            owner_id: agencyUser.id,
            address: { number: '50', street: 'Meir', city: 'Anvers', postal_code: '2000', country: 'Belgique' }
        },
        {
            title: 'Appartement 2 chambres - Zuid',
            description: 'Appartement contemporain dans le quartier branché du Zuid. Proche musées et restaurants.',
            property_type: 'Appartement',
            status: 'published',
            price: 980,
            surface: 72,
            rooms: 3,
            parking: false,
            owner_id: owner1.id,
            address: { number: '14', street: 'Leopold de Waelplaats', city: 'Anvers', postal_code: '2000', country: 'Belgique' }
        },

        // Bruges
        {
            title: 'Maison de ville à Bruges',
            description: 'Maison rénovée dans le centre historique de Bruges. Vue sur canal depuis le salon, jardin intérieur.',
            property_type: 'BelEtageHouse',
            status: 'published',
            price: 1900,
            surface: 145,
            rooms: 4,
            parking: false,
            owner_id: agencyUser.id,
            address: { number: '9', street: 'Dijver', city: 'Bruges', postal_code: '8000', country: 'Belgique' }
        },

        // Namur
        {
            title: 'Appartement vue sur la Citadelle',
            description: 'Appartement 2 chambres avec balcon et vue imprenable sur la Citadelle de Namur. Parking privé inclus.',
            property_type: 'Appartement',
            status: 'published',
            price: 790,
            surface: 65,
            rooms: 3,
            parking: true,
            owner_id: owner1.id,
            address: { number: '34', street: 'Route Merveilleuse', city: 'Namur', postal_code: '5000', country: 'Belgique' }
        },

        // Louvain
        {
            title: 'Kot étudiant proche KU Leuven',
            description: 'Studio meublé entièrement équipé pour étudiant. Charges comprises (eau, électricité, internet).',
            property_type: 'StudentHousing',
            status: 'published',
            price: 580,
            surface: 22,
            rooms: 1,
            parking: false,
            owner_id: agencyUser.id,
            address: { number: '118', street: 'Naamsestraat', city: 'Louvain', postal_code: '3000', country: 'Belgique' }
        },

        // Charleroi
        {
            title: 'Maison à rénover - Opportunité investissement',
            description: 'Maison 3 façades à rénover. Grand potentiel, jardin de 300m².',
            property_type: 'CountryHouse',
            status: 'published',
            price: 700,
            surface: 130,
            rooms: 4,
            parking: false,
            owner_id: owner1.id,
            address: { number: '45', street: 'Rue de Marcinelle', city: 'Charleroi', postal_code: '6000', country: 'Belgique' }
        },
    ];

    let created = 0;
    for (const { address, ...data } of properties) {
        await prisma.property.create({
            data: {
                ...data,
                address: { create: address }
            }
        });
        created++;
        console.log(`  ✅ [${created}/${properties.length}] ${data.title}`);
    }

    console.log(`\n🎉 Done! ${created} properties created.`);
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
