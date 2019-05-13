import React from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import { IconMenu } from 'components/Icons';

import { app } from 'constants/testIDs';
import { IProps } from './types';
import style from './style';

const HamburgerMenu = (props: IProps) => (
  <TouchableOpacity
    testID={app.hamburger.id}
    onPress={() => props.navigation.toggleDrawer()}
    style={style.container}
  >
    <IconMenu />
  </TouchableOpacity>
);

export { HamburgerMenu };
export default withNavigation(HamburgerMenu);
