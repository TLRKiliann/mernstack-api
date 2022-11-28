import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import MainComp from "../MainComp.tsx";

test('renders learn react link', () => {
  render(<MainComp />);
  const linkElement = screen.getByText(/member connected !/i);
  expect(linkElement).toBeInTheDocument();
});
