import React from 'react';
import { View } from 'react-native';
import SVGMenu from 'images/icons/menu.svg';
import { ICON_SIZE } from 'constants/globalStyle';

interface IProps {
  size?: number;
}

const Menu = (props: IProps) => {
  const size = props.size || ICON_SIZE.primary;
  return (
    <View>
      <SVGMenu width={size} height={size} />
    </View>
  );
};

export { Menu };
