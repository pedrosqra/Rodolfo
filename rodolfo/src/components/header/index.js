import React from 'react';
import {Container, ContainerText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header({navigation}) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <Container>
      <Icon name="menu" color="#fff" size={28} onPress={openMenu} />
      <Container>
        <ContainerText>Rodolfo</ContainerText>
      </Container>
    </Container>
  );
}
