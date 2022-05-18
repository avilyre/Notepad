import React from "react";
import { ShortcutButtonProps } from "./interfaces";
import { Container, Title } from "./styles";

export function ShortcutButton({ title }: ShortcutButtonProps): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
