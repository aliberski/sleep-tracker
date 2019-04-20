import { ReactNode } from 'react';
import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  children: ReactNode;
  visible: boolean;
  isReady: boolean;
  onRequestClose: () => void;
  title?: string;
  closeTestID?: string;
}

export interface IStyle {
  header: ViewStyle;
  title: TextStyle;
  close: ViewStyle;
}
