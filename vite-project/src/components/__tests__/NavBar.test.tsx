import React from "react"
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { create } from 'react-test-renderer'
import { useAuthLogin } from '../context/AuthProvider'
import NavBar from "../NavBar"
import Home from "../NavBar"
import Profile from "../NavBar"
import Online from "../NavBar"

test("Login context testing", () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })
  test('Login state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

test('NavBar toMatchSnapshot', () => {
  const treeNav = create(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  expect(treeNav.toJSON()).toMatchSnapshot()
})

test('Home toMatchSnapshot', () => {
  const treeNav = create(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  )
  expect(treeNav.toJSON()).toMatchSnapshot()
})

test('Profile toMatchSnapshot', () => {
  const treeNav = create(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  )
  expect(treeNav.toJSON()).toMatchSnapshot()
})

test('Online toMatchSnapshot', () => {
  const treeNav = create(
    <MemoryRouter>
      <Online />
    </MemoryRouter>
  )
  expect(treeNav.toJSON()).toMatchSnapshot()
})

test('NavBar renders by test id', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const linkElement = screen.getByTestId("testId")
  expect(linkElement).toBeInTheDocument()
})

test('AuthProvider handleChange', () => {
  const handleChange = vi.fn()
  handleChange()
  expect(handleChange).toHaveBeenCalledTimes(1)
})

test('render about link', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  expect(screen.getByText(/home/i)).toBeInTheDocument()
})

test('render about link', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  expect(screen.getByText(/profile/i)).toBeInTheDocument()
})

test('render about link', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  expect(screen.getByText(/Online/i)).toBeInTheDocument()
})

// include as many test cases as you want here
const links = [
  { text: 'Home', location: "/" },
  { text: 'Profile', location: "/profile" },
  { text: 'Online', location: "/online" },
]
const link = { text: 'Home', location: "/" }
test.each(links, "Check if Nav Bar have %s link.", (link) => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const linkDom = screen.getByText(link.text) 
  expect(linkDom).toHaveAttribute("href", link.location)
})

test('Check if have logo and link to home page', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const logoDom = screen.getByTestId("firstLink") 
  expect(logoDom).toHaveAttribute("href", link.location) 
  expect(screen.getByText(/home/i)).toBeInTheDocument() 
})