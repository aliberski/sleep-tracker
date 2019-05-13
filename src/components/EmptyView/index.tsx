import React, { memo } from 'react';
import { Text, View } from 'react-native';

import { Button } from 'components/Button';

import style from './style';
import { IProps } from './types';

const EmptyView = (props: IProps) => {
  const {
    text,
    buttonText,
    onButtonPress,
    testID,
    buttonTestID,
  } = props;
  return (
    <View style={style.container} testID={testID}>
      <Text style={style.text}>{text}</Text>
      <Button
        onPress={onButtonPress}
        text={buttonText}
        testID={buttonTestID}
      />
    </View>
  );
};

export default memo(EmptyView);
