import { FlatListProps } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { NoteProps } from "../../components/Note/interface";

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

export const NoteList = styled(
  FlatList as unknown as new (
    props: FlatListProps<NoteProps>
  ) => FlatList<NoteProps>
)`
  flex: 1;
`;

export const NoteSeparator = styled.View`
  width: 100%;
  padding: 12.5px;
`;
