import React from 'react';
import { Text, View } from 'react-native';

import SafeView from 'components/SafeView';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Calendar from 'components/Calendar';
import SurveyForm from './form';

import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import { IProps, IState, IFormState } from './types';
import style from './style';

class SurveyScreen extends React.Component<IProps, IState> {
  public state: IState = {
    selectedDay: this.props.navigation.getParam('date'),
    isModalVisible: false,
    isLayoutReady: false,
  };

  public static navigationOptions = {
    title: texts.surveyTitle.toUpperCase(),
  };

  public onDaySelect = (selectedDay: string) => {
    this.setState({ selectedDay });
    this.toggleDateModal();
  };

  public toggleDateModal = () => {
    this.setState((prev: IState) => ({
      isModalVisible: !prev.isModalVisible,
    }));
  };

  public handleLayoutStatus = () => {
    this.setState({ isLayoutReady: true });
  };

  public handleSubmit = (values: IFormState) => {
    // TODO:
    console.log('values', values);
  };

  public render() {
    return (
      <>
        <SafeView>
          <View
            style={style.container}
            testID={app.survey.id}
          >
            <Text style={style.intro}>
              {texts.surveyIntro}
            </Text>
            {this.renderHeader()}
            <SurveyForm onSubmit={this.handleSubmit} />
          </View>
        </SafeView>
        {this.renderModal()}
      </>
    );
  }

  private renderHeader = () => {
    const { selectedDay } = this.state;
    return (
      <View
        style={style.header}
        onLayout={this.handleLayoutStatus}
      >
        <Text style={style.title}>{selectedDay}</Text>
        <Button
          link
          style={style.dateButton}
          onPress={this.toggleDateModal}
          text={texts.surveyChangeDateButton}
        />
      </View>
    );
  };

  private renderModal = () => {
    const {
      isModalVisible,
      isLayoutReady,
      selectedDay,
    } = this.state;
    return (
      <Modal
        title={texts.surveyModalTitle}
        visible={isModalVisible}
        onRequestClose={this.toggleDateModal}
        isReady={isLayoutReady}
      >
        <Calendar
          onSelect={this.onDaySelect}
          initialDate={selectedDay}
        />
      </Modal>
    );
  };
}

export default SurveyScreen;
