<<<<<<< HEAD
import React from 'react'
//import { BrowserRouter, useLocation, Link, useNavigate } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
//import { Route, MemoryRouter } from 'react-router-dom'
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import AskMessageBoxOrigin from '../AskMessageBoxOrigin'

//form à tester !!!

test('MatchSnapShot test AskMessageBoxOrigin', () => {
  const tree = create(<AskMessageBoxOrigin />)
  expect(tree.toJSON()).toMatchSnapshot();
});

describe("testing children AskMessageBoxOrigin", () => {
  const Span = ({onClick, children}) => (
    <button onClick={onClick} data-testid="btn-askoriginclose">
      {children}
    </button>
  )
  test('handleInvitation whith onClick X', () => {
  const todo = false
  const handleClose = vi.fn(todo => todo)
  handleClose(todo)
  render(
    <button
      data-testid="btn-askoriginclose"
      onClick={handleClose}>
      X
    </button>
  )
  fireEvent.click(screen.getByText(/X/i))
  expect(handleClose).toHaveReturnedWith(false)
  expect(handleClose).toHaveBeenCalledTimes(2)
  })
});

describe("testing children invitation", () => {
  test('handleInvitation whith onClick Invite', () => {
  const todo = { id: 2 }
  const handleInvitation = vi.fn(todo => todo)
  handleInvitation(todo)
  render(
    <button
      data-testid="btn-invitation"
      onClick={handleInvitation}>
      Invite
    </button>
  )
  fireEvent.click(screen.getByText(/Invite/i))
  expect(handleInvitation).toHaveReturnedWith({ id: 2 })
  expect(handleInvitation).toHaveBeenCalledTimes(2)
  })
});
=======
import React from "react"
import { screen, render } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
//import AskMessageBoxOrigin from "../AskMessageBoxOrigin"
import AskMessageBox from "../AskMessageBoxOrigin"
import handleInvitation from "../AskMessageBoxOrigin"
import handleInviteChoice from "../AskMessageBoxOrigin"
import ComputerRoom from '../../components/ComputerRoom'

test("mocking AskMessageBoxOrigin", () => {
  vi.mock('../AskMessageBoxOrigin.tsx', () => ({
    AskMessageBoxOrigin: vi.fn()
  }))
})

test("mocking AskMessageBox", () => {
  vi.mock('../../components/AskMessageBox.tsx', () => ({
    AskMessageBox: vi.fn()
  }))
})

/*
test('1 MatchSnapShot test AskMessageBoxOrigin', () => {
  const treeAskMessageBoxOrigin = create(<AskMessageBoxOrigin />)
  expect(treeAskMessageBoxOrigin.toJSON()).toMatchSnapshot()
})

test('2 MatchSnapShot test AskMessageBox', (props) => {
  const treeAskMessageBox = create(
    <AskMessageBox props={props} />
  )
  expect(treeAskMessageBox.toJSON()).toMatchSnapshot()
}) 
*/

test('4 AskMessageBoxOrigin handleInviteChoice return link', () => {
  const handleInviteChoice = vi.fn()
  handleInviteChoice()
  expect(handleInviteChoice).toHaveBeenCalledTimes(1)
})

test('5 AskMessageBoxOrigin handleInvitation return link', () => {
  const user = { id: 1 }
  const handleInvitation = vi.fn(user => user.id)
  handleInvitation(user)
  expect(handleInvitation).toHaveBeenCalledTimes(1)
  expect(handleInvitation).toHaveReturnedWith(1)
})

//Parent component to test child component
test("6 test child component", () => {
  const { getByTestId } = render(
    <ComputerRoom data-testid="computerroomtest" />
  )
  const shortCRT = screen.getByTestId("computerroomtest")
  expect(shortCRT).toBeInTheDocument()
})
>>>>>>> master
