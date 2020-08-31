import React, {useState} from 'react';

import getRealm from '../../../../services/realm';
import {Container, Form, Input, Submit, Title, Text} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackHandler, Alert} from 'react-native';

export default function InsertNotes({route, navigation}) {
  const {name} = route.params;
  const [stringNotes, setString] = useState('');
  const [error, setError] = useState(false);

  const pressHandler = () => {
    navigation.navigate('Root', {screen: 'Overview'});
  };

  function componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
  }

  function onBackPress() {
    return true;
  }

  async function handleAddRepository() {
    try {
      saveRepository();
      console.log('deu certo');

      Alert.alert('Anotação adicionada', ':)', [
        {
          text: 'Ok',
          onPress: () => console.log('success'),
        },
      ]);
      setError(false);
    } catch (err) {
      setError(true);
      console.log('não cadastrou');

      Alert.alert('Erro', 'Tente novamente.', [
        {
          text: 'Ok',
          onPress: () => console.log('error'),
        },
      ]);
    }
  }

  async function saveRepository() {
    const realm = await getRealm();
    let notasdadb = realm.objects('Repository');
    let notesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);

    realm.write(() => {
      if (stringNotes !== '') {
        // eslint-disable-next-line no-unused-vars
        for (let p of notesdb) {
          if (p.notes.length !== 0) {
            `  ${p.notes.push('\n' + String(stringNotes))}`;
          } else {
            `  ${p.notes.push(String(stringNotes))}`;
          }
        }
      }
    });
  }

  componentDidMount();

  return (
    <Container>
      <Title>Inserir Nota</Title>

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

      <Submit title="Voltar" onPress={pressHandler}>
        <Icon name="arrow-circle-left" size={32} color="#FFF" />
        <Text>Voltar</Text>
      </Submit>

      <Submit onPress={handleAddRepository}>
        <Icon name="plus-circle" size={32} color="#FFF" />
        <Text>Adicionar</Text>
      </Submit>
    </Container>
  );
}
