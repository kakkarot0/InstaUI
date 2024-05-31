import React from 'react';
import { render, screen } from '@testing-library/react';
import Suggestions from './Suggestions';

describe('Suggestions Component', () => {
  test('renders the title "Suggestions for you"', () => {
    render(<Suggestions />);
    const titleElement = screen.getByText('Suggestions for you');
    expect(titleElement).toBeInTheDocument();
  });



  test('renders follow buttons', () => {
    render(<Suggestions />);
    const followButtonElements = screen.getAllByRole('button', { name: /follow/i });
    expect(followButtonElements.length).toBeGreaterThan(0);
  });
});
