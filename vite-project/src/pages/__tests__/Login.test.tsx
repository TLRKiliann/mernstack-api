import React from "react"
import { fireEvent, screen, render, getByText } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { create, renderer } from 'react-test-renderer'
import { expect, vi, test } from 'vitest'
import { Router, Link, MemoryRouter, useNavigate } from 'react-router-dom'
import { act } from 'react-dom/test-utils'
//import Login from "../Login"
import handleInputChange from '../Login'
import handleSubmit from '../Login'
import validateForm from '../Login'
import generateId from '../Login'
//import Subscribe from "../Login"
//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest'
import "@testing-library/jest-dom/extend-expect"
import "@testing-library/jest-dom"
//import { act } from 'react-dom/test-utils'

test("mocking Login", () => {
  vi.mock('../Login.tsx', () => ({
    Login: vi.fn()
  }))
})

test("mocking Subscribe", () => {
  vi.mock('../Subscribe.tsx', () => ({
    Subscribe: vi.fn()
  }))
})

test('renders correctly', () => {
  const treeLink = create(
    <MemoryRouter>
      <Link to="/subscribe">
        Subscribe
      </Link>
    </MemoryRouter>
  )
  expect(treeLink.toJSON()).toMatchSnapshot()
})

test("Login submit form test", () => {
  const onSubmit = vi.fn()
  const { getByTestId } = render(
    <form
      onSubmit={onSubmit} 
      data-testid="formlog">
    </form>
  )
  fireEvent.submit(getByTestId("formlog"))
  expect(onSubmit).toHaveBeenCalledTimes(1)
})

test('Login handleInputChange return id', () => {
  const beverage = { age: 23 }
  const handleInputChange = vi.fn(beverage => {beverage})
  handleInputChange(beverage)
  expect(handleInputChange).toHaveReturned(23)
})

/*
test('MatchSnapShot test Subscribe', () => {
  const tree = create(
    <MemoryRouter>
      <Subscribe />
    </MemoryRouter>
  )
  expect(tree.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Login', () => {
  const treeSub = create(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
  expect(treeSub.toJSON()).toMatchSnapshot()
})

//Test of link
const link = { text: 'Subscribe', location: "/subscribe" }
test("Check if Nav Bar have %s link.", (link) => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
  const logoDom = screen.getByTestId("linktosub") 
  expect(logoDom).toHaveAttribute("href", link.location) 
  expect(screen.getByText(/Subscribe/i)).toBeInTheDocument() 
})

//without memoryrouter react-router-dom
test("Login context testing", () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })
  test('Login state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

test("Login hook testing", () => {
  const mockedNavigate = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useNavigate: () => ({mockedNavigate: "/"})
  }))
})

test("Login hook testing", () => {
  const mockedAuth = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useAuthLogin: () => ({mockedAuth})
  }))
})
*/
