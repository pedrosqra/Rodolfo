import React, {useState} from 'react';
import getRealm from '../../../services/realm';
import {Container, Name, Description, Stat, Average} from './styles';

const Repository = ({data}) => {
  const [media, setMedia] = useState(0);
  const name = data.name;
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
  return (
    <Container>
      <Stat>
        <Name>{data.materia}</Name>
        <Description>{data.goal}</Description>
        <Average>{parseFloat(data.average).toFixed(2)}</Average>
      </Stat>
    </Container>
  );
};
export default Repository;
