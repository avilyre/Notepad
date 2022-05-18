import React from "react";
import { Text } from "react-native";
import {
  Container,
  Header,
  Title,
  ShortcutButton,
  ShortcutButtonTitle
} from "./styles";

export function Home(): JSX.Element {
  return (
    <Container>
      <Header>
        <Title>Notas</Title>
        <ShortcutButton>
          <ShortcutButtonTitle>Criar</ShortcutButtonTitle>
        </ShortcutButton>
      </Header>
    </Container>
  );
}
