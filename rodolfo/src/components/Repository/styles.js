import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  height: 130px;
  border-radius: 8px;
  background: #fff;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #333;
  margin-top: 5px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #4169e1;
  margin-top: 5px;
  font-size: 25px;
`;

export const Stat = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  justify-content: space-between;
`;

export const Average = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #000;
  margin-top: 5px;
  font-size: 25px;
`;
