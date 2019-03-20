import { combineReducers } from 'redux';
import testReducer from 'modules/Test/reducer';

export default combineReducers({
  test: testReducer,
});
