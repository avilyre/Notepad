import React, { useState } from "react";

import { useTheme } from "styled-components";

import { ScreenTemplate } from "../../components/templates/ScreenTemplate";

import { useNotes } from "../../hooks/useNotes";
import { ScreenNames } from "../../routes/interface";
import { NoteCreateScreenProps } from "./interface";

import { DescriptionInput } from "./styles";

export function NoteCreateScreen({ navigation }: NoteCreateScreenProps): JSX.Element {
  const theme = useTheme();
  const { createNote } = useNotes();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function onChangeTitle(text: string): void {
    setTitle(text);
  }

  return (
    <ScreenTemplate
      header={{
        title,
        isEditMode: true,
        onChangeTitle,
        shortcutActionButton: {
          title: "Pronto",
          onPress: () => {
            const created = createNote({ title, description });
            if (created) navigation.navigate(ScreenNames.NotesScreen);
          }
        }
      }}
    >
      <DescriptionInput
        value={description}
        editable={true}
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
