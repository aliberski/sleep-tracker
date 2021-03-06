import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  compose,
  Dispatch,
  bindActionCreators,
} from 'redux';
import { connect } from 'react-redux';

import SafeView from 'components/SafeView';
import CloseButton from 'components/CloseButton';

import { logoutActions } from 'modules/Logout/actions';
import { COLOR } from 'constants/globalStyle';
import texts from 'constants/translations';
import routes from 'constants/routes';
import { app } from 'constants/testIDs';
import style from './style';
import { IProps, INavItem } from './types';

class Drawer extends React.Component<IProps> {
  private get navItems(): INavItem[] {
    const {
      navigation: { navigate },
      logout,
    } = this.props;
    return [
      {
        testID: app.drawer.linkMain,
        text: texts.drawerLinkMain,
        onPress: () => navigate(routes.MAIN),
      },
      {
        testID: app.drawer.linkProfile,
        text: texts.drawerLinkProfile,
        onPress: () => navigate(routes.PROFILE),
      },
      {
        testID: app.drawer.linkSettings,
        text: texts.drawerLinkSettings,
        onPress: () => navigate(routes.SETTINGS),
      },
      {
        testID: app.drawer.linkAbout,
        text: texts.drawerLinkAbout,
        onPress: () => navigate(routes.ABOUT),
      },
      {
        testID: app.drawer.linkLogout,
        text: texts.drawerLinkLogout,
        onPress: logout,
      },
    ];
  }

  public render() {
    const {
      navigation: { toggleDrawer },
    } = this.props;
    return (
      <SafeView color={COLOR.primary}>
        <View
          style={style.container}
          testID={app.drawer.id}
        >
          <CloseButton
            onPress={toggleDrawer}
            style={style.close}
            testID={app.drawer.buttonClose}
          />
          {this.renderNavItems()}
        </View>
      </SafeView>
    );
  }

  private renderNavItems = () => {
    return this.navItems.map(
      ({ text, onPress, testID }: INavItem) => (
        <View style={style.navItem} key={testID}>
          <TouchableOpacity
            onPress={onPress}
            testID={testID}
          >
            <Text style={style.navItemText}>{text}</Text>
          </TouchableOpacity>
        </View>
      ),
    );
  };
}

const mapDispatchToProps = (dispatch: Dispatch<any>) =>
  bindActionCreators(
    {
      logout: logoutActions.logout,
    },
    dispatch,
  );

export default compose(
  withNavigation,
  connect(
    null,
    mapDispatchToProps,
  ),
)(Drawer);
