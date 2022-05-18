import React, { useState } from "react";
import { Alert } from "react-native";

import { useTheme } from "styled-components";

import { ScreenTemplate } from "../../components/templates/ScreenTemplate";
import { DescriptionInput } from "./styles";

export function NoteViewScreen(): JSX.Element {
  const theme = useTheme();

  const [title, setTitle] = useState("Título");
  const [description, setDescription] = useState("Conteúdo da nota");
  const [isEditMode, setIsEditMode] = useState(false);

  function onChangeTitle(text: string): void {
    setTitle(text);
  }

  function handleToggleEditMode() {
    setIsEditMode(!isEditMode);
  }

  return (
    <ScreenTemplate
      header={{
        title,
        isEditMode,
        onChangeTitle,
        shortcutActionButton: {
          title: "Editar",
          onPress: handleToggleEditMode
        }
      }}
    >
      <DescriptionInput
        value={description}
        editable={isEditMode}
        scrollEnabled
        multiline
        textAlignVertical="top"
        placeholder="Descrição..."
        placeholderTextColor={theme.colors.noteTextLight}
        onChangeText={setDescription}
      />
    </ScreenTemplate>
  );
}
