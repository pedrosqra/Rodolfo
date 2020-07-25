import React, {useState} from 'react';

import getRealm from '../../../../services/realm';
import {ContainerTrue, Form, Input, Submit, InserirDados} from './styles';
import Plus from 'react-native-vector-icons/MaterialIcons';
import Arrow from 'react-native-vector-icons/FontAwesome';
export default function Overview({route, navigation}) {
  const {name} = route.params;
  const [stringNotes, setString] = useState('');
  const [grade, setGrade] = useState(0);
  const [error, setError] = useState(false);

  const pressHandler = () => {
    avgArray();
    navigation.navigate('Root', {screen: 'Overview'});
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

  const [media, setMedia] = useState(0);
  async function avgArray() {
    const realm = await getRealm();
    let notasdadb = realm.objects('Repository');
    let gradesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);
    var sum = 0;
    var size = 0;

    // eslint-disable-next-line no-unused-vars
    for (let p of gradesdb) {
      size += parseFloat(p.grades.length);

      // eslint-disable-next-line no-unused-vars
      for (let num of p.grades) {
        sum += num;
      }
      if (parseFloat(p.grades.length) === 0) {
        setMedia('0');
      } else {
        setMedia(sum / size);
      }
    }

    realm.write(() => {
      realm.create(
        'Repository',
        {materia: `${name}`, average: `${media}`},
        'modified',
      );
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
          blurOnSubmit={true}
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

      <Submit title="Voltar" onPress={pressHandler}>
        <Arrow name="arrow-left" size={25} color="#FFF" />
      </Submit>
    </ContainerTrue>
  );
}
