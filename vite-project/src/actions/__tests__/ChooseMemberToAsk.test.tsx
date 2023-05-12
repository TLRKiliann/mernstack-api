import React from "react"
import { screen, render, fireEvent } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import ChooseMemberToAsk from "../ChooseMemberToAsk"
import Online from '../../pages/Online'

test("mocking ChooseMemberToAsk", () => {
  vi.mock('../ChooseMemberToAsk.tsx', () => ({
    ChooseMemberToAsk: vi.fn()
  }))
})


const Span = ({onClick, children}) => (
<span onClick={onClick} data-testid="ask">{children}</span>
)
test('calls onClick prop when clicked handleAskUserPrivate', () => {
  const user = {id: 1}
  const handleAskUserPrivate = vi.fn(user => user)
  render(
    <Span onClick={handleAskUserPrivate} data-testid="ask">
      ✉
    </Span>
  )
  fireEvent.click(screen.getByText<HTMLSpanElement>(/✉/))
  expect(handleAskUserPrivate).toHaveBeenCalledTimes(1)
  const valAsk = screen.getByText(/✉/)
  expect(valAsk).toBeInTheDocument()
})

const Button = ({onClick, children}) => (
<button onClick={onClick} data-testid="add">{children}</button>
)
test('calls onClick prop when clicked addUserById', () => {
  const user = {id: 2}
  const addUserById = vi.fn(user => user)
  render(
    <button onClick={addUserById} data-testid="add">
      +
    </button>
  )
  fireEvent.click(screen.getByText<HTMLButtonElement>("+"))
  expect(addUserById).toHaveBeenCalledTimes(1)
  const valAsk = screen.getByText("+")
  expect(valAsk).toBeInTheDocument()
})

//Parent component to test child component
test("test child component", () => {
  const { getByText } = render(
    <Online />
  )
  expect(getByText(/Rooms/)).toBeInTheDocument()
})