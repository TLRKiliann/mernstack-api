import React from "react";
import { screen, render } from '@testing-library/react';
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import TerminalComponent from "../TerminalComponent.tsx";

test('TerminalComponent testid', () => {
  render(<TerminalComponent />);
  const mytestid = screen.getByTestId("terminaltest");
  expect(mytestid).toBeInTheDocument();
})

test('MatchSnapShot test TerminalComponent', () => {
  const treeTerminalComponent = create(<TerminalComponent />)
  expect(treeTerminalComponent.toJSON()).toMatchSnapshot()
})