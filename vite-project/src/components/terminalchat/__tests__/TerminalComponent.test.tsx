import React from "react";
import { screen, render, fireEvent } from '@testing-library/react';
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import TerminalComponent from "../TerminalComponent.tsx";
import { handleInput } from "../TerminalComponent.tsx";

test('my test for custom-element id', () => {
  render(<TerminalComponent />);
  const mytestid = screen.getByTestId("btn-terminal-comp");
  expect(mytestid).toBeInTheDocument();
});

test('handleInput return boolean', () => {
  const beverage = { usr: "Doug" };
  const handleInput = vi.fn(beverage => beverage.usr)
  handleInput(beverage)
  const { getByTestId } = render(
    <TerminalComponent />
  )
  fireEvent.click(screen.getByTestId('btn-terminal-comp'))
  expect(handleInput).toHaveReturnedWith("Doug")
  expect(handleInput).toHaveBeenCalledTimes(1)
});