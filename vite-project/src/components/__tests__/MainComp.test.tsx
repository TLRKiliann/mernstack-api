import React from "react"
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import MainComp from "../MainComp"
/*
test("MainCom function test", () => {
  vi.mock('../MainComp.tsx', () => ({
    MainComp: vi.fn()
  }))
})
*/
test('MainComp getByText', () => {
  render(<MainComp />)
  const linkElement = screen.getByText(/All Members/i)
  expect(linkElement).toBeInTheDocument()
})

test('MatchSnapShot test MainComp', () => {
  const treeMainComp = create(<MainComp />)
  expect(treeMainComp.toJSON()).toMatchSnapshot()
})

