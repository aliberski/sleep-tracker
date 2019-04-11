import React from 'react';
import { navigationMock } from 'constants/testMocks';
import { SettingsScreen } from '../index';
import renderer from 'react-test-renderer';

describe('SettingsScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <SettingsScreen navigation={navigationMock} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
