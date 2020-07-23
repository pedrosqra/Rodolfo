/* eslint-disable prettier/prettier */

import React, { useState, useEffect } from 'react';
import {StatusBar, TouchableOpacity} from 'react-native';

import getRealm from '../../../services/realm';

import Repository from '../../components/Repository/index';
import {Container, List, Title} from './styles';

export default function App({navigation}) {
  const [repositories, setRepositories] = useState([]);


  useEffect(() => {
    async function loadRepositories() {

      const realm = await getRealm();
      const data = realm.objects('Repository').sorted('average', false);

      setRepositories(data);
    }

    loadRepositories();
  }, []);

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <Container>
        <Title>Matérias Cadastradas</Title>
        <List
          keyboardShouldPersistTaps="handled"
          data={repositories}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Overview', item)}>
              <Repository  data={item}/>
            </TouchableOpacity>
          )}
        />
      </Container>
    </>
  );
}
