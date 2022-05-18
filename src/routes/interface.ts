import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export enum ScreenNames {
  NotesScreen = "NotesScreen",
  NotesViewScreen = "NotesViewScreen",
  NoteCreateScreen = "NoteCreateScreen"
}

export type RouteParams = {
  NotesScreen?: {};
  NotesViewScreen?: {};
  NoteCreateScreen?: {};
}

export interface ScreenDefaultProps {
  navigation: NativeStackNavigationProp<RouteParams>;
}
