import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Container = styled(LinearGradient).attrs({
  colors: ['#4169E1', '#ADD8E6'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 2;
  padding-top: ${25 + getStatusBarHeight(true)};
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: white;
  font-weight: bold;
  padding: 10% 20px;
  text-align: center;
`;
