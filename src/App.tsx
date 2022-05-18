import React from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeProvider } from "styled-components/native";
import { Home } from "./screens/home";
import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={theme.colors.primary}
        />
        <Home />
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}
