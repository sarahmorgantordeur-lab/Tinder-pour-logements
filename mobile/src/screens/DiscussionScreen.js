import React, { useEffect, useState, useCallback } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity,
  ActivityIndicator, RefreshControl,
} from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getConversations, getOwnerConversations } from '../api/api';
import { useAuth } from '../contexts/AuthContext';

export default function DiscussionScreen() {
  const { user } = useAuth();
  const navigation = useNavigation();
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const isOwnerOrAgency = user?.role === 'owner' || user?.role === 'agency';

  const load = async (silent = false) => {
    if (!silent) setLoading(true);
    try {
      const { data } = isOwnerOrAgency ? await getOwnerConversations() : await getConversations();
      setConversations(data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useFocusEffect(useCallback(() => { load(); }, []));

  const renderItem = ({ item }) => {
    const lastMsg = item.messages?.[item.messages.length - 1];
    const otherUser = isOwnerOrAgency ? item.tenant : item.owner;
    const name = otherUser
      ? `${otherUser.firstname} ${otherUser.lastname}`
      : 'Utilisateur';

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Conversation', { conversationId: item.id, title: name })}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{name[0]?.toUpperCase()}</Text>
        </View>
        <View style={styles.itemContent}>
          <View style={styles.itemHeader}>
            <Text style={styles.itemName}>{name}</Text>
            {item.property && (
              <Text style={styles.itemProperty} numberOfLines={1}>{item.property.title}</Text>
            )}
          </View>
          {lastMsg ? (
            <Text style={styles.lastMsg} numberOfLines={1}>{lastMsg.content}</Text>
          ) : (
            <Text style={styles.noMsg}>Aucun message</Text>
          )}
        </View>
        <Text style={styles.arrow}>›</Text>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <View style={styles.center}><ActivityIndicator size="large" color="#e91e63" /></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>
      {conversations.length === 0 ? (
        <View style={styles.center}>
          <Text style={{ fontSize: 48 }}>💬</Text>
          <Text style={styles.emptyTitle}>Aucune conversation</Text>
          <Text style={styles.emptyText}>
            {isOwnerOrAgency
              ? 'Vos conversations avec les locataires apparaîtront ici.'
              : 'Likez un logement pour démarrer une conversation.'}
          </Text>
        </View>
      ) : (
        <FlatList
          data={conversations}
          keyExtractor={(c) => String(c.id)}
          renderItem={renderItem}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => { setRefreshing(true); load(); }} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#e91e63', padding: 20, paddingBottom: 10 },
  item: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderColor: '#f0f0f0' },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: '#e91e63', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  avatarText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  itemContent: { flex: 1 },
  itemHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  itemName: { fontWeight: '600', fontSize: 15, color: '#222' },
  itemProperty: { color: '#aaa', fontSize: 11, maxWidth: 120 },
  lastMsg: { color: '#888', fontSize: 13, marginTop: 2 },
  noMsg: { color: '#ccc', fontSize: 13, marginTop: 2, fontStyle: 'italic' },
  arrow: { color: '#ccc', fontSize: 22, marginLeft: 8 },
  emptyTitle: { fontSize: 18, fontWeight: '600', color: '#555', marginTop: 12 },
  emptyText: { color: '#999', textAlign: 'center', marginTop: 8 },
});
