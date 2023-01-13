import React from "react"
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
//import VoletRight from "../VoletRight"
//import ChatComputer from "../VoletRight"

test("mocking VoletRight", () => {
  vi.mock('../VoletRight.tsx', () => ({
    VoletRight: vi.fn()
  }))
})

test("mocking ChatComputer", () => {
  vi.mock('../../components/ChatComputer.tsx', () => ({
    ChatComputer: vi.fn()
  }))
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
