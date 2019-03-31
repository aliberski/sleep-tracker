import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { IProps } from './types';

import style from './style';

const SafeView: React.FC<IProps> = ({
  children,
}: IProps) => (
  <SafeAreaView style={style.container}>
    {children}
  </SafeAreaView>
);

export default SafeView;
