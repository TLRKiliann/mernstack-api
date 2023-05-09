import React from 'react'
//import { BrowserRouter, useLocation } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
import { Route, MemoryRouter } from 'react-router-dom'
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import DisplayInvitationOtherUsr from '../DisplayInvitationOtherUsr'

test('MatchSnapShot test App', () => {
  const treeApp = create(
    <DisplayInvitationOtherUsr />
  )
  expect(treeApp.toJSON()).toMatchSnapshot()
})

describe("testing children DisplayInvitationOtherUsr", () => {
  test("DisplayInvitationOtherUsr", () => {
    const Button = ({onClick, children}) => (
    <button onClick={onClick} data-testid="btn--displayotheruser">
      {children}
    </button>
    )
    test('calls onClick prop when clicked Validate', () => {
      const todo = "truc"
      const handleInvitedResponse = vi.fn(todo => todo)
      render(
        <button onClick={handleInvitedResponse} data-testid="btn--displayotheruser">
          Validate
        </button>
      )
      fireEvent.click(screen.getByText(/Validate/i))
      expect(handleInvitedResponse).toHaveBeenCalledTimes(1)
    })
  })
});