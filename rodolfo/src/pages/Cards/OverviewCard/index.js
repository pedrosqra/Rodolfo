import React, {useState} from 'react';

import getRealm from '../../../../services/realm';

import {
  RefreshText,
  ContainerTrue,
  StatsTrue,
  NameTrue,
  Notes,
  Dados,
  BotoesOverview,
  Details,
  YourNotes,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Overview({navigation}) {
  const [listagem, setListagem] = useState('');
  const [restante, setRestante] = useState(0);
  const name = navigation.getParam('materia');
  const [media, setMedia] = useState(0);
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

  const pressHandler = () => {
    navigation.navigate('InserirDados', {name: name});
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

  return (
    <ContainerTrue>
      <StatsTrue>
        <NameTrue>{navigation.getParam('materia')}</NameTrue>
        <Details>Objetivo de média: {navigation.getParam('goal')}</Details>
        <Details>Média atual: {parseFloat(media).toFixed(2)}</Details>
        <Details>Histórico de notas: {listagem}</Details>
        <Details>Faltam {restante} pontos até o objetivo.</Details>
        <YourNotes>Suas Anotações:</YourNotes>
        <Notes>{navigation.getParam('notes')}</Notes>
      </StatsTrue>
      <BotoesOverview>
        <Dados onPress={pressHandler}>
          <Icon name="arrow-right" color="#7159c1" size={16} />
          <RefreshText>Inserir Dados</RefreshText>
        </Dados>
      </BotoesOverview>
    </ContainerTrue>
  );
}
