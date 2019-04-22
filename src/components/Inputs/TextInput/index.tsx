import React, { memo } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';

import { COLOR } from 'constants/globalStyle';
import style from './style';
import { IProps } from './types';

const Input: React.FC<IProps> = (props: IProps) => {
  const {
    error,
    label,
    onChangeText,
    value,
    containerStyle,
    inputProps,
    testID,
    keyboardType,
  } = props;

  const inputStyle = error
    ? StyleSheet.flatten([
        style.input,
        style.inputWithError,
      ])
    : style.input;

  return (
    <View style={containerStyle}>
      <Text style={style.label}>{label}</Text>
      <TextInput
        testID={testID}
        onChangeText={onChangeText}
        value={value}
        style={inputStyle}
        keyboardType={keyboardType || 'default'}
        underlineColorAndroid='transparent'
        autoCapitalize='none'
        selectionColor={COLOR.primary}
        {...inputProps}
      />
      <Text style={style.error}>{error}</Text>
    </View>
  );
};

export { Input };
export default memo(Input);
