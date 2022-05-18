import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { ContainerProps, TitleProps } from "./interfaces";

export const Container = styled(RectButton) <ContainerProps>`
  padding: 13px;
  border-radius: 15px;

  background: ${({ theme, isActive }) =>
    isActive ?
      theme.colors.sunning :
      theme.colors.primaryLight
  };

`;

export const Title = styled.Text<TitleProps>`
  font-size: ${RFValue(18)}px;
  color: ${({ theme, isActive }) =>
    isActive ?
      theme.colors.primary :
      theme.colors.shape
  };
`;
