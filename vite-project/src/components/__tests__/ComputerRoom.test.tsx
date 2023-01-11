import React, {useState} from "react"
import { MemoryRouter, useParams } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
//import { useAuthLogin } from '../../context/AuthProvider'
import ComputerRoom from "../ComputerRoom"
import TerminalComponent from "../ComputerRoom"
import AskMessageBox from "../ComputerRoom"
import HandleAskUserOrigin from "../ComputerRoom"
import AskMessageBoxOrigin from "../ComputerRoom"
//import UsersOnline from "../ComputerRoom"
import DisplayInviteOrigin from "../ComputerRoom"
import DisplayInvitationOtherUsr from "../ComputerRoom"
import ConfirmationOrigin from "../ComputerRoom"
import ConfirmInvitation from "../ComputerRoom"

test("mocking UsersOnline", () => {
  vi.mock('../terminalchat/UsersOnline.tsx', () => ({
    UsersOnline: vi.fn()
  }))
})

test("0 Test useParams", () => {
  const mockUseParams = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useParams: () => ({mockUseParams: "/"})
  }))
})

test('1 ComputerRoom is present', () => {
  render(
      <ComputerRoom />
  )
  const mytestid = screen.getByTestId("computerroomtest")
  expect(mytestid).toBeInTheDocument()
})

test('2 MatchSnapShot test ComputerRoom', () => {
  const tree = create(
      <ComputerRoom />
    )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('3 ComputerRoom MatchSnapShot test ConfirmationOrigin', () => {
  const tree = create(
    <ConfirmationOrigin />
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('4 ComputerRoom MatchSnapShot test ConfirmationOrigin', () => {
  const tree = create(
    <ConfirmationOrigin>
      <ConfirmInvitation />
    </ConfirmationOrigin>
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('5 ComputerRoom MatchSnapShot test TerminalComponent', (roomStyle) => {
  const tree = create(
      <TerminalComponent roomStyle={roomStyle} />
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('6 ComputerRoom MatchSnapShot test HandleAskUserOrigin', () => {
  const tree = create(
    <HandleAskUserOrigin />
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('8 ComputerRoom MatchSnapShot test AskMessageBoxOrigin', () => {
  const tree = create(
    <AskMessageBoxOrigin />
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('9 ComputerRoom MatchSnapShot test DisplayInviteOrigin', () => {
  const tree = create(
    <DisplayInviteOrigin />
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('10 ComputerRoom MatchSnapShot test DisplayInviteOrigin', () => {
  const tree = create(
    <DisplayInviteOrigin>
      <DisplayInvitationOtherUsr />
    </DisplayInviteOrigin>
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

//Correct
test('11 ComputerRoom MatchSnapShot test AskMessageBox', () => {
  const treeConfirm = create(
    <AskMessageBoxOrigin>
      <AskMessageBox />
    </AskMessageBoxOrigin>
  )
  expect(treeConfirm.toJSON()).toMatchSnapshot()
})

test("12 test func handleClose", () => {
  const beverage = {switchAsk: true}
  const handleClose = vi.fn(beverage => beverage)
  handleClose(beverage)
  expect(handleClose).toHaveReturned(true)
})


/*
const mockUseParams = vi.fn()
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom') as any,
  useParams: () => ({mockUseParams: "/"})
}))

const mockUseState = vi.fn()
vi.mock('react', () => ({
  ...vi.importActual('react') as any,
  useState: vi.fn()
}))

//expect to test createContext()
test("test ComputerRoom with method and spyOn", () => {
  const instance = ComputerRoom()
  vi.spyOn(instance, 'method')
})

const mockedAuth = vi.fn()
vi.mock('../../context/AuthProvider', () => ({
  ...vi.importActual('../../context/AuthProvider') as any,
  useAuthLogin: () => ({mockedAuth})
}))

test('7 ComputerRoom MatchSnapShot test HandleAskUserOrigin', () => {
    const tree = create(
      <HandleAskUserOrigin>
        <UsersOnline />
      </HandleAskUserOrigin>
    )
  expect(tree.toJSON()).toMatchSnapshot()
})
*/
