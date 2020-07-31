import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './pages/ListingMaterias/index';
import Overview from './pages/Cards/OverviewCard/index';
import InsertData from './pages/Cards/InsertDataCard/index';
import Adicionar from './pages/AdicionarMaterias/index';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFF',
    card: '#156d85',
    text: '#FFF',
    notification: '#FFF',
  },
};

function Root({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#4169d8',
        },
        headerLeft: null,
        headerTitle: 'Rodolfo',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 28,
        },
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Overview" component={Overview} />
      <Stack.Screen name="InsertData" component={InsertData} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={Theme}>
      <Drawer.Navigator initialRouteName="Root">
        <Drawer.Screen
          options={{title: 'Matérias', unmountOnBlur: true}}
          name="Root"
          component={Root}
        />
        <Drawer.Screen
          options={{title: 'Adicionar Matérias'}}
          name="Adicionar"
          component={Adicionar}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
