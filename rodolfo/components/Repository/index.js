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
  InserirDados,
  Dados,
  Voltar,
  BotoesOverview,
} from './styles';
import Plus from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';


const Repository = ({data}) => {
  const [render, setRender] = useState(false);
  const [stringNotes, setString] = useState('');
  const [grade, setGrade] = useState(0);
  const [error, setError] = useState(false);
  const [overviewrender, setOverview] = useState(false);
  const name = data.materia;

  async function handleAddRepository() {
    try {
      saveRepository();
      console.log('deu certo');
      setError(false);
    } catch (err) {
      setError(true);
      console.log('não cadastrou');
      alert('Erro, tente novamente');
    }
  }
  //Realm database
  async function saveRepository() {
    const realm = await getRealm();

    let notasdadb = realm.objects('Repository');
    let gradesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);
    let notesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);
    realm.write(() => {
      if (stringNotes !== '') {
        for (let p of notesdb) {
          if (p.notes.length != 0){
          `  ${p.notes.push("\n" + String(stringNotes))}`;
          } else {
            `  ${p.notes.push(String(stringNotes))}`;
          }
        }
      }
      if (grade !== 0) {
        for (let p of gradesdb) {
          `  ${p.grades.push(parseFloat(grade))}`;
        }
      }
    });
    return data;
  }

  function string(){
    
  }


  function setRenderingTrue() {
    setRender(true);
  }

  function setRederingFalse() {
    setRender(false);
  }

  function setOverviewRenderingTrue() {
    setOverview(true);
  }

  function setOverviewRederingFalse() {
    setOverview(false);
  }
  //Main page
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
  //Overview cards
  if (render === true) {

    //Main overview card
    if (overviewrender === false) {
      return (
        <ContainerTrue>
          <StatsTrue>
            <NameTrue>{data.materia}</NameTrue>
            <GradeGoal>Objetivo de média: {data.goal}</GradeGoal>
            <GradeAverage>Média atual: 6</GradeAverage>
            <GradeAverage>Histórico de notas: {data.grades}</GradeAverage>
            <Name>Suas Anotações:</Name>
            <Notes>{data.notes}</Notes>
          </StatsTrue>

          <BotoesOverview>
            <Voltar onPress={setRederingFalse}>
              <Icon name="arrow-left" color="#7159c1" size={16} />
              <RefreshText>Voltar</RefreshText>
            </Voltar>


            <Dados onPress={setOverviewRenderingTrue}>
              <Icon name="arrow-right" color="#7159c1" size={16} />
              <RefreshText>Inserir Dados</RefreshText>
            </Dados>
          </BotoesOverview>
        </ContainerTrue>
      );
    }
    //Card for adding data
    if (overviewrender === true) {
      return (
        <ContainerTrue>
          <InserirDados>Inserir Anotações</InserirDados>
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
          <InserirDados>Inserir Notas</InserirDados>
          <Form>
            <Input
              value={grade}
              error={error}
              onChangeText={setGrade}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Nova nota"
              keyboardType="numeric"
            />
          </Form>

          <Submit onPress={handleAddRepository}>
            <Plus name="add" size={42} color="#FFF" />
          </Submit>

          <Voltar onPress={setOverviewRederingFalse}>
            <Icon name="arrow-left" color="#7159c1" size={16} />
            <RefreshText>Voltar</RefreshText>
          </Voltar>
        </ContainerTrue>
      );
    }
  }
};
export default Repository;
