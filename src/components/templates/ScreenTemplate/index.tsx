import React from "react";
import { Header } from "../../Header";
import { ScreenTemplateProps } from "./interface";
import { Container } from "./styles";

export function ScreenTemplate({ children, header }: ScreenTemplateProps): JSX.Element {
  return (
    <Container>
      <Header
        title={header.title}
        editMode={header.editMode}
        shortcutActionButton={header.shortcutActionButton}
        onChangeTitle={header.onChangeTitle}
      />
      {children}
    </Container>
  );
}
