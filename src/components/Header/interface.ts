export interface HeaderProps {
  title: string;
  shortcutActionButton?: {
    title: string;
    onPress(): void;
  }
}
