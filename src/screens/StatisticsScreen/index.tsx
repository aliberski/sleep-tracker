import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import SafeView from 'components/SafeView';
import Chart from 'components/Chart';
import EmptyView from 'components/EmptyView';

import { IStoreState } from 'store/appReducer';
import route from 'constants/routes';
import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import { getChartsData } from './helpers';
import { IProps, IChart } from './types';
import style from './style';

class StatisticsScreen extends React.Component<IProps> {
  public static navigationOptions = {
    title: texts.statisticsTitle.toUpperCase(),
  };

  public goToSurvey = () =>
    this.props.navigation.navigate(route.SURVEY);

  private get charts() {
    const { statistics } = this.props;
    return getChartsData(statistics);
  }

  public render() {
    if (this.props.statistics.mood.length === 0) {
      return (
        <EmptyView
          text={texts.statisticsEmptyText}
          buttonText={texts.statisticsEmptyButtonText}
          testID={app.statistics.emptyView}
          buttonTestID={app.statistics.emptyButton}
          onButtonPress={this.goToSurvey}
        />
      );
    }
    return (
      <SafeView>
        <View
          style={style.container}
          testID={app.statistics.id}
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
          <Chart {...chartProps} key={chartProps.title} />
        ))}
      </ScrollView>
    );
  };
}

const mapStateToProps = ({ statistics }: IStoreState) => ({
  statistics,
});

export default connect(mapStateToProps)(StatisticsScreen);
