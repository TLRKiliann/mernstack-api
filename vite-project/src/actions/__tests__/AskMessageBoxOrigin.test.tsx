import React from "react"
import { screen, render } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import AskMessageBoxOrigin from "../AskMessageBoxOrigin"
import AskMessageBox from "../AskMessageBoxOrigin"
import handleInvitation from "../AskMessageBoxOrigin"
import handleInviteChoice from "../AskMessageBoxOrigin"
import ComputerRoom from '../../components/ComputerRoom'

test('MatchSnapShot test AskMessageBoxOrigin', () => {
  const treeAskMessageBoxOrigin = create(<AskMessageBoxOrigin />)
  expect(treeAskMessageBoxOrigin.toJSON()).toMatchSnapshot()
}) 

test('MatchSnapShot test AskMessageBox', () => {
  const treeAskMessageBox = create(<AskMessageBox />)
  expect(treeAskMessageBox.toJSON()).toMatchSnapshot()
}) 

test('AskMessageBoxmy test present', () => {
  render(<AskMessageBox data-testid="testAskBox" />)
  const testAskBoxById = screen.getByTestId("testAskBox")
  expect(testAskBoxById).toBeInTheDocument()
})

test('AskMessageBoxOrigin handleInviteChoice return link', () => {
  const handleInviteChoice = vi.fn()
  handleInviteChoice()
  expect(handleInviteChoice).toHaveBeenCalledTimes(1)
})

test('AskMessageBoxOrigin handleInvitation return link', () => {
  const handleInvitation = vi.fn()
  handleInvitation()
  expect(handleInvitation).toHaveBeenCalledTimes(1)
})

//Parent component to test child component
test("test child component", () => {
  const { getByTestId } = render(
    <ComputerRoom />
  )
  expect(getByTestId("computerroomtest")).toBeInTheDocument()
})

