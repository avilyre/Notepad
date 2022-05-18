import React from "react";

import { ShortcutButton } from "../ShortcutButton";

import { HeaderProps } from "./interface";

import { Container, Title } from "./styles";

export function Header({ title, shortcutActionButton }: HeaderProps): JSX.Element {
  return (
    <Container>
      <Title>{title}</Title>

      {shortcutActionButton && (
        <ShortcutButton
          title={shortcutActionButton.title}
          onPress={shortcutActionButton.onPress}
        />
      )}
    </Container>
  )
}
