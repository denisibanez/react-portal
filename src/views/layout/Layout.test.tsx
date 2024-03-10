import { render, screen } from '@testing-library/react';
import Layout from './Layout';

test('Layout', () => {
  render(
    <Layout />
  );
  const linkElement = screen.getByTestId('layout');
  expect(linkElement).toBeTruthy();
});