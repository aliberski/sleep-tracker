import React, { memo } from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import style, { pickerStyle } from './style';
import { IProps } from './types';

const Select = (props: IProps) => {
  const {
    placeholder,
    items,
    onChange,
    value,
    label,
  } = props;
  return (
    <View style={style.container}>
      {!!label && <Text style={style.label}>{label}</Text>}
      <RNPickerSelect
        placeholder={placeholder}
        items={items}
        onValueChange={onChange}
        style={pickerStyle}
        value={value}
        useNativeAndroidPickerStyle={false}
      />
    </View>
  );
};

export { Select };
export default memo(Select);
