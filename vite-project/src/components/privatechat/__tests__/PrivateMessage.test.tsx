import React from "react"
import { MemoryRouter } from 'react-router-dom'
import { test, expect, vi } from 'vitest'
import {fireEvent, render, screen} from '@testing-library/react'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import PrivateMessage from "../PrivateMessage.tsx"


test("PrivateMessage MatchSnapShot", () => {
  const treePrivate = create(
    <MemoryRouter>
      <PrivateMessage />
    </MemoryRouter>
  )
  expect(treePrivate.toJSON()).toMatchSnapshot()
})

test('PrivateMessage testid', () => {
  render(<PrivateMessage />)
  const mytestid = screen.getByTestId("terminaltest")
  expect(mytestid).toBeInTheDocument()
})

test('PrivateMessage test by text', () => {
  render(<PrivateMessage />)
  const mytestid = screen.getByText(/chat/i)
  expect(mytestid).toBeInTheDocument()
})

test("PrivateMessage click btn get test", () => {
  const handleUserMessage = vi.fn()
  const { getByTestId } = render(
    <button onClick={handleUserMessage}
      data-testid="private--btn">
    </button>)
  fireEvent.click(screen.getByTestId("private--btn"))
  expect(handleUserMessage).toHaveBeenCalledTimes(1)
})

//vi.setTimeout(7000)
test("Captures value from changeMessage() PrivateMessage", async() => {
  function changeMessage(evt) {
  expect(evt.target.value).toEqual("valuechange")
  }
  const { getByTestId } = render(
    <PrivateMessage
      onChange={changeMessage} 
      data-testid="inputTest"
    />
  )
  const node = getByTestId("inputTest")
  fireEvent.change(node, { target: { value: "valuechange" } })
})