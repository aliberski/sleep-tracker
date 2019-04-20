import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import IconSad from 'images/icons/sad.svg';
import IconNeutral from 'images/icons/neutral.svg';
import IconHappy from 'images/icons/happy.svg';

import style, { SIZE } from './style';
import { IProps, MoodTypes, IButton } from './types';
import { COLOR } from 'constants/globalStyle';

class MoodSelector extends React.PureComponent<IProps> {
  private get buttons() {
    const { onChange, selected } = this.props;
    return [
      {
        id: 0,
        onPress: () => onChange(MoodTypes.bad),
        icon: (color: string) => (
          <IconSad
            width={SIZE}
            height={SIZE}
            fill={color}
          />
        ),
        isSelected: selected === MoodTypes.bad,
      },
      {
        id: 1,
        onPress: () => onChange(MoodTypes.normal),
        icon: (color: string) => (
          <IconNeutral
            width={SIZE}
            height={SIZE}
            fill={color}
          />
        ),
        isSelected: selected === MoodTypes.normal,
      },
      {
        id: 2,
        onPress: () => onChange(MoodTypes.good),
        icon: (color: string) => (
          <IconHappy
            width={SIZE}
            height={SIZE}
            fill={color}
          />
        ),
        isSelected: selected === MoodTypes.good,
      },
    ];
  }

  public render() {
    const { label } = this.props;
    return (
      <View style={style.container}>
        <Text style={style.label}>{label}</Text>
        <View style={style.buttons}>
          {this.renderButtons()}
        </View>
      </View>
    );
  }

  private renderButtons = () => {
    return this.buttons.map((button: IButton) => {
      const { id, onPress, icon, isSelected } = button;
      const color = isSelected ? COLOR.font : COLOR.border;
      return (
        <TouchableOpacity
          key={id}
          onPress={onPress}
          style={style.button}
        >
          {icon(color)}
        </TouchableOpacity>
      );
    });
  };
}

export default MoodSelector;
