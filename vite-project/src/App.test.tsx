import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest';
import { MemoryRouter, Link, Router } from 'react-router-dom'
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import { act } from 'react-dom/test-utils';
//import userEvent from '@testing-library/user-event'
//import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import Home from './App.tsx'
import Subscribe from './App.tsx'
import AppLayout from './App.tsx'
import Profile from './App.tsx'
import Login from './App.tsx'
import ChatComputer from './App.tsx'
import ComputerRoom from './App.tsx'
import PrivateMessage from './App.tsx'
import PageNotFound from './App.tsx'


test('MatchSnapShot test App', () => {
  const treeApp = create(
    <MemoryRouter>
      <App />
    </MemoryRouter>)
  expect(treeApp.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Layout', () => {
  const treeLayout = create(
    <MemoryRouter>
      <AppLayout />
    </MemoryRouter>)
  expect(treeLayout.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Home', () => {
  const treeHome = create(
    <MemoryRouter>
      <Home />
    </MemoryRouter>)
  expect(treeHome.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Subscribe', () => {
  const treeSub = create(
    <MemoryRouter>
      <Subscribe />
    </MemoryRouter>)
  expect(treeSub.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Profile', () => {
  const treeProfile = create(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>)
  expect(treeProfile.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test ChatComputer', () => {
  const treeChatComputer = create(
    <MemoryRouter>
      <ChatComputer />
    </MemoryRouter>)
  expect(treeChatComputer.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test ComputerRoom', () => {
  const treeComputerRoom = create(
    <MemoryRouter>
      <ComputerRoom />
    </MemoryRouter>)
  expect(treeComputerRoom.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test PrivateMessage', () => {
  const treePrivateMessage = create(
    <MemoryRouter>
      <PrivateMessage />
    </MemoryRouter>)
  expect(treePrivateMessage.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test PageNotFound', () => {
  const treePageNotFound = create(
    <MemoryRouter>
      <PageNotFound />
    </MemoryRouter>)
  expect(treePageNotFound.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Login', () => {
  const treeLogin = create(
    <MemoryRouter>
      <Login />
    </MemoryRouter>)
  expect(treeLogin.toJSON()).toMatchSnapshot()
})

/*
describe('App to Login test', () => {
  beforeEach(() => {
    console.log("start")
  })
  afterEach(() => {
    console.log("finish")
  })
  test('Login should navigate to /subscribe route', () => {
    const wrapper = create(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  act(() => {
    link.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  })
    expect(wrapper).toBeCalledWith('/subscribe');
  })
})

test("App to Login", () => {
  const wrapper = create(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  )
  const link = {to: '/subscribe'}
  console.log(link)
  link.simulate('click')
  expect(link).toEqual("/subscribe")
})
*/
