import { Text } from 'react-native';
import React from 'react';

import KeyboardAwareWrapper from '../index';
import renderer from 'react-test-renderer';

describe('KeyboardAwareWrapper', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <KeyboardAwareWrapper center>
          <Text>test</Text>
        </KeyboardAwareWrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
