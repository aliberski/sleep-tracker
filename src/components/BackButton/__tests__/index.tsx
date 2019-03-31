import 'react-native';
import React from 'react';

import { navigationMock } from 'constants/testMocks';
import BackButton from '../index';
import renderer from 'react-test-renderer';

describe('BackButton', () => {
  const button = renderer.create(
    <BackButton navigation={navigationMock} />,
  );

  it('renders correctly', () => {
    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
