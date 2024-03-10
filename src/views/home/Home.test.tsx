import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Home', () => {
  render(<Home />);
  const linkElement = screen.getByTestId('home');
  expect(linkElement).toBeTruthy();
});
