import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  data: number[];
  title: string;
  ticks: number;
  color?: string;
  height?: number;
}

export interface IStyle {
  container: ViewStyle;
  chartWrapper: ViewStyle;
  title: TextStyle;
  chart: ViewStyle;
  grid: ViewStyle;
  line: ViewStyle;
}
