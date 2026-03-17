import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity,
  Alert, ActivityIndicator, Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { createProperty, uploadPropertyPhotos } from '../api/api';

const PROPERTY_TYPES = ['apartment', 'house', 'studio', 'loft', 'villa', 'other'];
const TYPE_LABELS = {
  apartment: 'Appartement', house: 'Maison', studio: 'Studio',
  loft: 'Loft', villa: 'Villa', other: 'Autre',
};

export default function CreateAnnouncementScreen() {
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [surface, setSurface] = useState('');
  const [rooms, setRooms] = useState('');
  const [propertyType, setPropertyType] = useState('apartment');
  const [photos, setPhotos] = useState([]);
  const [saving, setSaving] = useState(false);

  const handleAddPhoto = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) return Alert.alert('Permission refusée', 'Accès à la galerie requis');

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.8,
    });
    if (result.canceled) return;
    setPhotos((prev) => [...prev, ...result.assets]);
  };

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCreate = async () => {
    if (!title || !city || !price || !surface) {
      return Alert.alert('Erreur', 'Titre, ville, prix et surface sont requis');
    }

    setSaving(true);
    try {
      const { data } = await createProperty({
        title,
        description,
        city,
        address,
        price: parseFloat(price),
        surface: parseFloat(surface),
        rooms: rooms ? parseInt(rooms) : undefined,
        property_type: propertyType,
      });

      // Upload photos if any
      if (photos.length > 0) {
        const formData = new FormData();
        photos.forEach((asset) => {
          formData.append('pictures', { uri: asset.uri, name: 'photo.jpg', type: 'image/jpeg' });
        });
        await uploadPropertyPhotos(data.id, formData);
      }

      Alert.alert('Succès', 'Annonce créée !', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch (e) {
      Alert.alert('Erreur', e.response?.data?.message || 'Impossible de créer l\'annonce');
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
      <Text style={styles.label}>Titre *</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Bel appartement centre-ville" />

      <Text style={styles.label}>Description</Text>
      <TextInput style={[styles.input, { height: 100 }]} value={description} onChangeText={setDescription} placeholder="Description du logement…" multiline />

      <Text style={styles.label}>Ville *</Text>
      <TextInput style={styles.input} value={city} onChangeText={setCity} placeholder="Paris" />

      <Text style={styles.label}>Adresse</Text>
      <TextInput style={styles.input} value={address} onChangeText={setAddress} placeholder="12 rue de la Paix" />

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Prix (€/mois) *</Text>
          <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" placeholder="800" />
        </View>
        <View style={{ width: 12 }} />
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Surface (m²) *</Text>
          <TextInput style={styles.input} value={surface} onChangeText={setSurface} keyboardType="numeric" placeholder="35" />
        </View>
      </View>

      <Text style={styles.label}>Nombre de pièces</Text>
      <TextInput style={styles.input} value={rooms} onChangeText={setRooms} keyboardType="numeric" placeholder="2" />

      <Text style={styles.label}>Type de logement</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        <View style={styles.typeRow}>
          {PROPERTY_TYPES.map((t) => (
            <TouchableOpacity
              key={t}
              style={[styles.typeBtn, propertyType === t && styles.typeBtnActive]}
              onPress={() => setPropertyType(t)}
            >
              <Text style={[styles.typeBtnText, propertyType === t && styles.typeBtnTextActive]}>
                {TYPE_LABELS[t]}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Photos */}
      <View style={styles.photosHeader}>
        <Text style={styles.label}>Photos</Text>
        <TouchableOpacity onPress={handleAddPhoto}>
          <Text style={styles.addLink}>+ Ajouter</Text>
        </TouchableOpacity>
      </View>
      {photos.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
          <View style={styles.photosRow}>
            {photos.map((p, i) => (
              <TouchableOpacity key={i} onLongPress={() => removePhoto(i)}>
                <Image source={{ uri: p.uri }} style={styles.photoThumb} />
                <View style={styles.removeIcon}><Text style={{ color: '#fff', fontWeight: 'bold' }}>✕</Text></View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <TouchableOpacity style={styles.createBtn} onPress={handleCreate} disabled={saving}>
        {saving ? <ActivityIndicator color="#fff" /> : <Text style={styles.createBtnText}>Créer l'annonce</Text>}
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  label: { fontSize: 13, fontWeight: '600', color: '#444', marginBottom: 5, marginTop: 12 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 11, fontSize: 14, backgroundColor: '#fafafa' },
  row: { flexDirection: 'row' },
  typeRow: { flexDirection: 'row', gap: 8 },
  typeBtn: { borderWidth: 1, borderColor: '#ddd', borderRadius: 20, paddingHorizontal: 14, paddingVertical: 7 },
  typeBtnActive: { borderColor: '#e91e63', backgroundColor: '#fce4ec' },
  typeBtnText: { color: '#666', fontSize: 13 },
  typeBtnTextActive: { color: '#e91e63', fontWeight: '600' },
  photosHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  addLink: { color: '#e91e63', fontWeight: '600', fontSize: 14 },
  photosRow: { flexDirection: 'row', gap: 10 },
  photoThumb: { width: 90, height: 90, borderRadius: 10 },
  removeIcon: { position: 'absolute', top: 4, right: 4, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center' },
  createBtn: { backgroundColor: '#e91e63', borderRadius: 8, paddingVertical: 15, alignItems: 'center', marginTop: 24 },
  createBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
