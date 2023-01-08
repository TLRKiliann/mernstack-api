import React from "react"
import { MemoryRouter } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import ComputerRoom from "../ComputerRoom"
import TerminalComponent from "../ComputerRoom"
import AskMessageBox from "../ComputerRoom"
import HandleAskUserOrigin from "../ComputerRoom"
import AskMessageBoxOrigin from "../ComputerRoom"
import UsersOnline from "../ComputerRoom"
import DisplayInviteOrigin from "../ComputerRoom"
import ConfirmationOrigin from "../ComputerRoom"

test('ComputerRoom is present', () => {
  render(
    <MemoryRouter>
      <ComputerRoom />
    </MemoryRouter>
  )
  const mytestid = screen.getByTestId("computerroomtest")
  expect(mytestid).toBeInTheDocument()
})

test('MatchSnapShot test ComputerRoom', () => {
  const tree = create(
    <MemoryRouter>
      <ComputerRoom />
    </MemoryRouter>
    )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('ComputerRoom MatchSnapShot test ConfirmationOrigin', () => {
  const tree = create(
    <MemoryRouter>
      <ConfirmationOrigin />
    </MemoryRouter>
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('ComputerRoom MatchSnapShot test TerminalComponent', () => {
  const tree = create(
    <MemoryRouter>
      <TerminalComponent />
    </MemoryRouter>
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('ComputerRoom MatchSnapShot test HandleAskUserOrigin', () => {
  const tree = create(
    <MemoryRouter>
      <HandleAskUserOrigin>
        <UsersOnline />
      </HandleAskUserOrigin>
    </MemoryRouter>
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('ComputerRoom MatchSnapShot test AskMessageBoxOrigin', () => {
  const tree = create(
    <MemoryRouter>
      <AskMessageBoxOrigin />
    </MemoryRouter>
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('ComputerRoom MatchSnapShot test DisplayInviteOrigin', () => {
  const tree = create(
    <MemoryRouter>
      <DisplayInviteOrigin />
    </MemoryRouter>
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

//Correct
test('ComputerRoom MatchSnapShot test AskMessageBox', () => {
  const treeConfirm = create(
    <MemoryRouter>
      <AskMessageBox />
    </MemoryRouter>
  )
  expect(treeConfirm.toJSON()).toMatchSnapshot()
})
