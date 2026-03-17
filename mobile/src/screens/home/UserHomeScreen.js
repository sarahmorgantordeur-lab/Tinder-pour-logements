import React, { useEffect, useState, useRef } from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
  Animated, PanResponder, Dimensions, ActivityIndicator, Alert,
} from 'react-native';
import { getSwipeProperties, swipe } from '../../api/api';

const { width, height } = Dimensions.get('window');
const SWIPE_THRESHOLD = width * 0.3;

function PropertyCard({ property, onSwipeLeft, onSwipeRight }) {
  const pan = useRef(new Animated.ValueXY()).current;
  const rotate = pan.x.interpolate({ inputRange: [-width, 0, width], outputRange: ['-20deg', '0deg', '20deg'] });
  const likeOpacity = pan.x.interpolate({ inputRange: [0, SWIPE_THRESHOLD], outputRange: [0, 1], extrapolate: 'clamp' });
  const nopeOpacity = pan.x.interpolate({ inputRange: [-SWIPE_THRESHOLD, 0], outputRange: [1, 0], extrapolate: 'clamp' });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], { useNativeDriver: false }),
      onPanResponderRelease: (_, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          Animated.spring(pan, { toValue: { x: width * 1.5, y: gesture.dy }, useNativeDriver: false }).start(onSwipeRight);
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          Animated.spring(pan, { toValue: { x: -width * 1.5, y: gesture.dy }, useNativeDriver: false }).start(onSwipeLeft);
        } else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
        }
      },
    })
  ).current;

  const photo = property.photos?.[0];

  return (
    <Animated.View
      style={[styles.card, { transform: [{ translateX: pan.x }, { translateY: pan.y }, { rotate }] }]}
      {...panResponder.panHandlers}
    >
      {photo ? (
        <Image source={{ uri: photo }} style={styles.cardImage} />
      ) : (
        <View style={[styles.cardImage, styles.noPhoto]}>
          <Text style={styles.noPhotoText}>🏠</Text>
        </View>
      )}

      {/* Like / Nope overlays */}
      <Animated.View style={[styles.overlay, styles.likeOverlay, { opacity: likeOpacity }]}>
        <Text style={styles.overlayText}>J'AIME</Text>
      </Animated.View>
      <Animated.View style={[styles.overlay, styles.nopeOverlay, { opacity: nopeOpacity }]}>
        <Text style={styles.overlayTextNope}>PASSER</Text>
      </Animated.View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle} numberOfLines={1}>{property.title}</Text>
        <Text style={styles.cardLocation}>{property.city}</Text>
        <Text style={styles.cardPrice}>{property.price} €/mois</Text>
        <Text style={styles.cardType}>{property.property_type} · {property.surface} m²</Text>
      </View>
    </Animated.View>
  );
}

export default function UserHomeScreen() {
  const [properties, setProperties] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    setLoading(true);
    try {
      const { data } = await getSwipeProperties();
      setProperties(data);
      setEmpty(data.length === 0);
    } catch (e) {
      Alert.alert('Erreur', 'Impossible de charger les annonces');
    } finally {
      setLoading(false);
    }
  };

  const handleSwipe = async (direction) => {
    const current = properties[index];
    if (!current) return;
    try {
      await swipe(current.id, direction); // true = like, false = dislike
    } catch {}
    const next = index + 1;
    if (next >= properties.length) {
      setEmpty(true);
    }
    setIndex(next);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#e91e63" />
      </View>
    );
  }

  if (empty || index >= properties.length) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyIcon}>🏠</Text>
        <Text style={styles.emptyTitle}>Plus d'annonces !</Text>
        <Text style={styles.emptyText}>Reviens plus tard pour découvrir de nouveaux logements.</Text>
        <TouchableOpacity style={styles.refreshBtn} onPress={loadProperties}>
          <Text style={styles.refreshBtnText}>Rafraîchir</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const current = properties[index];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Découvrir</Text>
      <View style={styles.cardContainer}>
        {/* Render next card behind */}
        {properties[index + 1] && (
          <View style={[styles.card, styles.cardBehind]}>
            <View style={[styles.cardImage, styles.noPhoto]}>
              <Text style={styles.noPhotoText}>🏠</Text>
            </View>
          </View>
        )}
        <PropertyCard
          key={current.id}
          property={current}
          onSwipeLeft={() => handleSwipe(false)}
          onSwipeRight={() => handleSwipe(true)}
        />
      </View>

      {/* Action buttons */}
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.actionBtn, styles.dislikeBtn]} onPress={() => handleSwipe(false)}>
          <Text style={styles.actionBtnText}>✕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.likeBtn]} onPress={() => handleSwipe(true)}>
          <Text style={styles.actionBtnText}>♥</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#e91e63', padding: 20, paddingBottom: 10 },
  cardContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  card: {
    position: 'absolute',
    width: width - 32,
    height: height * 0.58,
    borderRadius: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    overflow: 'hidden',
  },
  cardBehind: { top: 8, transform: [{ scale: 0.97 }] },
  cardImage: { width: '100%', height: '70%', resizeMode: 'cover' },
  noPhoto: { backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' },
  noPhotoText: { fontSize: 48 },
  cardInfo: { padding: 14 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#222' },
  cardLocation: { color: '#888', marginTop: 2 },
  cardPrice: { fontSize: 16, color: '#e91e63', fontWeight: '700', marginTop: 4 },
  cardType: { color: '#aaa', fontSize: 12, marginTop: 2 },
  overlay: { position: 'absolute', top: 40, borderWidth: 4, borderRadius: 8, padding: 8 },
  likeOverlay: { left: 20, borderColor: '#4caf50', transform: [{ rotate: '-15deg' }] },
  nopeOverlay: { right: 20, borderColor: '#f44336', transform: [{ rotate: '15deg' }] },
  overlayText: { fontSize: 28, fontWeight: 'bold', color: '#4caf50' },
  overlayTextNope: { fontSize: 28, fontWeight: 'bold', color: '#f44336' },
  actions: { flexDirection: 'row', justifyContent: 'center', gap: 40, paddingVertical: 20 },
  actionBtn: { width: 64, height: 64, borderRadius: 32, justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.15, shadowRadius: 6, elevation: 4 },
  dislikeBtn: { backgroundColor: '#fff', borderWidth: 2, borderColor: '#f44336' },
  likeBtn: { backgroundColor: '#e91e63' },
  actionBtnText: { fontSize: 28, color: '#e91e63' },
  emptyIcon: { fontSize: 64 },
  emptyTitle: { fontSize: 22, fontWeight: 'bold', marginTop: 16, color: '#333' },
  emptyText: { color: '#888', textAlign: 'center', marginTop: 8 },
  refreshBtn: { marginTop: 24, backgroundColor: '#e91e63', paddingHorizontal: 28, paddingVertical: 12, borderRadius: 8 },
  refreshBtnText: { color: '#fff', fontWeight: '600' },
});
