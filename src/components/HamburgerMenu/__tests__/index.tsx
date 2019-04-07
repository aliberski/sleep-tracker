import 'react-native';
import React from 'react';

import { HamburgerMenu } from '../index';
import renderer from 'react-test-renderer';
import { navigationMock } from 'constants/testMocks';

describe('HamburgerMenu', () => {
  it('renders correctly', () => {
    const hamburgerMenu = renderer.create(
      <HamburgerMenu navigation={navigationMock} />,
    );
    const tree = hamburgerMenu.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
