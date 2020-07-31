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

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  margin-left: 10px;
  justify-content: space-evenly;
`;

export const Stats = styled.View`
  align-items: flex-start;
  margin-right: 15px;

  justify-content: space-between;
`;
export const Container = styled.View`
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  height: 100%;
  width: 100%;
`;

export const Name = styled.Text`
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
  border-radius: 8px;
  padding: 25px 14px;
  margin-top: 15px;
  height: 6px;
  flex-direction: row;
  align-items: center;
`;

export const InserirDados = styled.TouchableOpacity`
  background: #6bd4c1;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  border-radius: 8px;
  padding: 25px 14px;
  height: 6px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity`
  background: #ff0000;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  border-radius: 8px;
  padding: 25px 14px;
  height: 6px;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
`;
