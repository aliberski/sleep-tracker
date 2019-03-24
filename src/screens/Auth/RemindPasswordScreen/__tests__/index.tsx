import React from 'react';
import { navigationMock } from 'constants/testMocks';
import { RemindPasswordScreen } from '../index';
import renderer from 'react-test-renderer';

describe('RemindPasswordScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<RemindPasswordScreen navigation={navigationMock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
