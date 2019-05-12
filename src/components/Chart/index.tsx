import React, { memo } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { LineChart, YAxis } from 'react-native-svg-charts';

import style, {
  yAxisStyle,
  contentInsetStyle,
  defaultColor,
} from './style';
import { IProps } from './types';

const Chart = (props: IProps) => {
  const {
    data,
    title,
    ticks,
    color = defaultColor,
    height = 200,
  } = props;

  const wrapperStyle = StyleSheet.flatten([
    style.chartWrapper,
    { height },
  ]);

  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <View style={wrapperStyle}>
        <YAxis
          data={data}
          contentInset={contentInsetStyle}
          svg={yAxisStyle}
          numberOfTicks={ticks - 1}
        />
        <LineChart
          style={style.chart}
          data={data}
          svg={{ stroke: color }}
          contentInset={contentInsetStyle}
        />
        <View style={style.grid}>
          {new Array(ticks).fill(0).map((_, i: number) => (
            <View key={i} style={style.line} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default memo(Chart);
