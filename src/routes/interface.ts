import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export enum ScreenNames {
  NotesScreen = "NotesScreen",
  NotesViewScreen = "NotesViewScreen",
}

export type RouteParams = {
  NotesScreen?: {};
  NotesViewScreen?: {};
}

export interface ScreenDefaultProps {
  navigation: NativeStackNavigationProp<RouteParams>;
}
