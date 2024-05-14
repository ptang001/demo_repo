import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Estimation coût chauffage/i);
  expect(linkElement).toBeInTheDocument();
});

const { surface } = require('./components/surface.js');

test('test surface', () => {
    expect(surface(2)).toBe(31.80);
    expect(surface(1)).toBe(15.90);
});