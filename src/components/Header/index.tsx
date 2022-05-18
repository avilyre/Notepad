import React from "react";

import { ShortcutButton } from "../ShortcutButton";

import { Container, Title } from "./styles";

export function Header(): JSX.Element {
  return (
    <Container>
      <Title>Notas</Title>
      <ShortcutButton
        title="Criar"
        onPress={() => { }}
      />
    </Container>
  )
}
