import { createAction } from 'redux-actions';

export enum ActionTypes {
  TEST = 'TEST',
}

export const testActions = {
  test: createAction(ActionTypes.TEST),
};
