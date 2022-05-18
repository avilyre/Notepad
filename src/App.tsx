import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { ThemeProvider } from "styled-components/native";
import { Routes } from "./routes";

import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar
            barStyle="light-content"
            backgroundColor={theme.colors.primary}
          />
          <Routes />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}
