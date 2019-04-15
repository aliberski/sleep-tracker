import React from 'react';
import SVGSleep from 'images/icons/sleep.svg';
import { ICON_SIZE } from 'constants/globalStyle';

interface IProps {
  size?: number;
}

const Sleep = (props: IProps) => {
  const size = props.size || ICON_SIZE.primary;
  return <SVGSleep width={size} height={size} />;
};

export { Sleep };
