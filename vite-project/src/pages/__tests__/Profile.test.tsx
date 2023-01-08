import React from "react"
import { test, expect, vi, beforeEach } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import {create} from 'react-test-renderer'
//import {assert, assertType, expectTypeOf, beforeEach, afterEach, describe, expect, test, it, vi} from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { useAuthLogin } from '../../context/AuthProvider'
import Profile from "../Profile"
import handleDelete from '../Profile'
import handleRefresh from '../Profile'
//import "@testing-library/jest-dom/extend-expect"
//import "@testing-library/jest-dom"
//import { act } from 'react-dom/test-utils'

/*
test("Profile toMatchSnapshot", () => {
  const treeProf = create(
    <Profile />
  )
  expect(treeProf).toMatchSnapshot()
})
*/

test('Profile testing context', () => {
  beforeEach(async (context) => {
    context.foo = 'bar'
  })

  test('Profile state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

//useAuthLogin
useAuthLogin: () => ({
  username: vi.fn().mockImplementation(() => ({}))
})

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useAuthLogin: () => mockedAuthLogin
}))

test('Profile testing context', () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })

  test('Profile state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

test('Profile handleRefresh to be defined', () => {
  const funcRefresh = handleRefresh
  expect(funcRefresh).toBeDefined()
})

test("Profile - click btn get test 1", () => {
  const handleRefresh = vi.fn()
  const { getByTestId } = render(
    <button onClick={handleRefresh}
      data-testid="profile--btn">
    </button>
  )
  fireEvent.click(screen.getByTestId("profile--btn"))
  expect(handleRefresh).toHaveBeenCalledTimes(1)
})

test('Profile handleDelete to be defined', () => {
  const funcDelete = handleDelete
  expect(funcDelete).toBeDefined()
})

test("Profile - click btn get test 2", () => {
  const handleDelete = vi.fn()
  const { getByTestId } = render(
    <button onClick={handleDelete}
      data-testid="profile--btn2">
    </button>
  )
  fireEvent.click(screen.getByTestId("profile--btn2"))
  expect(handleDelete).toHaveBeenCalledTimes(1)
})

test('Profile handleDelete return id', () => {
  const beverage = {id: 1 }
  const handleDelete = vi.fn(beverage => {beverage})
  handleDelete()
  expect(handleDelete).toHaveReturned(1)
})

test('Profile handleDelete return id', () => {
  const beverage = {id: 1 }
  const handleDelete = vi.fn(beverage => {beverage})
  handleDelete()
  expect(handleDelete).toHaveBeenCalledTimes(1)
})

/*
//useAuthLogin
useAuthLogin: () => ({
  username: vi.fn().mockImplementation(() => ({}))
})

vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useAuthLogin: () => mockedAuthLogin
}))


test('Profile testing context', () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })

  test('Profile state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})
*/