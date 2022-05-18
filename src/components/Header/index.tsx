import React from "react";
import { Alert } from "react-native";

import { useTheme } from "styled-components";

import { ShortcutButton } from "../ShortcutButton";
import { HeaderProps } from "./interface";

import { Container, TitleInput } from "./styles";

export function Header({
  title,
  shortcutActionButton,
  isEditMode = false,
  onChangeTitle
}: HeaderProps): JSX.Element {
  const theme = useTheme();
  return (
    <Container>
      <TitleInput
        value={title}
        editable={isEditMode}
        maxLength={15}
        placeholder="Título"
        placeholderTextColor={theme.colors.noteTextLight}
        onChangeText={onChangeTitle}
      />

      {shortcutActionButton && (
        <ShortcutButton
          isActive={isEditMode}
          {...shortcutActionButton}
        />
      )}
    </Container>
  )
}
