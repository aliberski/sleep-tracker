import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Toggle from 'components/Toggle';

import texts from 'constants/translations';
import style from './style';
import { IProps, IState } from './types';
import { COLOR } from 'constants/globalStyle';

class ToggleInput extends React.PureComponent<
  IProps,
  IState
> {
  public state: IState = {
    isOn: false,
  };

  public static defaultProps = {
    initialValue: false,
  };

  public componentDidMount() {
    this.setState({ isOn: this.props.initialValue });
  }

  public componentDidUpdate(prevProps: IProps) {
    const { initialValue } = this.props;
    if (prevProps.initialValue !== initialValue) {
      this.setState({ isOn: initialValue });
    }
  }

  public toggle = () => {
    const { onChange } = this.props;
    this.setState(
      (prev: IState) => ({ isOn: !prev.isOn }),
      () => onChange(this.state.isOn),
    );
  };

  public render() {
    const { label } = this.props;
    const { isOn } = this.state;
    const yesColor = isOn ? COLOR.font : COLOR.border;
    const yesStyle = StyleSheet.flatten([
      style.yes,
      { color: yesColor },
    ]);
    return (
      <View style={style.container}>
        <Text style={style.label}>{label}</Text>
        <View style={style.content}>
          <Text style={style.no}>
            {texts.no.toUpperCase()}
          </Text>
          <Toggle value={isOn} onPress={this.toggle} />
          <Text style={yesStyle}>
            {texts.yes.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}

export default ToggleInput;
