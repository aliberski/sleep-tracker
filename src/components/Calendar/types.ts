import { ViewStyle } from 'react-native';
import { markedStyle } from './style';

export interface IProps {
  onSelect: (day: string) => void;
  initialDate?: string;
}

export interface IState {
  markedDates: {
    [day: string]: IOptions;
  };
}

export interface IOptions {
  selected: boolean;
  marked: boolean;
  customStyles: typeof markedStyle;
}

export interface IStyle {
  calendar: ViewStyle;
}

export interface IDay {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}
