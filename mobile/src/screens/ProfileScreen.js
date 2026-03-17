import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity,
  Image, Alert, ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { updateProfile, uploadProfilePhoto, getProfilePhotos, deleteProfilePhoto } from '../api/api';
import { useAuth } from '../contexts/AuthContext';

export default function ProfileScreen() {
  const { user, logout, refreshUser } = useAuth();

  const [firstname, setFirstname] = useState(user?.firstname || '');
  const [lastname, setLastname] = useState(user?.lastname || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [saving, setSaving] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [loadingPhotos, setLoadingPhotos] = useState(false);

  useEffect(() => {
    loadPhotos();
  }, []);

  const loadPhotos = async () => {
    setLoadingPhotos(true);
    try {
      const { data } = await getProfilePhotos();
      setPhotos(data);
    } catch {}
    setLoadingPhotos(false);
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateProfile({ firstname, lastname, phone, bio });
      await refreshUser();
      Alert.alert('Succès', 'Profil mis à jour');
    } catch {
      Alert.alert('Erreur', 'Impossible de sauvegarder');
    } finally {
      setSaving(false);
    }
  };

  const handleAddPhoto = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      return Alert.alert('Permission refusée', 'Accès à la galerie requis');
    }
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.8 });
    if (result.canceled) return;

    const asset = result.assets[0];
    const formData = new FormData();
    formData.append('photo', { uri: asset.uri, name: 'photo.jpg', type: 'image/jpeg' });

    try {
      await uploadProfilePhoto(formData);
      await loadPhotos();
    } catch {
      Alert.alert('Erreur', 'Impossible d\'uploader la photo');
    }
  };

  const handleDeletePhoto = async (photoId) => {
    Alert.alert('Supprimer', 'Supprimer cette photo ?', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Supprimer', style: 'destructive', onPress: async () => {
          try {
            await deleteProfilePhoto(photoId);
            await loadPhotos();
          } catch {
            Alert.alert('Erreur', 'Impossible de supprimer');
          }
        }
      },
    ]);
  };

  const roleLabel = { user: 'Locataire', owner: 'Propriétaire', agency: 'Agence' }[user?.role] || user?.role;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarInitial}>
            {(user?.firstname?.[0] || '?').toUpperCase()}
          </Text>
        </View>
        <Text style={styles.profileName}>{user?.firstname} {user?.lastname}</Text>
        <Text style={styles.profileRole}>{roleLabel}</Text>
        <Text style={styles.profileEmail}>{user?.email}</Text>
      </View>

      {/* Edit form */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informations personnelles</Text>

        <Text style={styles.label}>Prénom</Text>
        <TextInput style={styles.input} value={firstname} onChangeText={setFirstname} />

        <Text style={styles.label}>Nom</Text>
        <TextInput style={styles.input} value={lastname} onChangeText={setLastname} />

        <Text style={styles.label}>Téléphone</Text>
        <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

        <Text style={styles.label}>Bio</Text>
        <TextInput style={[styles.input, { height: 80 }]} value={bio} onChangeText={setBio} multiline />

        <TouchableOpacity style={styles.saveBtn} onPress={handleSave} disabled={saving}>
          {saving ? <ActivityIndicator color="#fff" /> : <Text style={styles.saveBtnText}>Sauvegarder</Text>}
        </TouchableOpacity>
      </View>

      {/* Photos */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Mes photos</Text>
          <TouchableOpacity onPress={handleAddPhoto}>
            <Text style={styles.addLink}>+ Ajouter</Text>
          </TouchableOpacity>
        </View>

        {loadingPhotos ? (
          <ActivityIndicator color="#e91e63" />
        ) : photos.length === 0 ? (
          <Text style={styles.emptyText}>Aucune photo</Text>
        ) : (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.photosRow}>
              {photos.map((p) => (
                <TouchableOpacity key={p.id} onLongPress={() => handleDeletePhoto(p.id)}>
                  <Image source={{ uri: p.url }} style={styles.photo} />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        )}
        <Text style={styles.hint}>Appui long pour supprimer une photo</Text>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
        <Text style={styles.logoutBtnText}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  profileHeader: { backgroundColor: '#e91e63', paddingTop: 60, paddingBottom: 30, alignItems: 'center' },
  avatarCircle: { width: 80, height: 80, borderRadius: 40, backgroundColor: 'rgba(255,255,255,0.3)', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  avatarInitial: { color: '#fff', fontSize: 36, fontWeight: 'bold' },
  profileName: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  profileRole: { color: 'rgba(255,255,255,0.8)', fontSize: 13, marginTop: 2 },
  profileEmail: { color: 'rgba(255,255,255,0.7)', fontSize: 12, marginTop: 2 },
  section: { backgroundColor: '#fff', margin: 16, borderRadius: 12, padding: 16, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#222', marginBottom: 12 },
  addLink: { color: '#e91e63', fontWeight: '600' },
  label: { fontSize: 13, fontWeight: '500', color: '#666', marginBottom: 4, marginTop: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 11, fontSize: 14, backgroundColor: '#fafafa' },
  saveBtn: { backgroundColor: '#e91e63', borderRadius: 8, paddingVertical: 13, alignItems: 'center', marginTop: 16 },
  saveBtnText: { color: '#fff', fontWeight: '600', fontSize: 15 },
  photosRow: { flexDirection: 'row', gap: 10, paddingVertical: 4 },
  photo: { width: 90, height: 90, borderRadius: 10 },
  emptyText: { color: '#bbb', fontStyle: 'italic' },
  hint: { color: '#ccc', fontSize: 11, marginTop: 6 },
  logoutBtn: { margin: 16, borderWidth: 1, borderColor: '#f44336', borderRadius: 8, paddingVertical: 13, alignItems: 'center' },
  logoutBtnText: { color: '#f44336', fontWeight: '600' },
});
