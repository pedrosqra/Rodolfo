import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Adicionar from './pages/AdicionarMaterias/index';
import Home from './pages/ListingMaterias/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Matérias') {
            iconName = 'book';
          } else if (route.name === 'Adicionar') {
            iconName = 'add-box';
          }

          return <Icon name={iconName} size={28} color={color} />;
        },
      })}
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#4169e1',
        inactiveTintColor: '#333',
      }}>
      <Tab.Screen
        name="Matérias"
        component={Home}
        options={{
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        options={{
          unmountOnBlur: true,
        }}
        name="Adicionar"
        component={Adicionar}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
