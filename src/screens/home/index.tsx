import React from "react";
import { ShortcutButton } from "../../components/ShortcutButton";

import {
  Container,
  Header,
  Title
} from "./styles";

export function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>Notas</Title>
        <ShortcutButton
          title="Criar"
          onPress={() => { }}
        />
      </Header>
    </Container>
  );
}
