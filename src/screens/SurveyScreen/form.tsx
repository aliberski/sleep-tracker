import React from 'react';
import { View, Text } from 'react-native';

import MoodSelector from 'components/MoodSelector';

import texts from 'constants/translations';
import { MoodTypes } from 'components/MoodSelector/types';
import { IFormProps, IFormState } from './types';
import { formStyle as style } from './style';

class SurveyForm extends React.Component<
  IFormProps,
  IFormState
> {
  public state: IFormState = {
    sleepQuality: null,
  };

  public handleSleepQualitySelect = (
    sleepQuality: MoodTypes,
  ) => {
    this.setState({ sleepQuality });
  };

  public render() {
    const { sleepQuality } = this.state;
    return (
      <View style={style.container}>
        <MoodSelector
          label={texts.surveyLabelMood}
          selected={sleepQuality}
          onSelect={this.handleSleepQualitySelect}
        />
      </View>
    );
  }
}

export default SurveyForm;
