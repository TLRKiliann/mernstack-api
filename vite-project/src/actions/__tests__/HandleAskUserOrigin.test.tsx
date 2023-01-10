import React from "react"
import { MemoryRouter } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import HandleAskUserOrigin from "../HandleAskUserOrigin"
import UsersOnline from "../HandleAskUserOrigin"

/*
vi.mock('../HandleAskUserOrigin.tsx', () => ({
  HandleAskUserOrigin: vi.fn()
}))
*/

test("1 test fn HandleAskUserPrivate", () => {
  const beverage = { id: 1 }
  const handleAskUserPrivate = vi.fn(beverage => beverage.id)
  handleAskUserPrivate(beverage)
  expect(handleAskUserPrivate).toHaveBeenCalledTimes(1)
  expect(handleAskUserPrivate).toHaveReturnedWith(1)
})

test('2 MatchSnapShot test HandleAskUserOrigin', () => {
  const treeHandleAskUserOrigin = create(
    <MemoryRouter>
      <HandleAskUserOrigin />
    </MemoryRouter>
  )
  expect(treeHandleAskUserOrigin.toJSON()).toMatchSnapshot()
}) 

test('3 MatchSnapShot test UsersOnline', (props) => {
  const treeUser = create(
    <MemoryRouter>
      <UsersOnline
        key={props.id}
        id={props.id}
        refreshUser={props.refreshUser}
        roomStyle={props.roomStyle}
        handleAskUserPrivate={() => handleAskUserPrivate(props.id)}
      />
    </MemoryRouter>
  )
  expect(treeUser.toJSON()).toMatchSnapshot()
})

