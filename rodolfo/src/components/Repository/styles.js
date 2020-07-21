import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
`;

export const BotoesOverview = styled.View`
  background: #fff;
  flex-direction: row;
  justify-content: space-between;
`;

export const Dados = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Voltar = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Refresh = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const Name = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #333;
`;

export const Texto = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #4169e1;
  margin-top: 15px;
  font-size: 25px;
`;

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  justify-content: space-between;
`;

export const StatCount = styled.Text`
  margin-left: 6px;
`;

export const RefreshText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #4169e1;
  margin-left: 5px;
`;

export const List = styled.FlatList.attrs({
  contentContainerStyle: {paddingHorizontal: 20},
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const StatsTrue = styled.View`
  align-items: flex-start;
  margin-right: 15px;

  justify-content: space-between;
`;
export const ContainerTrue = styled.View`
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  height: 100%;
  width: 100%;
`;

export const NameTrue = styled.Text`
  margin-top: 15px
  flex-direction: row;
  font-size: 30px;
  font-weight: bold;
  color: #333;
`;

export const GradeGoal = styled.Text`
  margin-top: 20px
  font-weight: bold;
  font-size: 20px;
  color: #4169e1;
`;

export const GradeAverage = styled.Text`
  margin-top: 9px
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 20px;
  color: #4169e1;
`;

export const Notes = styled.Text`
  margin-top: 10px;
  color: #4169d8;
  font-size: 20px;
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
  border: 2px solid ${props => (props.error ? '#FF7272' : '#6bd4c1')};
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

33;

export const InserirDados = styled.Text`
  margin-top: 20px
  margin-bottom: 10px
  flex-direction: row;
  font-size: 25px;
  font-weight: bold;
  color: #333b;
`;

