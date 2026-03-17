import React, { useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity,
  Alert, ActivityIndicator, Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { updateProperty, uploadPropertyPhotos, deletePropertyPhoto } from '../api/api';

const PROPERTY_TYPES = ['apartment', 'house', 'studio', 'loft', 'villa', 'other'];
const TYPE_LABELS = {
  apartment: 'Appartement', house: 'Maison', studio: 'Studio',
  loft: 'Loft', villa: 'Villa', other: 'Autre',
};

export default function EditAnnouncementScreen() {
  const navigation = useNavigation();
  const { params } = useRoute();
  const { property } = params;

  const [title, setTitle] = useState(property.title || '');
  const [description, setDescription] = useState(property.description || '');
  const [city, setCity] = useState(property.city || '');
  const [address, setAddress] = useState(property.address || '');
  const [price, setPrice] = useState(String(property.price || ''));
  const [surface, setSurface] = useState(String(property.surface || ''));
  const [rooms, setRooms] = useState(String(property.rooms || ''));
  const [propertyType, setPropertyType] = useState(property.property_type || 'apartment');
  const [existingPhotos, setExistingPhotos] = useState(property.photos || []);
  const [newPhotos, setNewPhotos] = useState([]);
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
    setNewPhotos((prev) => [...prev, ...result.assets]);
  };

  const handleDeleteExistingPhoto = async (photoUrl) => {
    Alert.alert('Supprimer', 'Supprimer cette photo ?', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Supprimer', style: 'destructive', onPress: async () => {
          try {
            await deletePropertyPhoto(property.id, photoUrl);
            setExistingPhotos((prev) => prev.filter((u) => u !== photoUrl));
          } catch {
            Alert.alert('Erreur', 'Impossible de supprimer');
          }
        }
      },
    ]);
  };

  const handleSave = async () => {
    if (!title || !city || !price || !surface) {
      return Alert.alert('Erreur', 'Titre, ville, prix et surface sont requis');
    }
    setSaving(true);
    try {
      await updateProperty(property.id, {
        title, description, city, address,
        price: parseFloat(price),
        surface: parseFloat(surface),
        rooms: rooms ? parseInt(rooms) : undefined,
        property_type: propertyType,
      });

      if (newPhotos.length > 0) {
        const formData = new FormData();
        newPhotos.forEach((a) => {
          formData.append('pictures', { uri: a.uri, name: 'photo.jpg', type: 'image/jpeg' });
        });
        await uploadPropertyPhotos(property.id, formData);
      }

      Alert.alert('Succès', 'Annonce mise à jour !', [
        { text: 'OK', onPress: () => navigation.goBack() }
      ]);
    } catch {
      Alert.alert('Erreur', 'Impossible de sauvegarder');
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
      <Text style={styles.label}>Titre *</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={[styles.input, { height: 100 }]} value={description} onChangeText={setDescription} multiline />

      <Text style={styles.label}>Ville *</Text>
      <TextInput style={styles.input} value={city} onChangeText={setCity} />

      <Text style={styles.label}>Adresse</Text>
      <TextInput style={styles.input} value={address} onChangeText={setAddress} />

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Prix (€/mois) *</Text>
          <TextInput style={styles.input} value={price} onChangeText={setPrice} keyboardType="numeric" />
        </View>
        <View style={{ width: 12 }} />
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Surface (m²) *</Text>
          <TextInput style={styles.input} value={surface} onChangeText={setSurface} keyboardType="numeric" />
        </View>
      </View>

      <Text style={styles.label}>Nombre de pièces</Text>
      <TextInput style={styles.input} value={rooms} onChangeText={setRooms} keyboardType="numeric" />

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

      {/* Existing photos */}
      {existingPhotos.length > 0 && (
        <>
          <Text style={styles.label}>Photos actuelles (appui long pour supprimer)</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
            <View style={styles.photosRow}>
              {existingPhotos.map((url) => (
                <TouchableOpacity key={url} onLongPress={() => handleDeleteExistingPhoto(url)}>
                  <Image source={{ uri: url }} style={styles.photoThumb} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </>
      )}

      {/* New photos */}
      <View style={styles.photosHeader}>
        <Text style={styles.label}>Ajouter des photos</Text>
        <TouchableOpacity onPress={handleAddPhoto}>
          <Text style={styles.addLink}>+ Ajouter</Text>
        </TouchableOpacity>
      </View>
      {newPhotos.length > 0 && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
          <View style={styles.photosRow}>
            {newPhotos.map((p, i) => (
              <TouchableOpacity key={i} onLongPress={() => setNewPhotos((prev) => prev.filter((_, j) => j !== i))}>
                <Image source={{ uri: p.uri }} style={styles.photoThumb} />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave} disabled={saving}>
        {saving ? <ActivityIndicator color="#fff" /> : <Text style={styles.saveBtnText}>Sauvegarder</Text>}
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
  saveBtn: { backgroundColor: '#e91e63', borderRadius: 8, paddingVertical: 15, alignItems: 'center', marginTop: 24 },
  saveBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
