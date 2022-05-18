import React from "react";
import { ShortcutButtonProps } from "./interfaces";
import { Container, Title } from "./styles";

export function ShortcutButton({
  title,
  isActive = false,
  ...rest
}: ShortcutButtonProps): JSX.Element {
  return (
    <Container isActive={isActive} {...rest}>
      <Title isActive={isActive}>{title}</Title>
    </Container>
  );
}
