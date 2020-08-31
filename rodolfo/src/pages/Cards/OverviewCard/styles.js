import styled from 'styled-components/native';

export const YourNotes = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  padding: 8px;
`;

export const History = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  background-color: #e5e5e5;
  border-radius: 6px;
  padding: 6px;
  margin-top: 25px;
`;

export const Details = styled.Text.attrs({
  numberOfLines: 4,
})`
  color: #4169e1;
  margin-top: 18px;
  font-size: 17px;
`;

export const Grades = styled.Text.attrs({
  numberOfLines: 100,
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

  justify-content: space-between;
`;
export const Container = styled.View`
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  height: 100%;
  width: 100%;
`;

export const ContainerTitle = styled.View`
  background: #e5e5e5;
  height: 30%;
  width: 80%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerNotes = styled.View`
  font-weight: bold;
  border-radius: 6px;
  margin-top: 25px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  background-color: #e5e5e5;
`;

export const DetailsContainer = styled.TouchableOpacity`
  border-radius: 8px;
  background: #e5e5e5;
  height: 190px;
  width: 100%;
  align-items: center;
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
  margin-top: -15px;
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
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
`;

export const InserirNotas = styled.TouchableOpacity`
  margin-left: 80px;
`;

export const DeleteButton = styled.TouchableOpacity`
  background: #e5e5e5;
  border-radius: 8px;
  padding: 18px 8px;
  margin-top: 20px;
  margin-left: 60px;
  flex-direction: row;
  align-items: center;
`;

export const DeleteButtonGrade = styled.TouchableOpacity`
  background: #dc143c;
  margin-left: 20px;
  margin-right: 20px;
  flex-direction: row;
  border-radius: 8px;
  padding: 25px 14px;
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
  height: 6px;
`;
