import React, {useState} from 'react';

import getRealm from '../../services/realm';
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
  Form,
  Input,
  Submit,
} from './styles';
import Plus from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
const Repository = ({data}) => {
  const [render, setRender] = useState(false);
  const [stringNotes, setString] = useState('');
  const [grade, setGrade] = useState(0);
  const [error, setError] = useState(false);
  const name = data.materia;

  async function handleAddRepository() {
    try {
      saveRepository();
      console.log('deu certo');
      alert('Matéria cadastrada com sucesso');
      setError(false);
      console.log(grade);
      console.log(stringNotes);
    } catch (err) {
      setError(true);
      console.log('não cadastrou');
      alert('Erro, tente novamente');
    }
  }

  async function saveRepository() {
    const realm = await getRealm();

    realm.write(() => {
      realm.create(
        'Repository',
        {
          materia: name,
          goal: data.goal,
          notes: [stringNotes],
          grades: [parseFloat(grade, 10)],
        },
        true,
      );
    });
    return data;
  }
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

        <Form>
          <Input
            value={stringNotes}
            error={error}
            onChangeText={setString}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Anotações"
            keyboardType="default"
          />
        </Form>

        <Form>
          <Input
            value={grade}
            error={error}
            onChangeText={setGrade}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Nova nota"
            keyboardType="default"
          />
        </Form>

        <Submit onPress={handleAddRepository}>
          <Plus name="add" size={42} color="#FFF" />
        </Submit>

        <Refresh onPress={setRederingFalse}>
          <Icon name="arrow-left" color="#7159c1" size={16} />
          <RefreshText>Voltar</RefreshText>
        </Refresh>
      </ContainerTrue>
    );
  }
};

export default Repository;
