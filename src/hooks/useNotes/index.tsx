import React from "react";

import { createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import uuid from "react-native-uuid";

import { NoteItem, NoteProps } from "../../components/Note/interface";
import { NotesProviderProps } from "./interface";
import { validateTextInput } from "./utils/validators";

interface NotesContextProps {
  notes: NoteItem[];
  createNote(note: NoteProps): boolean;
  editNote(note: NoteItem): boolean;
  deleteNote(id: string): void;
}

const NotesContext = createContext({} as NotesContextProps);

export function NotesProvider({ children }: NotesProviderProps): JSX.Element {
  const [notes, setNotes] = useState<NoteItem[]>([]);

  function createNote({ title, description }: NoteProps): boolean {
    const titleValidated = validateTextInput("Título", title);
    const descriptionValidated = validateTextInput("Descrição", description || "");

    if (!titleValidated.status.isValid) {
      Alert.alert("Notepad", titleValidated.status.message);
      return false;
    }

    if (!descriptionValidated.status.isValid) {
      Alert.alert("Notepad", descriptionValidated.status.message);
      return false;
    }

    const note = {
      id: uuid.v4() as string,
      title,
      description
    };

    setNotes([note, ...notes]);
    return true;
  }

  function editNote({ id, title, description }: NoteItem): boolean {
    const titleValidated = validateTextInput("Título", title);
    const descriptionValidated = validateTextInput("Descrição", description || "");

    if (!titleValidated.status.isValid) {
      Alert.alert("Notepad", titleValidated.status.message);
      return false;
    }

    if (!descriptionValidated.status.isValid) {
      Alert.alert("Notepad", descriptionValidated.status.message);
      return false;
    }

    const updatedNotes = notes.map(note => {
      if (note.id === id) {
        const editedNote = {
          ...note,
          title,
          description
        }

        return editedNote;
      }

      return note;
    });

    setNotes(updatedNotes);
    return true;
  }

  function deleteNote(id: string): void {
    const updatedNotes = notes.filter(note => note.id !== id);

    setNotes(updatedNotes);
  }

  return (
    <NotesContext.Provider value={{ notes, createNote, editNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  )
}

export function useNotes() {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error("useNotes must be used within a NotesProvider");
  }

  return context;
}
