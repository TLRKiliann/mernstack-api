import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import Footer from "../Footer.tsx";

test('renders learn react link', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/about us/i);
  expect(linkElement).toBeInTheDocument();
});