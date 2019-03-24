import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface IProps {
  backgroundColor?: string;
  padding?: number;
  children: ReactNode;
  center?: boolean;
  extraScrollHeight?: number;
  style?: any;
}

export interface IStyle {
  contentContainer: ViewStyle;
  center: ViewStyle;
}
