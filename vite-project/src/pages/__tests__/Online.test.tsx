import React from "react"
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

test("Online context testing", () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })
  test('Online state', ({ foo }) => {
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

test('Online MatchSnapShot test Online', () => {
  const treeOnline = create(<Online />)
  expect(treeOnline.toJSON()).toMatchSnapshot()
})

test('Online MatchSnapShot test ChooseMemberToAsk', () => {
  const treeChooseMemberToAsk = create(
    <ChooseMemberToAsk />
    )
  expect(treeChooseMemberToAsk.toJSON()).toMatchSnapshot()
})

//correct
test('Online MatchSnapShot test AskMessageBox', () => {
  const treeConfirm = create(
    <AskMessageBox />
  )
  expect(treeConfirm.toJSON()).toMatchSnapshot()
})

//correct
test('Online MatchSnapShot test ConfirmationOrigin', () => {
  const treeConfirm = create(
    <ConfirmationOrigin />
  )
  expect(treeConfirm.toJSON()).toMatchSnapshot()
})

test('Online addUserById to be defined', () => {
  const funcAddUser = addUserById
  expect(funcAddUser).toBeDefined()
})

test('Online addUserById return id', () => {
  const beverage = { id: 2 }
  const addUserById = vi.fn(beverage => {beverage})
  addUserById()
  expect(addUserById).toHaveReturned(2)
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

