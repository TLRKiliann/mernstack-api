import React from "react"
import { screen, render } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import AskMessageBoxOrigin from "../AskMessageBoxOrigin"
import handleInvitation from "../AskMessageBoxOrigin"
import handleInviteChoice from "../AskMessageBoxOrigin"

test('MatchSnapShot test AskMessageBoxOrigin', () => {
  const treeAskMessageBoxOrigin = create(<AskMessageBoxOrigin />)
  expect(treeAskMessageBoxOrigin.toJSON()).toMatchSnapshot()
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
