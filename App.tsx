import React from 'react';
import { Provider } from 'react-redux';

import SafeView from 'components/SafeView';

import getStoreInstance from 'store/createStore';
import AppNavigation from 'navigation/AppNavigation';
import rootSaga from 'saga';

const store = getStoreInstance();
store.runSaga(rootSaga);

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <SafeView>
          <AppNavigation />
        </SafeView>
      </Provider>
    );
  }
}
