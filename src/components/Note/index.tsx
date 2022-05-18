import React from "react";

import { NoteProps } from "./interface";

import { Container, Title } from "./styles";

export function Note({ title }: NoteProps): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}
