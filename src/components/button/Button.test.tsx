import { render, screen } from '@testing-library/react';
import ButtonComponent from '@/components/button/Button';

test('renders learn react link', () => {
  render(<ButtonComponent onClick={() => {}} children={'count'} />);
  const linkElement = screen.getAllByText('count');
  expect(linkElement).toBeTruthy();
});
