import React from 'react';
import { Text, ScrollView } from 'react-native';

import SafeView from 'components/SafeView';

import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import style from './style';

const StatisticsScreen = () => {
  return (
    <SafeView>
      <ScrollView
        style={style.container}
        contentContainerStyle={style.contentContainer}
        testID={app.survey.id}
      >
        <Text>StatisticsScreen</Text>
      </ScrollView>
    </SafeView>
  );
};

StatisticsScreen.navigationOptions = {
  title: texts.statisticsTitle.toUpperCase(),
};

export default StatisticsScreen;
