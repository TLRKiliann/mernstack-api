import React from "react"
import { MemoryRouter } from "react-router-dom"
import { screen, render, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import UsersOnline from "../UsersOnline.tsx"

test('UsersOnlinemy getByTestId', () => {
  render(<UsersOnline />)
  const mytestid = screen.getByTestId("onlinetest")
  expect(mytestid).toBeInTheDocument()
})

test("UsersOnline MatchSnapShot", () => {
  const treeUsrOnline = create(
    <MemoryRouter>
      <UsersOnline />
    </MemoryRouter>
  )
  expect(treeUsrOnline.toJSON()).toMatchSnapshot()
})

const Span = ({onClick, children}) => (
  <span onClick={onClick} data-testid="spantestidusers">
    {children}
  </span>
)
test('calls onClick prop when clicked handleAsk', () => {
  const todo = {id: 1}
  const handleAskUserPrivate = vi.fn(todo => {todo})
  render(
    <span onClick={handleAskUserPrivate} data-testid="spantestidusers">
      ✉
    </span>
  )
  fireEvent.click(screen.getByText<HTMLSpanElement>(/✉/))
  expect(handleAskUserPrivate).toHaveBeenCalledTimes(1)
  const valUsers = screen.getByText(/✉/)
  expect(valUsers).toBeInTheDocument()
})