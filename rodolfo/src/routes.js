import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Adicionar from './pages/AdicionarMaterias/addSubject';
import Home from '../src/pages/ListingMaterias/listSubjects';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Matérias"
        component={Home}
        options={{
          tabBarLabel: 'Matérias',
          tabBarIcon: ({color, size}) => (
            <Icon name="book" color="#4169E1" size={28} />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Adicionar',
          tabBarIcon: ({color, size}) => (
            <Icon name="add-box" color="#4169E1" size={32} />
          ),
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
