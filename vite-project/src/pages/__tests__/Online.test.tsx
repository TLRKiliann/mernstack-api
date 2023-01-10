import React, {useState} from "react"
import { useNavigate, useParams, MemoryRouter } from 'react-router-dom'
import { useAuthLogin } from '../../context/AuthProvider'
import { screen, render } from '@testing-library/react'
import { test, expect, vi, beforeEach } from 'vitest'
import '@testing-library/jest-dom'
import { create } from 'react-test-renderer'
import Online from "../Online.tsx"
import addUserById from '../Online'
import handleInviteChoice from '../Online'
import handleAskUserPrivate from '../Online'
import handleInvitation from '../Online'
import handleClose from '../Online'
import handleCloseResponse from '../Online'
import AskMessageBox from '../Online'
import DisplayInviteOrigin from '../Online'
import ConfirmationOrigin from '../Online'
import ChooseMemberToAsk from '../Online'
//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest'
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom"
//import { act } from 'react-dom/test-utils'

/*
test("Online context testing", () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })
  test('Online state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

//testingstate
test("useState test in Online", () => {
  vi.mock('react', () => ({
    ...vi.importActual('react'),
    useState: vi.fn()
  }))
})

const stateSetter = vi.fn()
vi.spyOn(React, 'useState')
//Simulate that mode state value was set to 'new mode value'
.mockImplementation(stateValue => [stateValue='new mode value', stateSetter])

test("authLogin", () => {
  const mockedAuth = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useAuthLogin: () => (mockedAuth)
  }))
})

test("Online hook testing", () => {
  const mockedParams = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useParams: () => ({params: "room"})
  }))
})
*/

test('Online by test id', () => {
  render(
    <Online />
  )
  const mytestid = screen.getByTestId("divtestone")
  expect(mytestid).toBeInTheDocument()
})

test('Online MatchSnapShot test Online', () => {
  const treeOnline = create(
    <Online />
  )
  expect(treeOnline.toJSON()).toMatchSnapshot()
})

//Failed
test('Online MatchSnapShot test DisplayInviteOrigin', () => {
  const treeDisplay = create(
    <DisplayInviteOrigin />
  )
  expect(treeDisplay.toJSON()).toMatchSnapshot()
})

//correct
test('Online MatchSnapShot test ConfirmationOrigin', () => {
  const treeConfirm = create(
    <ConfirmationOrigin />
  )
  expect(treeConfirm.toJSON()).toMatchSnapshot()
})

test('Online MatchSnapShot test ChooseMemberToAsk', ({
    user,computer,handleAskUserPrivate,addUserById
  }) => {
    const treeChooseMemberToAsk = create(
      <ChooseMemberToAsk 
        user={user}
        computer={computer}
        handleAskUserPrivate={() => handleAskUserPrivate(user.id)}
        addUserById={() => addUserById(user.id)}
      />
    )
  expect(treeChooseMemberToAsk.toJSON()).toMatchSnapshot()
})

//correct
test('Online MatchSnapShot test AskMessageBox', () => {
  const treeMsg = create(
    <AskMessageBox />
  )
  expect(treeMsg.toJSON()).toMatchSnapshot()
})

test('Online addUserById return id', () => {
  const beverage = { id: 2 }
  const addUserById = vi.fn(beverage => {beverage})
  addUserById(beverage)
  expect(addUserById).toHaveReturned(2)
})

test('Online handleAskUserPrivate return id', () => {
  const beverage = { id: 3 }
  const handleAskUserPrivate = vi.fn(beverage => {beverage})
  handleAskUserPrivate(beverage)
  expect(handleAskUserPrivate).toHaveReturned(3)
})

test('Online addUserById to be defined', () => {
  const funcAddUser = addUserById
  expect(funcAddUser).toBeDefined()
})

test('Online handleInviteChoice to be defined', () => {
  const funcInviteChoice = handleInviteChoice
  expect(funcInviteChoice).toBeDefined()
})

test('Online handleAskUserPrivate to be defined', () => {
  const funcAskUser = handleAskUserPrivate
  expect(funcAskUser).toBeDefined()
})

test('Online handleInvitation to be defined', () => {
  const funcInvite = handleInvitation
  expect(funcInvite).toBeDefined()
})

test('Online handleClose to be defined', () => {
  const funcClose = handleClose
  expect(funcClose).toBeDefined()
})

test('Online handleCloseResponse to be defined', () => {
  const funcCloseResp = handleCloseResponse
  expect(funcCloseResp).toBeDefined()
})

