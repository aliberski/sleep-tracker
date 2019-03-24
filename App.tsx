import React from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';

import SafeView from 'components/SafeView';

import getStoreInstance from 'store/createStore';
import AppNavigation from 'navigation/AppNavigation';
import rootSaga from 'saga';

const store = getStoreInstance();
store.runSaga(rootSaga);

export default class App extends React.Component {
  public render() {
    return (
      <View testID='welcome' style={{ flex: 1 }}>
        <Provider store={store}>
          <SafeView>
            <AppNavigation />
          </SafeView>
        </Provider>
      </View>
    );
  }
}
