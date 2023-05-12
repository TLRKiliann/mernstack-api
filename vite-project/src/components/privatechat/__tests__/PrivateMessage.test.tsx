<<<<<<< HEAD
import React from 'react'
//import { BrowserRouter, useLocation, Link, useNavigate } from 'react-router-dom'
//import { Route, MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import PrivateMessage from '../PrivateMessage'
import { handleUserMessage } from '../PrivateMessage'
import { generateId } from '../PrivateMessage'

test('MatchSnapShot test PrivateMessage', () => {
  const tree = create(<PrivateMessage />)
  expect(tree.toJSON()).toMatchSnapshot();
});

test('handleInvitation whith onClick Enter', () => {
  const todo = { user: "Vanessa" }
  const handleUserMessage = vi.fn(todo => todo.user)
  handleUserMessage(todo)
  render(
    <button
      data-testid="btn-privatemsg"
      onClick={handleUserMessage}
     >
      Enter
    </button>
  )
  fireEvent.click(screen.getByText(/Enter/i))
  expect(handleUserMessage).toHaveReturnedWith("Vanessa")
  expect(handleUserMessage).toHaveBeenCalledTimes(2)
});

test('handleInvitation whith onClick Enter', () => {
  const todo = { id: 2 }
  const handleUserMessage = vi.fn(todo => todo.id)
  handleUserMessage(todo)

  test('should return 1 when privateSeveralMsg is empty', () => {
    const privateSeveralMsg = []
    const id = generateId(privateSeveralMsg)
    expect(id).toBe(1)
  })

  test('should return the highest id + 1 when privateSeveralMsg is not empty', () => {
    const privateSeveralMsg = [
      { id: 1, message: 'First message' },
      { id: 2, message: 'Second message' },
      { id: 3, message: 'Third message' },
    ]
    const id = generateId(privateSeveralMsg)
    expect(id).toBe(1)
  })

  render(
    <button
      data-testid="btn-privatemsg"
      onClick={handleUserMessage}
     >
      Enter
    </button>
  )
  fireEvent.click(screen.getByText(/Enter/i))
  expect(handleUserMessage).toHaveReturnedWith(2)
  expect(handleUserMessage).toHaveBeenCalledTimes(2)
});

describe('MyComponent', () => {
  test('should apply the style correctly', () => {
    const { getByTestId } = render(<div data-testid="test-divcolor" style={{ color: 'red' }} />)
    const myDiv = getByTestId('test-divcolor')

    const computedStyle = window.getComputedStyle(myDiv)
    expect(computedStyle.color).toBe('red')
  })
})
=======
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
>>>>>>> master
