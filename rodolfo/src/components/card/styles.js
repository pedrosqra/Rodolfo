import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
export const Container = styled(LinearGradient).attrs({
  colors: ['#99cfe0', '#4169E1'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 2;
  padding: 10px;
`;

export const CardContent = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 370px;
  font-weight: bold;
`;

export const CardTitle = styled.Text`
  color: #fff;
  font-size: 35px;
  margin-top: 60px;
  font-weight: bold;
  margin-bottom: 10px;
`;
