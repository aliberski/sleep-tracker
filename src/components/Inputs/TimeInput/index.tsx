import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { TIME_FORMAT } from 'constants/index';

import texts from 'constants/translations';
import style from './style';
import { IProps, IState } from './types';
import { COLOR } from 'constants/globalStyle';

class TimeInput extends React.PureComponent<
  IProps,
  IState
> {
  public state: IState = {
    isVisible: false,
  };

  public togglePicker = () => {
    this.setState((prev: IState) => ({
      value: null,
      isVisible: !prev.isVisible,
    }));
  };

  public handleSelect = (date: Date) => {
    const value = moment(date).format(TIME_FORMAT);
    this.props.onSelect(value);
    this.togglePicker();
  };

  public render() {
    const { isVisible } = this.state;
    return (
      <>
        {this.renderInput()}
        <DateTimePicker
          mode='time'
          minuteInterval={10}
          isVisible={isVisible}
          onConfirm={this.handleSelect}
          onCancel={this.togglePicker}
        />
      </>
    );
  }

  private renderInput = () => {
    const {
      label,
      value,
      testID,
      valueTestID,
    } = this.props;
    const color = value ? COLOR.font : COLOR.border;
    const valueStyle = StyleSheet.flatten([
      style.value,
      { color },
    ]);
    return (
      <View style={style.inputWrapper}>
        <Text style={style.label}>{label}</Text>
        <TouchableOpacity
          onPress={this.togglePicker}
          style={style.input}
          testID={testID}
        >
          <Text style={valueStyle} testID={valueTestID}>
            {value || texts.timePlaceholder}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
}

export default TimeInput;
