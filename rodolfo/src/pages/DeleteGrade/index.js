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
    const [id, setId] = useState(0);



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

            

            <DeleteButton>
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