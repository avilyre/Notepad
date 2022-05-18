import { FlatListProps } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { NoteProps } from "../../components/Note/interface";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary};
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
