import React, {useState} from 'react';

import getRealm from '../../../../services/realm';
import {Button} from 'react-native';
import {ContainerTrue, Form, Input, Submit, InserirDados} from './styles';
import Plus from 'react-native-vector-icons/MaterialIcons';

export default function Overview({navigation}) {
  const name = String(navigation.getParam('name'));
  const [stringNotes, setString] = useState('');
  const [grade, setGrade] = useState(0);
  const [error, setError] = useState(false);

  const pressHandler = () => {
    navigation.navigate('Overview');
  };

  async function handleAddRepository() {
    try {
      saveRepository();
      console.log('deu certo');
      // eslint-disable-next-line no-alert
      alert('Nota adicionada com sucesso.');
      setError(false);
    } catch (err) {
      setError(true);
      console.log('não cadastrou');
      // eslint-disable-next-line no-alert
      alert('Erro, tente novamente');
    }
  }

  async function saveRepository() {
    const realm = await getRealm();
    let notasdadb = realm.objects('Repository');
    let gradesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);
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
      if (grade !== 0) {
        // eslint-disable-next-line no-unused-vars
        for (let p of gradesdb) {
          `  ${p.grades.push(parseFloat(grade))}`;
        }
      }
    });
  }
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

      <Submit onPress={handleAddRepository} onSubmit={pressHandler}>
        <Plus name="add" size={42} color="#FFF" />
      </Submit>

      <Button title="Voltar para tela inicial" onPress={pressHandler} />
    </ContainerTrue>
  );
}
