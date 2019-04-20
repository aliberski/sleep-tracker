import React from 'react';
import { View } from 'react-native';

import MoodSelector from 'components/MoodSelector';
import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import { TimeInput, ToggleInput } from 'components/Inputs';
import Button from 'components/Button';

import texts from 'constants/translations';
import { MoodTypes } from 'components/MoodSelector/types';
import { IFormProps, IFormState } from './types';
import { formStyle as style } from './style';

class SurveyForm extends React.Component<
  IFormProps,
  IFormState
> {
  public state: IFormState = {
    mood: null,
    sleepHour: null,
    wakeUpHour: null,
    food: false,
    alcohol: false,
    caffeine: false,
  };

  public onMoodChange = (mood: MoodTypes) =>
    this.setState({ mood });

  public onSleepHourChange = (sleepHour: string) =>
    this.setState({ sleepHour });

  public onWakeUpHourChange = (wakeUpHour: string) =>
    this.setState({ wakeUpHour });

  public onFoodChange = (food: boolean) =>
    this.setState({ food });

  public onAlcoholChange = (alcohol: boolean) =>
    this.setState({ alcohol });

  public onCaffeineChange = (alcohol: boolean) =>
    this.setState({ alcohol });

  public submit = () => this.props.onSubmit(this.state);

  public render() {
    const { mood, sleepHour, wakeUpHour } = this.state;
    return (
      <View style={style.container}>
        <KeyboardAwareWrapper>
          <View style={style.form}>
            <MoodSelector
              label={texts.surveyLabelMood}
              selected={mood}
              onChange={this.onMoodChange}
            />
            <TimeInput
              label={texts.surveyLabelSleep}
              value={sleepHour}
              onChange={this.onSleepHourChange}
            />
            <TimeInput
              label={texts.surveyLabelWakeUp}
              value={wakeUpHour}
              onChange={this.onWakeUpHourChange}
            />
            <ToggleInput
              onChange={this.onFoodChange}
              label={texts.surveyLabelFood}
            />
            <ToggleInput
              onChange={this.onAlcoholChange}
              label={texts.surveyLabelAlcohol}
            />
            <ToggleInput
              onChange={this.onCaffeineChange}
              label={texts.surveyLabelCaffeine}
            />
          </View>
        </KeyboardAwareWrapper>
        <Button onPress={this.submit} text={texts.save} />
      </View>
    );
  }
}

export default SurveyForm;
