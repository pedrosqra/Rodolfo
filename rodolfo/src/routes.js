import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Adicionar from './pages/AdicionarMaterias/addSubject';
import Home from '../src/pages/ListingMaterias/listSubjects';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{unmountOnBlur: true}}
        name="Matérias"
        component={Home}
      />
      <Tab.Screen name="Adicionar" component={Adicionar} />
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
