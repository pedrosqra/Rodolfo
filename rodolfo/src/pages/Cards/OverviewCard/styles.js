import styled from 'styled-components/native';

export const YourNotes = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin-top: 25px;
`;

export const Details = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #4169e1;
  margin-top: 10px;
  font-size: 17px;
`;

export const RefreshText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  justify-content: space-evenly;
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

export const Notes = styled.Text`
  margin-top: 10px;
  color: #4169d8;
  font-size: 20px;
`;

export const Voltar = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: space-evenly;
  border-radius: 8px;
  padding: 25px 14px;
  margin-top: 15px;
  height: 6px;
`;

export const InserirDados = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  border-radius: 8px;
  padding: 25px 14px;
  margin-top: 15px;
  height: 6px;
`;
