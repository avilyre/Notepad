import React, { useState } from "react";

import { useTheme } from "styled-components";

import { ShortcutButton } from "../ShortcutButton";
import { HeaderProps } from "./interface";

import { Container, TitleInput } from "./styles";

export function Header({
  title,
  shortcutActionButton,
  editMode = false,
  onChangeTitle
}: HeaderProps): JSX.Element {
  const theme = useTheme();
  return (
    <Container>
      <TitleInput
        value={title}
        editable={editMode}
        maxLength={15}
        placeholder="Título"
        placeholderTextColor={theme.colors.noteTextLight}
        onChangeText={onChangeTitle}
      />

      {shortcutActionButton && (
        <ShortcutButton
          title={shortcutActionButton.title}
          onPress={shortcutActionButton.onPress}
        />
      )}
    </Container>
  )
}
