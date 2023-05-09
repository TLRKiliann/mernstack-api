import React from 'react'
//import { BrowserRouter, useLocation } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { assert, afterEach, describe, expect, test, it, vi } from 'vitest';
import { Route, MemoryRouter } from 'react-router-dom'
import { create } from "react-test-renderer";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import App from './App.tsx'
import Home from './App.tsx'
import Subscribe from './App.tsx'
import AppLayout from './App.tsx'
import Profile from './App.tsx'
import Login from './App.tsx'
import ChatComputer from './App.tsx'
import ComputerRoom from './App.tsx'
import PrivateMessage from './App.tsx'
import ErrorPageNotFound from './App.tsx'
import PrivateRoute from './PrivateRoute.tsx'

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

test('MatchSnapShot test ErrorPageNotFound', () => {
  const treeErrorPageNotFound = create(
    <MemoryRouter>
      <ErrorPageNotFound />
    </MemoryRouter>)
  expect(treeErrorPageNotFound.toJSON()).toMatchSnapshot()
})

test('MatchSnapShot test Login', () => {
  const treeLogin = create(
    <MemoryRouter>
      <Login />
    </MemoryRouter>)
  expect(treeLogin.toJSON()).toMatchSnapshot()
})
