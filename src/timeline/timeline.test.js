import React from 'react';
import { render, screen } from '@testing-library/react';
import Timeline from './Timeline';

describe('Timeline Component', () => {


  test('renders suggestions component', () => {
    render(<Timeline />);
    const suggestionsElement = screen.getByTestId('suggestions');
    expect(suggestionsElement).toBeInTheDocument();
  });
});
