import React from "react"
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import ComputerRoom from "../ComputerRoom"
import TerminalComponent from "../terminalchat/TerminalComponent"
import HandleAskUserOrigin from "../../actions/HandleAskUserOrigin"
import AskMessageBoxOrigin from "../../actions/AskMessageBoxOrigin"
import DisplayInviteOrigin from "../../actions/DisplayInviteOrigin"
import ConfirmationOrigin from "../../actions/ConfirmationOrigin"

test('my test for custom-element id', () => {
  render(<ComputerRoom />)
  const mytestid = screen.getByTestId("computerroomtest")
  expect(mytestid).toBeInTheDocument()
})

test('MatchSnapShot test ComputerRoom', () => {
  const tree = create(<ComputerRoom />)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test TerminalComponent', () => {
  const tree = create(<TerminalComponent />)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test HandleAskUserOrigin', () => {
  const tree = create(<HandleAskUserOrigin />)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test AskMessageBoxOrigin', () => {
  const tree = create(<AskMessageBoxOrigin />)
  expect(tree.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test DisplayInviteOrigin', () => {
  const tree = create(<DisplayInviteOrigin />)
  expect(tree.toJSON()).toMatchSnapshot()
})

/*
//Failde useNavigate only in router component
test('MatchSnapShot test ConfirmationOrigin', () => {
  const tree = create(<ConfirmationOrigin />)
  expect(tree.toJSON()).toMatchSnapshot()
})
*/