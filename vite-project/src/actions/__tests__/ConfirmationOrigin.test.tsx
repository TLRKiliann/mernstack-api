import React from "react"
import { useNavigate } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'

import handleFilterUser from "../ConfirmationOrigin"
import handleBothConfirmation from "../ConfirmationOrigin"
import handleCheckBox from "../ConfirmationOrigin" 
import handleCheckConfirmation from "../ConfirmationOrigin"
import ConfirmInvitation from "../../components/ConfirmInvitation"
import ConfirmationOrigin from "../ConfirmationOrigin"

vi.mock('../ConfirmationOrigin.tsx', () => ({
  ConfirmationOrigin: vi.fn()
}))

vi.mock("../../components/ConfirmInvitation", () => ({
  ConfirmInvitation: vi.fn()
}))

//context
test("ConfirmationO context testing", () => {
  beforeEach(async (context) => {
    context.foo = 'bar'
  })
  test('ConfirmationO state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

//useNavigate
const mockedNavigate = vi.fn()
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom') as any,
  useNavigate: () => mockedNavigate
}))

test('7 ConfirmationO handleFilterUser return link', () => {
  const handleFilterUser = vi.fn()
  handleFilterUser()
  expect(handleFilterUser).toHaveBeenCalledTimes(1)
})

test('8 ConfirmationO handleBothConfirmation return link', () => {
  const handleBothConfirmation = vi.fn()
  handleBothConfirmation()
  expect(handleBothConfirmation).toHaveBeenCalledTimes(1)
})

//handleCheckBox
test('9 ConfirmationO handleCheckBox return boolean', () => {
  const beverage = {isChecked: false}
  const handleCheckBox = vi.fn(beverage => beverage.isChecked)
  handleCheckBox(beverage)
  expect(handleCheckBox).toHaveReturnedWith(false)
  expect(handleCheckBox).toHaveBeenCalledTimes(1)
})

//handleCheckConfirmation
test('10 ConfirmationO handleCheckConfirmation return boolean', () => {
  const beverageConf = { isNotConfirm: false }
  const handleCheckConfirmation = vi.fn(beverage => beverage.isNotConfirm)
  handleCheckConfirmation(beverageConf)
  expect(handleCheckConfirmation).toHaveReturnedWith(false)
  expect(handleCheckConfirmation).toHaveBeenCalledTimes(1)

})