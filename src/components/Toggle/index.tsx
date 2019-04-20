import React from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import style, { SWITCH_SIZE } from './style';
import { IProps } from './types';

class Toggle extends React.Component<IProps> {
  private transformAnimationDriver = new Animated.Value(0);
  private backgroundAnimationDriver = new Animated.Value(0);

  public componentDidMount() {
    const initialValue = this.props.value ? 1 : 0;
    this.transformAnimationDriver.setValue(initialValue);
    this.backgroundAnimationDriver.setValue(initialValue);
  }

  private get transformAnimatedValue() {
    return {
      transform: [
        {
          translateX: this.transformAnimationDriver.interpolate(
            {
              inputRange: [0, 1],
              outputRange: [0, SWITCH_SIZE],
            },
          ),
        },
      ],
    };
  }

  private get backgroundAnimatedValue() {
    return {
      backgroundColor: this.backgroundAnimationDriver.interpolate(
        {
          inputRange: [0, 1],
          outputRange: [
            'rgb(240, 240, 240)',
            'rgb(216, 218, 255)',
          ],
        },
      ),
    };
  }

  public switch = (onMount: boolean) => {
    const { value, onPress } = this.props;
    const duration = 200;
    const finalValue = value ? 0 : 1;
    Animated.parallel([
      Animated.timing(this.transformAnimationDriver, {
        toValue: finalValue,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(this.backgroundAnimationDriver, {
        toValue: finalValue,
        duration,
      }),
    ]).start(() => {
      !onMount && onPress();
    });
  };

  public render() {
    const { containerStyle } = this.props;
    return (
      <TouchableOpacity
        onPress={() => this.switch(false)}
        style={containerStyle}
      >
        <Animated.View
          style={[
            style.container,
            this.backgroundAnimatedValue,
          ]}
        >
          <Animated.View
            style={[
              style.toggleWrapper,
              this.transformAnimatedValue,
            ]}
          >
            <View style={style.toggle} />
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    );
  }
}

export default Toggle;
