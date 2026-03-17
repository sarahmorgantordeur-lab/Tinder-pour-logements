import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity,
  Image, Alert, ActivityIndicator, RefreshControl,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getMyProperties, updatePropertyStatus, deleteProperty } from '../../api/api';

const STATUS_LABELS = {
  draft: { label: 'Brouillon', color: '#9e9e9e' },
  published: { label: 'Publié', color: '#4caf50' },
  rented: { label: 'Loué', color: '#2196f3' },
  archived: { label: 'Archivé', color: '#ff9800' },
};

const STATUS_ACTIONS = {
  draft: ['published'],
  published: ['rented', 'archived'],
  rented: ['archived'],
  archived: ['published'],
};

function PropertyItem({ property, onStatusChange, onDelete, onEdit }) {
  const photo = property.photos?.[0];
  const status = STATUS_LABELS[property.status] || STATUS_LABELS.draft;

  return (
    <View style={styles.card}>
      {photo ? (
        <Image source={{ uri: photo }} style={styles.cardImage} />
      ) : (
        <View style={[styles.cardImage, styles.noPhoto]}>
          <Text style={{ fontSize: 32 }}>🏠</Text>
        </View>
      )}
      <View style={styles.cardBody}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle} numberOfLines={1}>{property.title}</Text>
          <View style={[styles.badge, { backgroundColor: status.color }]}>
            <Text style={styles.badgeText}>{status.label}</Text>
          </View>
        </View>
        <Text style={styles.cardCity}>{property.city}</Text>
        <Text style={styles.cardPrice}>{property.price} €/mois</Text>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn} onPress={() => onEdit(property)}>
            <Text style={styles.actionBtnText}>✏️ Modifier</Text>
          </TouchableOpacity>
          {STATUS_ACTIONS[property.status]?.map((s) => (
            <TouchableOpacity
              key={s}
              style={[styles.actionBtn, { borderColor: STATUS_LABELS[s]?.color }]}
              onPress={() => onStatusChange(property.id, s)}
            >
              <Text style={[styles.actionBtnText, { color: STATUS_LABELS[s]?.color }]}>
                → {STATUS_LABELS[s]?.label}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={[styles.actionBtn, styles.deleteBtn]} onPress={() => onDelete(property.id)}>
            <Text style={[styles.actionBtnText, { color: '#f44336' }]}>🗑️ Supprimer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default function OwnerHomeScreen() {
  const navigation = useNavigation();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const load = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const { data } = await getMyProperties();
      setProperties(data);
    } catch {
      Alert.alert('Erreur', 'Impossible de charger vos annonces');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(useCallback(() => { load(); }, []));

  const handleStatusChange = async (id, status) => {
    try {
      await updatePropertyStatus(id, status);
      load(true);
    } catch {
      Alert.alert('Erreur', 'Impossible de changer le statut');
    }
  };

  const handleDelete = (id) => {
    Alert.alert('Supprimer', 'Supprimer cette annonce ?', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Supprimer', style: 'destructive', onPress: async () => {
          try {
            await deleteProperty(id);
            load(true);
          } catch {
            Alert.alert('Erreur', 'Impossible de supprimer');
          }
        }
      },
    ]);
  };

  if (loading) {
    return <View style={styles.center}><ActivityIndicator size="large" color="#e91e63" /></View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Mes annonces</Text>
        <TouchableOpacity
          style={styles.newBtn}
          onPress={() => navigation.navigate('CreateAnnouncement')}
        >
          <Text style={styles.newBtnText}>+ Ajouter</Text>
        </TouchableOpacity>
      </View>

      {properties.length === 0 ? (
        <View style={styles.center}>
          <Text style={{ fontSize: 48 }}>🏠</Text>
          <Text style={styles.emptyTitle}>Aucune annonce</Text>
          <TouchableOpacity style={styles.newBtnBig} onPress={() => navigation.navigate('CreateAnnouncement')}>
            <Text style={styles.newBtnText}>Créer ma première annonce</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={properties}
          keyExtractor={(p) => String(p.id)}
          renderItem={({ item }) => (
            <PropertyItem
              property={item}
              onStatusChange={handleStatusChange}
              onDelete={handleDelete}
              onEdit={(p) => navigation.navigate('EditAnnouncement', { property: p })}
            />
          )}
          contentContainerStyle={{ padding: 16, gap: 16 }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); load(); }} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, paddingBottom: 10 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#e91e63' },
  newBtn: { backgroundColor: '#e91e63', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8 },
  newBtnBig: { marginTop: 20, backgroundColor: '#e91e63', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 8 },
  newBtnText: { color: '#fff', fontWeight: '600' },
  emptyTitle: { fontSize: 18, fontWeight: '600', color: '#555', marginTop: 12 },
  card: { backgroundColor: '#fff', borderRadius: 12, overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 6, elevation: 3 },
  cardImage: { width: '100%', height: 160, resizeMode: 'cover', backgroundColor: '#eee', justifyContent: 'center', alignItems: 'center' },
  noPhoto: { backgroundColor: '#f5f5f5' },
  cardBody: { padding: 14 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#222', flex: 1, marginRight: 8 },
  badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 12 },
  badgeText: { color: '#fff', fontSize: 11, fontWeight: '600' },
  cardCity: { color: '#888', marginTop: 2 },
  cardPrice: { color: '#e91e63', fontWeight: '700', fontSize: 15, marginTop: 4 },
  actions: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 12 },
  actionBtn: { borderWidth: 1, borderColor: '#ddd', borderRadius: 6, paddingHorizontal: 10, paddingVertical: 5 },
  deleteBtn: { borderColor: '#ffcdd2' },
  actionBtnText: { fontSize: 12, color: '#555' },
});
