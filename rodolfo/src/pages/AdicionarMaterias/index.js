/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StatusBar, Alert} from 'react-native';

import getRealm from '../../../services/realm';

import {Container, Title, Input, Submit, Form, Texto} from './styles';

export default function App() {
  const [materia, setMateria] = useState('');
  const [goal, setGoal] = useState('');
  const [error, setError] = useState(false);


  async function saveRepository() {
    const data = {
      materia: materia,
      goal: goal,
      average: '0',
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
      Alert.alert(
        'Matéria adicionada com sucesso!',
        ':)',
        [
          {
            text: 'Ok',
            onPress: () => console.log('success'),
          },
        ],
      );
      setMateria('');
      setGoal('');
      setError(false);
    } catch (err) {
      setError(true);
      console.log('não cadastrou');
      // eslint-disable-next-line no-alert
      alert('Erro, tente novamente');
      Alert.alert(
        'Erro',
        'Tente novamente.',
        [
          {
            text: 'Ok',
            onPress: () => console.log('error'),
          },
        ],
      );
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
          />
        </Form>

        <Submit onPress={handleAddRepository}>
            <Icon name="plus-circle" size={32} color="#FFF" />
            <Texto>Adicionar</Texto>
        </Submit>


      </Container>
    </>
  );
}
