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
