import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity,
  Modal, TextInput, Alert, ActivityIndicator, RefreshControl, ScrollView,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {
  getAppointments, getTenantAppointments,
  createAppointment, updateAppointment, deleteAppointment,
} from '../api/api';
import { useAuth } from '../contexts/AuthContext';

const STATUS_LABELS = {
  pending: { label: 'En attente', color: '#ff9800' },
  confirmed: { label: 'Confirmé', color: '#4caf50' },
  cancelled: { label: 'Annulé', color: '#f44336' },
};

function AppointmentItem({ item, onEdit, onDelete, isOwner }) {
  const status = STATUS_LABELS[item.status] || STATUS_LABELS.pending;
  const date = new Date(item.date);

  return (
    <View style={styles.card}>
      <View style={styles.cardLeft}>
        <Text style={styles.dateDay}>{date.getDate()}</Text>
        <Text style={styles.dateMonth}>{date.toLocaleString('fr-FR', { month: 'short' }).toUpperCase()}</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle} numberOfLines={1}>
            {item.property?.title || 'Logement'}
          </Text>
          <View style={[styles.badge, { backgroundColor: status.color }]}>
            <Text style={styles.badgeText}>{status.label}</Text>
          </View>
        </View>
        <Text style={styles.cardTime}>
          {date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
        </Text>
        {item.notes ? <Text style={styles.cardNotes} numberOfLines={2}>{item.notes}</Text> : null}
        {isOwner && item.tenant && (
          <Text style={styles.cardParticipant}>
            👤 {item.tenant.firstname} {item.tenant.lastname}
          </Text>
        )}
        {!isOwner && item.owner && (
          <Text style={styles.cardParticipant}>
            🏠 {item.owner.firstname} {item.owner.lastname}
          </Text>
        )}
      </View>
      {isOwner && (
        <View style={styles.cardActions}>
          <TouchableOpacity onPress={() => onEdit(item)}>
            <Text style={styles.actionIcon}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(item.id)}>
            <Text style={styles.actionIcon}>🗑️</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default function AgendaScreen() {
  const { user } = useAuth();
  const isOwner = user?.role === 'owner' || user?.role === 'agency';

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [editing, setEditing] = useState(null);

  // Form fields
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState('pending');

  const load = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const { data } = isOwner ? await getAppointments() : await getTenantAppointments();
      setAppointments(data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(useCallback(() => { load(); }, []));

  const openNew = () => {
    setEditing(null);
    setDate('');
    setNotes('');
    setStatus('pending');
    setModalVisible(true);
  };

  const openEdit = (appt) => {
    setEditing(appt);
    setDate(new Date(appt.date).toISOString().slice(0, 16).replace('T', ' '));
    setNotes(appt.notes || '');
    setStatus(appt.status);
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (!date.trim()) return Alert.alert('Erreur', 'La date est requise');
    try {
      const payload = { date: new Date(date).toISOString(), notes, status };
      if (editing) {
        await updateAppointment(editing.id, payload);
      } else {
        await createAppointment(payload);
      }
      setModalVisible(false);
      load(true);
    } catch {
      Alert.alert('Erreur', 'Impossible de sauvegarder');
    }
  };

  const handleDelete = (id) => {
    Alert.alert('Supprimer', 'Supprimer ce rendez-vous ?', [
      { text: 'Annuler', style: 'cancel' },
      {
        text: 'Supprimer', style: 'destructive', onPress: async () => {
          await deleteAppointment(id);
          load(true);
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
        <Text style={styles.header}>Agenda</Text>
        {isOwner && (
          <TouchableOpacity style={styles.newBtn} onPress={openNew}>
            <Text style={styles.newBtnText}>+ Rendez-vous</Text>
          </TouchableOpacity>
        )}
      </View>

      {appointments.length === 0 ? (
        <View style={styles.center}>
          <Text style={{ fontSize: 48 }}>📅</Text>
          <Text style={styles.emptyTitle}>Aucun rendez-vous</Text>
        </View>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(a) => String(a.id)}
          renderItem={({ item }) => (
            <AppointmentItem
              item={item}
              isOwner={isOwner}
              onEdit={openEdit}
              onDelete={handleDelete}
            />
          )}
          contentContainerStyle={{ padding: 16, gap: 12 }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); load(); }} />}
        />
      )}

      {/* Create/Edit modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{editing ? 'Modifier le RDV' : 'Nouveau rendez-vous'}</Text>

            <Text style={styles.inputLabel}>Date et heure (AAAA-MM-JJ HH:MM)</Text>
            <TextInput
              style={styles.input}
              placeholder="2025-06-15 14:00"
              value={date}
              onChangeText={setDate}
            />

            <Text style={styles.inputLabel}>Notes</Text>
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Notes optionnelles…"
              value={notes}
              onChangeText={setNotes}
              multiline
            />

            {editing && (
              <>
                <Text style={styles.inputLabel}>Statut</Text>
                <View style={styles.statusRow}>
                  {Object.entries(STATUS_LABELS).map(([key, val]) => (
                    <TouchableOpacity
                      key={key}
                      style={[styles.statusBtn, status === key && { backgroundColor: val.color }]}
                      onPress={() => setStatus(key)}
                    >
                      <Text style={[styles.statusBtnText, status === key && { color: '#fff' }]}>{val.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}

            <View style={styles.modalActions}>
              <TouchableOpacity style={styles.cancelBtn} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelBtnText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                <Text style={styles.saveBtnText}>Sauvegarder</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, paddingBottom: 10 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#e91e63' },
  newBtn: { backgroundColor: '#e91e63', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 8 },
  newBtnText: { color: '#fff', fontWeight: '600' },
  emptyTitle: { fontSize: 18, fontWeight: '600', color: '#555', marginTop: 12 },
  card: { backgroundColor: '#fff', borderRadius: 12, flexDirection: 'row', overflow: 'hidden', shadowColor: '#000', shadowOpacity: 0.07, shadowRadius: 5, elevation: 2 },
  cardLeft: { width: 56, backgroundColor: '#e91e63', justifyContent: 'center', alignItems: 'center', padding: 8 },
  dateDay: { color: '#fff', fontWeight: 'bold', fontSize: 22 },
  dateMonth: { color: '#ffcdd2', fontSize: 11 },
  cardContent: { flex: 1, padding: 12 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontWeight: '600', fontSize: 14, color: '#222', flex: 1 },
  badge: { paddingHorizontal: 7, paddingVertical: 2, borderRadius: 10 },
  badgeText: { color: '#fff', fontSize: 10, fontWeight: '600' },
  cardTime: { color: '#888', fontSize: 12, marginTop: 3 },
  cardNotes: { color: '#666', fontSize: 12, marginTop: 4 },
  cardParticipant: { color: '#aaa', fontSize: 11, marginTop: 4 },
  cardActions: { padding: 12, justifyContent: 'center', gap: 10 },
  actionIcon: { fontSize: 18 },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  modalContent: { backgroundColor: '#fff', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', color: '#222', marginBottom: 16 },
  inputLabel: { fontWeight: '600', color: '#444', marginBottom: 4, marginTop: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 11, fontSize: 14 },
  statusRow: { flexDirection: 'row', gap: 8, marginTop: 4 },
  statusBtn: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingVertical: 8, alignItems: 'center' },
  statusBtnText: { fontSize: 12, color: '#666' },
  modalActions: { flexDirection: 'row', gap: 12, marginTop: 20 },
  cancelBtn: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingVertical: 12, alignItems: 'center' },
  cancelBtnText: { color: '#666' },
  saveBtn: { flex: 1, backgroundColor: '#e91e63', borderRadius: 8, paddingVertical: 12, alignItems: 'center' },
  saveBtnText: { color: '#fff', fontWeight: '600' },
});
