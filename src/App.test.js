import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a simple form', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/HomePage/i);
  expect(linkElement).toBeInTheDocument();
});
