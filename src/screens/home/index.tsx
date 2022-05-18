import React, { useState } from "react";

import { ShortcutButton } from "../../components/ShortcutButton";
import { Note } from "../../components/Note";
import { NoteItem } from "../../components/Note/interface";

import { Container, NoteList, NoteSeparator } from "./styles";
import { Header } from "../../components/Header";

export function Home(): JSX.Element {
  const [notes] = useState<NoteItem[]>([
    {
      id: "1",
      title: "Título da nota 1",
      description: "Alguma descrição da Nota.",
    }
  ]);

  return (
    <Container>
      <Header />

      <NoteList
        data={notes}
        keyExtractor={item => item.id!}
        ItemSeparatorComponent={() => <NoteSeparator />}
        contentContainerStyle={{ padding: 24 }}
        renderItem={({ item: note }) => (
          <Note title={note.title} onPress={() => { }} />
        )}
      />
    </Container>
  );
}
