/* eslint-disable prettier/prettier */
/**
 * Rodolfo
 * A class grade helper.
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StatusBar, Keyboard} from 'react-native';

import getRealm from '../services/realm';
import Repository from '../components/Repository/index';

import {Container, List, Title, Input, Submit, Form} from './styles';

export default function App() {
  const [id, setId] = useState(0);
  const [materia, setMateria] = useState('');
  const [goal, setGoal] = useState('');
  const [grades, setGrades] = useState('');
  const [notes, setNotes] = useState('');
  const info = {
    id,
    materia,
    goal,
    grades,
    notes,
  };
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  function incrementId() {
    setId(id + 1);
  }

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();

      const data = realm.objects('Repository').sorted('id', true);

      setRepositories(data);
    }

    loadRepositories();
  }, []);

  async function saveRepository(info) {
    const data = {
      id: info.id,
      name: info.materia,
      goal: info.goal,
      grades: info.grades,
      notes: info.notes,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });
    incrementId();
    return data;
  }

  async function handleAddRepository() {
    try {
      saveRepository(info);
      console.log('deu certo');
      console.log(info.id);
      setMateria('');
      setGoal('');
      setGrades('');
      setNotes('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
      console.log(JSON.stringify(info));
      console.log('fracasso');
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

        <Form>
          <Input
            value={materia}
            error={error}
            onChangeText={setMateria}
            autoCapitalize="none"
            autoCorrect={false}
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
          />
        </Form>

        <Form>
          <Input
            value={grades}
            error={error}
            onChangeText={setGrades}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Notas"
          />
        </Form>

        <Form>
          <Input
            value={notes}
            error={error}
            onChangeText={setNotes}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Anotações"
          />
          <Submit onPress={handleAddRepository}>
            <Icon name="add" size={22} color="#FFF" />
          </Submit>
        </Form>

        <List
          keyboardShouldPersistTaps="handled"
          data={repositories}
          keyExtrator={item => String(item.id)}
          // eslint-disable-next-line prettier/prettier
          renderItem={({item}) => (
            <Repository data={item} />
          )}
        />
      </Container>
    </>
  );
}
