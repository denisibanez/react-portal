import { render, screen } from '@testing-library/react';
import About from './About';

test('About', () => {
  render(
    <About />
  );
  const linkElement = screen.getByTestId('about');
  expect(linkElement).toBeTruthy();
});