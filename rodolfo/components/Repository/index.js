import React from 'react';
import {Container, Name, Description, Stat} from './styles';

const Repository = ({data, onRefresh}) => {
  return (
    <Container>
      <Stat>
        <Name>{data.materia}</Name>
        <Description>{data.goal}</Description>
      </Stat>
    </Container>
  );
};

export default Repository;
