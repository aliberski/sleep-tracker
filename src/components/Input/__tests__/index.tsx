import 'react-native';
import React from 'react';

import { Input } from '../index';
import renderer from 'react-test-renderer';

describe('Button', () => {
  const mockFunction = jest.fn();
  const input = renderer.create(
    <Input
      value='123'
      onChangeText={mockFunction}
      label='test'
      error='error'
    />,
  );

  it('renders correctly', () => {
    const tree = input.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
