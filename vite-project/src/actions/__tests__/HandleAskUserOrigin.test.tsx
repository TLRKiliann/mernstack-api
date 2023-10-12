<<<<<<< HEAD
import React from 'react'
//import { BrowserRouter, useLocation, Link, useNavigate } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
//import { Route, MemoryRouter } from 'react-router-dom'
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import HandleAskUserOrigin from '../HandleAskUserOrigin'
//import UsersOnline from '../HandleAskUserOrigin'
import { handleAskUserPrivate } from '../HandleAskUserOrigin'


test('HandleAskUserOrigin testing', () => {
  const treeApp = create(
    <HandleAskUserOrigin />
  )
  expect(treeApp.toJSON()).toMatchSnapshot()
});

test('handleAskUserPrivate return yeah', () => {
  const beverage = { id: 2 };
  const handleAskUserPrivate = vi.fn(beverage => beverage.id)
  handleAskUserPrivate(beverage)
  const { getByTestId } = render(
    <HandleAskUserOrigin />
  );
  fireEvent.click(screen.getByTestId('span-useronline'))
  expect(handleAskUserPrivate).toHaveReturnedWith(2)
  expect(handleAskUserPrivate).toHaveBeenCalledTimes(1)
});
=======
import React from "react"
import { MemoryRouter } from 'react-router-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import { expect, vi } from 'vitest'
import { create } from 'react-test-renderer'
import '@testing-library/jest-dom'
import HandleAskUserOrigin from "../HandleAskUserOrigin"
import UsersOnline from "../../components/terminalchat/UsersOnline"

describe("All tests HandleAskUserOrigin", () => {
  test('2 MatchSnapShot of HandleAskUserOrigin', () => {
    vi.mock('../HandleAskUserOrigin.tsx', () => ({
      HandleAskUserOrigin: vi.fn()
    }))
  })
  test("1 test HandleAskUserPrivate(fn)", () => {
    const beverage = { id: 3 }
    const handleAskUserPrivate = vi.fn(beverage => beverage.id)
    handleAskUserPrivate(beverage)
    expect(handleAskUserPrivate).toHaveBeenCalledTimes(1)
    expect(handleAskUserPrivate).toHaveReturnedWith(3)
  })
  test('should render OrderModuleBody when clicked', async (props) => {
    const beverage = { id: 2 }
    const handleAskUserPrivate = vi.fn(beverage => beverage)
    render(
      <UsersOnline onClick={handleAskUserPrivate(props.beverage)} />
    ) 
    const span = screen.getByTestId('spantestidusers') 
    userEvent.click(span)
    await expect(screen.getByText(/✉/)).toBeInTheDocument()
  })
})
>>>>>>> master
