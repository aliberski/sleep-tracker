import React from 'react';
import { View } from 'react-native';
import { get } from 'dot-prop';

import MoodSelector from 'components/MoodSelector';
import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import { TimeInput, ToggleInput } from 'components/Inputs';
import Button from 'components/Button';

import { app } from 'constants/testIDs';
import texts from 'constants/translations';
import { MoodTypes } from 'components/MoodSelector/types';
import { IFormProps, IFormState } from './types';
import { formStyle as style } from './style';

class SurveyForm extends React.PureComponent<
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

  public componentDidMount() {
    this.setInitialValues();
  }

  public componentDidUpdate(prevProps: IFormProps) {
    if (
      prevProps.selectedDay !== this.props.selectedDay ||
      (prevProps.submitLoading && !this.props.submitLoading)
    ) {
      this.setInitialValues();
    }
  }

  public setInitialValues = () => {
    const { data } = this.props;
    const mood = get(data, 'mood', null);
    const sleepHour = get(data, 'sleepHour', null);
    const wakeUpHour = get(data, 'wakeUpHour', null);
    const food = get(data, 'food', false);
    const alcohol = get(data, 'alcohol', false);
    const caffeine = get(data, 'caffeine', false);
    this.setMood(mood);
    this.setSleepHour(sleepHour);
    this.setWakeUpHour(wakeUpHour);
    this.setFood(food);
    this.setAlcohol(alcohol);
    this.setCaffeine(caffeine);
  };

  public setMood = (mood: MoodTypes | null) =>
    this.setState({ mood });

  public setSleepHour = (sleepHour: string | null) =>
    this.setState({ sleepHour });

  public setWakeUpHour = (wakeUpHour: string | null) =>
    this.setState({ wakeUpHour });

  public setFood = (food: boolean) =>
    this.setState({ food });

  public setAlcohol = (alcohol: boolean) =>
    this.setState({ alcohol });

  public setCaffeine = (caffeine: boolean) =>
    this.setState({ caffeine });

  public submit = () => this.props.onSubmit(this.state);

  public render() {
    const { mood, sleepHour, wakeUpHour } = this.state;
    const { data } = this.props;
    const food = get(data, 'food', false);
    const alcohol = get(data, 'alcohol', false);
    const caffeine = get(data, 'caffeine', false);

    return (
      <View style={style.container}>
        <KeyboardAwareWrapper>
          <View style={style.form}>
            <MoodSelector
              label={texts.surveyLabelMood}
              value={mood}
              onChange={this.setMood}
            />
            <TimeInput
              testID={app.survey.selectorSleepHour.button}
              valueTestID={
                app.survey.selectorSleepHour.value
              }
              label={texts.surveyLabelSleep}
              value={sleepHour}
              onChange={this.setSleepHour}
            />
            <TimeInput
              testID={app.survey.selectorWakeUpHour.button}
              valueTestID={
                app.survey.selectorWakeUpHour.value
              }
              label={texts.surveyLabelWakeUp}
              value={wakeUpHour}
              onChange={this.setWakeUpHour}
            />
            <ToggleInput
              testID={app.survey.toggleFood}
              onChange={this.setFood}
              initialValue={food}
              label={texts.surveyLabelFood}
            />
            <ToggleInput
              testID={app.survey.toggleAlcohol}
              onChange={this.setAlcohol}
              initialValue={alcohol}
              label={texts.surveyLabelAlcohol}
            />
            <ToggleInput
              testID={app.survey.toggleCaffeine}
              onChange={this.setCaffeine}
              initialValue={caffeine}
              label={texts.surveyLabelCaffeine}
            />
          </View>
        </KeyboardAwareWrapper>
        <Button
          testID={app.survey.buttonSubmit}
          onPress={this.submit}
          text={texts.save}
          isLoading={this.props.submitLoading}
        />
      </View>
    );
  }
}

export default SurveyForm;
