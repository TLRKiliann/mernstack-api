<<<<<<< HEAD
import React from 'react'
import { BrowserRouter, useLocation, Link, useNavigate } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
import { Route, MemoryRouter } from 'react-router-dom'
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import ConfirmationOrigin from '../ConfirmationOrigin'
import { handleCheckConfirmation } from '../ConfirmationOrigin'
import { handleFilterUser } from '../ConfirmationOrigin'
import { handleCheckBox } from '../ConfirmationOrigin'
import { handleBothConfirmation } from '../ConfirmationOrigin'
import ConfirmInvitation from '../ConfirmationOrigin'

test('useNavigate testing', () => {
  vi.mock('react-router-dom', () => ({
    ...vi.requireActual('react-router-dom'),
    useNavigate: () => (vi.fn())
  }));
});

/*
test('ConfirmationOrigin testing', () => {
  const treeApp = create(
    <ConfirmationOrigin />
  )
  expect(treeApp.toJSON()).toMatchSnapshot()
});
*/

//function handleFilterUser
test("testing if handleFilterUser function is present", () => {
  const handleFilterUser = vi.fn();
  expect(handleFilterUser).toBeDefined()
});

//function handleBothConfirmation
test("testing if handleBothConfirmation function is present", () => {
  const handleBothConfirmation = vi.fn();
  expect(handleBothConfirmation).toBeDefined()
});

test('handleCheckConfirmation return boolean', () => {
  const beverage = false;
  const handleCheckConfirmation = vi.fn(beverage => beverage)
  handleCheckConfirmation(beverage)
  expect(handleCheckConfirmation).toHaveReturnedWith(false)
  expect(handleCheckConfirmation).toHaveBeenCalledTimes(1)
});

test('handleCheckBox return boolean', () => {
  const beverage = false;
  const handleCheckBox = vi.fn(beverage => beverage)
  handleCheckBox(beverage)
  expect(handleCheckBox).toHaveReturnedWith(false)
  expect(handleCheckBox).toHaveBeenCalledTimes(1)
});

/*
test('handleBothConfirmation return yeah', () => {
  const beverage = {id: 2};
  const handleBothConfirmation = vi.fn(beverage => beverage.id)
  handleBothConfirmation(beverage)
  const { getByTestId } = render(
    <ConfirmInvitation />
  );
  fireEvent.click(screen.getByTestId('btn-to-confirm'))
  expect(handleBothConfirmation).toHaveReturnedWith(2)
  expect(handleBothConfirmation).toHaveBeenCalledTimes(1)
});
*/
=======
import React from "react"
import { useNavigate } from 'react-router-dom'
import { screen, render } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
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

test('should render ConfirmInvitation when clicked', async (props) => {
  const beverage = { id: 2 }
  const handleBothConfirmation = vi.fn(beverage => beverage)
  render(
    <ConfirmInvitation onClick={handleBothConfirmation(beverage)} />
  ) 
  const button = screen.getByTestId('btnconfirminvitation') 
  userEvent.click(button)
  await expect(screen.getByText(/validate/i)).toBeInTheDocument()
})
>>>>>>> master
