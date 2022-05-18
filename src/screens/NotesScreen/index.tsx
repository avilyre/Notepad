import React from "react";

import { Note } from "../../components/Note";
import { ScreenTemplate } from "../../components/templates/ScreenTemplate";
import { ScreenNames } from "../../routes/interface";
import { NotesScreenProps } from "./interface";
import { useNotes } from "../../hooks/useNotes";

import { NoteList, NoteSeparator } from "./styles";
import { NoteItem } from "../../components/Note/interface";

export function NotesScreen({ navigation }: NotesScreenProps): JSX.Element {
  const { notes } = useNotes();

  function handleViewNote(note: NoteItem): void {
    navigation.navigate(ScreenNames.NotesViewScreen, { note });
  }

  function handleCreateNote(): void {
    navigation.navigate(ScreenNames.NoteCreateScreen);
  }

  return (
    <ScreenTemplate
      header={{
        title: "Notas",
        shortcutActionButton: {
          title: "Criar",
          onPress: handleCreateNote
        }
      }}
    >
      <NoteList
        data={notes}
        keyExtractor={item => item.id!}
        ItemSeparatorComponent={() => <NoteSeparator />}
        contentContainerStyle={{ padding: 24 }}
        renderItem={({ item: note }) => (
          <Note title={note.title} onPress={() => handleViewNote(note)} />
        )}
      />
    </ScreenTemplate>
  );
}
