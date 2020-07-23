import {createStackNavigator} from 'react-navigation-stack';

import Adicionar from '../pages/AdicionarMaterias/index';
const screens = {
  Adicionar: {
    screen: Adicionar,
  },
};
const AdicionarStack = createStackNavigator(screens);

export default AdicionarStack;
