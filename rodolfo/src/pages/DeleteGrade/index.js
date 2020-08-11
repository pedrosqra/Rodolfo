import React, {useState} from 'react';
import {ScrollView, Dimensions} from 'react-native';
import getRealm from '../../../services/realm';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackHandler, Alert} from 'react-native';

import {
    Text,
    Container,
    Stats,
    Name,
    Details,
    Voltar,
    DeleteButton,
    Form,
    Input
  } from './styles';

export default function Delete({route, navigation}){
    const [listagem, setListagem] = useState('');
    const {name, goal, notes} = route.params;
    const {height} = Dimensions.get('window');
    const [screenHeight, setHeight] = useState(0);
    const [id, setId] = useState();
    const [error, setError] = useState(false);




    async function listagemNotas() {
        const realm = await getRealm();
        let notasdadb = realm.objects('Repository');
        let gradesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);
        let saida = '';
    
        for (let p of gradesdb) {
          for (let num of p.grades) {
            saida += `\nNota${p.grades.indexOf(num) + 1} = ` + String(num) + ',  \n';
          }
          setListagem(saida);
        }
    }

    async function DeleteGrade(){
        const realm = await getRealm();
        let notasdadb = realm.objects('Repository');
        let gradesdb = notasdadb.filtered(`materia BEGINSWITH "${name}"`);

        realm.write(() => {
            for (let p of gradesdb) {
                if (p.grades.length !== 0) {
                    var index = p.grades.indexOf(id-1);
                    p.grades.splice(id-1, 1);
                    
                } else {
                    alert('Você não ainda não possui notas nessa matéria');
                }
            
        }
        });
    }

    function onContentSizeChange(contentWidth, contentHeight) {
        setHeight(contentHeight);
      }

    function onBackPress() {
        return true;
      }


    const Back = () => {
    navigation.navigate('Root', {screen: 'Overview', params: {name: name}});
    };

    function componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
      }

    const scrollEnabled = screenHeight > height;

    listagemNotas();
    componentDidMount();


    return (

          <Container>
            <Stats>
              <Name>{name}</Name>
              <Details>Histórico de notas: {listagem}</Details>
            </Stats>

            <Form>
                <Input
                blurOnSubmit={true}
                value={id}
                error={error}
                onChangeText={setId}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Ex: 2, para excluir 'Nota2'"
                keyboardType="numeric"
                />
            </Form>

            

            <DeleteButton onPress={DeleteGrade}>
                <Icon name="trash" color="#fff" size={32} />
                <Text>Deletar</Text>
            </DeleteButton>
    
    
            <Voltar title="Voltar" onPress={Back}>
              <Icon name="arrow-circle-left" color="#fff" size={32} />
              <Text>Voltar</Text>
            </Voltar>
    
            
          </Container>
          

      );

}