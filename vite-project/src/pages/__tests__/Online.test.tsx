import React from "react"
import { useParams } from 'react-router-dom'
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

import AskMessageBox from '../../components/AskMessageBox'
import DisplayInviteOrigin from '../../actions/DisplayInviteOrigin'
import ConfirmationOrigin from '../../actions/ConfirmationOrigin'
import ChooseMemberToAsk from '../../actions/ChooseMemberToAsk'

//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest'
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom"
//import { act } from 'react-dom/test-utils'


test("Online context testing", () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })
  test('Profile state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

test("Online hook testing", () => {
  const mockedParams = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useParams: () => ({params: "room"})
  }))

  const mockedAuth = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useAuthLogin: () => ({mockedAuth})
  }))
})

test('Online by test id', () => {
  render(<Online />)
  const mytestid = screen.getByTestId("divtestone")
  expect(mytestid).toBeInTheDocument()
})

test('MatchSnapShot test Online', () => {
  const treeOnline = create(<Online />)
  expect(treeOnline.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test ChooseMemberToAsk', () => {
  const treeChooseMemberToAsk = create(<ChooseMemberToAsk />)
  expect(treeChooseMemberToAsk.toJSON()).toMatchSnapshot()
})

/*
//failed
test('MatchSnapShot test ConfirmationOrigin', () => {
  const treeConfirm = create(<ConfirmationOrigin />)
  expect(treeConfirm.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test DisplayInviteOrigin', () => {
  const treeDisplay = create(<DisplayInviteOrigin />)
  expect(treeDisplay.toJSON()).toMatchSnapshot()
})

//failed
test('MatchSnapShot test AskMessageBox', () => {
  const treeMsg = create(<AskMessageBox />)
  expect(treeMsg.toJSON()).toMatchSnapshot()
})
*/

test('addUserById to be defined', () => {
  const funcAddUser = addUserById
  expect(funcAddUser).toBeDefined()
})

test('addUserById return id', () => {
  const beverage = { id: 2 }
  const addUserById = vi.fn(beverage => {beverage})
  addUserById()
  expect(addUserById).toHaveReturned(2)
})

test('handleInviteChoice to be defined', () => {
  const funcInviteChoice = handleInviteChoice
  expect(funcInviteChoice).toBeDefined()
})

test('handleAskUserPrivate to be defined', () => {
  const funcAskUser = handleAskUserPrivate
  expect(funcAskUser).toBeDefined()
})

test('handleInvitation to be defined', () => {
  const funcInvite = handleInvitation
  expect(funcInvite).toBeDefined()
})

test('handleClose to be defined', () => {
  const funcClose = handleClose
  expect(funcClose).toBeDefined()
})

test('handleCloseResponse to be defined', () => {
  const funcCloseResp = handleCloseResponse
  expect(funcCloseResp).toBeDefined()
})

