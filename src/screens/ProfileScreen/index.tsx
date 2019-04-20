import React from 'react';
import { View } from 'react-native';

import { Select, TextInput } from 'components/Inputs';
import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import Button from 'components/Button';
import SafeView from 'components/SafeView';

import texts from 'constants/translations';
import style from './style';
import { IProps, IState } from './types';

const physicalActivityData = [
  {
    label: texts.profileActivityLow,
    value: texts.profileActivityLow,
  },
  {
    label: texts.profileActivityAverage,
    value: texts.profileActivityAverage,
  },
  {
    label: texts.profileActivityHigh,
    value: texts.profileActivityHigh,
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

  public submit = () => {};

  public onActivityChange = (activity: string) =>
    this.setState({ activity });

  public setWeight = (weight: string) =>
    this.setState({ weight });

  public setHeight = (height: string) =>
    this.setState({ height });

  public setAge = (age: string) => this.setState({ age });

  public render() {
    const { activity, weight, height, age } = this.state;
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
              onChange={this.onActivityChange}
              value={activity}
              label={texts.profileLabelActivity}
            />
          </KeyboardAwareWrapper>
          <Button onPress={this.submit} text={texts.save} />
        </View>
      </SafeView>
    );
  }
}

export default ProfileScreen;
