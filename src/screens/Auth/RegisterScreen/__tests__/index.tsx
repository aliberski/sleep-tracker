import React from 'react';
import { navigationMock } from 'constants/testMocks';
import { RegisterScreen } from '../index';
import renderer from 'react-test-renderer';

describe('RegisterScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<RegisterScreen navigation={navigationMock} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
