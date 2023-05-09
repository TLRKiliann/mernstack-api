import React from "react"
import { screen, render, fireEvent } from '@testing-library/react'
//import { create } from "react-test-renderer";
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import AskMessageBox from "../AskMessageBox.tsx"
import { handleClose } from '../AskMessageBox.tsx'

test('my test for custom-element id', () => {
  render(<AskMessageBox />);
  const asktestid = screen.getByTestId("asktestid");
  expect(asktestid).toBeInTheDocument();
})

describe("testing children UsersOnline", () => {
  const Button = ({onClick, children}) => (
    <button onClick={onClick} data-testid="btn-askoriginclose">
      {children}
    </button>
  )
  test('calls onClick prop when clicked ✉', () => {
  const todo = false
  const handleClose = vi.fn(todo => todo)
  handleClose(todo)
  render(
    <button
      data-testid="btn-askoriginclose"
      onClick={handleClose}>
      ✉
    </button>
  )
  fireEvent.click(screen.getByText(/✉/i))
  expect(handleClose).toHaveReturnedWith(false)
  expect(handleClose).toHaveBeenCalledTimes(2)
  })
});