import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import getStoreInstance from 'store/createStore';
import AppNavigator from 'navigation/AppNavigator';
import rootSaga from 'saga';

const { store, persistor } = getStoreInstance();
store.runSaga(rootSaga);

export default class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
