import React, { memo } from 'react';
import { Text, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import texts from 'constants/translations';
import style, { pickerStyle } from './style';
import { IProps } from './types';
import { COLOR } from 'constants/globalStyle';

const Select = (props: IProps) => {
  const { items, onChange, value, label } = props;
  const placeholder = {
    label: texts.select,
    value: null,
    color: COLOR.disabled,
  };
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
