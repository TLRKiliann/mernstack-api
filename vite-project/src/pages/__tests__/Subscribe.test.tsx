import React, {useState} from 'react'
import { useNavigate, MemoryRouter } from 'react-router-dom'
import { test, expect, vi, beforeEach } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { create } from 'react-test-renderer'
import Subscribe from "../Subscribe"
import Login from "../Subscribe"
import handleInputChange from '../Subscribe'
import validateFormSub from '../Subscribe'
import handleValidateSub from '../Subscribe'
import generateId from '../Subscribe'

/*
const mockUseState = vi.fn()
vi.mock('react', () => ({
  ...vi.importActual('react') as any,
  useState: vi.fn()
}))
*/
/*
test("Login hook testing", () => {
  const mockedNavigate = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useNavigate: () => ({mockedNavigate: "/"})
  }))
})

beforeEach(async (context) => {
  context.foo = 'bar'
})
*/
test('should work', ({ foo }) => {
  console.log(foo) // 'bar'
})

test("Subscribe toMatchSnapshot", () => {
  const treeSub = create(
    <MemoryRouter>
      <Subscribe />
    </MemoryRouter>
  )
  expect(treeSub).toMatchSnapshot()
})

test("Subscribe toMatchSnapshot", () => {
  const treeSub = create(
    <MemoryRouter>
      <Subscribe>
        <Login />
      </Subscribe>
    </MemoryRouter>
  )
  expect(treeSub).toMatchSnapshot()
})

test('Subscribe handleInputChange to be defined', () => {
  const funcInputChange = handleInputChange
  expect(funcInputChange).toBeDefined()
})

test('Subscribe validateFormSub to be defined', () => {
  const funcValid = validateFormSub
  expect(funcValid).toBeDefined()
})

test('Subscribe handleValidateSub to be defined', () => {
  const funcValidSub = handleValidateSub
  expect(funcValidSub).toBeDefined()
})

test('Subscribe generateId to be defined', () => {
  const funcGenId = generateId
  expect(funcGenId).toBeDefined()
})

test("Subscribe submit form test", () => {
  const onSubmit = vi.fn()
  const { getByTestId } = render(
    <form
      onSubmit={onSubmit} 
      data-testid="formsub">
    </form>
  )
  fireEvent.submit(getByTestId("formsub"))
  expect(onSubmit).toHaveBeenCalledTimes(1)
})

test('Subscribe handleValidateSub return id', () => {
  const beverage = {
    sentMsg: "hello"
  }
  const handleValidateSub = vi.fn(beverage => { beverage })
  handleValidateSub()
  expect(handleValidateSub).toHaveReturned("hello")
})

test('Subscribe handleValidateSub return id', () => {
  const beverage = {
    messagebox: "msg"
  }
  const handleValidateSub = vi.fn(beverage => { beverage })
  handleValidateSub()
  expect(handleValidateSub).toHaveReturned("msg")
})

test('Subscribe handleValidateSub return id', () => {
  const beverage = {
    signalRecieve: false
  }
  const handleValidateSub = vi.fn(beverage => { beverage })
  handleValidateSub()
  expect(handleValidateSub).toHaveReturned(false)
})