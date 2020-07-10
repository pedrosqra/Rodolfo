/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StatusBar} from 'react-native';

import getRealm from '../../../services/realm';

import { Container, Title, Input, Submit, Form, Texto} from './styles';

export default function App() {
  const [materia, setMateria] = useState('');
  const [goal, setGoal] = useState('');
  const [grades, setGrades] = useState([]);
  const [stringnotes, setStringNotes] = useState('');
  const [error, setError] = useState(false);
  async function saveRepository() {
    const data = {
      materia: materia,
      goal: goal,
      grades: grades,
      notes: stringnotes,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data);
    });
    return data;
  }

  async function handleAddRepository() {
    try {
      saveRepository();
      console.log('deu certo');
      alert('Matéria cadastrada com sucesso');
      setMateria('');
      setGoal('');
      setGrades('');
      setError(false);
    } catch (err) {
      setError(true);
      console.log('não cadastrou');
      alert('Erro, tente novamente');
    }
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <Container>
        <Title>Rodolfo</Title>

        <Texto>Cadastre uma nova matéria.</Texto>


        <Form>
          <Input
            value={materia}
            error={error}
            onChangeText={setMateria}
            autoCapitalize="characters"
            autoCorrect={true}
            placeholder="Nome da matéria"
          />
        </Form>

        <Form>
          <Input
            value={goal}
            error={error}
            onChangeText={setGoal}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Objetivo"
            keyboardType = "numeric"
          />
        </Form>

        <Form>
          <Input
            value={`${stringnotes}`}
            error={error}
            onChangeText={setStringNotes}
            autoCapitalize="none"
            autoCorrect={true}
            placeholder="Anotações"
          />
        </Form>

        <Form>
          <Input
            value={grades}
            error={error}
            onChangeText={setGrades}
            autoCapitalize="none"
            autoCorrect={true}
            placeholder="Notas"
            keyboardType = "numeric"
          />
        </Form>


          <Submit onPress={handleAddRepository}>
            <Icon name="add" size={42} color="#FFF" />
          </Submit>


      </Container>
    </>
  );
}
