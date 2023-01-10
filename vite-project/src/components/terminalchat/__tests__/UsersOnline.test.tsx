import React from "react"
import { MemoryRouter } from "react-router-dom"
import { screen, render, fireEvent } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import UsersOnline from "../UsersOnline.tsx"
import HandleAskUserOrigin from '../../../actions/HandleAskUserOrigin'

/*
const mockUsersOnline = vi.fn()
vi.mock("../UsersOnline.tsx", () => (props) => {
mockUsersOnline(props)
return <mock-UsersOnline />
})
test("open & data to pass to parent", () => {
  render(
    <HandleAskUserOrigin
      data={some.data}
    />
  )
  expect(mockUsersOnline).toHaveBeenCalledWith(
    expect.objectContaining({
      data: "some.data"
    
    })
  )
})
*/

//Parent component to test child component
test("test child component", () => {
  const { getByText } = render(
    <HandleAskUserOrigin />
  )
  expect(getByText(/✉/)).toBeInTheDocument()
})

test('UsersOnlinemy getByTestId', () => {
  render(
    <UsersOnline />
  )
  const mytestid = screen.getByTestId("onlinetest")
  expect(mytestid).toBeInTheDocument()
})

test("UsersOnline MatchSnapShot", (props) => {
  const treeUsrOnline = create(
    <MemoryRouter>
      <UsersOnline props={props} />
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
  const beverage = {id: 1}
  const handleAskUserPrivate = vi.fn(beverage => beverage.id)
  render(
    <span onClick={handleAskUserPrivate} data-testid="spantestidusers">
      ✉
    </span>
  )
  const valUsers = screen.getByText(/✉/)
  handleAskUserPrivate(beverage)
  fireEvent.click(screen.getByText<HTMLSpanElement>(/✉/))
  expect(handleAskUserPrivate).toHaveReturnedWith(1)
  expect(handleAskUserPrivate).toHaveBeenCalledTimes(2)
  expect(valUsers).toBeInTheDocument()
})