import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RouteParams, ScreenNames } from "./interface";

import { NotesScreen } from "../screens/NotesScreen";
import { NoteViewScreen } from "../screens/NoteViewScreen";
import { NoteCreateScreen } from "../screens/NoteCreateScreen";

const { Navigator, Screen } = createNativeStackNavigator<RouteParams>();

export function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right"
      }}
    >
      <Screen name={ScreenNames.NotesScreen} component={NotesScreen} />
      <Screen name={ScreenNames.NotesViewScreen} component={NoteViewScreen} />
      <Screen name={ScreenNames.NoteCreateScreen} component={NoteCreateScreen} />
    </Navigator>
  )
}
