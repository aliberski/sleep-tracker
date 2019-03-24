import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { IProps } from './types';
import style from './style';

const KeyboardAwareWrapper = (props: IProps) => {
  const {
    backgroundColor,
    padding,
    children,
    center,
    extraScrollHeight,
  } = props;

  const containerStyle = StyleSheet.flatten([
    { backgroundColor, padding },
    props.style,
  ]);
  const contentContainerStyle = StyleSheet.flatten([
    style.contentContainer,
    center && style.center,
  ]);

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps='handled'
      style={containerStyle}
      contentContainerStyle={contentContainerStyle}
      extraScrollHeight={extraScrollHeight}
      scrollEnabled
      enableOnAndroid
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardAwareWrapper;
