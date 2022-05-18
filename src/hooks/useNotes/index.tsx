import React from "react";

import { createContext, useContext, useState } from "react";
import uuid from "react-native-uuid";

import { NoteItem, NoteProps } from "../../components/Note/interface";
import { NotesProviderProps } from "./interface";

interface NotesContextProps {
  notes: NoteItem[];
  createNote(note: NoteProps): void;
}

const NotesContext = createContext({} as NotesContextProps);

export function NotesProvider({ children }: NotesProviderProps): JSX.Element {
  const [notes, setNotes] = useState<NoteItem[]>([]);

  function createNote({ title, description }: NoteProps): void {
    const note = {
      id: uuid.v4() as string,
      title,
      description
    };

    setNotes([note, ...notes]);
  }

  return (
    <NotesContext.Provider value={{ notes, createNote }}>
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
