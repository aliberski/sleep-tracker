import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import SVGBackArrow from 'images/icons/back-arrow.svg';
import { ICON_SIZE } from 'constants/globalStyle';
import { app } from 'constants/testIDs';

interface IProps {
  size?: number;
}

interface IStyle {
  container: ViewStyle;
}

const BackArrow = (props: IProps) => {
  const size = props.size || ICON_SIZE.primary;
  return (
    <View style={style.container} testID={app.backArrow.id}>
      <SVGBackArrow width={size} height={size} />
    </View>
  );
};

const style = StyleSheet.create<IStyle>({
  container: {
    paddingHorizontal: 5,
  },
});

export { BackArrow };
