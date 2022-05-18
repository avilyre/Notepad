import { RectButtonProps } from "react-native-gesture-handler";

export interface ShortcutButtonProps extends RectButtonProps {
  title: string;
  isActive?: boolean;
  onPress(): void;
}

export interface ContainerProps {
  isActive: boolean;
}

export interface TitleProps {
  isActive: boolean;
}

