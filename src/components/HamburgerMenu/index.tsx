import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { Menu } from 'components/Icons/Menu';

import { IProps } from './types';
import style from './style';

const HamburgerMenu = (props: IProps) => (
  <TouchableOpacity
    onPress={() => props.navigation.toggleDrawer()}
    style={style.container}
  >
    <Menu />
  </TouchableOpacity>
);

export { HamburgerMenu };
export default withNavigation(HamburgerMenu);
