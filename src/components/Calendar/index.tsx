import React from 'react';
import {
  Calendar as CalendarComponent,
  LocaleConfig,
} from 'react-native-calendars';

import { getTodaysDate } from 'helpers';
import calendarNames from 'constants/calendarNames';
import style, { theme, markedStyle } from './style';
import { IProps, IState, IDay, IOptions } from './types';

LocaleConfig.locales['pl'] = calendarNames;
LocaleConfig.defaultLocale = 'pl';

const selectionOptions: IOptions = {
  selected: true,
  marked: true,
  customStyles: markedStyle,
};

class Calendar extends React.PureComponent<IProps, IState> {
  public state: IState = {
    markedDates: {
      [getTodaysDate()]: selectionOptions,
    },
  };

  public onDayPress = ({ dateString }: IDay) => {
    this.setState(
      {
        markedDates: {
          [dateString]: selectionOptions,
        },
      },
      () => this.props.onSelect(dateString),
    );
  };

  public render() {
    return (
      <CalendarComponent
        firstDay={1}
        onDayPress={this.onDayPress}
        style={style.calendar}
        theme={theme}
        markingType='custom'
        markedDates={this.state.markedDates}
      />
    );
  }
}

export default Calendar;
