import { RectButtonProps } from "react-native-gesture-handler";

export interface ShortcutButtonProps extends RectButtonProps {
  title: string;
  onPress(): void;
}
