import React from "react";
import { StatusBar } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { Home } from "./screens/home";
import { theme } from "./styles/theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" backgroundColor={theme.colors.primary} />
      <Home />
    </ThemeProvider>
  )
}
