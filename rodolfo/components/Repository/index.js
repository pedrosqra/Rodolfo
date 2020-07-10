import React, {useState} from 'react';
import {
  Container,
  Name,
  Description,
  Stat,
  Refresh,
  RefreshText,
  ContainerTrue,
  StatsTrue,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const Repository = ({data}) => {
  const [render, setRender] = useState(false);
  function setRenderingTrue() {
    setRender(true);
  }

  function setRederingFalse() {
    setRender(false);
  }
  if (render === false) {
    return (
      <Container>
        <Stat>
          <Name>{data.materia}</Name>
          <Description>{data.goal}</Description>
        </Stat>

        <Refresh onPress={setRenderingTrue}>
          <Icon name="refresh" color="#7159c1" size={16} />
          <RefreshText>Abrir</RefreshText>
        </Refresh>
      </Container>
    );
  }
  if (render === true) {
    return (
      <ContainerTrue>
        <StatsTrue>
          <Name>{data.materia}</Name>
          <Description>{data.goal}</Description>
          <Description>{data.notes}</Description>
        </StatsTrue>

        <Refresh onPress={setRederingFalse}>
          <Icon name="refresh" color="#7159c1" size={16} />
          <RefreshText>Abrir</RefreshText>
        </Refresh>
      </ContainerTrue>
    );
  }
};

export default Repository;