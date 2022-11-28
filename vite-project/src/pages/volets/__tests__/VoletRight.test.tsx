import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import VoletRight from "../VoletRight.tsx";

test('renders chat rooms link', () => {
  render(<VoletRight />);
  const linkElement = screen.getByText(/chat rooms/i);
  expect(linkElement).toBeInTheDocument();
});