import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface IProps {
  children: ReactNode;
  color?: string;
}

export interface IStyle {
  container: ViewStyle;
}
