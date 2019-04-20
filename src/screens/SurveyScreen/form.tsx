import React from 'react';
import { View, Text } from 'react-native';

import MoodSelector from 'components/MoodSelector';
import { Select } from 'components/Inputs';

import { physicalActivityData } from 'constants/selectInputsData';

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
    physicalActivity: null,
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
        <Select
          placeholder='test'
          items={physicalActivityData}
          onChange={physicalActivity =>
            this.setState({ physicalActivity })
          }
          value={this.state.physicalActivity}
          label='Aktywność fizyczna'
        />
      </View>
    );
  }
}

export default SurveyForm;
