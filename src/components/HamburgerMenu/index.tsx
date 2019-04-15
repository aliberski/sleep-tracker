import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { IconMenu } from 'components/Icons';

import { IProps } from './types';
import style from './style';

const HamburgerMenu = (props: IProps) => (
  <TouchableOpacity
    onPress={() => props.navigation.toggleDrawer()}
    style={style.container}
  >
    <IconMenu />
  </TouchableOpacity>
);

export { HamburgerMenu };
export default withNavigation(HamburgerMenu);
