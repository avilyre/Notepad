import { FlatListProps } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import styled from "styled-components/native";

import { NoteItem } from "../../components/Note/interface";

export const NoteList = styled(
  FlatList as unknown as new (
    props: FlatListProps<NoteItem>
  ) => FlatList<NoteItem>
)`
  flex: 1;
`;

export const NoteSeparator = styled.View`
  width: 100%;
  padding: 12.5px;
`;
