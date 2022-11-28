import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import TerminalComponent from "../TerminalComponent.tsx";

test('my test for custom-element id', () => {
  render(<TerminalComponent />);
  const mytestid = screen.getByTestId("spantestid");
  expect(mytestid).toBeInTheDocument();
})