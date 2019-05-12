import React from 'react';
import { View, Alert, Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import { Select, TextInput } from 'components/Inputs';
import FullPageLoader from 'components/FullPageLoader';
import SafeView from 'components/SafeView';
import Button from 'components/Button';

import { is } from 'helpers/index';
import { IStoreState } from 'store/appReducer';
import { profileActions } from 'modules/Profile/actions';
import texts from 'constants/translations';
import style from './style';
import { IProps, IState, ActivityType } from './types';

const physicalActivityData = [
  {
    label: texts.profileActivityLow,
    value: ActivityType.low,
  },
  {
    label: texts.profileActivityAverage,
    value: ActivityType.average,
  },
  {
    label: texts.profileActivityHigh,
    value: ActivityType.high,
  },
];

class ProfileScreen extends React.Component<
  IProps,
  IState
> {
  public state: IState = {
    weight: '',
    height: '',
    age: '',
    activity: null,
  };

  public static navigationOptions = {
    title: texts.profileTitle.toUpperCase(),
  };

  public componentDidMount() {
    this.setInputs();
  }

  public componentDidUpdate(prevProps: IProps) {
    if (
      !prevProps.submitSuccess &&
      this.props.submitSuccess
    ) {
      Alert.alert(texts.success, texts.profileSuccessInfo, [
        { text: texts.ok, onPress: () => {} },
      ]);
    }
  }

  public setInputs = () => {
    const {
      inputs: { weight, height, age, activity },
    } = this.props;
    is(weight) && this.setWeight(weight);
    is(height) && this.setHeight(height);
    is(age) && this.setAge(age);
    is(activity) && this.setActivity(activity);
  };

  public submit = () => this.props.submit(this.state);

  public setActivity = (activity: string | null) =>
    this.setState({ activity });

  public setWeight = (weight: string) =>
    this.setState({ weight });

  public setHeight = (height: string) =>
    this.setState({ height });

  public setAge = (age: string) => this.setState({ age });

  public render() {
    const { activity, weight, height, age } = this.state;
    const {
      inputsLoading,
      submitLoading,
      submitError,
    } = this.props;

    if (inputsLoading) {
      return <FullPageLoader />;
    }

    return (
      <SafeView>
        <View style={style.container}>
          <KeyboardAwareWrapper>
            <TextInput
              onChangeText={this.setWeight}
              value={weight}
              keyboardType='numeric'
              label={texts.profileLabelWeight}
            />
            <TextInput
              onChangeText={this.setHeight}
              value={height}
              keyboardType='numeric'
              label={texts.profileLabelHeight}
            />
            <TextInput
              onChangeText={this.setAge}
              value={age}
              keyboardType='numeric'
              label={texts.profileLabelAge}
            />
            <Select
              items={physicalActivityData}
              onChange={this.setActivity}
              value={activity}
              label={texts.profileLabelActivity}
            />
          </KeyboardAwareWrapper>
          {!!submitError && (
            <Text style={style.formError}>
              {submitError.toUpperCase()}
            </Text>
          )}
          <Button
            onPress={this.submit}
            text={texts.save}
            isLoading={submitLoading}
          />
        </View>
      </SafeView>
    );
  }
}

const mapStateToProps = ({ profile }: IStoreState) => ({
  inputs: profile.data.inputs,
  inputsLoading: profile.data.loading,

  submitLoading: profile.form.loading,
  submitSuccess: profile.form.success,
  submitError: profile.form.error,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      submit: profileActions.profileFormRequest,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
