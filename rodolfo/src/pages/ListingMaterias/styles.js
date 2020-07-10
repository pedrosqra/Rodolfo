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

export const Title = styled.Text`
  font-size: 32px;
  color: white;
  font-weight: bold;
  padding: 10% 20px;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
  padding: 40px 40px;
`;

export const Texto = styled.Text`
  font-size: 25px;
  color: white;
  font-weight: bold;
  padding: 10% 20px;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding: 0 20px;
`;

export const Input = styled.TextInput.attrs({
  placeHolderTextColor: '#999',
})`
  flex: 1;
  padding: 12px 15px;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  background: white;
  border: 2px solid ${props => (props.error ? '#FF7272' : '#FFF')};
`;

export const Submit = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  border-radius: 8px;
  padding: 25px 14px;
  margin-top: 10px;
  height: 6px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Refresh = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
`;
