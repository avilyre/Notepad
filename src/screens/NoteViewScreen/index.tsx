import React, { useState } from "react";

import { useTheme } from "styled-components";

import { DeleteButton } from "../../components/DeleteButton";
import { ScreenTemplate } from "../../components/templates/ScreenTemplate";
import { useNotes } from "../../hooks/useNotes";
import { ScreenNames } from "../../routes/interface";
import { NoteViewScreenProps } from "./interface";

import { DescriptionInput } from "./styles";

export function NoteViewScreen({ route, navigation }: NoteViewScreenProps): JSX.Element {
  const note = route.params.note;
  const { editNote, deleteNote } = useNotes();
  const theme = useTheme();

  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [isEditMode, setIsEditMode] = useState(false);
  const editModeText = !isEditMode ? "Editar" : "Salvar";

  function onChangeTitle(text: string): void {
    setTitle(text);
  }

  function handleToggleEditMode() {
    const isEdited = editNote({ id: note.id, title, description });

    if (isEdited) {
      setIsEditMode(!isEditMode);
    }
  }

  function handleDeleteNote() {
    deleteNote(note.id);
    navigation.navigate(ScreenNames.NotesScreen);
  }

  return (
    <ScreenTemplate
      header={{
        title,
        isEditMode,
        onChangeTitle,
        shortcutActionButton: {
          title: editModeText,
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
      <DeleteButton title="Apagar" onPress={handleDeleteNote} />
    </ScreenTemplate>
  );
}
