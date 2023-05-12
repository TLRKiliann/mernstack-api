import React from "react"
<<<<<<< HEAD
import { screen, render, fireEvent } from '@testing-library/react'
import { create } from "react-test-renderer"
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import UsersOnline from "../UsersOnline.tsx"
import { handleAskUserPrivate } from '../UsersOnline.tsx'

test('MatchSnapShot test UsersOnline', () => {
  const tree = create(<UsersOnline />)
  expect(tree.toJSON()).toMatchSnapshot();
});

describe("testing children UsersOnline", () => {
  const Span = ({onClick, children}) => (
    <span onClick={onClick} data-testid="span-useronline">
      {children}
    </span>
  )
  test('calls onClick prop when clicked ✉', () => {
  const todo = { id: 2 }
  const handleAskUserPrivate = vi.fn(todo => todo.id)
  handleAskUserPrivate(todo)
  render(
    <span
      data-testid="span-useronline"
      onClick={handleAskUserPrivate}>
      ✉
    </span>
  )
  fireEvent.click(screen.getByText(/✉/i))
  expect(handleAskUserPrivate).toHaveReturnedWith(2)
  expect(handleAskUserPrivate).toHaveBeenCalledTimes(2)
  })
});
=======
import { MemoryRouter } from 'react-router-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import { create } from 'react-test-renderer'
import UsersOnline from '../UsersOnline'
import handleAskUserPrivate from '../UsersOnline'


describe("All tests from UsersOnline", () => {
  test("1 mocking UsersOnline", () => {
    vi.mock('../UsersOnline.tsx', () => ({
      UsersOnline: vi.fn()
    }))
  })
  test('2 UsersOnline span test', () => {
    const handleAskUserPrivate = vi.fn()
    render(
      <span onClick={handleAskUserPrivate} data-testid="spantestidusers">
        ✉
      </span>
    )
    const valUsers = screen.getByText(/✉/)
    fireEvent.click(screen.getByText<HTMLSpanElement>(/✉/))
    expect(handleAskUserPrivate).toHaveBeenCalledTimes(1)
    expect(valUsers).toBeInTheDocument()
  })
  const Span = ({onClick, children}) => (
  <span onClick={onClick} data-testid="spantestidusers">{children}</span>
  )
  test('4 UsersOnline onClick props when clicked handleAskUserPrivate(fn)', () => {
    const user = { id: 2 }
    const handleAskUserPrivate = vi.fn(user => user)
    render(
      <span onClick={handleAskUserPrivate} data-testid="spantestidusers">
        ✉
      </span>
    )
    fireEvent.click(screen.getByText<HTMLSpanElement>(/✉/))
    expect(handleAskUserPrivate).toHaveBeenCalledTimes(1)
    expect(handleAskUserPrivate).toHaveReturned(2)
    const valAsk = screen.getByText(/✉/)
    expect(valAsk).toBeInTheDocument()
  })
  test('5 UsersOnline test by id', () => {
    render(
      <span
        data-testid="spanuseronlinetrue"
        className="span--useronline connector--icon"
        style={{color: 'lightgreen'}}
      >
        ✔
      </span>
    )
    const valToTest = screen.getByText(/✔/)
    const valId = screen.getByTestId("spanuseronlinetrue")
    expect(valToTest).toBeInTheDocument()
    expect(valId).toBeInTheDocument()
  })
  test("6 should update state", () => {
    const valueTodo = { id: 1, todo: 'ok', isDone: false }
    const changeSize = vi.fn(valueTodo => valueTodo.id)
    const wrapper = render(
      <span onClick={changeSize} data-testid="spantestidusers">
        ✉
      </span>
    )
    const handleDone = vi.spyOn(React, "useState")
    handleDone.mockImplementation(size => [size, changeSize])
    fireEvent.click(screen.getByTestId('spantestidusers'))
    expect(changeSize).toHaveBeenCalledTimes(1)
  })
  test('7 visibility of <span> TAG with false', () => {
    const isConnected = true
    render(
      <span
        data-testid="spanuseronlinetrue"
        style={{visibility: isConnected ? "visible" : "hide" }}
      >
        ✔
      </span>
    )
    const checkById = screen.getByText(/✔/)
    expect(checkById).toBeVisible()
  })
  test('8 visibility of <span> TAG with true', () => {
    const isConnected = false
    render(
      <span
        data-testid="spanuseronlinefalse"
        style={{visibility: isConnected ? "visible" : "hide" }}
      >
        ❌
      </span>
    )
    const checkById = screen.getByText(/❌/)
    expect(checkById).toBeVisible()
  })
  test('9 test img of UsersOnline', () => {
    render(<img alt="imgusersonline" />)
    const altImg = screen.getByAltText("imgusersonline")
    expect(altImg).toBeInTheDocument()
  })
})
>>>>>>> master
