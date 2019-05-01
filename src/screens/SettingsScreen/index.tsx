import React from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import KeyboardAwareWrapper from 'components/KeyboardAwareWrapper';
import Button from 'components/Button';
import { TextInput } from 'components/Inputs';
import SafeView from 'components/SafeView';
import FullPageLoader from 'components/FullPageLoader';
import { settingsActions } from 'modules/Settings/actions';

import { IStoreState } from 'store/appReducer';
import texts from 'constants/translations';
import { app } from 'constants/testIDs';
import style from './style';
import { IProps } from './types';

class SettingsScreen extends React.Component<IProps> {
  public static navigationOptions = {
    title: texts.settingsTitle.toUpperCase(),
  };

  public componentDidMount() {
    this.props.fetchData();
  }

  public componentDidUpdate(prevProps: IProps) {
    if (!prevProps.resetSuccess && this.props.resetSuccess) {
      Alert.alert(texts.success, texts.settingsResetSuccess, [
        { text: texts.ok, onPress: () => {} },
      ]);
    }
  }

  public onResetPress = () => {
    const { resetRequest, email } = this.props;
    Alert.alert('', texts.settingsResetConfirm, [
      {
        text: texts.yes,
        onPress: () => resetRequest(email),
      },
      { text: texts.cancel, onPress: () => {} },
    ]);
  };

  public render() {
    const { email, dataLoading } = this.props;

    if (dataLoading) {
      return <FullPageLoader />;
    }

    return (
      <SafeView>
        <View style={style.container} testID={app.settings.id}>
          <View style={style.form}>
            <KeyboardAwareWrapper>
              <TextInput
                testID={app.settings.inputEmail}
                onChangeText={() => {}}
                value={email}
                disabled
                label={texts.settingsInputEmail}
              />
              <Button
                link
                text={texts.settingsButtonReset}
                onPress={this.onResetPress}
              />
            </KeyboardAwareWrapper>
          </View>
        </View>
      </SafeView>
    );
  }
}

const mapStateToProps = ({ settings }: IStoreState) => ({
  email: settings.data.inputs.email,
  dataLoading: settings.data.loading,
  resetSuccess: settings.reset.success,
  settings,
});

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      fetchData: settingsActions.settingsDataRequest,
      resetRequest: settingsActions.settingsResetRequest,
    },
    dispatch,
  );

export { SettingsScreen };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsScreen);
