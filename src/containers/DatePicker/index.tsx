import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import Calendar from 'containers/Calendar';
import Button from 'components/Button';
import Modal from 'components/Modal';

import texts from 'constants/translations';
import style from './style';
import { IProps, IState } from './types';
import { IStoreState } from 'store/appReducer';

class DatePicker extends React.PureComponent<
  IProps,
  IState
> {
  public state: IState = {
    isModalVisible: false,
    isLayoutReady: false,
  };

  public handleLayoutStatus = () => {
    this.setState({ isLayoutReady: true });
  };

  public toggleDateModal = () => {
    this.setState((prev: IState) => ({
      isModalVisible: !prev.isModalVisible,
    }));
  };

  public render() {
    return (
      <>
        <View
          style={style.header}
          onLayout={this.handleLayoutStatus}
        >
          <Text style={style.title}>
            {this.props.selectedDay}
          </Text>
          <Button
            link
            style={style.dateButton}
            onPress={this.toggleDateModal}
            text={texts.surveyChangeDateButton}
          />
        </View>
        {this.renderModal()}
      </>
    );
  }

  private renderModal = () => {
    const { isModalVisible, isLayoutReady } = this.state;
    return (
      <Modal
        title={texts.surveyModalTitle}
        visible={isModalVisible}
        onRequestClose={this.toggleDateModal}
        isReady={isLayoutReady}
      >
        <Calendar onAfterSelect={this.toggleDateModal} />
      </Modal>
    );
  };
}

const mapStateToProps = ({ selectedDay }: IStoreState) => ({
  selectedDay,
});

export default connect(mapStateToProps)(DatePicker);
