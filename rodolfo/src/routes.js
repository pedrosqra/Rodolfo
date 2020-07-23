import {createDrawerNavigator} from 'react-navigation-drawer';
import Adicionar from './routes/addstack';
import Home from './routes/homestack';
import {createAppContainer} from 'react-navigation';

const RootDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home,
  },
  Adicionar: {
    screen: Adicionar,
  },
});

export default createAppContainer(RootDrawerNavigator);
