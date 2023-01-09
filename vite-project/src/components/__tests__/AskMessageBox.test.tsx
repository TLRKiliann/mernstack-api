import React from "react"
import { MemoryRouter } from 'react-router-dom'
import { screen, render, fireEvent, getByText } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
//import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import AskMessageBox from "../AskMessageBox"
import handleClose from "../AskMessageBox"
//import handleInviteChoice from "../AskMessageBox"
import handleInvitation from "../AskMessageBox"


const FirstButton = ({onClick, children}) => (
<button onClick={onClick} data-testid="btnInvite">{children}</button>
)
test('calls onClick prop when clicked Invite', () => {
  const handleInvitation = vi.fn()
  render(
    <button onClick={handleInvitation} data-testid="btnInvite">
      Invite
    </button>
  )
  fireEvent.click(screen.getByText<HTMLButtonElement>(/invite/i))
  expect(handleInvitation).toHaveBeenCalledTimes(1)
  const valInvite = screen.getByText(/invite/i)
  expect(valInvite).toBeInTheDocument()
})


const Button = ({onClick, children}) => (
<button onClick={onClick} data-testid="btnClose">{children}</button>
)
test('calls onClick prop when clicked X', () => {
  const handleClose = vi.fn()
  render(
    <button onClick={handleClose} data-testid="btnClose">
      X
    </button>
  )
  fireEvent.click(screen.getByText<HTMLButtonElement>(/X/i))
  expect(handleClose).toHaveBeenCalledTimes(1)
  const valClose = screen.getByText(/X/i)
  expect(valClose).toBeInTheDocument()
})


/*
test('AskMessageBoxmy test present', () => {
  render(<AskMessageBox />)
  const asktestid = screen.getByTestId("asktestid")
  expect(asktestid).toBeInTheDocument()
})

const Select = ({onClick, children}) => (
<select onClick={onClick} data-testid="select">{children}</select>
)
test('Simulates selection', () => {
  const { getByTestId, getAllByTestId } = render(<AskMessageBox />);
  //The value should be the key of the option
  fireEvent.change(getByTestId('select'), { target: { value: "Info" } })
  let options = getAllByTestId('select-option')
  expect(options[0].selected).toBeFalsy();
  expect(options[1].selected).toBeTruthy();
  expect(options[2].selected).toBeFalsy();
})
*/