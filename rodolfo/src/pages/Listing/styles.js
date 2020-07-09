import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;
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
  margin-top: 5px;
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

export const Refresh = styled.TouchableOpacity`
  margin-top: 10px;
  flex-direction: row;
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
