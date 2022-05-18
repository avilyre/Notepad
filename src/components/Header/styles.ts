import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(43)}px;
  color: ${({ theme }) => theme.colors.shape};
`;