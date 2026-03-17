import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, Image, ActivityIndicator,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getPublicProfile } from '../api/api';

export default function UserPublicProfileScreen() {
  const { params } = useRoute();
  const { userId } = params;
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPublicProfile(userId)
      .then(({ data }) => setProfile(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) {
    return <View style={styles.center}><ActivityIndicator size="large" color="#e91e63" /></View>;
  }

  if (!profile) {
    return <View style={styles.center}><Text>Profil introuvable</Text></View>;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarInitial}>{(profile.firstname?.[0] || '?').toUpperCase()}</Text>
        </View>
        <Text style={styles.name}>{profile.firstname} {profile.lastname}</Text>
        {profile.bio ? <Text style={styles.bio}>{profile.bio}</Text> : null}
      </View>

      {/* Photos */}
      {profile.profilePhotos?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.photosRow}>
              {profile.profilePhotos.map((p) => (
                <Image key={p.id} source={{ uri: p.url }} style={styles.photo} />
              ))}
            </View>
          </ScrollView>
        </View>
      )}

      {/* Tenant criteria */}
      {profile.tenantProfile && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recherche</Text>
          {profile.tenantProfile.city && (
            <Text style={styles.criterion}>📍 {profile.tenantProfile.city}</Text>
          )}
          {profile.tenantProfile.min_price != null && (
            <Text style={styles.criterion}>
              💰 Budget : {profile.tenantProfile.min_price} – {profile.tenantProfile.max_price} €
            </Text>
          )}
          {profile.tenantProfile.property_type && (
            <Text style={styles.criterion}>🏠 Type : {profile.tenantProfile.property_type}</Text>
          )}
          {profile.tenantProfile.min_surface != null && (
            <Text style={styles.criterion}>
              📐 Surface : {profile.tenantProfile.min_surface} – {profile.tenantProfile.max_surface} m²
            </Text>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { backgroundColor: '#e91e63', paddingTop: 40, paddingBottom: 28, alignItems: 'center' },
  avatarCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: 'rgba(255,255,255,0.3)', justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  avatarInitial: { color: '#fff', fontSize: 36, fontWeight: 'bold' },
  name: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  bio: { color: 'rgba(255,255,255,0.85)', fontSize: 13, marginTop: 6, textAlign: 'center', paddingHorizontal: 24 },
  section: { backgroundColor: '#fff', margin: 16, borderRadius: 12, padding: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  sectionTitle: { fontSize: 15, fontWeight: '600', color: '#333', marginBottom: 10 },
  photosRow: { flexDirection: 'row', gap: 10 },
  photo: { width: 90, height: 90, borderRadius: 10 },
  criterion: { color: '#555', fontSize: 14, marginBottom: 6 },
});
