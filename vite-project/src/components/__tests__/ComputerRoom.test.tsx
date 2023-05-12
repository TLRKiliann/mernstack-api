import React, {useState} from "react"
import { useParams } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
<<<<<<< HEAD
import ComputerRoom from "../ComputerRoom.tsx";
//import TerminalComponent from "../ComputerRoom.tsx";
//import UsersOnline from "../ComputerRoom.tsx";

test('my test for custom-element id', () => {
  render(<ComputerRoom />);
  const mytestid = screen.getByTestId("testdiv");
  expect(mytestid).toBeInTheDocument();
});

test('my test for terminal id', () => {
  render(<ComputerRoom />);
  const dataid_3 = screen.getByTestId("btn-terminal-comp");
  expect(dataid_3).toBeInTheDocument();
});

test('MatchSnapShot test ComputerRoom', () => {
  const tree = create(<ComputerRoom />)
  expect(tree.toJSON()).toMatchSnapshot();
});

/*
test('my test for handleaskusr id', () => {
  render(<ComputerRoom />);
  const dataid_2 = screen.getByTestId("span-useronline");
  expect(dataid_2).toBeInTheDocument();
});
*/

/*
test('MatchSnapShot test TerminalComponent', () => {
  const tree = create(<TerminalComponent />)
  expect(tree.toJSON()).toMatchSnapshot();
})

test('MatchSnapShot test UsersOnline', () => {
  const tree = create(<UsersOnline />)
  expect(tree.toJSON()).toMatchSnapshot();
})
*/
=======
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
>>>>>>> master
