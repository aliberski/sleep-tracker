import { Text } from 'react-native';
import React from 'react';

import SafeView from '../index';
import renderer from 'react-test-renderer';

describe('SafeView', () => {
  const safeView = renderer.create(
    <SafeView>
      <Text>123</Text>
    </SafeView>,
  );

  it('renders correctly', () => {
    const tree = safeView.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
