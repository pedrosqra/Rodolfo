import React, {useState} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import getRealm from '../../../../services/realm';
import Arrow from 'react-native-vector-icons/FontAwesome';
import {
  RefreshText,
  ContainerTrue,
  StatsTrue,
  NameTrue,
  Notes,
  Details,
  YourNotes,
  Voltar,
  InserirDados,
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
        saida += '   ||   ' + String(num);
      }
      setListagem(saida);
    }
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
      <ContainerTrue>
        <StatsTrue>
          <NameTrue>{name}</NameTrue>
          <Details>Objetivo de média: {goal}</Details>
          <Details>Média atual: {parseFloat(media).toFixed(2)}</Details>
          <Details>Histórico de notas: {listagem}</Details>
          <Details>Faltam {restante} pontos até o objetivo.</Details>
          <YourNotes>Suas Anotações:</YourNotes>
          <Notes>{notes}</Notes>
        </StatsTrue>

        <InserirDados onPress={Go}>
          <RefreshText>Inserir Dados</RefreshText>
        </InserirDados>

        <Voltar title="Voltar" onPress={Back}>
          <Arrow name="arrow-left" size={25} color="#FFF" />
        </Voltar>
      </ContainerTrue>
    </ScrollView>
  );
}
