import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidenav from './Sidenav';

describe('Sidenav Component', () => {
  test('renders the logo', () => {
    render(<Sidenav />);
    const logoElement = screen.getByAltText('Instagram Logo');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders all buttons with correct icons and text', () => {
    render(<Sidenav />);
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(8);

    const buttonTexts = [
      'Home',
      'Search',
      'Explore',
      'Reels',
      'Messages',
      'Notifications',
      'Create',
      'More'
    ];

    const buttonIcons = [
      'HomeIcon',
      'SearchIcon',
      'ExploreIcon',
      'SlideshowIcon',
      'ChatIcon',
      'FavoriteBorderIcon',
      'AddCircleOutlineIcon',
      'MenuIcon'
    ];

    buttons.forEach((button, index) => {
      const icon = button.querySelector('svg');
      const text = button.querySelector('span');

      expect(icon).toBeInTheDocument();
      expect(text).toHaveTextContent(buttonTexts[index]);
    });
  });
});
