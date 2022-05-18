import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NotesScreen } from "../screens/NotesScreen";
import { NoteViewScreen } from "../screens/NoteViewScreen";
import { RouteParams, ScreenNames } from "./interface";

const { Navigator, Screen } = createNativeStackNavigator<RouteParams>();

export function Routes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name={ScreenNames.NotesScreen} component={NotesScreen} />
      <Screen name={ScreenNames.NotesViewScreen} component={NoteViewScreen} />
    </Navigator>
  )
}
