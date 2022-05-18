import React, { useState } from "react";

import { ShortcutButton } from "../../components/ShortcutButton";
import { Note } from "../../components/Note";
import { NoteItem } from "../../components/Note/interface";

import {
  Container,
  Header,
  NoteList,
  NoteSeparator,
  Title
} from "./styles";

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
      <Header>
        <Title>Notas</Title>
        <ShortcutButton
          title="Criar"
          onPress={() => { }}
        />
      </Header>

      <NoteList
        data={notes}
        keyExtractor={item => item.id!}
        ItemSeparatorComponent={() => <NoteSeparator />}
        contentContainerStyle={{
          padding: 24
        }}
        renderItem={({ item: note }) => (
          <Note title={note.title} onPress={() => { }} />
        )}
      />
    </Container>
  );
}
