import React, { useState } from "react";

import { useTheme } from "styled-components";

import { ScreenTemplate } from "../../components/templates/ScreenTemplate";
import { NoteViewScreenProps } from "./interface";
import { DescriptionInput } from "./styles";

export function NoteViewScreen({ editMode = true }: NoteViewScreenProps): JSX.Element {
  const theme = useTheme();

  const [title, setTitle] = useState("Título");
  const [description, setDescription] = useState("Conteúdo da nota");

  function onChangeTitle(text: string): void {
    setTitle(text);
  }

  return (
    <ScreenTemplate
      header={{
        title,
        editMode,
        onChangeTitle,
        shortcutActionButton: {
          title: "Apagar",
          onPress: () => { }
        },
      }}
    >
      <DescriptionInput
        value={description}
        editable={editMode}
        multiline
        textAlignVertical="top"
        placeholder="Descrição..."
        placeholderTextColor={theme.colors.noteTextLight}
        onChangeText={setDescription}
      />
    </ScreenTemplate>
  );
}
