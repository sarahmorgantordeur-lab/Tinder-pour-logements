import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  ScrollView, Alert, ActivityIndicator, KeyboardAvoidingView, Platform,
} from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { searchAgencies } from '../../api/api';

const ROLES = [
  { value: 'user', label: 'Locataire' },
  { value: 'owner', label: 'Propriétaire' },
  { value: 'agency', label: 'Agence' },
];

export default function LandingScreen() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [loading, setLoading] = useState(false);

  // Login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Register form
  const [regFirstname, setRegFirstname] = useState('');
  const [regLastname, setRegLastname] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regRole, setRegRole] = useState('user');
  const [agencyQuery, setAgencyQuery] = useState('');
  const [agencySuggestions, setAgencySuggestions] = useState([]);
  const [selectedAgencyId, setSelectedAgencyId] = useState(null);

  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) return Alert.alert('Erreur', 'Remplissez tous les champs');
    setLoading(true);
    try {
      await login(loginEmail, loginPassword);
    } catch (e) {
      Alert.alert('Erreur', e.response?.data?.message || 'Identifiants incorrects');
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    if (!regFirstname || !regLastname || !regEmail || !regPassword) {
      return Alert.alert('Erreur', 'Remplissez tous les champs');
    }
    setLoading(true);
    try {
      const payload = {
        firstname: regFirstname,
        lastname: regLastname,
        email: regEmail,
        password: regPassword,
        role: regRole,
        ...(regRole === 'user' && selectedAgencyId ? { agencyId: selectedAgencyId } : {}),
      };
      await register(payload);
    } catch (e) {
      Alert.alert('Erreur', e.response?.data?.message || 'Inscription échouée');
    } finally {
      setLoading(false);
    }
  };

  const handleAgencySearch = async (q) => {
    setAgencyQuery(q);
    setSelectedAgencyId(null);
    if (q.length < 3) { setAgencySuggestions([]); return; }
    try {
      const { data } = await searchAgencies(q);
      setAgencySuggestions(data);
    } catch { setAgencySuggestions([]); }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.logo}>🏠</Text>
        <Text style={styles.title}>Tinder pour logements</Text>
        <Text style={styles.subtitle}>Trouve ton appart' idéal</Text>

        {/* Tab switch */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, mode === 'login' && styles.tabActive]}
            onPress={() => setMode('login')}
          >
            <Text style={[styles.tabText, mode === 'login' && styles.tabTextActive]}>Connexion</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, mode === 'register' && styles.tabActive]}
            onPress={() => setMode('register')}
          >
            <Text style={[styles.tabText, mode === 'register' && styles.tabTextActive]}>Inscription</Text>
          </TouchableOpacity>
        </View>

        {mode === 'login' ? (
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={loginEmail}
              onChangeText={setLoginEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              value={loginPassword}
              onChangeText={setLoginPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.btn} onPress={handleLogin} disabled={loading}>
              {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>Se connecter</Text>}
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.form}>
            <TextInput style={styles.input} placeholder="Prénom" value={regFirstname} onChangeText={setRegFirstname} />
            <TextInput style={styles.input} placeholder="Nom" value={regLastname} onChangeText={setRegLastname} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={regEmail}
              onChangeText={setRegEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              value={regPassword}
              onChangeText={setRegPassword}
              secureTextEntry
            />

            {/* Role selector */}
            <Text style={styles.label}>Je suis :</Text>
            <View style={styles.roleRow}>
              {ROLES.map((r) => (
                <TouchableOpacity
                  key={r.value}
                  style={[styles.roleBtn, regRole === r.value && styles.roleBtnActive]}
                  onPress={() => setRegRole(r.value)}
                >
                  <Text style={[styles.roleBtnText, regRole === r.value && styles.roleBtnTextActive]}>
                    {r.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Agency search for tenants */}
            {regRole === 'user' && (
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Rechercher une agence (optionnel)"
                  value={agencyQuery}
                  onChangeText={handleAgencySearch}
                />
                {agencySuggestions.map((a) => (
                  <TouchableOpacity
                    key={a.id}
                    style={styles.suggestion}
                    onPress={() => {
                      setSelectedAgencyId(a.id);
                      setAgencyQuery(a.nom_agence);
                      setAgencySuggestions([]);
                    }}
                  >
                    <Text>{a.nom_agence}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            <TouchableOpacity style={styles.btn} onPress={handleRegister} disabled={loading}>
              {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.btnText}>S'inscrire</Text>}
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 24, backgroundColor: '#fff', alignItems: 'center' },
  logo: { fontSize: 64, marginTop: 48 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#e91e63', marginTop: 8 },
  subtitle: { fontSize: 14, color: '#999', marginBottom: 32 },
  tabs: { flexDirection: 'row', marginBottom: 24, borderRadius: 8, overflow: 'hidden', borderWidth: 1, borderColor: '#e91e63' },
  tab: { flex: 1, paddingVertical: 10, alignItems: 'center', backgroundColor: '#fff' },
  tabActive: { backgroundColor: '#e91e63' },
  tabText: { color: '#e91e63', fontWeight: '600' },
  tabTextActive: { color: '#fff' },
  form: { width: '100%' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, marginBottom: 12, fontSize: 15 },
  btn: { backgroundColor: '#e91e63', borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginTop: 8 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  label: { fontWeight: '600', marginBottom: 8, color: '#333' },
  roleRow: { flexDirection: 'row', gap: 8, marginBottom: 16 },
  roleBtn: { flex: 1, borderWidth: 1, borderColor: '#ddd', borderRadius: 8, paddingVertical: 10, alignItems: 'center' },
  roleBtnActive: { borderColor: '#e91e63', backgroundColor: '#fce4ec' },
  roleBtnText: { color: '#666' },
  roleBtnTextActive: { color: '#e91e63', fontWeight: '600' },
  suggestion: { padding: 10, borderBottomWidth: 1, borderColor: '#eee', backgroundColor: '#fafafa' },
});
