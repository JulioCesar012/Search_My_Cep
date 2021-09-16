import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/home';
import About from './src/pages/about';

import IonicIcons from 'react-native-vector-icons/Ionicons';
import Doc from './src/pages/doc';

export default function App() {

  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if(route.name === 'Procurar') {
            iconName = focused ? 'search-outline' : 'search-outline'
          } else if (route.name === 'Sobre o app') {
            iconName = focused ? 'help-circle-outline' : 'help-circle-outline'
          } else if (route.name === 'Como usar?') {
            iconName = focused ? 'document-text-outline' : 'document-text-outline'
          }

          return <IonicIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFF',
        tabBarActiveBackgroundColor: '#26a0da',
        tabBarInactiveBackgroundColor: 'gray',
        tabBarInactiveTintColor: '#FFF',
      })}>
        <Tab.Screen name="Procurar" component={Home} options={{ headerShown: false, tabBarItemStyle: { borderWidth: 1, borderColor: 'rgba(117, 117, 115, 1)', paddingBottom: 1 } }} />
        <Tab.Screen name="Sobre o app" component={About} options={{ headerShown: false, tabBarItemStyle: { borderWidth: 1, borderColor: 'rgba(117, 117, 115, 1)', paddingBottom: 1 } }} />
        <Tab.Screen name="Como usar?" component={Doc} options={{ headerShown: false, tabBarItemStyle: { borderWidth: 1, borderColor: 'rgba(117, 117, 115, 1)', paddingBottom: 1 } }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
