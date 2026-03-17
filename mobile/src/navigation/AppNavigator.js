import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useAuth } from '../contexts/AuthContext';

// Auth
import LandingScreen from '../screens/auth/LandingScreen';

// Home screens (role-based)
import UserHomeScreen from '../screens/home/UserHomeScreen';
import OwnerHomeScreen from '../screens/home/OwnerHomeScreen';
import AgencyHomeScreen from '../screens/home/AgencyHomeScreen';

// Other screens
import DiscussionScreen from '../screens/DiscussionScreen';
import ConversationScreen from '../screens/ConversationScreen';
import AgendaScreen from '../screens/AgendaScreen';
import ProfileScreen from '../screens/ProfileScreen';
import UserPublicProfileScreen from '../screens/UserPublicProfileScreen';
import CreateAnnouncementScreen from '../screens/CreateAnnouncementScreen';
import EditAnnouncementScreen from '../screens/EditAnnouncementScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab({ role }) {
  if (role === 'owner') return <OwnerHomeScreen />;
  if (role === 'agency') return <AgencyHomeScreen />;
  return <UserHomeScreen />;
}

function MainTabs() {
  const { user } = useAuth();
  const role = user?.role;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#fff', borderTopColor: '#eee' },
        tabBarActiveTintColor: '#e91e63',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="Home"
        options={{ title: role === 'user' ? 'Découvrir' : 'Mes annonces', tabBarLabel: 'Accueil' }}
      >
        {() => <HomeTab role={role} />}
      </Tab.Screen>

      <Tab.Screen
        name="Discussions"
        component={DiscussionScreen}
        options={{ title: 'Messages', tabBarLabel: 'Messages' }}
      />

      <Tab.Screen
        name="Agenda"
        component={AgendaScreen}
        options={{ title: 'Agenda', tabBarLabel: 'Agenda' }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profil', tabBarLabel: 'Profil' }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#e91e63" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <Stack.Screen name="Landing" component={LandingScreen} />
        ) : (
          <>
            <Stack.Screen name="Main" component={MainTabs} />
            <Stack.Screen
              name="Conversation"
              component={ConversationScreen}
              options={{ headerShown: true, title: 'Conversation', headerTintColor: '#e91e63' }}
            />
            <Stack.Screen
              name="UserPublicProfile"
              component={UserPublicProfileScreen}
              options={{ headerShown: true, title: 'Profil', headerTintColor: '#e91e63' }}
            />
            <Stack.Screen
              name="CreateAnnouncement"
              component={CreateAnnouncementScreen}
              options={{ headerShown: true, title: 'Nouvelle annonce', headerTintColor: '#e91e63' }}
            />
            <Stack.Screen
              name="EditAnnouncement"
              component={EditAnnouncementScreen}
              options={{ headerShown: true, title: 'Modifier l\'annonce', headerTintColor: '#e91e63' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
