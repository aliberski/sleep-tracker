import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import Calendar from 'containers/Calendar';
import Button from 'components/Button';

import { surveyActions } from 'modules/Survey/actions';
import { profileActions } from 'modules/Profile/actions';
import { IStoreState } from 'store/appReducer';
import routes from 'constants/routes';
import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import style from './style';
import { IProps } from './types';

class MainScreen extends React.Component<IProps> {
  public componentDidMount() {
    const {
      fetchSurveyData,
      fetchProfileData,
    } = this.props;
    fetchSurveyData();
    fetchProfileData();
  }

  public onSurveyButtonPress = () => {
    this.props.navigation.navigate(routes.SURVEY);
  };

  public onStatisticsButtonPress = () => {
    this.props.navigation.navigate(routes.STATISTICS);
  };

  public render() {
    return (
      <View style={style.container} testID={app.main.id}>
        <Calendar />
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
        {this.props.selectedDay}
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
          onPress={this.onSurveyButtonPress}
        />
        <Button
          testID={app.main.buttonStatistics}
          text={texts.mainButtonStatistics}
          onPress={this.onStatisticsButtonPress}
        />
      </View>
    );
  };
}

const mapStateToProps = ({ selectedDay }: IStoreState) => ({
  selectedDay,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      fetchSurveyData: surveyActions.surveyDataRequest,
      fetchProfileData: profileActions.profileDataRequest,
    },
    dispatch,
  );

export { MainScreen };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainScreen);
