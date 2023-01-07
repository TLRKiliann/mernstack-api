import React from "react";
import { screen, render } from '@testing-library/react';
import { test, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import VoletRight from "../VoletRight.tsx";

test('renders chat rooms link', () => {
  render(<VoletRight />);
  const linkElement = screen.getByText(/chat computing/i);
  expect(linkElement).toBeInTheDocument();
});