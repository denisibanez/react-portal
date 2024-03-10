import { render, screen } from '@testing-library/react';
import Login from './Login';

test('Login', () => {
  render(
    <Login />
  );
  const linkElement = screen.getByTestId('login');
  expect(linkElement).toBeTruthy();
});