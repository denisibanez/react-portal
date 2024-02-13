import { render, screen } from '@testing-library/react';
import ButtonComponent from './Button';

test('renders learn react link', () => {
  render(<ButtonComponent />);
  const linkElement = screen.getByText(/Cont/i);
  expect(linkElement).toBeInTheDocument();
});