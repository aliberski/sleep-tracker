import React from 'react';
import { Text, View, Modal as RNModal } from 'react-native';

import SafeView from 'components/SafeView';
import CloseButton from 'components/CloseButton';

import { COLOR } from 'constants/globalStyle';
import style from './style';
import { IProps } from './types';

const Modal = (props: IProps) => {
  const {
    visible,
    onRequestClose,
    children,
    title,
    closeTestID,
    isReady,
  } = props;

  if (!isReady) {
    return null;
  }

  return (
    <RNModal
      animationType='slide'
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <SafeView>
        <View style={style.header}>
          {!!title && (
            <Text style={style.title}>
              {title.toUpperCase()}
            </Text>
          )}
          <CloseButton
            testID={closeTestID}
            onPress={onRequestClose}
            color={COLOR.font}
            style={style.close}
          />
        </View>
        {children}
      </SafeView>
    </RNModal>
  );
};

export default Modal;
