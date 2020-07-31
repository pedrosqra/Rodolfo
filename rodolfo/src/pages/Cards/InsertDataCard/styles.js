import styled from 'styled-components/native';

export const Text = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px
  color: #fff;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
margin-top: 20px
margin-bottom: 20px
flex-direction: row;
font-size: 25px;
font-weight: bold;
color: #333b;
`;

export const Container = styled.View`
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  height: 100%;
  width: 100%;
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
  border-radius: 8px;
  padding: 25px 14px;
  margin-top: 10px;
  height: 6px;
  flex-direction: row;
  align-items: center;
`;

33;

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
