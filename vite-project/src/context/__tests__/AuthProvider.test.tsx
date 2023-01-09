import React from 'react'
import { render, screen } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import "@testing-library/jest-dom"

import AuthProvider from '../AuthProvider'

test("AuthProvider test", () => {
  vi.mock('react', () => {
    const ActualReact = jest.requireActual('react')
    return {
      ...ActualReact,
      useContext: () => ({
        username: {firstName: "Al"},
        switchLogin: false,
        versusUser: {lastName: "Doug"},
        otherUser: {id: 1}
      }),
    }
  })
})

test('AuthProvider toggle', () => {
  const beverage = {switchLogin: true}
  const toggle = vi.fn(beverage => beverage.switchLogin)
  toggle(beverage)
  expect(toggle).toHaveReturned(true)
})

test('AuthProvider eraseAll', () => {
  const eraseAll = vi.fn()
  eraseAll()
  expect(eraseAll).toHaveReturned(true)
})