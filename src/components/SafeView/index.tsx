import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { IProps } from './types';

import style from './style';

const SafeView: React.FC<IProps> = ({
  children,
  color: backgroundColor,
}: IProps) => (
  <SafeAreaView
    style={StyleSheet.flatten([
      style.container,
      { backgroundColor },
    ])}
  >
    {children}
  </SafeAreaView>
);

export default SafeView;
