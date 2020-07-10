import {Texto} from './styles';
import getRealm from '../../../services/realm';


function details({name}){

    const name = name;

    async function updateRepository() {
        
        let arrayMaterias = realm.objects('Repository');
        let materiaUnica = arrayMaterias.filtered(`name = ${name}`);

    
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
          alert('Matéria cadastrada com sucesso');
          setMateria('');
          setGoal('');
          setGrades('');
          setError(false);
        } catch (err) {
          setError(true);
          console.log('não cadastrou');
          alert('Erro, tente novamente');
        }
      }
    

    <Submit onPress={handleAddRepository}>
        <Icon name="add" size={42} color="#FFF" />
    </Submit>



}

export default details;