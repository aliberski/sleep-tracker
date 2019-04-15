import React from 'react';
import SVGClose from 'images/icons/close.svg';
import { ICON_SIZE, COLOR } from 'constants/globalStyle';

interface IProps {
  size?: number;
  color?: string;
}

const Close = (props: IProps) => {
  const size = props.size || ICON_SIZE.primary;
  const color = props.color || COLOR.font_light;
  return (
    <SVGClose width={size} height={size} fill={color} />
  );
};

export { Close };
