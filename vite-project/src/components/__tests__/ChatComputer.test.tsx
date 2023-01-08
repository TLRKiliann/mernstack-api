import React from "react"
import {MemoryRouter} from 'react-router-dom'
import { useAuthLogin } from '../../context/AuthProvider'
import { screen, render, getByTestId } from '@testing-library/react'
import { test, expect, vi, beforeEach, describe } from 'vitest'
import '@testing-library/jest-dom'
import { create } from 'react-test-renderer'
import ChatComputer from "../ChatComputer"
import handleSetUserRoom from "../ChatComputer"
import handleNavigation from "../ChatComputer"

test("ChatComputer context testing", () => {
  beforeEach(async (context) => {
    context.foo = 'bar'
  })
  test('Profile state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

test('MatchSnapShot test from ChatComputer', () => {
  const treeChatComp = create(
    <MemoryRouter>
      <ChatComputer />
    </MemoryRouter>
  )
  expect(treeChatComp.toJSON()).toMatchSnapshot()
})

test('ChatComputer handleSetUserRoom(fn) return link', () => {
  const beverage = {link: "newRoom" }
  const handleSetUserRoom = vi.fn(beverage => {beverage})
  handleSetUserRoom(beverage)
  expect(handleSetUserRoom).toHaveReturned("newRoom")
  expect(handleSetUserRoom).toHaveBeenCalledTimes(1)
})

test('ChatComputer handleNavigation(fn) return link', () => {
  const beverage = {link: "secRoom" }
  const handleNavigation = vi.fn(beverage => {beverage})
  handleNavigation(beverage)
  expect(handleNavigation).toHaveReturned("secRoom")
  expect(handleNavigation).toHaveBeenCalledTimes(1)
})

describe('ChatComputer test of useState', () => {

  let span = HTMLElement

  test("if state change without clicking", () => {
    const setStateMock = vi.fn()
    const useStateMock: any = (useState: any) => [useState, setStateMock]
    vi.spyOn(React, 'useState').mockImplementation(useStateMock)

    const { getByText } = render(
      <MemoryRouter>
        <ChatComputer />
      </MemoryRouter>
    )
    expect(setStateMock).toHaveBeenCalledTimes(0)
  })
})

/*
test('ChatComputer test of useEffect', () => {
  vi.spyOn(React, 'useEffect').mockImplementation((f) => f())
  render(
    <ChatComputer />
  )
  expect().toHaveBeenCalledTimes(1)
})

test("ChatComputer hook testing", () => {
  const mockedNavigate = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useNavigate: () => mockedNavigate
  }))

  const mockedParams = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useParams: () => ({mockedParams})
  }))

  const mockedAuth = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useAuthLogin: () => ({mockedAuth})
  }))
})
*/