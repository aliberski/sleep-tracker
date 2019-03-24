import React from 'react';
import { navigationMock } from 'constants/testMocks';
import { MainScreen } from '../index';
import renderer from 'react-test-renderer';

describe('RemindPasswordScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MainScreen navigation={navigationMock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
