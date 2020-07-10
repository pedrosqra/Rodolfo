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
  GradeGoal,
  NameTrue,
  GradeAverage,
  Notes,
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
          <Icon name="arrow-right" color="#7159c1" size={16} />
          <RefreshText>Abrir</RefreshText>
        </Refresh>
      </Container>
    );
  }
  if (render === true) {
    return (
      <ContainerTrue>
        <StatsTrue>
          <NameTrue>{data.materia}</NameTrue>
          <GradeGoal>Objetivo de média: {data.goal}</GradeGoal>
          <GradeAverage>Média atual: 6</GradeAverage>
          <Name>Suas Anotações:</Name>
          <Notes>{data.notes}</Notes>
        </StatsTrue>

        <Refresh onPress={setRederingFalse}>
          <Icon name="arrow-left" color="#7159c1" size={16} />
          <RefreshText>Voltar</RefreshText>
        </Refresh>
      </ContainerTrue>
    );
  }
};

export default Repository;
