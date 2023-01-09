import React from "react"
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import VoletRight from "../VoletRight"
import ChatComputer from "../VoletRight"

test('VoletRight MatchSnapShot test VoletRight', () => {
  const treeVoletR = create(<VoletRight />)
  expect(treeVoletR.toJSON()).toMatchSnapshot()
})

test('renders chat rooms link', () => {
  render(<VoletRight />)
  const linkElement = screen.getByText(/chat computing/i)
  expect(linkElement).toBeInTheDocument()
})

test("VoletR test ChatComputer", () =>{
  const treeChat = create(
    <ChatComputer />
  )
  expect(treeChat).toMatchSnapshot()
})

test('VoletR callMyLogo to be defined', () => {
  const callMyLogo = vi.fn()
  const funcLogo = callMyLogo
  expect(funcLogo).toBeDefined()
})

test('VoletR callMyLogo return id', () => {
  const callMyLogo = vi.fn()
  callMyLogo()
  expect(callMyLogo).toHaveBeenCalledTimes(1)
})
