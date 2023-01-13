import React, {useState} from "react"
import { useParams } from 'react-router-dom'
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
import UsersOnline from "../ComputerRoom"

test("1 Test useParams", () => {
  const mockUseParams = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useParams: () => ({mockUseParams: "/"})
  }))
})

test("2 mocking ComputerRoom", () => {
  vi.mock('../ComputerRoom.tsx', () => ({
    ComputerRoom: vi.fn()
  }))
})

test("3 mocking TerminalComponent", () => {
  vi.mock('../terminalchat/TerminalComponent.tsx', () => ({
    TerminalComponent: vi.fn()
  }))
})

test("4 mocking UsersOnline", () => {
  vi.mock('../terminalchat/UsersOnline.tsx', () => ({
    UsersOnline: vi.fn()
  }))
})

test("5 mocking DisplayInviteOrigin", () => {
  vi.mock('../../actions/DisplayInviteOrigin.tsx', () => ({
    DisplayInviteOrigin: vi.fn()
  }))
})

test("6 test func handleClose", () => {
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
