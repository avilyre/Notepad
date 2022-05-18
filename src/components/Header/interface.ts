export interface HeaderProps {
  title: string;
  editMode?: boolean;
  shortcutActionButton?: {
    title: string;
    onPress(): void;
  }
  onChangeTitle?: (text: string) => void;
}
