import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  width: 100%;
  padding: 21px 46px;
  border-radius: 10px;

  background: ${({ theme }) => theme.colors.sunning};
`;

export const Title = styled.Text`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.noteText};
`;
