import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import MainTitle from "../MainTitle.tsx";

test('renders learn react link', () => {
  render(<MainTitle />);
  const linkElement = screen.getByText(/chat-room stack/i);
  expect(linkElement).toBeInTheDocument();
});