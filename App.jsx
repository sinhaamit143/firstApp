import { StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Create from './src/screens/Create';
import Reels from './src/screens/Reels';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();


const getTabBarIcon = (route, focused, color, size) => {
  let iconName;

  if (route.name === 'Home') {
    iconName = focused ? 'home' : 'home-outline';
  } else if (route.name === 'Search') {
    iconName = focused ? 'search' : 'search-outline';
  } else if (route.name === 'Create') {
    iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
  } else if (route.name === 'Reels') {
    iconName = focused ? 'film' : 'film-outline';
  } else if (route.name === 'Profile') {
    iconName = focused ? 'person' : 'person-outline';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route, focused, color, size),
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Search" component={Search} options={{ tabBarLabel: 'Search' }} />
      <Tab.Screen name="Create" component={Create} options={{ tabBarLabel: 'Create' }} />
      <Tab.Screen name="Reels" component={Reels} options={{ tabBarLabel: 'Reels' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={styles.navigation}>
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
  },
});
