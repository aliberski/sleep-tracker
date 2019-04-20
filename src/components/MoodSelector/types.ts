import { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  onSelect: (mood: MoodTypes) => void;
  selected: MoodTypes | null;
  label: string;
}

export interface IStyle {
  container: ViewStyle;
  label: TextStyle;
  buttons: ViewStyle;
  button: ViewStyle;
}

export interface IButton {
  id: number;
  onPress: () => void;
  icon: (color: string) => ReactNode;
  isSelected: boolean;
}

export enum MoodTypes {
  bad = 'bad',
  normal = 'normal',
  good = 'good',
}
