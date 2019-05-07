import React from 'react';
import { Text, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import FullPageLoader from 'components/FullPageLoader';
import SafeView from 'components/SafeView';
import DatePicker from 'containers/DatePicker';
import SurveyForm from './form';

import { surveyFormDataSelector } from 'modules/Survey/selectors';
import { surveyActions } from 'modules/Survey/actions';
import { IStoreState } from 'store/appReducer';
import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import { IProps, IFormState } from './types';
import style from './style';

class SurveyScreen extends React.Component<IProps> {
  public static navigationOptions = {
    title: texts.surveyTitle.toUpperCase(),
  };

  public componentDidUpdate(prevProps: IProps) {
    if (
      !prevProps.submitSuccess &&
      this.props.submitSuccess
    ) {
      Alert.alert(texts.success, texts.surveySuccess, [
        { text: texts.ok, onPress: () => {} },
      ]);
    }
  }

  public handleSubmit = (values: IFormState) => {
    const hasErrors = this.validate(values);
    if (hasErrors) {
      return;
    }
    const { selectedDay, submit } = this.props;
    const payload = {
      date: selectedDay,
      ...values,
    };
    submit(payload);
  };

  public render() {
    const {
      dataLoading,
      submitLoading,
      data,
      selectedDay,
    } = this.props;

    if (dataLoading) {
      return <FullPageLoader />;
    }

    return (
      <SafeView>
        <View
          style={style.container}
          testID={app.survey.id}
        >
          <Text style={style.intro}>
            {texts.surveyIntro}
          </Text>
          <DatePicker />
          <SurveyForm
            onSubmit={this.handleSubmit}
            submitLoading={submitLoading}
            data={data}
            selectedDay={selectedDay}
          />
        </View>
      </SafeView>
    );
  }

  private validate = (values: IFormState) => {
    let errorText = '';
    const { mood, sleepHour, wakeUpHour } = values;
    if (!mood) {
      errorText = texts.surveyValidationMood;
    }
    if (errorText.length === 0 && !sleepHour) {
      errorText = texts.surveyValidationSleepHour;
    }
    if (errorText.length === 0 && !wakeUpHour) {
      errorText = texts.surveyValidationWakeUpHour;
    }
    if (errorText.length === 0) {
      return false;
    }
    Alert.alert('', errorText, [
      { text: texts.ok, onPress: () => {} },
    ]);
    return true;
  };
}

const mapStateToProps = ({
  survey,
  selectedDay,
}: IStoreState) => ({
  dataLoading: survey.data.loading,
  data: surveyFormDataSelector(survey, selectedDay),
  submitLoading: survey.form.loading,
  submitSuccess: survey.form.success,
  selectedDay,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      submit: surveyActions.surveyFormRequest,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SurveyScreen);
