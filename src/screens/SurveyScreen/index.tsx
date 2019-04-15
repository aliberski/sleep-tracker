import React from 'react';
import { Text, ScrollView } from 'react-native';

import SafeView from 'components/SafeView';

import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import style from './style';

const SurveyScreen = () => {
  return (
    <SafeView>
      <ScrollView
        style={style.container}
        contentContainerStyle={style.contentContainer}
        testID={app.survey.id}
      >
        <Text>SurveyScreen</Text>
      </ScrollView>
    </SafeView>
  );
};

SurveyScreen.navigationOptions = {
  title: texts.surveyTitle.toUpperCase(),
};

export default SurveyScreen;
