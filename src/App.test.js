import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dupa header', () => {
  render(<App />);
  const dupaElement = screen.getByText(/Dupa/i);
  expect(dupaElement).toBeInTheDocument();
});
