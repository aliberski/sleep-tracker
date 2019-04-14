import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Calendar from 'components/Calendar';

import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import { getTodaysDate } from 'helpers';
import style from './style';
import { IProps, IState } from './types';
import { Button } from 'components/Button';

class MainScreen extends React.Component<IProps, IState> {
  public state: IState = {
    selectedDay: getTodaysDate(),
  };

  public render() {
    return (
      <View style={style.container} testID={app.main.id}>
        <Calendar onSelect={this.handleDaySelect} />
        <View style={style.content}>
          {this.renderTitle()}
          {this.renderButtons()}
        </View>
      </View>
    );
  }

  private renderTitle = () => (
    <Text style={style.title}>
      {texts.mainTitle}{' '}
      <Text style={style.day}>
        {this.state.selectedDay}
      </Text>
    </Text>
  );

  private renderButtons = () => {
    return (
      <View style={style.buttons}>
        <Button
          testID={app.main.buttonSurvey}
          style={style.buttonSurvey}
          text={texts.mainButtonSurvey}
          onPress={() => {}}
        />
        <Button
          testID={app.main.buttonStatistics}
          text={texts.mainButtonStatistics}
          onPress={() => {}}
        />
      </View>
    );
  };

  private handleDaySelect = (selectedDay: string) => {
    this.setState({ selectedDay });
  };
}

export { MainScreen };
export default connect()(MainScreen);
