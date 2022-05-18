import React from "react";
import { DeleteButtonProps } from "./interfaces";

import { Container, Title } from "./styles";

export function DeleteButton({ title, ...rest }: DeleteButtonProps): JSX.Element {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
