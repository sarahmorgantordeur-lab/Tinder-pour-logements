/**
 * Service de géocodage utilisant l'API Nominatim (OpenStreetMap)
 * Gratuit et sans clé API, mais respecter les limites d'utilisation :
 * - Max 1 requête par seconde
 * - Inclure un User-Agent descriptif
 */

const NOMINATIM_URL = 'https://nominatim.openstreetmap.org';
const USER_AGENT = 'FindMyRoof/1.0 (contact@findmyroof.com)';

class GeocodingService {
    /**
     * Convertit une adresse en coordonnées GPS (latitude, longitude)
     * @param {string} address - L'adresse complète
     * @param {string} city - La ville (optionnel)
     * @param {string} postalCode - Le code postal (optionnel)
     * @param {string} country - Le pays (défaut: France)
     * @returns {Promise<{latitude: number, longitude: number, displayName: string} | null>}
     */
    static async geocodeAddress(address, city = null, postalCode = null, country = 'France') {
        try {
            // Construire la requête de recherche
            let query = address;
            if (city) query += `, ${city}`;
            if (postalCode) query += `, ${postalCode}`;
            if (country) query += `, ${country}`;

            const params = new URLSearchParams({
                q: query,
                format: 'json',
                limit: '1',
                addressdetails: '1'
            });

            const response = await fetch(`${NOMINATIM_URL}/search?${params}`, {
                headers: {
                    'User-Agent': USER_AGENT,
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                console.error('Geocoding API error:', response.status);
                return null;
            }

            const data = await response.json();

            if (data.length === 0) {
                console.warn('No geocoding results for:', query);
                return null;
            }

            const result = data[0];
            return {
                latitude: parseFloat(result.lat),
                longitude: parseFloat(result.lon),
                displayName: result.display_name,
                addressDetails: result.address || null
            };
        } catch (error) {
            console.error('Geocoding error:', error.message);
            return null;
        }
    }

    /**
     * Convertit des coordonnées GPS en adresse (reverse geocoding)
     * @param {number} latitude
     * @param {number} longitude
     * @returns {Promise<{address: string, city: string, postalCode: string, region: string, country: string} | null>}
     */
    static async reverseGeocode(latitude, longitude) {
        try {
            const params = new URLSearchParams({
                lat: latitude.toString(),
                lon: longitude.toString(),
                format: 'json',
                addressdetails: '1'
            });

            const response = await fetch(`${NOMINATIM_URL}/reverse?${params}`, {
                headers: {
                    'User-Agent': USER_AGENT,
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                console.error('Reverse geocoding API error:', response.status);
                return null;
            }

            const data = await response.json();

            if (!data || data.error) {
                console.warn('No reverse geocoding results for:', latitude, longitude);
                return null;
            }

            const addr = data.address || {};
            return {
                address: data.display_name,
                street: addr.road || addr.pedestrian || addr.footway || '',
                houseNumber: addr.house_number || '',
                city: addr.city || addr.town || addr.village || addr.municipality || '',
                postalCode: addr.postcode || '',
                region: addr.state || addr.county || '',
                country: addr.country || ''
            };
        } catch (error) {
            console.error('Reverse geocoding error:', error.message);
            return null;
        }
    }

    /**
     * Calcule la distance entre deux points GPS (formule de Haversine)
     * @param {number} lat1 - Latitude du point 1
     * @param {number} lon1 - Longitude du point 1
     * @param {number} lat2 - Latitude du point 2
     * @param {number} lon2 - Longitude du point 2
     * @returns {number} Distance en kilomètres
     */
    static calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Rayon de la Terre en km
        const dLat = this.toRadians(lat2 - lat1);
        const dLon = this.toRadians(lon2 - lon1);

        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    /**
     * Convertit des degrés en radians
     */
    static toRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    /**
     * Calcule la bounding box pour une recherche par rayon
     * @param {number} latitude - Latitude du centre
     * @param {number} longitude - Longitude du centre
     * @param {number} radiusKm - Rayon en kilomètres
     * @returns {{minLat: number, maxLat: number, minLon: number, maxLon: number}}
     */
    static getBoundingBox(latitude, longitude, radiusKm) {
        // 1 degré de latitude ≈ 111 km
        // 1 degré de longitude ≈ 111 km * cos(latitude)
        const latDelta = radiusKm / 111;
        const lonDelta = radiusKm / (111 * Math.cos(this.toRadians(latitude)));

        return {
            minLat: latitude - latDelta,
            maxLat: latitude + latDelta,
            minLon: longitude - lonDelta,
            maxLon: longitude + lonDelta
        };
    }

    /**
     * Vérifie si des coordonnées sont valides
     */
    static isValidCoordinates(latitude, longitude) {
        return (
            typeof latitude === 'number' &&
            typeof longitude === 'number' &&
            latitude >= -90 && latitude <= 90 &&
            longitude >= -180 && longitude <= 180
        );
    }
}

export default GeocodingService;
