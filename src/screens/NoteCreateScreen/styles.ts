import { FlatListProps } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { NoteProps } from "../../components/Note/interface";

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

export const DescriptionInput = styled.TextInput`
  flex: 1;

  font-size: ${RFValue(23)}px;
  color: ${({ theme }) => theme.colors.shape};

  width: 100%;
  padding: 0 27px;
`;