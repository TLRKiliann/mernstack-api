import React from 'react'
//import { BrowserRouter, useLocation } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
import { Route, MemoryRouter } from 'react-router-dom'
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import DisplayInviteOrigin from '../DisplayInviteOrigin'

test('MatchSnapShot test DisplayInviteOrigin', () => {
  const treeApp = create(
    <DisplayInviteOrigin />
  )
  expect(treeApp.toJSON()).toMatchSnapshot()
})

describe("testing children DisplayInviteOrigin", () => {
  test("DisplayInviteOrigin", () => {
    const Button = ({onClick, children}) => (
    <button onClick={onClick} data-testid="btn--displayotheruser">{children}</button>
    )
    test('calls onClick prop when clicked Validate', () => {
      const todo = "truc"
      const handleInvitedResponse = vi.fn(todo => todo)
      render(
        <button onClick={handleInvitedResponse} data-testid="btn--displayotheruser">
        </button>
      )
      fireEvent.click(screen.getByText(/Validate/i))
      expect(handleInvitedResponse).toHaveBeenCalledTimes(1)
    })
  })
});