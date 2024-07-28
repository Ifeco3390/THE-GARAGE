import { render, screen } from '@testing-library/react';
import home from './views/home';

test('renders learn react link', () => {
  render(<home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
