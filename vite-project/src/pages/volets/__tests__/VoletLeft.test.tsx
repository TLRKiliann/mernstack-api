import React from "react"
import { screen, render } from '@testing-library/react'
import { expect, vi } from 'vitest'
import '@testing-library/jest-dom'
import VoletLeft from "../VoletLeft.tsx"
import handleSearchInput from '../VoletLeft'
import handleSearchUser from '../VoletLeft'

test('renders users state connection link', () => {
  render(<VoletLeft />)
  const linkElement = screen.getByText(/private chat/i)
  expect(linkElement).toBeInTheDocument()
})

test('Volet-L handleSearchInput test', () => {
  const funcInput = handleSearchInput
  expect(funcInput).toBeDefined()
})

test('Volet-L handleSearchUser test', () => {
  const funcSearch = handleSearchUser
  expect(funcSearch).toBeDefined()
})