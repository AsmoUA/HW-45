import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.js';

test('App links work', () => {
  render(<App />);

  const mainLink = screen.getByRole('link', { name: /main/i });
  userEvent.click(mainLink);
  expect(screen.getByRole('heading', { name: /main/i })).toBeInTheDocument();

  const postsLink = screen.getByRole('link', { name: /posts/i });
  userEvent.click(postsLink);
  expect(screen.getByRole('heading', { name: /posts/i })).toBeInTheDocument();

  const loginLink = screen.getByRole('link', { name: /login/i });
  userEvent.click(loginLink);
  expect(screen.getByRole('heading', { name: /login/i })).toBeInTheDocument();
});
