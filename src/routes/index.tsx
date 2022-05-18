import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NotesScreen } from "../screens/NotesScreen";
import { NoteViewScreen } from "../screens/NoteViewScreen";
import { RouteParams, ScreenNames } from "./interface";

const { Navigator, Screen } = createNativeStackNavigator<RouteParams>();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

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
    </Navigator>
  )
}
