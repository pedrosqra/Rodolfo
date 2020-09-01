import React, {useState} from 'react';

import getRealm from '../../../../services/realm';
import {Container, Form, Input, Submit, Title, Text} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackHandler, Alert} from 'react-native';

export default function Overview({route, navigation, props}) {
  const {name} = route.params;
  const [grade, setGrade] = useState(0);
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

  async function handleAddData() {
    try {
      saveData();
      console.log('deu certo');
      Alert.alert('Nota adicionada com sucesso!', 'Tudo certo :)', [
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

  async function saveData() {
    const realm = await getRealm();
    let notasdadb = realm.objects('Repository');
    let gradesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);

    realm.write(() => {
      if (grade !== 0) {
        // eslint-disable-next-line no-unused-vars
        for (let p of gradesdb) {
          `  ${p.grades.push(parseFloat(grade))}`;
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
          blurOnSubmit={true}
          value={grade}
          error={error}
          onChangeText={setGrade}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Nova nota"
        />
      </Form>

      <Submit title="Voltar" onPress={pressHandler}>
        <Icon name="arrow-circle-left" size={32} color="#FFF" />
        <Text>Voltar</Text>
      </Submit>

      <Submit onPress={handleAddData}>
        <Icon name="plus-circle" size={32} color="#FFF" />
        <Text>Adicionar</Text>
      </Submit>
    </Container>
  );
}
