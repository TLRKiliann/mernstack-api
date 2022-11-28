import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import VoletLeft from "../VoletLeft.tsx";

test('renders users state connection link', () => {
  render(<VoletLeft />);
  const linkElement = screen.getByText(/users state connection/i);
  expect(linkElement).toBeInTheDocument();
});