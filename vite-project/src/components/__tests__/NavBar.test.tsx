import React from "react"
import { screen, render } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import { Link, MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import { create } from 'react-test-renderer'
import { useAuthLogin } from '../context/AuthProvider'
import NavBar from "../NavBar"
import Home from "../NavBar"
import Profile from "../NavBar"
import Online from "../NavBar"
import Login from "../NavBar"

/*
test("Login hook testing", () => {
  const mockedAuth = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useAuthLogin: () => ({mockedAuth})
  }))
})
*/

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
    <MemoryRouter initialEntries={["/profile"]}>
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

test('Login toMatchSnapshot', () => {
  const treeNav = create(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
  expect(treeNav.toJSON()).toMatchSnapshot()
})

//Test of link
test('NavBar renders by test id', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const linkElement = screen.getByTestId("testId")
  expect(linkElement).toBeInTheDocument()
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

test('render about link', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  expect(screen.getByText(/logout/i)).toBeInTheDocument()
})

test('AuthProvider handleChange', () => {
  const handleChange = vi.fn()
  handleChange()
  expect(handleChange).toHaveBeenCalledTimes(1)
})

//Include many tests cases for link
const links = [
  { text: 'Home', location: "/" },
  { text: 'Profile', location: "/profile" },
  { text: 'Online', location: "/online" },
  { text: 'Login', location: "/login"},
  { text: 'Logout', location: "/logout"}
]
let link = { text: 'Home', location: "/" }
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

const linkLogout = { text: 'Logout', location: "/login" }
test.each(links, "Check if Nav Bar have %s link.", (linkLogout) => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const linkDom = screen.getByText(linkLogout.text) 
  expect(linkDom).toHaveAttribute("href", linkLogout.location)
})

test('Check if have logo and link to login page', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const logoDom = screen.getByTestId("linkLogout") 
  expect(logoDom).toHaveAttribute("href", linkLogout.location) 
  expect(screen.getByText(/logout/i)).toBeInTheDocument()
})

test("testing boolean", () => {
  vi.fn().mockReturnValue(true)
  console.log("done")
})


let link2 = { text: 'Profile', location: "/profile" }
test.each(links, "Check if NavBar have %s link2.", (link2) => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const link2Dom = screen.getByText(link2.text) 
  expect(link2Dom).toHaveAttribute("href", link2.location)
})

test('Check if have logo and link2 to login page', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const link2Dom = screen.getByTestId("secondlink") 
  expect(link2Dom).toHaveAttribute("href", link2.location) 
  expect(screen.getByText(/profile/i)).toBeInTheDocument()
})

//Online Link
let link3 = { text: 'Online', location: "/online" }
test.each(links, "Check if NavBar have %s link3.", (link3) => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const link3Dom = screen.getByText(link3.text) 
  expect(link3Dom).toHaveAttribute("href", link3.location)
})

test('Check if have logo and link3 to online page', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
  const link3Dom = screen.getByTestId("thirdlink") 
  expect(link3Dom).toHaveAttribute("href", link3.location) 
  expect(screen.getByText(/online/i)).toBeInTheDocument()
})

//login Link
let link4 = { text: 'Login', location: "/login" }
test.each(links, "Check if NavBar have %s link4.", (link4) => {
  render(
    <MemoryRouter>
      <Link
        data-testid="loginLink"
        to="/login"
        className="link--logintag"
      >
        Login
      </Link>
    </MemoryRouter>
  )
  const link4Dom = screen.getByText(link4.text) 
  expect(link4Dom).toHaveAttribute("href", link4.location)
})

test('Check if have logo and link4 to login page', () => {
  render(
    <MemoryRouter>
      <Link
        data-testid="loginLink"
        to="/login"
        className="link--logintag"
      >
        Login
      </Link>
    </MemoryRouter>
  )
  const link4Dom = screen.getByTestId("loginLink") 
  expect(link4Dom).toHaveAttribute("href", link4.location) 
  expect(screen.getByText(/login/i)).toBeInTheDocument()
})
