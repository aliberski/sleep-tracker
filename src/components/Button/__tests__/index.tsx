import 'react-native';
import React from 'react';

import Button from '../index';
import renderer from 'react-test-renderer';

describe('Button', () => {
  const mockFunction = jest.fn();
  const button = renderer.create(<Button text='123' onPress={mockFunction} />);

  it('renders correctly', () => {
    const tree = button.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
