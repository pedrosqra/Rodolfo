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
      <Description>{data.goal}</Description>

      <Stats>
        <Stat>
          <Icon name="star" size={16} color="#333" />
          <StatCount>{data.grades}</StatCount>
        </Stat>

        <Stat>
          <Icon name="code-fork" size={18} color="#333" />
          <StatCount>{data.notes}</StatCount>
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
