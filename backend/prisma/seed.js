import { PrismaClient } from '../src/generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import bcrypt from 'bcrypt';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('🌱 Seeding database with Belgian apartments...');

    // --- Propriétaires fictifs ---
    const hashedPassword = await bcrypt.hash('Password123!', 10);

    const owner1 = await prisma.user.upsert({
        where: { email: 'thomas.dupont@immobe.be' },
        update: {},
        create: {
            email: 'thomas.dupont@immobe.be',
            password: hashedPassword,
            username: 'Thomas Dupont',
            role: 'owner',
            phone: '+32 477 12 34 56',
        }
    });

    const owner2 = await prisma.user.upsert({
        where: { email: 'agence@remax-brussels.be' },
        update: {},
        create: {
            email: 'agence@remax-brussels.be',
            password: hashedPassword,
            username: 'RE/MAX Brussels',
            role: 'agency',
            phone: '+32 2 123 45 67',
            company_name: 'RE/MAX Brussels',
            siret: 'BE0123456789',
        }
    });

    console.log('✅ Owners created:', owner1.username, '&', owner2.username);

    // --- Appartements fictifs en Belgique ---
    const apartments = [
        // Bruxelles
        {
            title: 'Bel appartement lumineux à Ixelles',
            description: 'Superbe appartement de 2 chambres situé en plein cœur d\'Ixelles. Parquet en chêne, double vitrage, cave incluse. Proche du Bois de la Cambre et des transports en commun.',
            address: 'Rue du Bailli 42',
            city: 'Ixelles',
            postal_code: '1050',
            region: 'Bruxelles',
            country: 'Belgique',
            latitude: 50.8244,
            longitude: 4.3698,
            property_type: 'apartment',
            listing_type: 'rent',
            price: 1250,
            surface: 78,
            rooms: 3,
            tags: ['parquet', 'lumineux', 'cave', 'transports'],
            owner_id: owner1.id,
        },
        {
            title: 'Studio moderne près de la Grand-Place',
            description: 'Studio entièrement rénové au cœur de Bruxelles, idéal pour étudiant ou jeune professionnel. Cuisine équipée, salle de bain moderne.',
            address: 'Rue des Bouchers 15',
            city: 'Bruxelles',
            postal_code: '1000',
            region: 'Bruxelles',
            country: 'Belgique',
            latitude: 50.8480,
            longitude: 4.3560,
            property_type: 'studio',
            listing_type: 'rent',
            price: 750,
            surface: 32,
            rooms: 1,
            tags: ['rénové', 'centre-ville', 'cuisine équipée'],
            owner_id: owner2.id,
        },
        {
            title: 'Maison de maître à Etterbeek',
            description: 'Magnifique maison de maître avec jardin privatif. 4 chambres, 2 salles de bain, garage double. Proche des institutions européennes.',
            address: 'Avenue de Tervueren 88',
            city: 'Etterbeek',
            postal_code: '1040',
            region: 'Bruxelles',
            country: 'Belgique',
            latitude: 50.8386,
            longitude: 4.3918,
            property_type: 'house',
            listing_type: 'rent',
            price: 2800,
            surface: 220,
            rooms: 5,
            tags: ['jardin', 'garage', 'maison de maître', 'institutions européennes'],
            owner_id: owner2.id,
        },
        {
            title: 'Appartement à vendre - Schaerbeek',
            description: 'Appartement 3 chambres à vendre dans un immeuble de belle époque entièrement rénové. Hauts plafonds, moulures d\'époque, terrasse de 12m².',
            address: 'Rue Royale Sainte-Marie 54',
            city: 'Schaerbeek',
            postal_code: '1030',
            region: 'Bruxelles',
            country: 'Belgique',
            latitude: 50.8640,
            longitude: 4.3728,
            property_type: 'apartment',
            listing_type: 'sale',
            price: 320000,
            surface: 105,
            rooms: 4,
            tags: ['terrasse', 'belle époque', 'rénové', 'hauts plafonds'],
            owner_id: owner1.id,
        },

        // Liège
        {
            title: 'Appartement cosy en bord de Meuse',
            description: 'Charmant appartement 2 chambres avec vue sur la Meuse. Parquet, double vitrage, ascenseur. À deux pas du centre historique de Liège.',
            address: 'Quai de la Goffe 8',
            city: 'Liège',
            postal_code: '4000',
            region: 'Liège',
            country: 'Belgique',
            latitude: 50.6452,
            longitude: 5.5727,
            property_type: 'apartment',
            listing_type: 'rent',
            price: 850,
            surface: 68,
            rooms: 3,
            tags: ['vue sur Meuse', 'ascenseur', 'parquet', 'centre historique'],
            owner_id: owner1.id,
        },
        {
            title: 'Studio étudiant près de l\'ULiège',
            description: 'Studio fonctionnel idéal pour étudiant, à 5 minutes à pied de l\'Université de Liège. Internet inclus dans le loyer.',
            address: 'Rue de Bruxelles 101',
            city: 'Liège',
            postal_code: '4000',
            region: 'Liège',
            country: 'Belgique',
            latitude: 50.5820,
            longitude: 5.5630,
            property_type: 'studio',
            listing_type: 'rent',
            price: 490,
            surface: 25,
            rooms: 1,
            tags: ['étudiant', 'internet inclus', 'université'],
            owner_id: owner2.id,
        },
        {
            title: 'Villa avec piscine à Angleur',
            description: 'Splendide villa contemporaine 5 chambres avec piscine chauffée, double garage et grand jardin paysager. Domotique complète.',
            address: 'Route du Condroz 12',
            city: 'Angleur',
            postal_code: '4031',
            region: 'Liège',
            country: 'Belgique',
            latitude: 50.6001,
            longitude: 5.6107,
            property_type: 'villa',
            listing_type: 'sale',
            price: 680000,
            surface: 310,
            rooms: 6,
            tags: ['piscine', 'villa', 'garage', 'jardin', 'domotique'],
            owner_id: owner1.id,
        },

        // Gand
        {
            title: 'Appartement design dans le Patershol',
            description: 'Loft design au cœur du quartier historique Patershol. Cuisine américaine haut de gamme, mezzanine, poutres apparentes.',
            address: 'Kraanlei 23',
            city: 'Gand',
            postal_code: '9000',
            region: 'Flandre Orientale',
            country: 'Belgique',
            latitude: 51.0576,
            longitude: 3.7189,
            property_type: 'apartment',
            listing_type: 'rent',
            price: 1100,
            surface: 85,
            rooms: 2,
            tags: ['loft', 'design', 'poutres apparentes', 'quartier historique'],
            owner_id: owner2.id,
        },
        {
            title: 'Maison familiale à Gand-Nord',
            description: 'Belle maison 4 chambres avec jardin et garage. Quartier calme et résidentiel, école à 200m, parc à 5 minutes.',
            address: 'Wondelgemstraat 67',
            city: 'Gand',
            postal_code: '9000',
            region: 'Flandre Orientale',
            country: 'Belgique',
            latitude: 51.0748,
            longitude: 3.7180,
            property_type: 'house',
            listing_type: 'rent',
            price: 1450,
            surface: 165,
            rooms: 5,
            tags: ['jardin', 'garage', 'calme', 'école proche'],
            owner_id: owner1.id,
        },

        // Anvers
        {
            title: 'Penthouse avec terrasse panoramique',
            description: 'Exceptionnel penthouse au 8ème étage avec terrasse de 60m² offrant une vue panoramique sur les toits d\'Anvers. Finitions luxueuses.',
            address: 'Meir 50',
            city: 'Anvers',
            postal_code: '2000',
            region: 'Anvers',
            country: 'Belgique',
            latitude: 51.2194,
            longitude: 4.4025,
            property_type: 'apartment',
            listing_type: 'sale',
            price: 875000,
            surface: 190,
            rooms: 4,
            tags: ['penthouse', 'terrasse', 'vue panoramique', 'luxe'],
            owner_id: owner2.id,
        },
        {
            title: 'Appartement 2 chambres - Zuid',
            description: 'Appartement contemporain dans le quartier branché du Zuid. Proche des musées, restaurants et vie nocturne anversoise.',
            address: 'Leopold de Waelplaats 14',
            city: 'Anvers',
            postal_code: '2000',
            region: 'Anvers',
            country: 'Belgique',
            latitude: 51.2061,
            longitude: 4.3990,
            property_type: 'apartment',
            listing_type: 'rent',
            price: 980,
            surface: 72,
            rooms: 3,
            tags: ['contemporain', 'quartier branché', 'musées', 'vie nocturne'],
            owner_id: owner1.id,
        },

        // Bruges
        {
            title: 'Charmante maison de ville à Bruges',
            description: 'Maison de ville rénovée avec goût dans le centre historique de Bruges. Vue sur canal depuis le salon, jardin intérieur.',
            address: 'Dijver 9',
            city: 'Bruges',
            postal_code: '8000',
            region: 'Flandre Occidentale',
            country: 'Belgique',
            latitude: 51.2040,
            longitude: 3.2200,
            property_type: 'house',
            listing_type: 'sale',
            price: 420000,
            surface: 145,
            rooms: 4,
            tags: ['vue canal', 'centre historique', 'jardin', 'rénové'],
            owner_id: owner2.id,
        },

        // Namur
        {
            title: 'Appartement vue sur la Citadelle',
            description: 'Appartement 2 chambres avec balcon offrant une vue imprenable sur la Citadelle de Namur. Quartier calme, parking privé inclus.',
            address: 'Route Merveilleuse 34',
            city: 'Namur',
            postal_code: '5000',
            region: 'Namur',
            country: 'Belgique',
            latitude: 50.4647,
            longitude: 4.8628,
            property_type: 'apartment',
            listing_type: 'rent',
            price: 790,
            surface: 65,
            rooms: 3,
            tags: ['balcon', 'vue citadelle', 'parking inclus', 'calme'],
            owner_id: owner1.id,
        },

        // Louvain
        {
            title: 'Kot étudiant proche KU Leuven',
            description: 'Studio meublé entièrement équipé, idéal pour étudiant de la KU Leuven. Charges comprises (eau, électricité, internet).',
            address: 'Naamsestraat 118',
            city: 'Louvain',
            postal_code: '3000',
            region: 'Brabant Flamand',
            country: 'Belgique',
            latitude: 50.8748,
            longitude: 4.6988,
            property_type: 'studio',
            listing_type: 'rent',
            price: 580,
            surface: 22,
            rooms: 1,
            tags: ['meublé', 'charges comprises', 'étudiant', 'KU Leuven'],
            owner_id: owner2.id,
        },

        // Charleroi
        {
            title: 'Maison à rénover - Opportunité investissement',
            description: 'Maison 3 façades à rénover entièrement. Grand potentiel, jardin de 300m². Idéale pour investisseur ou famille bricoleur.',
            address: 'Rue de Marcinelle 45',
            city: 'Charleroi',
            postal_code: '6000',
            region: 'Hainaut',
            country: 'Belgique',
            latitude: 50.4108,
            longitude: 4.4444,
            property_type: 'house',
            listing_type: 'sale',
            price: 95000,
            surface: 130,
            rooms: 4,
            tags: ['à rénover', 'investissement', 'jardin', '3 façades'],
            owner_id: owner1.id,
        },
    ];

    let created = 0;
    for (const apt of apartments) {
        await prisma.apartment.create({ data: apt });
        created++;
        console.log(`  ✅ [${created}/${apartments.length}] ${apt.title}`);
    }

    console.log(`\n🎉 Done! ${created} apartments created in the database.`);
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
