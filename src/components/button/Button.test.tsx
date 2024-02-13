import { render, screen } from '@testing-library/react';
import ButtonComponent from './Button';

test('renders learn react link', () => {
  render(<ButtonComponent onClick={() =>{}} children={undefined} />);
  const linkElement = screen.getByText(/Cont/i);
  expect(linkElement).toBeTruthy();
});
