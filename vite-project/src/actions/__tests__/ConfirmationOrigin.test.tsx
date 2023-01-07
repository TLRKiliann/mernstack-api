import React from "react"
import { useNavigate } from 'react-router'
import { screen, render } from '@testing-library/react'
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'

import handleFilterUser from "../ConfirmationOrigin"
import handleBothConfirmation from "../ConfirmationOrigin"
import handleCheckBox from "../ConfirmationOrigin" 
import handleCheckConfirmation from "../ConfirmationOrigin"
import ConfirmInvitation from "../../components/ConfirmInvitation"

test('ConfirmationO useNavigate test', () => {
  const mockedNavigate = vi.fn()
  vi.mock('react-router-dom', () => ({
    ...vi.importActual('react-router-dom') as any,
    useNavigate: () => mockedNavigate
  }))
})

test("Online context testing", () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })
  test('Profile state', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})

test('ConfirmationO MatchSnapShot test ConfirmInvitation', () => {
  const treeConfirm = create(<ConfirmInvitation />)
  expect(treeConfirm.toJSON()).toMatchSnapshot()
})

test('ConfirmationO handleFilterUser to be defined', () => {
  const funcTest = handleFilterUser
  expect(funcTest).toBeDefined()
})

test('ConfirmationO handleBothConfirmation to be defined', () => {
  const funcTestThree = handleBothConfirmation
  expect(funcTestThree).toBeDefined()
})

test('ConfirmationO handleCheckBox to be defined', () => {
  const funcTestFive = handleCheckBox
  expect(funcTestFive).toBeDefined()
})

test('ConfirmationO handleCheckConfirmation to be defined', () => {
  const funcTestSeven = handleCheckConfirmation
  expect(funcTestSeven).toBeDefined()
})

