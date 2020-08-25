import * as React from 'react';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './pages/ListingMaterias/index';
import Overview from './pages/Cards/OverviewCard/index';
import InsertData from './pages/Cards/InsertDataCard/index';
import Adicionar from './pages/AdicionarMaterias/index';
import DeleteGrade from './pages/DeleteGrade/index';

import Header from './components/header/index';
import Card from './components/card/index';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFF',
    card: '#577ae4',
    text: '#FFF',
    notification: '#FFF',
  },
};

function Root({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} />,
          };
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{headerLeft: null, headerTitle: 'Visão Geral'}}
        name="Overview"
        component={Overview}
      />
      <Stack.Screen
        options={{headerLeft: null, headerTitle: 'Inserir Dados'}}
        name="InsertData"
        component={InsertData}
      />
      <Stack.Screen
        options={{headerLeft: null, headerTitle: 'Excluir Nota'}}
        name="DeleteGrade"
        component={DeleteGrade}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Drawer.Navigator
        drawerContent={({navigation}) => <Card navigation={navigation} />}
        initialRouteName="Root">
        <Drawer.Screen
          options={{title: 'Matérias', unmountOnBlur: true}}
          name="Root"
          component={Root}
        />
        <Drawer.Screen name="Adicionar" component={Adicionar} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
