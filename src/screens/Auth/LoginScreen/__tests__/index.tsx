import React from 'react';
import { navigationMock } from 'constants/testMocks';
import { LoginScreen } from '../index';
import renderer from 'react-test-renderer';

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <LoginScreen
          navigation={navigationMock}
          testRequest={jest.fn()}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
