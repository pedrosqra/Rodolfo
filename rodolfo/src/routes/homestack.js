import {createStackNavigator} from 'react-navigation-stack';

import Home from '../pages/ListingMaterias/index';
import Overview from '../pages/Cards/OverviewCard/index';

import Dados from '../pages/Cards/InsertDataCard/index';

const screens = {
  Home: {
    screen: Home,
  },
  Overview: {
    screen: Overview,
  },
  InserirDados: {
    screen: Dados,
  },
};
const HomeStack = createStackNavigator(screens);

export default HomeStack;
