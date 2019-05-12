import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import SafeView from 'components/SafeView';
import Chart from 'components/Chart';

import { IStoreState } from 'store/appReducer';
import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import { getChartsData } from './helpers';
import { IProps, IChart } from './types';
import style from './style';

class StatisticsScreen extends React.Component<IProps> {
  public static navigationOptions = {
    title: texts.statisticsTitle.toUpperCase(),
  };

  private get charts() {
    const { statistics } = this.props;
    return getChartsData(statistics);
  }

  public render() {
    return (
      <SafeView>
        <View
          style={style.container}
          testID={app.survey.id}
        >
          <Text style={style.intro}>
            {texts.statisticsIntro}
          </Text>
          {this.renderCharts()}
        </View>
      </SafeView>
    );
  }

  private renderCharts = () => {
    return (
      <ScrollView
        style={style.charts}
        contentContainerStyle={style.chartsContainer}
      >
        {this.charts.map((chartProps: IChart) => (
          <Chart {...chartProps} />
        ))}
      </ScrollView>
    );
  };
}

const mapStateToProps = ({ statistics }: IStoreState) => ({
  statistics,
});

export default connect(mapStateToProps)(StatisticsScreen);
