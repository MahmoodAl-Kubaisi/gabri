import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app heading and status message', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /app ref\. card 02/i })).toBeInTheDocument();
  expect(screen.getByText(/react app \.\.\. up and running/i)).toBeInTheDocument();
});
