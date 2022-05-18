import React, { useState } from "react";

import { Note } from "../../components/Note";
import { NoteItem } from "../../components/Note/interface";

import { NoteList, NoteSeparator } from "./styles";
import { ScreenTemplate } from "../../components/templates/ScreenTemplate";
import { ScreenNames } from "../../routes/interface";
import { NotesScreenProps } from "./interface";

export function NotesScreen({ navigation }: NotesScreenProps): JSX.Element {
  const [notes] = useState<NoteItem[]>([
    {
      id: "1",
      title: "Título da nota 1",
      description: "Alguma descrição da Nota.",
    }
  ]);

  function handleViewNote(): void {
    navigation.navigate(ScreenNames.NotesViewScreen);
  }

  return (
    <ScreenTemplate
      header={{
        title: "Notas",
        shortcutActionButton: {
          title: "Criar",
          onPress: () => { }
        }
      }}
    >
      <NoteList
        data={notes}
        keyExtractor={item => item.id!}
        ItemSeparatorComponent={() => <NoteSeparator />}
        contentContainerStyle={{ padding: 24 }}
        renderItem={({ item: note }) => (
          <Note title={note.title} onPress={handleViewNote} />
        )}
      />
    </ScreenTemplate>
  );
}
