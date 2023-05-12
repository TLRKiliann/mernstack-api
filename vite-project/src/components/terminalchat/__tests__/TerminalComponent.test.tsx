<<<<<<< HEAD
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
=======
import React from "react"
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import { useAuthLogin } from '../../../context/AuthProvider'
import TerminalComponent from "../TerminalComponent.tsx"

import generateId from "../TerminalComponent.tsx"
import handleInput from "../TerminalComponent.tsx"

test("Online hook testing", () => {
  const mockedAuth = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useAuthLogin: () => ({mockedAuth})
  }))
})

test('TerminalComponent testid', () => {
  render(<TerminalComponent />)
  const mytestid = screen.getByTestId("terminaltest")
  expect(mytestid).toBeInTheDocument()
})

test('MatchSnapShot test TerminalComponent', () => {
  const treeTerminalComponent = create(<TerminalComponent />)
  expect(treeTerminalComponent.toJSON()).toMatchSnapshot()
})

test('TerminalComp generateId test', () => {
  const functG = generateId
  expect(functG).toBeDefined()
})

test('TerminalComp handleInput test', () => {
  const functG = handleInput
  expect(functG).toBeDefined()
})

>>>>>>> master
