import React from 'react';
import {
  Calendar as CalendarComponent,
  LocaleConfig,
} from 'react-native-calendars';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { selectedDayActions } from 'modules/SelectedDay/actions';
import { getTodaysDate } from 'helpers';
import calendarNames from 'constants/calendarNames';
import { IStoreState } from 'store/appReducer';
import { getMarkedDates } from './helpers';
import style, { theme } from './style';
import { IProps, IState, IDay } from './types';

LocaleConfig.locales['pl'] = calendarNames;
LocaleConfig.defaultLocale = 'pl';

class Calendar extends React.PureComponent<IProps, IState> {
  public state: IState = {
    markedDates: {},
    isCalendarMounted: true,
  };

  public componentDidMount() {
    this.handleInitialSelection();
  }

  public componentDidUpdate(prevProps: IProps) {
    if (
      prevProps.isSurveyLoading &&
      !this.props.isSurveyLoading
    ) {
      this.handleInitialSelection();
    }
  }

  public handleInitialSelection = () => {
    const {
      selectedDay,
      onSelect,
      surveyData,
    } = this.props;
    const date = selectedDay
      ? selectedDay
      : getTodaysDate();
    const markedDates = getMarkedDates(surveyData, date);
    this.setState({ markedDates });
    onSelect(date);
  };

  public onDayPress = ({ dateString }: IDay) => {
    this.setState(
      {
        markedDates: getMarkedDates(
          this.props.surveyData,
          dateString,
        ),
      },
      () => {
        const { onSelect, onAfterSelect } = this.props;
        onSelect(dateString);
        onAfterSelect && onAfterSelect();
      },
    );
  };

  public render() {
    if (!this.state.isCalendarMounted) {
      return null;
    }
    return (
      <CalendarComponent
        firstDay={1}
        onDayPress={this.onDayPress}
        style={style.calendar}
        theme={theme}
        markedDates={this.state.markedDates}
      />
    );
  }
}

const mapStateToProps = ({
  selectedDay,
  survey,
}: IStoreState) => ({
  selectedDay,
  isSurveyLoading: survey.data.loading,
  surveyData: survey.data.surveyData,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      onSelect: selectedDayActions.selectDay,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calendar);
