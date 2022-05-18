import React from "react";

import { NoteProps } from "./interface";

import { Container, Title } from "./styles";

export function Note({ title, ...rest }: NoteProps): JSX.Element {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
