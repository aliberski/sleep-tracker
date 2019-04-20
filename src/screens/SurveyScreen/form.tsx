import React from 'react';
import { View, Text } from 'react-native';

import MoodSelector from 'components/MoodSelector';
import { TimeInput } from 'components/Inputs';

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
  };

  public onMoodSelect = (mood: MoodTypes) => {
    this.setState({ mood });
  };

  public onSleepHourChange = (sleepHour: string) => {
    this.setState({ sleepHour });
  };

  public onWakeUpHourChange = (wakeUpHour: string) => {
    this.setState({ wakeUpHour });
  };

  public render() {
    const { mood, sleepHour, wakeUpHour } = this.state;
    return (
      <View style={style.container}>
        <MoodSelector
          label={texts.surveyLabelMood}
          selected={mood}
          onSelect={this.onMoodSelect}
        />
        <TimeInput
          label={texts.surveyLabelSleep}
          value={sleepHour}
          onSelect={this.onSleepHourChange}
        />
        <TimeInput
          label={texts.surveyLabelWakeUp}
          value={wakeUpHour}
          onSelect={this.onWakeUpHourChange}
        />
      </View>
    );
  }
}

export default SurveyForm;
