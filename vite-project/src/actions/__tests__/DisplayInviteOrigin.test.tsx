import React from "react"
import { screen, render } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import DisplayInviteOrigin from "../DisplayInviteOrigin"
import handleInvitedResponse from "../DisplayInviteOrigin"
import handleRejectInvite from "../DisplayInviteOrigin"
import handleSwitchBox from "../DisplayInviteOrigin"

test('MatchSnapShot test DisplayInviteOrigin', () => {
  const treeDisplayInviteOrigin = create(<DisplayInviteOrigin />)
  expect(treeDisplayInviteOrigin.toJSON()).toMatchSnapshot()
}) 

test('DisplayInviteOrigin handleInvitedResponse return link', () => {
  const handleInvitedResponse = vi.fn()
  handleInvitedResponse()
  expect(handleInvitedResponse).toHaveBeenCalledTimes(1)
})

test('DisplayInviteOrigin handleRejectInvite return link', () => {
  const handleRejectInvite = vi.fn()
  handleRejectInvite()
  expect(handleRejectInvite).toHaveBeenCalledTimes(1)
})

test('DisplayInviteOrigin handleSwitchBox return link', () => {
  const handleSwitchBox = vi.fn()
  handleSwitchBox()
  expect(handleSwitchBox).toHaveBeenCalledTimes(1)
})
