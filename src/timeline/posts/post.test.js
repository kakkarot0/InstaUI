import React from 'react';
import { render, screen } from '@testing-library/react';
import Post from './Post';

describe('Post Component', () => {
  test('renders post with correct data', () => {
    const user = 'testuser';
    const postImage = 'https://example.com/image.jpg';
    const likes = 42;
    const timestamp = '2d';

    render(<Post user={user} postImage={postImage} likes={likes} timestamp={timestamp} />);

    const userElement = screen.getByText(user);
    expect(userElement).toBeInTheDocument();

    const postImageElement = screen.getByAltText('Post Image');
    expect(postImageElement).toBeInTheDocument();
    expect(postImageElement.src).toBe(postImage);

    const likesElement = screen.getByText(`Liked by ${likes} people.`);
    expect(likesElement).toBeInTheDocument();

    const timestampElement = screen.getByText(timestamp);
    expect(timestampElement).toBeInTheDocument();
  });


});
