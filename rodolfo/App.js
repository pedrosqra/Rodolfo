/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StatusBar, Keyboard} from 'react-native';

import api from './services/api';
import getRealm from './services/realm';
import Repository from './components/Repository/index';

import {Container, List, Title, Input, Submit, Form} from './styles';

export default function App() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function loadRepositories() {
      const realm = await getRealm();

      const data = realm.objects('Repository').sorted('stars', true);

      setRepositories(data);
    }

    loadRepositories();
  }, []);

  async function saveRepository(repository) {
    const data = {
      id: repository.id,
      name: repository.name,
      fullName: repository.full_name,
      description: repository.description,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.create('Repository', data, 'modified');
    });
    return data;
  }

  async function handleAddRepository() {
    try {
      const response = await api.get(`/repos/${input}`);

      await saveRepository(response.data);
      console.log('deu certo');
      setInput('');
      setError(false);
      Keyboard.dismiss();
    } catch (err) {
      setError(true);
      console.log(input);
      console.log('fracasso');
    }
  }

  async function handleRefreshRepository(repository) {
    const response = await api.get(`/repos/${repository.fullName}`);

    const data = await saveRepository(response.data);
    console.log(data.id);

    setRepositories(repositories.map(repo => repo.id === data.id ? data : repo));
  }

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />

      <Container>
        <Title>Repositórios</Title>

        <Form>
          <Input
            value={input}
            error={error}
            onChangeText={setInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Procurar repositório"
          />
          <Submit onPress={handleAddRepository}>
            <Icon name="add" size={22} color="#FFF" />
          </Submit>
        </Form>

        <List
          keyboardShouldPersistTaps="handled"
          data={repositories}
          keyExtrator={item => String(item.id)}
          // eslint-disable-next-line prettier/prettier
          renderItem={({item}) => (
            <Repository data={item} onRefresh={() => handleRefreshRepository(item)} />
          )}
        />
      </Container>
    </>
  );
}

//export default App;
//const App: () => React$Node = () => {
