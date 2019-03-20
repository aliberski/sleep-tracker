import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV === 'development') {
  // @ts-ignore
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware),
  ...enhancers,
);

let store: any;

function createInstance() {
  const instance = createStore(rootReducer, initialState, composedEnhancers);
  return instance;
}

export default function getStoreInstance() {
  store = store || createInstance();
  store.runSaga = sagaMiddleware.run;
  return store;
}
