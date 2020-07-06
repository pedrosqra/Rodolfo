import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container,
  Name,
  Description,
  Refresh,
  RefreshText,
  Stats,
  Stat,
  StatCount,
} from './styles';

const Repository = ({data, onRefresh}) => {
  return (
    <Container>
      <Name>{data.name}</Name>
      <Description>{data.description}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.stars}</StatCount>
        </Stat>

        <Stat>
          <Icon name="code-fork" size={18} color="#333" />
          <StatCount>{data.forks}</StatCount>
        </Stat>
      </Stats>

      <Refresh onPress={onRefresh}>
        <Icon name="refresh" color="#7159c1" size={16} />
        <RefreshText>ATUALIZAR</RefreshText>
      </Refresh>
    </Container>
  );
};

export default Repository;
