import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  const button = screen.getByText("Click me dark");
  const consoleSpy = jest.spyOn(console,"log");
  userEvent.click(button);
  expect(consoleSpy).toBeCalledTimes(1);
  expect(button).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});
