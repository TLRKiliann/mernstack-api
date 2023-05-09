import React from "react"
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
