export interface HeaderProps {
  title: string;
  isEditMode?: boolean;
  shortcutActionButton?: {
    title: string;
    onPress(): void;
  }
  onChangeTitle?: (text: string) => void;
}
