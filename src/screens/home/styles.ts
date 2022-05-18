import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
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

export const ShortcutButton = styled(RectButton)`
  padding: 13px;
  border-radius: 15px;

  background: ${({ theme }) => theme.colors.primaryLight};
`;

export const ShortcutButtonTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;
