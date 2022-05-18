import { RectButtonProps } from "react-native-gesture-handler";

export interface NoteProps extends RectButtonProps {
  title: string;
  description?: string;
}

export interface NoteItem extends NoteProps {
  id: string;
}
