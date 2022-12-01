import React from "react";
import { screen, render } from '@testing-library/react';
import { expect } from 'vitest'
import Subscribe from "../Subscribe.tsx";
import '@testing-library/jest-dom'


test('renders Subscribe text', () => {
  render(<Subscribe />);
  const linkElement = screen.getByText(/subscribe/i);
  expect(linkElement).toBeInTheDocument();
});