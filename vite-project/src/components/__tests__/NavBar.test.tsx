import React from "react"
import { screen, render } from '@testing-library/react'
import { test, expect} from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { create } from 'react-test-renderer'
import NavBar from "../NavBar.tsx"

test('NavBar renders by test id', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const linkElement = screen.getByTestId("testId")
  expect(linkElement).toBeInTheDocument()
})

test('NavBar toMatchSnapshot', () => {
  const treeNav = create(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  expect(treeNav.toJSON()).toMatchSnapshot()
})