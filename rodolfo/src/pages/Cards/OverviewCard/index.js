import React, {useState} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import getRealm from '../../../../services/realm';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackHandler, Alert} from 'react-native';
import {
  Text,
  Container,
  Stats,
  Name,
  Notes,
  Details,
  YourNotes,
  Voltar,
  InserirDados,
  DeleteButton,
  Grades,
  History,
} from './styles';

export default function Overview({route, navigation}) {
  const [listagem, setListagem] = useState('');
  const [restante, setRestante] = useState(0);
  const {name, goal, notes} = route.params;
  const [media, setMedia] = useState(0);
  const {height} = Dimensions.get('window');
  const [screenHeight, setHeight] = useState(0);

  async function listagemNotas() {
    const realm = await getRealm();
    let notasdadb = realm.objects('Repository');
    let gradesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);
    let saida = '';

    // eslint-disable-next-line no-unused-vars
    for (let p of gradesdb) {
      // eslint-disable-next-line no-unused-vars
      for (let num of p.grades) {
        saida += `Nota ${p.grades.indexOf(num) + 1} = ` + String(num) + '\n';
      }
      setListagem(saida);
    }
  }

  async function deleteSubject() {
    const realm = await getRealm();
    Alert.alert(
      'Calma aí, tem certeza que quer apagar essa matéria?',
      'Você está tentando apagar uma matéria. Confirme ou negue a requisição.',
      [
        {
          text: 'Não',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Certeza',
          onPress: () => {
            let subs = realm.objects('Repository');
            let specificsub = subs.filtered(`materia = "${name}"`);
            realm.write(() => {
              realm.delete(specificsub);
            });
            navigation.navigate('Root', {screen: 'Home'});
            navigation.navigate('Adicionar');
          },
        },
      ],
    );
  }

  async function restantes() {
    const realm = await getRealm();
    let notasdadb = realm.objects('Repository');
    let gradesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);
    let saida = 0;

    // eslint-disable-next-line no-unused-vars
    for (let p of gradesdb) {
      saida += parseFloat(p.goal) - parseFloat(p.average);
    }

    const total = saida.toFixed(2);

    setRestante(total);
  }

  const Go = () => {
    navigation.navigate('Root', {screen: 'InsertData', params: {name: name}});
  };

  const DeleteGrade = () => {
    navigation.navigate('Root', {screen: 'DeleteGrade', params: {name: name}});
  };

  const Back = () => {
    navigation.navigate('Root', {screen: 'Home', params: {name: name}});
  };

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

  function componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);
  }

  function onBackPress() {
    return true;
  }

  componentDidMount();
  avgArray();
  listagemNotas();
  restantes();

  function onContentSizeChange(contentWidth, contentHeight) {
    setHeight(contentHeight);
  }
  const scrollEnabled = screenHeight > height;
  return (
    <ScrollView
      scrollEnabled={scrollEnabled}
      onContentSizeChange={onContentSizeChange}>
      <Container>
        <Stats>
          <Name>{name}</Name>
          <Details>Objetivo de média: {goal}</Details>
          <Details>Média atual: {parseFloat(media).toFixed(2)}</Details>
          <Details>Faltam {restante} pontos até o objetivo.</Details>
          <YourNotes>Suas Anotações:</YourNotes>
          <Notes>{notes}</Notes>
          <History>Histórico de notas: </History>
          <Grades>{listagem}</Grades>
        </Stats>

        <InserirDados onPress={Go}>
          <Icon name="plus-circle" color="#fff" size={32} />
          <Text>Inserir Dados</Text>
        </InserirDados>

        <Voltar title="Voltar" onPress={Back}>
          <Icon name="arrow-circle-left" color="#fff" size={32} />
          <Text>Voltar</Text>
        </Voltar>

        <DeleteButton onPress={DeleteGrade}>
          <Icon name="trash" color="#fff" size={32} />
          <Text>Excluir nota</Text>
        </DeleteButton>

        <DeleteButton title="Voltar" onPress={deleteSubject}>
          <Icon name="minus-circle" color="#fff" size={32} />
          <Text>Apagar Matéria</Text>
        </DeleteButton>
      </Container>
    </ScrollView>
  );
}
