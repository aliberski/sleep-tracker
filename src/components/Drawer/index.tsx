import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';

import texts from 'constants/translations';
import routes from 'constants/routes';
import { app } from 'constants/testIDs';
import style from './style';
import { IProps, INavItem } from './types';

class Drawer extends React.Component<IProps> {
  private get navItems(): INavItem[] {
    const {
      navigation: { navigate },
    } = this.props;
    return [
      {
        testID: app.drawer.linkMain,
        text: texts.drawerLinkMain,
        onPress: () => {},
      },
      {
        testID: app.drawer.linkSettings,
        text: texts.drawerLinkSettings,
        onPress: () => navigate(routes.SETTINGS),
      },
      {
        testID: app.drawer.linkLogout,
        text: texts.drawerLinkLogout,
        onPress: () => {},
      },
    ];
  }

  public render() {
    return (
      <View style={style.container} testID={app.drawer.id}>
        {this.renderNavItems()}
      </View>
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

export default withNavigation(Drawer);
