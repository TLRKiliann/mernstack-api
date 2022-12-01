import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import AskMessageBox from "../AskMessageBox.tsx";

test('my test for custom-element id', () => {
  render(<AskMessageBox />);
  const asktestid = screen.getByTestId("asktestid");
  expect(asktestid).toBeInTheDocument();
})