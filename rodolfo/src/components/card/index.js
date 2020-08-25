import React from 'react';
import {Container, CardContent, CardTitle} from './styles';
import {DrawerItem} from '@react-navigation/drawer';
import Emoji from 'react-native-emoji';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Card({navigation}) {
  const Theme = {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  };

  return (
    <Container>
      <CardTitle>Rodolfo</CardTitle>

      <DrawerItem
        icon={() => <Icon name="book" color="#fff" size={28} />}
        label="Matérias"
        labelStyle={Theme}
        onPress={() => {
          navigation.navigate('Root', {screen: 'Home'});
        }}
      />

      <DrawerItem
        icon={() => <Icon name="plus" color="#fff" size={28} />}
        label="Adicionar matérias"
        labelStyle={Theme}
        onPress={() => {
          navigation.navigate('Adicionar');
        }}
      />

      <CardContent>
        Feito com {<Emoji name=":heart:" />} em Campina Grande
      </CardContent>
    </Container>
  );
}
