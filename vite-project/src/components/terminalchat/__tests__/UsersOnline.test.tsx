import React from "react"
import { MemoryRouter } from "react-router-dom"
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import UsersOnline from "../UsersOnline.tsx"

test('UsersOnlinemy getByTestId', () => {
  render(<UsersOnline />)
  const mytestid = screen.getByTestId("onlinetest")
  expect(mytestid).toBeInTheDocument()
})

test("UsersOnline MatchSnapShot", () => {
  const treeUsrOnline = create(
    <MemoryRouter>
      <UsersOnline />
    </MemoryRouter>
  )
  expect(treeUsrOnline.toJSON()).toMatchSnapshot()
})