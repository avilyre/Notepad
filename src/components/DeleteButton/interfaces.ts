import { RectButtonProps } from "react-native-gesture-handler";

export interface DeleteButtonProps extends RectButtonProps {
  title: string;
  onPress(): void;
}
