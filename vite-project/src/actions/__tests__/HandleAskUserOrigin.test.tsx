import React from "react"
import { MemoryRouter } from 'react-router-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import HandleAskUserOrigin from "../HandleAskUserOrigin"
import UsersOnline from "../HandleAskUserOrigin"

test("1 test fn HandleAskUserPrivate", (props) => {
  const beverage = { id: 1 }
  const handleAskUserPrivate = vi.fn(beverage => beverage.id)
  handleAskUserPrivate(beverage)
  expect(handleAskUserPrivate).toHaveBeenCalledTimes(1)
  expect(handleAskUserPrivate).toHaveReturnedWith(1)
})

test('2 MatchSnapShot test HandleAskUserOrigin', (props) => {
  const treeHandleAskUserOrigin = create(
    <MemoryRouter>
      <HandleAskUserOrigin props={props} />
    </MemoryRouter>
  )
  expect(treeHandleAskUserOrigin.toJSON()).toMatchSnapshot()
}) 

test('3 MatchSnapShot test UsersOnline from HandleAskUserOrigin', (props) => {
  const treeUser = create(
    <MemoryRouter>
      <UsersOnline props={props}/>
    </MemoryRouter>
  )
  expect(treeUser.toJSON()).toMatchSnapshot()
})
