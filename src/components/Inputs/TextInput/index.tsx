import React, { memo } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

import { COLOR } from 'constants/globalStyle';
import style from './style';
import { IProps } from './types';

const getInputStyle = (error?: string, disabled?: boolean) => {
  const inputStyle = [style.input];
  if (error) {
    inputStyle.push(style.inputWithError);
  }
  if (disabled) {
    inputStyle.push(style.inputDisabled);
  }
  return StyleSheet.flatten(inputStyle);
};

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
    disabled,
  } = props;

  const inputStyle = getInputStyle(error, disabled);

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
        editable={!disabled}
        {...inputProps}
      />
      <Text style={style.error}>{error}</Text>
    </View>
  );
};

export { Input };
export default memo(Input);
