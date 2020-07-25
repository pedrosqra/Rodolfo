import React from 'react';
import {Container, Name, Description, Stat, Average} from './styles';

export default function Repository({data}) {
  return (
    <Container>
      <Stat>
        <Name>{data.materia}</Name>
        <Description>{data.goal}</Description>
        <Average>{parseFloat(data.average).toFixed(2)}</Average>
      </Stat>
    </Container>
  );
}
