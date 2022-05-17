import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(43)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
