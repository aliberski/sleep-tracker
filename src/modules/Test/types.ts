import { ActionTypes } from './actions';

export type Actions = ITest; // | ITest2 | IOtherInterface

export interface ITestState {
  testing: boolean;
}

export interface ITestStoreState {
  test: ITestState;
}

export interface ITest {
  readonly type: ActionTypes.TEST;
}
